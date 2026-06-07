# BookNest — Галерея дизайн-систем

Один репозиторій, що хостить **усі колірні варіанти** дизайн-системи BookNest
та віддає їх через **GitHub Pages** як живу сторінку.

Головна сторінка (`index.html`) — це галерея: кожна картка показує палітру
варіанта (свотчі + міні-прев'ю інтерфейсу в його кольорах) і веде на повну
дизайн-систему цього варіанта (токени, типографіка, ~50 компонентів).

Кожен варіант — самодостатній: інлайн-CSS, шрифти з Google Fonts, без збірки.
Галерея — статична: жодних залежностей, працює і локально (`file://`), і на Pages.

---

## Структура

```
booknest-design-system/
├── index.html            # галерея (точка входу GitHub Pages)
├── variants.js           # АВТО-генерований маніфест палітр (не редагувати руками)
├── status-config.js      # джерело правди для статусів (value/label/tone/icon)
├── empty-states.js       # джерело правди для порожніх станів (16 сценаріїв)
├── .nojekyll             # вимикає Jekyll → Pages віддає файли як є
├── scripts/
│   ├── build.py          # імпорт варіантів + variants.js + перетемізація сторінок
│   └── page-templates/   # шаблони сторінок (токени підмінюються під кожну палітру)
│       ├── ui-icons.html
│       ├── genre-icons.html
│       ├── status-matrix.html
│       ├── components-empty-state.html
│       ├── components-alert.html
│       ├── components-drawer.html
│       ├── components-character-card.html
│       └── components-logo.html
├── icons/                # СПІЛЬНІ вихідні файли іконок (currentColor, без прив'язки до палітри)
│   ├── ui-icons/             # спрайт ui-icons.svg + окремі svg/*.svg (99 шт.)
│   └── genre-icons/          # спрайт genre-icons.svg + окремі svg/*.svg (89 шт.)
├── logo/                 # СПІЛЬНІ бренд-ассети: 5 SVG логотипів (currentColor) + README
├── illustrations/        # СПІЛЬНІ ілюстрації порожніх станів (16 PNG; растр, для застосунку)
└── variants/
    └── palette-01-terracotta/      # (так само palette-02 … palette-22)
        ├── … компоненти, tokens.css, typography.css …
        ├── index.html                  # каталог: «Іконки», «Статуси», «Порожні стани», «Бренд» + Alert, Drawer, CharacterCard
        ├── ui-icons.html               # ⟲ генерує build.py — у кольорах палітри
        ├── genre-icons.html            # ⟲ генерує build.py — у кольорах палітри
        ├── status-matrix.html          # ⟲ генерує build.py — у кольорах палітри
        ├── components-empty-state.html # ⟲ генерує build.py — у кольорах палітри
        ├── components-alert.html       # ⟲ генерує build.py — у кольорах палітри
        ├── components-drawer.html      # ⟲ генерує build.py — у кольорах палітри
        ├── components-character-card.html # ⟲ генерує build.py — у кольорах палітри
        └── components-logo.html        # ⟲ генерує build.py — у кольорах палітри
```

`variants.js` має вигляд `window.BOOKNEST_VARIANTS = [ … ]` — тому галерея читає
його без `fetch()` і не впирається в CORS навіть при відкритті з диска.

---

## Переглянути локально

Через `file://` теж працює, але краще підняти простий сервер (правильні шляхи):

```bash
python3 -m http.server 8000
# відкрий http://localhost:8000
```

---

## Додати решту варіантів

Решта 20 архівів називаються на кшталт `…palette-3-forest.zip` … `…palette-22-….zip`.
Скрипт сам виведе слаг з імені файлу (`palette-3-forest` → `palette-03-forest`),
розпакує в `variants/<slug>/` і перебудує маніфест:

```bash
# один або одразу багато архівів
python scripts/build.py import ~/Downloads/booknest-design-system_palette-3-*.zip
python scripts/build.py import ~/Downloads/booknest-design-system_palette-*.zip

# можна вказати вже розпаковану теку
python scripts/build.py import ~/Downloads/booknest_palette_3
```

Якщо просто переклав теки в `variants/` вручну — перебудуй маніфест окремо:

```bash
python scripts/build.py
```

Скрипт використовує лише стандартну бібліотеку Python 3 — нічого ставити не треба.
Кольори для прев'ю беруться автоматично з `tokens.css` кожного варіанта,
а картки впорядковуються за номером палітри.

---

## Ініціалізувати репозиторій і викласти на GitHub Pages

```bash
git init
git add .
git commit -m "BookNest design system gallery"

# створи порожній репозиторій на GitHub (booknest-design-system), тоді:
git branch -M main
git remote add origin https://github.com/<твій-логін>/booknest-design-system.git
git push -u origin main
```

Увімкнути Pages: **Settings → Pages → Build and deployment → Source: _Deploy from a branch_**,
гілка **`main`**, тека **`/ (root)`** → **Save**.

За хвилину-дві сайт буде доступний за адресою:

```
https://<твій-логін>.github.io/booknest-design-system/
```

Кожен наступний варіант: `build.py import …` → `git add . && git commit && git push` —
галерея оновиться сама.

---

## Як це влаштовано

- **`index.html`** — «хром» галереї в канонічній теракотовій палітрі (ті самі токени
  й шрифти, що й у варіантів). Картки рендеряться у власних кольорах варіанта через
  інлайн CSS-змінні `--v-*`, тож кожна виглядає у своїй палітрі, поки сторінка
  лишається єдиною. Є пошук, лічильник, перемикач світла/темна.
- **`variants.js`** — маніфест: для кожного варіанта `slug`, людська назва, шлях
  до `index.html` і ключові кольори (`--primary`, `--ink`, поверхні, акценти, темний акцент).
- **`scripts/build.py`** — `import` (zip/тека → `variants/<slug>/`), перетемізація
  сторінок під кожну палітру (іконки, матриця статусів, порожні стани, Alert, Drawer,
  CharacterCard, Логотип) з вписуванням у каталог (нові категорії + пункти в наявні категорії)
  і `manifest` (скан `variants/` → `variants.js`). Будь-який запуск (`import` чи
  `python scripts/build.py`) оновлює все це разом.
- **`status-config.js`** — єдине джерело правди для пілюль статусів (value, label,
  tone, icon + правила). Сторінка «Матриця статусів» його дублює в зручному вигляді;
  у застосунку бери дані звідси.
- **`empty-states.js`** — єдине джерело правди для порожніх станів (16 сценаріїв:
  title, desc, дії, чипи, підказки). Сторінка «Порожні стани» його ілюструє.

---

## Іконки

Вітрини іконок живуть **усередині кожної палітри** в її кольорах. У `variants/<slug>/`
лежать `ui-icons.html` (99 інтерфейсних іконок) і `genre-icons.html` (89 жанрів), а в
каталозі на головній сторінці дизайн-системи палітри з'являється категорія «Іконки».
Іконки на `currentColor`, тож кожна сторінка фарбується акцентом своєї палітри
(теракота, помаранч тощо).

Ці сторінки **генерує `build.py`**: бере шаблони зі `scripts/page-templates/`, підміняє
в них токен-блоки токенами палітри (`tokens.css`), кладе результат у теку палітри й
вписує категорію «Іконки» в каталог. Тому для кожної нової палітри сторінки іконок
з'являються самі — досить `import` нового архіву (або `python scripts/build.py`).

Вітрини самодостатні (вшитий спрайт + перемикач теми, розміру та кольору, копіювання в
клік). Вихідні файли іконок — спільні для всіх палітр і лежать у `icons/`:

```html
<!-- icons/ui-icons/ui-icons.svg → -->
<svg width="20" height="20"><use href="#i-home"/></svg>
<!-- icons/genre-icons/genre-icons.svg → -->
<svg width="20" height="20"><use href="#genre-fentezi"/></svg>
```

---

## Матриця статусів

Так само, як іконки, у кожній палітрі є `status-matrix.html` у її кольорах, а в каталозі
з'являється категорія «Статуси». Це повна довідка зі всіх статусів книги: пілюля, `value`,
тон, іконка та де використовується (статус читання, володіння, формат, серія, доставка,
позика, пріоритет черги + прапорці).

Статус-пілюлі семантичні — тони `success/info/warning/danger` та `accent` спільні для всіх
палітр (тому матриця виглядає майже однаково в різних палітрах; різниться лише акцент
`--primary` у хромі). Сторінку теж генерує `build.py` з `scripts/page-templates/status-matrix.html`.

Дані для пілюль — у `status-config.js` (єдине джерело правди). Рендер пілюлі:

```js
const map = Object.fromEntries(readingStatuses.map(s => [s.value, s]));
const s = map[book.readingStatus];     // напр. "finished"
el.className = 'badge ' + s.tone;      // "badge success"
el.innerHTML = `<svg><use href="#${s.icon}"/></svg>` + s.label;
```

Окремі файли — у `icons/ui-icons/svg/` та `icons/genre-icons/svg/`.

---

## Порожні стани (EmptyState)

За тим самим принципом у кожній палітрі є `components-empty-state.html` у її кольорах,
а в каталозі — категорія «Порожні стани». Це єдиний компонент порожнього стану
(ілюстрація → заголовок → опис → дії → опц. чипи/підказка), що покриває 16 сценаріїв:
порожні бібліотека, черга, нотатки, цитати, улюблені, списки, теги, автори, видавництва,
покупки, доставка, серії, пошук + помилки (404, офлайн, загальна).

Сторінка самодостатня: ілюстрації вшиті як base64-WebP, тож показуються без зовнішніх
файлів. Її генерує `build.py` з `scripts/page-templates/components-empty-state.html`,
підмінюючи токени під палітру.

Дані сценаріїв — у `empty-states.js`. Растрові ілюстрації для застосунку (PNG) лежать у
спільній теці `illustrations/` (вони палітро-незалежні):

```js
import { EMPTY_STATES } from './empty-states.js';
const s = EMPTY_STATES['library'];
// <img src={`illustrations/${s.illu}.png`} alt={s.title} />
```

## Бренд / Логотип

У кожній палітрі є `components-logo.html` (категорія каталогу «Бренд») — бренд-гайд BookNest:
знак «книга в гнізді» + вордмарк, 4 lockup-и (горизонтальний, вертикальний, тільки знак,
тільки вордмарк), кольорові версії, охоронна зона, мінімальні розміри й заборони. Сторінка
самодостатня (логотипи вшиті інлайн-SVG); її генерує `build.py` зі
`scripts/page-templates/components-logo.html`, підмінюючи токени під палітру. Сама бренд-марка
стабільна (темно-коричневий знак на бежевій сторінці) — палітра впливає лише на демо «на
брендовому тлі».

Готові вихідні файли логотипа для реального використання (favicon, іконка застосунку, шапка
README) лежать у спільній теці `logo/` — вони палітро-незалежні. Штрих на `currentColor`
(типово `#3A2218`), сторінка — бежева `#E4C6AA`; перефарбувати = задати CSS `color` елементу
`<svg>`. Шрифт вордмарка переведено в контури.

```
logo/
├── logo-horizontal.svg   # основний lockup (знак + Book Nest)
├── logo-stacked.svg      # вертикальний варіант
├── logo-mark.svg         # тільки знак (іконка застосунку, аватар)
├── logo-mark-book.svg    # спрощений знак для favicon / дуже малих розмірів
├── logo-wordmark.svg     # тільки текст
└── README.txt
```
