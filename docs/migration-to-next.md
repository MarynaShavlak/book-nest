# План міграції BookNest → Next.js + Tailwind

> Складено: 2026-06-07. Документ для покрокового перенесення дизайн-системи
> з галереї (`src/booknest-design-system/`) у майбутній застосунок на Next.js.

## Контекст і рішення

Цей репозиторій — **галерея** дизайн-системи (статичні HTML-вітрини по палітрах),
а не сам застосунок. Застосунок будуємо **окремо**. Ухвалені рішення:

| Питання | Рішення |
|---|---|
| Стилі | **Tailwind CSS** |
| Структура Next | **App Router** |
| Палітри в застосунку | **Одна** (`palette-01-terracotta`) як тема продукту; решта лишаються в галереї |

## Стратегія (суть)

Лишаємо **CSS-змінні джерелом правди**. Tailwind не замінює токени, а *вказує* на них
через `theme`. Темна тема вже працює перемиканням тих самих змінних
(`[data-theme="dark"]`), тож утиліти `bg-primary` / `text-text` **автоматично працюють
в обох темах — майже без жодного `dark:`**. Це головний виграш від поточної системи.
Компоненти переносимо по одному: демо-HTML + його таблиця API — це готова специфікація.

## Цільова структура

```
booknest-app/                      ← новий Next-проєкт (окремо від галереї)
├─ app/
│  ├─ globals.css                  ← токени palette-01 (:root + [data-theme=dark]) + база
│  ├─ layout.tsx                   ← appshell + <html data-theme> + шрифти + ThemeProvider
│  ├─ library/page.tsx, queue/…    ← з page-*.html
│  └─ books/[id]/page.tsx          ← з detail-book.html
├─ components/ui/
│  ├─ Button.tsx, Input.tsx, Badge.tsx, Card.tsx, …   ← з components-*.html
│  └─ Icon.tsx                     ← спрайт через <use href>
├─ lib/
│  ├─ status-config.ts             ← з status-config.js (+типи)
│  └─ empty-states.ts             ← з empty-states.js
├─ public/icons|illustrations|logo ← з assets
└─ tailwind.config.ts | @theme     ← мапінг на CSS-змінні
```

---

## Фаза 0 — Каркас

- [ ] `create-next-app` (TypeScript, App Router, Tailwind)
- [ ] Додати залежності: `next-themes`, `class-variance-authority` (cva), `clsx`, `tailwind-merge`
- [ ] Завести хелпер `cn()` (clsx + tailwind-merge)

## Фаза 1 — Токени → Tailwind (фундамент, найбільший виграш)

- [ ] Скопіювати з `palette-01-terracotta/tokens.css` блоки `:root` та `[data-theme="dark"]` у `app/globals.css` **як є** (це вся тема продукту)
- [ ] Прив'язати Tailwind до цих змінних

**Tailwind v4** (CSS-first):
```css
/* globals.css */
@import "tailwindcss";
@theme inline {
  --color-bg: var(--bg);            --color-surface: var(--surface);
  --color-primary: var(--primary);  --color-on-primary: var(--on-primary);
  --color-text: var(--text);        --color-muted: var(--muted);
  --color-success: var(--success);  --color-danger: var(--danger); /* … */
  --radius-md: var(--radius-md);    --radius: var(--radius);
  --shadow-card: var(--shadow-card);
  --font-sans: var(--font-sans);    --font-serif: var(--font-serif);
}
```
*(Tailwind v3 — те саме через `tailwind.config.ts` → `theme.extend.colors = { primary: 'var(--primary)' … }` + `darkMode: ['selector','[data-theme="dark"]']`.)*

- [ ] Базову типографіку (body + `.h1/.h2/.lead/.label/.hint…` з `typography.css`) перенести в `@layer base` / `@layer components`

➡️ **Результат:** `bg-bg text-text`, `bg-primary text-on-primary`, `rounded-md shadow-card` працюють одразу й перемикаються з темою самі.

## Фаза 2 — Шрифти

- [ ] `@import` Google Fonts → `next/font/google`

```ts
// app/layout.tsx
import { Manrope, Playfair_Display } from "next/font/google";
const sans  = Manrope({ subsets:["latin","cyrillic"], variable:"--font-sans",  weight:["400","500","600","700"] });
const serif = Playfair_Display({ subsets:["latin","cyrillic"], variable:"--font-serif", weight:["600","700"] });
// <html className={`${sans.variable} ${serif.variable}`} data-theme="light">
```
Імена змінних ті самі (`--font-sans/--font-serif`), тож `tokens.css` чіпати не треба.

## Фаза 3 — Ассети + `<Icon>`

- [ ] `icons/` (спрайти ui+genre), `illustrations/*.png`, `logo/*.svg` → `public/`
- [ ] Компонент `<Icon>`:

```tsx
export function Icon({ name, set="ui", ...p }: { name:string; set?:"ui"|"genre" }) {
  const id = set==="ui" ? `i-${name}` : `genre-${name}`;
  return <svg {...p}><use href={`/icons/${set}-icons.svg#${id}`} /></svg>;
}
```
*(Альтернатива — SVGR: кожна іконка окремим React-компонентом, краще tree-shaking. Спрайт простіший і збігається з поточним `<use href="#i-book">`.)*

## Фаза 4 — Дані

- [ ] `status-config.js` → `lib/status-config.ts` (+ типи)
- [ ] `empty-states.js` → `lib/empty-states.ts` (+ типи)

Вони вже ESM з `export`; `icon`-рядки (`i-book`) і назви ілюстрацій уже збігаються з ассетами — копіюються майже як є.

## Фаза 5 — Компоненти (основна робота, ~57 шт)

**Метод для кожного** `components-X.html`:
1. Взяти **тільки** CSS-блок самого компонента (напр. `.btn …`); **ігнорувати** обгортку вітрини (`.topbar/.wrap/.block/.demo-grid/.spec/.tref`).
2. Таблиця «Анатомія / API» в демо = готовий конфіг **cva**.
3. Розмітку демо перетворити на JSX.

**Button — еталон патерну:**
```tsx
const button = cva("inline-flex items-center justify-center gap-2 rounded-md font-semibold …", {
  variants: {
    variant: {
      primary:   "bg-primary text-on-primary shadow-btn hover:bg-primary-hover",
      secondary: "bg-surface border border-border …",
      tonal:     "…", ghost: "…", danger: "…", "danger-ghost": "…", social: "…",
    },
    size: { sm:"h-9 px-3.5 text-sm", md:"h-11 px-[18px]", lg:"h-13 px-6 text-base" },
  },
  defaultVariants: { variant:"primary", size:"md" },
});
// <button className={cn(button({variant,size}), className)} {...props}/>
```

**Порядок перенесення:**
- [ ] Примітиви: Button, Icon, Badge/Tag, Input, Textarea, Checkbox/Radio, Toggle, Select
- [ ] Складені: Card-родина, Table, Tabs, Modal, Drawer, Toast, Dropdown, Tooltip
- [ ] Доменні: CharacterCard, StatCard
- [ ] ⚠️ Графіки (`barchart`, `donut`, `line-chart`, `ring-progress`) — окреме рішення: переносити SVG/CSS чи взяти бібліотеку (напр. Recharts)

## Фаза 6 — Перемикач теми

- [ ] `next-themes` з `attribute="data-theme"`, `defaultTheme="system"` — замінює інлайн-скрипт із `tokens.css`, прибирає миготіння при завантаженні
- [ ] `ThemeToggle` смикає `setTheme`

## Фаза 7 — Layout + сторінки

`layout-appshell.html` → `app/layout.tsx` (компоненти `Sidebar` + `AppBar`). Кожен `page-*.html` → роут, `detail-*.html` → динамічний роут. Будуємо **за макетами** (макет = візуальна ціль) з компонентів Фази 5.

| Макет | Роут |
|---|---|
| `layout-appshell.html` | `app/layout.tsx` |
| `page-library.html` | `app/library/page.tsx` |
| `page-queue.html` | `app/queue/page.tsx` |
| `page-notes.html`, `page-favorites.html`, … | відповідні роути |
| `detail-book.html` | `app/books/[id]/page.tsx` |
| `detail-author.html`, `detail-series.html`, … | динамічні роути |

## Фаза 8 (опц.) — Галерея як живий стайлгайд

- [ ] Або лишити поточну галерею задеплоєною як є
- [ ] Або підняти **Storybook** у Next-проєкті (одна story на компонент) — документація поряд із кодом

---

## Перевірка

Відкривати демо-`components-X.html` поряд із запущеним Next-компонентом, звіряти в обох темах. Пізніше — візуальні діфи (Playwright).

## Що НЕ переносимо

`scripts/build.py`, `variants.js`, інші 21 палітра, демо-обгортка (`.topbar/.demo-grid/.spec`) — лишається галереї.

## Оцінка обсягу

- **Фази 0–4** — швидко (фундамент: конфіг + копіювання).
- **Фаза 5** — основний обсяг (по компоненту; Button першим як еталон, далі за ним).
- **Фаза 7** — у міру потреби сторінок.

---

## Корисні факти про поточну систему

- Компонентний CSS **не залежить від палітри** — лише посилається на CSS-змінні.
  Перевірено: `components-button.html` між palette-01 і palette-02 різниться лише
  на 12 рядків із 305, і всі 12 — значення токенів.
- Кожна демо-сторінка має вбудовані інлайн `tokens.css` + `typography.css` + SVG-спрайт.
  Реально багаторазова частина — ~40 рядків CSS компонента + патерн розмітки
  `class="btn primary lg"`, що прямо мапиться на `<Button variant="primary" size="lg">`.
- Джерело правди, що переноситься: `tokens.css`, `typography.css`, `status-config.js`,
  `empty-states.js`, `icons/`, `illustrations/`, `logo/`.
