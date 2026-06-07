# BookNest — Foundation (джерело правди для Next-застосунку)

Ця тека — **підготовлений «фундамент»** для майбутнього застосунку на **Next.js + Tailwind**.
Сюди витягнуто все, що реально переноситься в продукт: токени, дані, ассети та
специфікації компонентів/екранів — у структурі, близькій до Next.

> ℹ️ Це **копії** (не переміщення). Галерея в `src/booknest-design-system/`
> лишається недоторканою і працює як вітрина. Тут — **одна палітра** (теракота,
> `palette-01-terracotta`) як тема продукту; решта палітр живуть лише в галереї.
>
> Повний покроковий план перенесення: [`../docs/migration-to-next.md`](../docs/migration-to-next.md).

## Структура

```
foundation/
├─ styles/                       → app/globals.css
│  ├─ tokens.css                 ВАРІАНТ 1: теракота (за замовчуванням) — світла+темна
│  ├─ tokens-bright-orange.css   ВАРІАНТ 2: помаранч — світла+темна (альтернатива на підміну)
│  ├─ typography.css             базові стилі тексту/заголовків
│  ├─ tailwind-theme.css         @theme-міст (імена BookNest) — для НЕ-shadcn варіанту
│  └─ shadcn-theme.css           ⭐ для shadcn: імена shadcn × 2 палітри × світла/темна + @theme
├─ data/                         → lib/
│  ├─ status-config.js           статуси книги (єдине джерело правди для badge)
│  └─ empty-states.js            16 сценаріїв порожніх станів
├─ lib/validation/               → lib/validation/  (zod-схеми форм з auth-spec)
│  ├─ constants.ts               LIMITS, регулярки, блок-лист паролів
│  └─ auth.ts                    схеми register/login/reset/new-password + типи
├─ assets/                       → public/
│  ├─ icons/                     ui-icons (99, lucide-сумісні) + genre-icons (89)
│  ├─ illustrations/             17 PNG для порожніх станів
│  └─ logo/                      5 SVG логотипів + README
├─ components/                   54 специфікації UI-компонентів + MAPPING.md (→ shadcn/кастом)
└─ screens/                      повноекранні макети — візуальні цілі роутів (31)
```

## Як підключати в Next

**1. Стилі → `app/globals.css`** (порядок важливий):
```css
@import "tailwindcss";
@import "./tokens.css";          /* ВАРІАНТ теми: tokens.css (теракота) АБО tokens-bright-orange.css */
@import "./typography.css";
@import "./tailwind-theme.css";  /* мапить їх на bg-bg, text-text, bg-primary … */
```
Після цього `bg-bg text-text`, `bg-primary text-on-primary`, `rounded-md shadow-card`
працюють одразу й перемикаються між світлою/темною самі (майже без `dark:`).

**Для shadcn/ui — інакше:** замість `tokens.css` + `tailwind-theme.css` підключай
`shadcn-theme.css` (імена змінних як очікує shadcn: `bg-background`, `text-foreground`,
`bg-primary`…; темна через клас `.dark`; друга палітра через `data-palette="bright-orange"`).
Деталі — у шапці файлу та в `components/MAPPING.md`.

**Зміна палітри:** підключай рівно ОДИН із `tokens*.css` — обидва визначають `:root`,
тож другий перекриє перший. Світла/темна теми лишаються всередині кожного варіанта.
(Якщо колись захочеш перемикати палітру в рантаймі — переб'ю файли під селектори
`[data-palette="…"]`, щоб обидві жили одночасно.)

**2. Дані → `lib/`** — `status-config.js`, `empty-states.js` уже ESM з `export`,
копіюються як є (за бажання — перейменуй у `.ts` і додай типи).

**3. Ассети → `public/`** — `icons/`, `illustrations/`, `logo/`.
Іконки: `<svg><use href="/icons/ui-icons.svg#i-book"/></svg>` (див. `Icon` у плані).

**4. Компоненти → `components/ui/`** — теки `components/` і `screens/` тут **не код, а
специфікації**. Для кожного компонента відкрий `components/<name>.html` (напр. `components/button.html`):
у ньому видно візуал, CSS компонента, патерн розмітки і таблицю API — це готове ТЗ
для React+cva-версії. Демо самодостатні (вшиті токени), відкриваються у браузері.

## Індекс компонентів (`components/`, 54)

**Базові:** button, input, textarea, select, multiselect, checkbox-radio, toggle,
segmented, number-stepper, rating, tag-input, upload, badge-tag, chip-group, tooltip, skeleton.
**Навігація/оболонка:** appbar, sidebar, breadcrumbs, tabs, pagination, stepper,
command-palette, theme-switcher, user-avatar.
**Оверлеї/зворотний зв'язок:** modal, drawer, dropdown, toast, alert, progress, datepicker, calendar, filter-panel.
**Картки/контент:** card, card-callout, card-collection, card-note, card-purchase,
card-quote, card-series, card-summary, character-card, stat-card, action-row, action-list, bar-list.
**Графіки:** barchart, donut, line-chart, ring-progress.
**Бренд/стани:** logo, empty-state.

## Індекс екранів (`screens/`, 31)

**Auth:** auth-login, auth-register, auth-reset, login, registration.
**Сторінки списків:** page-library, page-queue, page-favorites, page-lists, page-notes,
page-quotes, page-authors, page-publishers, page-series, page-genres, page-borrowed,
page-delivery, page-add-book.
**Деталі:** detail-book, detail-author, detail-publisher, detail-series, detail-list.
**Лейаути:** layout-appshell, layout-analytics, layout-calendar, layout-goals.
**Налаштування:** settings-settings, settings-profile, settings-profile-dashboard, settings-import-export.

## Оновлення

Якщо у галереї зміниться палітра-теракота — просто перекопіюй відповідні файли
сюди (це знімок джерела правди на момент `2026-06-07`).
