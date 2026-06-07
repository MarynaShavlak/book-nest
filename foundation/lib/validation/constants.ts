// BookNest — спільні константи валідації (джерело: docs/auth-spec.md §7)
// Винесено окремо, щоб правила не дублювалися між формами.

export const LIMITS = {
  NAME_MIN: 2,
  NAME_MAX: 50,
  EMAIL_MAX: 254,
  EMAIL_LOCAL_MAX: 64,
  PW_MIN: 8,
  PW_MAX: 64,
  NICK_MIN: 3,
  NICK_MAX: 20,
  MIN_AGE: 13,
  MAX_AGE: 120,
  GENRES_MAX: 6,
} as const;

export const RE = {
  // ім'я: укр+лат літери, пробіл, апостроф, дефіс (2–50)
  name: /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ' ’\-]{2,50}$/,
  // практичний e-mail (RFC-подібний)
  email: /^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/,
  // нікнейм: 3–20, латиниця/цифри/_/., без подвійних ._ і без них по краях
  nick: /^(?!.*[._]{2})[A-Za-z0-9][A-Za-z0-9._]{1,18}[A-Za-z0-9]$/,
  // дата народження у форматі YYYY-MM-DD
  isoDate: /^\d{4}-\d{2}-\d{2}$/,
  // класи символів паролю
  upper: /[A-ZА-ЯЁІЇЄҐ]/,
  lower: /[a-zа-яёіїєґ]/,
  digit: /\d/,
  special: /[^A-Za-zА-Яа-я0-9]/,
  hasLetter: /[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]/,
} as const;

// короткий блок-лист поширених паролів (порівняння без регістру)
export const COMMON_PASSWORDS = [
  "12345678",
  "123456",
  "password",
  "qwerty",
  "qwerty123",
  "11111111",
  "booknest",
] as const;
