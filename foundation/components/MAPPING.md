# Компоненти BookNest → shadcn/ui — карта перенесення

Для кожного з 54 компонентів: чи брати готову базу з shadcn (`npx shadcn add …`)
і **перестилізувати під спеку** (`<name>.html` у цій теці), чи будувати **кастомно**
(скомпонувати з примітивів за спекою).

> Робочий процес для shadcn-компонентів: `shadcn add <X>` → відкрити `<name>.html` →
> перенести варіанти/розміри/стани в `cva` базового компонента, кольори вже з токенів.

**Підсумок:** ~31 з shadcn (перестилізувати) · ~23 кастом · графіки через `chart` (recharts).

## Беремо з shadcn (перестилізувати під BookNest)

| BookNest | `shadcn add` | Нотатки |
|---|---|---|
| button | `button` | 7 варіантів (primary/secondary/tonal/ghost/danger/danger-ghost/social) + sm/md/lg — переписати cva за `button.html` |
| input | `input` | + стани invalid (для форм) |
| textarea | `textarea` | лічильник символів — кастомна обгортка |
| select | `select` | |
| checkbox-radio | `checkbox` + `radio-group` | два компоненти shadcn |
| toggle | `switch` | у BookNest «toggle» = перемикач on/off |
| segmented | `toggle-group` | single-select сегментний контрол |
| chip-group | `toggle-group` | мультивибір чипів (variant outline) |
| badge-tag | `badge` | тони success/info/warning/danger + tag-варіант |
| tooltip | `tooltip` | |
| skeleton | `skeleton` | |
| modal | `dialog` | |
| drawer | `sheet` | бічна панель (vaul `drawer` — лише для bottom-sheet) |
| dropdown | `dropdown-menu` | |
| command-palette | `command` | + `dialog` (cmdk) |
| toast | `sonner` | (старий `toast` депрекейтнуто) |
| alert | `alert` | тони з токенів |
| progress | `progress` | |
| datepicker | `calendar` + `popover` | патерн «Date Picker» з доків shadcn |
| calendar | `calendar` | react-day-picker |
| pagination | `pagination` | |
| tabs | `tabs` | |
| table | `table` | для даних — додати TanStack Table |
| breadcrumbs | `breadcrumb` | |
| user-avatar | `avatar` | |
| sidebar | `sidebar` | у shadcn є цілий блок sidebar |
| stepper | `separator` (+кастом) | індикатора кроків нема — збирається |

## Графіки → `chart` (recharts)

| BookNest | База |
|---|---|
| barchart | `chart` → BarChart |
| line-chart | `chart` → LineChart |
| donut | `chart` → PieChart (innerRadius) |
| ring-progress | `chart` → RadialBarChart (або кастомний SVG) |

## Кастом (компонувати з примітивів за спекою)

| BookNest | З чого збирати |
|---|---|
| appbar | flex-бар + `button`/`avatar`/`dropdown-menu` |
| action-row | рядок: icon + текст + дія |
| action-list | список `action-row` |
| bar-list | рейтинговий список зі смугами |
| card | `card` (база) — далі всі card-* на ній |
| card-callout / -collection / -note / -purchase / -quote / -series / -summary | композиції на `card` |
| character-card | доменна картка |
| stat-card | `card` + число/дельта |
| chip-group *(як чипи-теги, не вибір)* | `badge` зі станами |
| multiselect | патерн «Combobox»: `popover` + `command` (мультивибір) |
| tag-input | `input` + чипи (`badge`) |
| number-stepper | `input` + дві `button` (+/−) |
| rating | зірки (кастом) |
| filter-panel | `popover`/`sheet` + `checkbox`/`radio-group`/`select` |
| upload | дропзона (+ react-dropzone) |
| theme-switcher | next-themes toggle (`button` + lucide Sun/Moon) |
| logo | бренд-SVG з `assets/logo/` |
| empty-state | `illustrations/` + дані з `data/empty-states.js` |

## Одна команда встановлення примітивів

```bash
npx shadcn@latest add button input textarea select checkbox radio-group switch \
  toggle-group badge tooltip skeleton dialog sheet dropdown-menu command sonner \
  alert progress calendar popover pagination tabs table breadcrumb avatar sidebar \
  separator chart form label
```

`form` + `label` — для форм автентифікації (див. `foundation/lib/validation/`).
Radix-залежності кожного компонента shadcn підтягне сам.
