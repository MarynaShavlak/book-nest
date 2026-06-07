// BookNest — zod-схеми форм автентифікації.
// Джерело правил: docs/auth-spec.md (§3 реєстрація, §4 вхід, §5 відновлення).
// Написано під zod v3 (як у прикладах shadcn Form). Для zod v4 заміни в опціях
// `message:` → `error:`.
//
// Використання з shadcn Form:
//   const form = useForm<RegisterValues>({ resolver: zodResolver(registerSchema) });

import { z } from "zod";
import { LIMITS, RE, COMMON_PASSWORDS } from "./constants";

// ── helpers ──────────────────────────────────────────────
const collapseSpaces = (s: string) => s.trim().replace(/\s+/g, " ");
const emptyToUndefined = (v: unknown) =>
  typeof v === "string" && v.trim() === "" ? undefined : v;

function isRealDate(iso: string): boolean {
  const d = new Date(iso + "T00:00:00");
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === iso;
}
function ageOn(iso: string): number {
  const today = new Date();
  const dob = new Date(iso + "T00:00:00");
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
  return age;
}

/** Індикатор надійності паролю (auth-spec §3.2.3). */
export function passwordStrength(pw: string): {
  score: number; // 0..4
  label: "Слабкий" | "Середній" | "Надійний";
} {
  let score = 0;
  if (pw.length >= LIMITS.PW_MIN) score++;
  if (RE.upper.test(pw) && RE.lower.test(pw)) score++;
  if (RE.digit.test(pw)) score++;
  if (RE.special.test(pw)) score++;
  let level = score;
  if (pw.length >= 12 && score >= 3) level = 4; // бонус за довжину
  const label = level <= 1 ? "Слабкий" : level <= 3 ? "Середній" : "Надійний";
  return { score: Math.min(score, 4), label };
}

// ── поля ─────────────────────────────────────────────────

/** E-mail (§3.2.2): trim + lowercase, формат, ≤254, локальна частина 1–64, без `..`. */
export const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .min(1, { message: "Введіть ваш e-mail" })
  .max(LIMITS.EMAIL_MAX, { message: "E-mail задовгий" })
  .regex(RE.email, { message: "Невірний формат e-mail" })
  .refine((v) => !v.includes(".."), { message: "Невірний формат e-mail" })
  .refine(
    (v) => {
      const local = v.split("@")[0] ?? "";
      return (
        local.length >= 1 &&
        local.length <= LIMITS.EMAIL_LOCAL_MAX &&
        !local.startsWith(".") &&
        !local.endsWith(".")
      );
    },
    { message: "Невірний формат e-mail" }
  );

/** Ім'я (§3.2.1): згорнути пробіли, 2–50, дозволені символи, ≥1 літера. */
export const nameSchema = z
  .string()
  .transform(collapseSpaces)
  .pipe(
    z
      .string()
      .min(1, { message: "Введіть ваше ім'я" })
      .min(LIMITS.NAME_MIN, { message: "Ім'я має містити щонайменше 2 символи" })
      .max(LIMITS.NAME_MAX, { message: "Ім'я задовге (максимум 50 символів)" })
      .regex(RE.name, { message: "Ім'я може містити лише літери, апостроф та дефіс" })
      .regex(RE.hasLetter, { message: "Ім'я може містити лише літери, апостроф та дефіс" })
  );

/** Пароль (§3.2.3): 8–64, верх+низ, цифра, спецсимвол, без країв-пробілів, не поширений. */
export const passwordSchema = z
  .string()
  .min(LIMITS.PW_MIN, { message: "Пароль має містити щонайменше 8 символів" })
  .max(LIMITS.PW_MAX, { message: "Пароль задовгий (максимум 64 символи)" })
  .refine((v) => v.trim() === v, { message: "Пароль не має починатися чи закінчуватися пробілом" })
  .refine((v) => RE.upper.test(v) && RE.lower.test(v), { message: "Додайте велику й малу літери" })
  .refine((v) => RE.digit.test(v), { message: "Додайте хоча б одну цифру" })
  .refine((v) => RE.special.test(v), { message: "Додайте хоча б один спецсимвол" })
  .refine((v) => !COMMON_PASSWORDS.includes(v.toLowerCase() as (typeof COMMON_PASSWORDS)[number]), {
    message: "Пароль надто поширений",
  });

/** Нікнейм (§3.2.5): 3–20, латиниця/цифри/_/. — валідується лише якщо заповнено. */
export const nicknameSchema = z
  .string()
  .trim()
  .regex(RE.nick, { message: "Нікнейм: 3–20 символів, латиниця, цифри, _ або ." });

/** Дата народження (§3.2.6): YYYY-MM-DD, не майбутнє, вік ≥13, не раніше ~120 р. */
export const birthdateSchema = z
  .string()
  .regex(RE.isoDate, { message: "Невірна дата" })
  .refine(isRealDate, { message: "Невірна дата" })
  .refine((v) => new Date(v + "T00:00:00") <= new Date(), {
    message: "Дата народження не може бути в майбутньому",
  })
  .refine((v) => ageOn(v) >= LIMITS.MIN_AGE, { message: "Реєстрація доступна з 13 років" })
  .refine((v) => ageOn(v) <= LIMITS.MAX_AGE, { message: "Перевірте дату народження" });

// ── форми ────────────────────────────────────────────────

/** Реєстрація (§3). */
export const registerSchema = z
  .object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string().min(1, { message: "Повторіть пароль" }),
    nickname: z.preprocess(emptyToUndefined, nicknameSchema.optional()),
    birthdate: z.preprocess(emptyToUndefined, birthdateSchema.optional()),
    genres: z.array(z.string()).max(LIMITS.GENRES_MAX, { message: "Оберіть до 6 жанрів" }).default([]),
    terms: z.boolean().refine((v) => v === true, { message: "Підтвердьте згоду з умовами" }),
  })
  .superRefine((data, ctx) => {
    if (data.confirmPassword !== data.password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
        message: "Паролі не збігаються",
      });
    }
    // пароль не має дорівнювати e-mail / імені / нікнейму (без регістру) — §3.2.3
    const pw = data.password.toLowerCase();
    const others = [data.email, data.name, data.nickname]
      .filter(Boolean)
      .map((s) => String(s).toLowerCase());
    if (others.includes(pw)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["password"],
        message: "Пароль не має збігатися з іменем чи e-mail",
      });
    }
  });

/** Вхід (§4): м'яка валідація — лише непорожні поля + формат e-mail. */
export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, { message: "Введіть пароль" }),
  remember: z.boolean().default(false),
});

/** Відновлення, крок 1 (§5.1): лише e-mail. */
export const resetRequestSchema = z.object({
  email: emailSchema,
});

/** Відновлення, крок 3 (§5.3): новий пароль за політикою §3.2.3 + підтвердження. */
export const newPasswordSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: z.string().min(1, { message: "Повторіть пароль" }),
  })
  .superRefine((data, ctx) => {
    if (data.confirmPassword !== data.password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
        message: "Паролі не збігаються",
      });
    }
  });

// ── типи (для useForm<...>) ──────────────────────────────
export type RegisterValues = z.infer<typeof registerSchema>;
export type LoginValues = z.infer<typeof loginSchema>;
export type ResetRequestValues = z.infer<typeof resetRequestSchema>;
export type NewPasswordValues = z.infer<typeof newPasswordSchema>;
