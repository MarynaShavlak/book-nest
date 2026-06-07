# Валідація форм автентифікації (zod)

zod-схеми, згенеровані з `docs/auth-spec.md`, готові до shadcn `<Form>` + react-hook-form.

```
lib/validation/
├─ constants.ts   LIMITS, RE (регулярки), COMMON_PASSWORDS — спільне джерело правил
└─ auth.ts        схеми: registerSchema · loginSchema · resetRequestSchema · newPasswordSchema
                  + типи (RegisterValues …) + passwordStrength()
```

## Залежності в Next-проєкті
```bash
npm i zod react-hook-form @hookform/resolvers
npx shadcn@latest add form input checkbox button
```

## Приклад (реєстрація)
```tsx
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterValues } from "@/lib/validation/auth";

const form = useForm<RegisterValues>({
  resolver: zodResolver(registerSchema),
  defaultValues: { name:"", email:"", password:"", confirmPassword:"", genres:[], terms:false },
});
// <Form {...form}> … <FormField name="email" … /> … </Form>
```

## Що покрито (з auth-spec)
- **Ім'я** §3.2.1 · **E-mail** §3.2.2 (trim+lowercase, формат, ≤254, локальна 1–64, без `..`)
- **Пароль** §3.2.3 (8–64; велика/мала, цифра, спецсимвол; не поширений; ≠ e-mail/ім'я/нік)
- **Підтвердження** §3.2.4 · **Нікнейм** §3.2.5 (опц.) · **Дата народж.** §3.2.6 (опц., вік ≥13)
- **Згода** §3.2.7 · **Жанри** 0–6 (§6) · **Вхід** §4 · **Відновлення** §5.1 і §5.3
- `passwordStrength()` — бали для індикатора `.strength` (Слабкий/Середній/Надійний)

## Нотатки
- Написано під **zod v3** (як приклади shadcn). Для **zod v4**: у опціях `message:` → `error:`.
- 🔒 Серверні правила (унікальність нікнейму/e-mail, rate limit, «новий ≠ старий пароль»,
  неенумерація e-mail при відновленні) у клієнтських схемах **навмисно відсутні** — їх валідує бекенд.
- Повідомлення українською — за бажанням винеси в один словник для i18n (auth-spec §8).
