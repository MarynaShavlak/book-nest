#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
BookNest Design System — інструмент збірки галереї.

Дві задачі:

  1) Імпорт варіанта з zip-архіву (або теки) у variants/<slug>/.
     Слаг виводиться з імені файлу: ...palette-7-forest.zip -> palette-07-forest

  2) Регенерація variants.js — маніфесту, який читає головна сторінка index.html.
     Сканує теку variants/, витягує ключові кольори з tokens.css кожного варіанта
     і впорядковує їх за номером палітри.

  Додатково — генерація сторінок у кольорах палітри: для кожної палітри
  ui-icons.html, genre-icons.html і status-matrix.html генеруються з шаблонів
  scripts/page-templates/ у кольорах цієї палітри, а в її каталог (index.html)
  додаються категорії «Іконки» та «Статуси».
  Це відбувається при будь-якому запуску (import або без аргументів).

Використання:

    # додати один або кілька архівів і відразу перебудувати маніфест
    python scripts/build.py import ~/Downloads/booknest-design-system_palette-3-*.zip

    # додати готову (вже розпаковану) теку
    python scripts/build.py import ~/Downloads/booknest_palette_3

    # просто перебудувати маніфест за поточним вмістом variants/
    python scripts/build.py
    python scripts/build.py manifest

Скрипт не має зовнішніх залежностей — лише стандартна бібліотека Python 3.
"""

from __future__ import annotations

import json
import re
import shutil
import sys
import tempfile
import zipfile
from pathlib import Path

# ── шляхи ─────────────────────────────────────────────────────────────────────
ROOT = Path(__file__).resolve().parent.parent      # корінь репозиторію
VARIANTS_DIR = ROOT / "variants"
MANIFEST_PATH = ROOT / "variants.js"

# Ключові токени, які показуємо у прев'ю картки галереї.
# (порядок важливий — у такому порядку малюються свотчі)
PREVIEW_TOKENS = [
    "--primary", "--primary-hover", "--ink",
    "--bg", "--surface", "--surface-alt",
    "--accent-soft", "--border",
]

# Файл, який обов'язково має бути у валідній теці варіанта.
REQUIRED_FILES = ("index.html", "tokens.css")

# ── сторінки іконок (вітрина в кольорах кожної палітри) ───────────────────────
# Шаблони лежать тут; токен-блоки в них підмінюються токенами кожної палітри.
PAGE_TEMPLATES_DIR = ROOT / "scripts" / "page-templates"
GENERATED_PAGES = ("ui-icons.html", "genre-icons.html", "status-matrix.html",
                   "components-empty-state.html",
                   "components-alert.html", "components-drawer.html",
                   "components-character-card.html", "components-logo.html",
                   "components-line-chart.html",
                   # повносторінкові лейаути
                   "layout-analytics.html", "layout-goals.html", "layout-calendar.html",
                   "layout-appshell.html",
                   "auth-login.html", "auth-register.html", "auth-reset.html",
                   # detail-сторінки
                   "detail-book.html", "detail-series.html", "detail-list.html",
                   "detail-publisher.html", "detail-author.html",
                   # списки книг
                   "page-library.html", "page-favorites.html", "page-queue.html",
                   "page-delivery.html", "page-borrowed.html", "page-series.html",
                   # довідники / колекції
                   "page-authors.html", "page-publishers.html", "page-genres.html",
                   "page-notes.html", "page-quotes.html", "page-lists.html",
                   # форми
                   "page-add-book.html",
                   # профіль і налаштування
                   "settings-profile-dashboard.html", "settings-profile.html",
                   "settings-settings.html", "settings-import-export.html")

# Категорії, які дописуємо в каталог index.html кожної палітри (у кінець, після «Екрани»).
# Кожен запис: (маркер для ідемпотентності, текст категорії CATS). Порядок зберігається.
CATALOG_EXTRAS = [
    ("ui-icons.html",
     "['Іконки','i-palette',[\n"
     "      ['ui-icons.html','UI-іконки','99 інтерфейсних іконок'],\n"
     "      ['genre-icons.html','Іконки жанрів','89 іконок жанрів']\n"
     "    ]]"),
    ("status-matrix.html",
     "['Статуси','i-list',[\n"
     "      ['status-matrix.html','Матриця статусів','усі статуси книги, тони та іконки']\n"
     "    ]]"),
    ("components-empty-state.html",
     "['Порожні стани','i-image',[\n"
     "      ['components-empty-state.html','EmptyState','порожні екрани та помилки · 16 сценаріїв']\n"
     "    ]]"),
    ("components-logo.html",
     "['Бренд','i-sparkles',[\n"
     "      ['components-logo.html','Логотип','знак, вордмарк, lockup-и · правила використання']\n"
     "    ]]"),
    ("layout-analytics.html",
     "['Analytics pages','i-chart',[\n"
     "      ['layout-analytics.html','Статистика','дашборд статистики читання'],\n"
     "      ['layout-goals.html','Цілі читання','річні цілі, виклики та прогрес'],\n"
     "      ['layout-calendar.html','Календар читання','теплокарта активності та хронологія']\n"
     "    ]]"),
    ("auth-login.html",
     "['Auth pages','i-lock',[\n"
     "      ['auth-login.html','Login','сторінка входу'],\n"
     "      ['auth-register.html','Register','сторінка реєстрації'],\n"
     "      ['auth-reset.html','Forgot password','відновлення паролю']\n"
     "    ]]"),
    ("detail-book.html",
     "['Detail pages','i-file',[\n"
     "      ['detail-book.html','Книга','сторінка деталей книги'],\n"
     "      ['detail-series.html','Серія','сторінка деталей серії'],\n"
     "      ['detail-list.html','Список','сторінка деталей списку'],\n"
     "      ['detail-publisher.html','Видавництво','сторінка деталей видавця'],\n"
     "      ['detail-author.html','Автор','сторінка деталей автора']\n"
     "    ]]"),
    ("page-library.html",
     "['Book list pages','i-library',[\n"
     "      ['page-library.html','Бібліотека','уся бібліотека'],\n"
     "      ['page-favorites.html','Улюблене','улюблені книги'],\n"
     "      ['page-queue.html','Черга читання','черга на читання'],\n"
     "      ['page-delivery.html','Доставка','книги в дорозі'],\n"
     "      ['page-borrowed.html','Позичені','позичені книги'],\n"
     "      ['page-series.html','Серії','список серій']\n"
     "    ]]"),
    ("page-authors.html",
     "['Directory pages','i-list',[\n"
     "      ['page-authors.html','Автори','довідник авторів'],\n"
     "      ['page-publishers.html','Видавництва','довідник видавництв'],\n"
     "      ['page-genres.html','Жанри / Теги','жанри та теги'],\n"
     "      ['page-notes.html','Нотатки','усі нотатки'],\n"
     "      ['page-quotes.html','Цитати','збережені цитати'],\n"
     "      ['page-lists.html','Власні списки','користувацькі списки']\n"
     "    ]]"),
    ("page-add-book.html",
     "['Form pages','i-edit',[\n"
     "      ['page-add-book.html','Додати книгу','форма додавання нової книги']\n"
     "    ]]"),
    ("settings-profile-dashboard.html",
     "['Settings pages','i-settings',[\n"
     "      ['settings-profile-dashboard.html','Профіль','огляд профілю та читацька статистика'],\n"
     "      ['settings-profile.html','Редагування профілю','зміна особистих даних користувача'],\n"
     "      ['settings-settings.html','Налаштування','параметри застосунку та вподобання'],\n"
     "      ['settings-import-export.html','Імпорт / Експорт','перенесення та резервне копіювання бібліотеки']\n"
     "    ]]"),
]

# Окремі компоненти, які дописуємо в ІСНУЮЧІ категорії каталогу.
# Кожен запис: (назва категорії, маркер для ідемпотентності, текст запису CATS).
CATALOG_ITEMS = [
    ("Оверлеї та спливаючі", "components-drawer.html",
     "['components-drawer.html','Drawer','висувна панель збоку']"),
    ("Індикатори та службові", "components-alert.html",
     "['components-alert.html','Alert','інлайн-банер: тони та стани']"),
    ("Картки", "components-character-card.html",
     "['components-character-card.html','Card · Character','картка персонажа']"),
    ("Дані, статистика, візуалізація", "components-line-chart.html",
     "['components-line-chart.html','Line chart','лінійний графік трендів']"),
    ("Екрани", "layout-appshell.html",
     "['layout-appshell.html','AppShell','каркас застосунку · сайдбар, топбар, контент']"),
]

# Деякі іконки категорій (напр. i-list, i-image) можуть бути відсутні в обмеженому
# defs-спрайті index.html — їх беремо з повного спрайту ui-icons і дописуємо за потреби.
DEFS_SPRITE_OPEN = '<svg width="0" height="0" style="position:absolute" aria-hidden="true">'
UI_SPRITE_PATH = ROOT / "icons" / "ui-icons" / "ui-icons.svg"

# ── бренд-мітка на головній (index.html) ─────────────────────────────────────
# Знак BookNest (logo-mark) — штрих currentColor, сторінка var(--logo-page,#E4C6AA).
# index.html історично показував у бренд-місцях загальний #i-book; підмінюємо на знак.
LOGO_MARK_SYMBOL = '<symbol id="logo-mark" viewBox="0 0 100 100"><path d="M33 53 C40 56 60 56 67 53 C65 59 58 61 50 61 C42 61 35 59 33 53 Z" fill="var(--logo-page,#E4C6AA)"/><g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M16 60 C20 72 40 76 50 76 C60 76 80 72 84 60"/><path d="M20 62 C24 73 42 78 50 78 C58 78 76 73 80 62"/><path d="M25 64 C28 75 44 80 50 80 C56 80 72 75 75 64"/><path d="M31 66 C34 77 46 81 50 81 C54 81 66 77 69 66"/><path d="M38 72 C44 75 56 75 62 72"/><path d="M34 69 L41 73"/><path d="M66 69 L59 73"/><path d="M50 25 C42 23 33 25 24 31 L24 55 C33 51 42 53 50 58"/><path d="M50 25 C58 23 67 25 76 31 L76 55 C67 51 58 53 50 58"/><path d="M50 25 L50 58"/><path d="M24 33 L21 35 L21 55 L24 54"/><path d="M76 33 L79 35 L79 55 L76 54"/></g></symbol>'

# Бренд-місця на index.html (унікальні фрагменти) → (old, new). Знак малюємо
# у канонічному вигляді: штрих --ink, сторінка --logo-page (як на сторінках застосунку).
BRAND_MARK_REPLACEMENTS = [
    # CSS заголовкового знака: акцент → ink + peach-сторінка
    (".brand .mark{width:34px;height:34px;color:var(--primary)}",
     ".brand .mark{width:34px;height:34px;color:var(--ink);--logo-page:#E4C6AA}"),
    # знак у хедері (34px, повний)
    ('<svg class="mark"><use href="#i-book"/></svg>',
     '<svg class="mark" viewBox="0 0 100 100"><use href="#logo-mark"/></svg>'),
    # знак у hero-eyebrow (малий)
    ('<svg style="width:16px;height:16px"><use href="#i-book"/></svg>',
     '<svg viewBox="0 0 100 100" style="width:18px;height:18px;color:var(--ink);--logo-page:#E4C6AA"><use href="#logo-mark"/></svg>'),
    # знак у футері (унікальний завдяки префіксу <footer>)
    ('<footer><svg><use href="#i-book"/></svg>',
     '<footer><svg viewBox="0 0 100 100" style="width:18px;height:18px;color:var(--ink);--logo-page:#E4C6AA"><use href="#logo-mark"/></svg>'),
]


# ── розбір кольорів із tokens.css ─────────────────────────────────────────────
def _parse_block(css: str, selector_regex: str) -> dict[str, str]:
    """Витягнути всі --token: value; з першого блоку, що збігається з селектором."""
    m = re.search(selector_regex + r"\s*\{(.*?)\}", css, re.DOTALL)
    if not m:
        return {}
    block = m.group(1)
    out: dict[str, str] = {}
    for name, val in re.findall(r"(--[\w-]+)\s*:\s*([^;]+);", block):
        # відрізати залишок інлайн-коментаря, якщо раптом потрапив
        v = re.sub(r"/\*.*?\*/", "", val).strip()
        out[name] = v
    return out


def extract_colors(variant_dir: Path) -> dict:
    """Зчитати світлу й темну палітри з tokens.css варіанта."""
    tokens_path = variant_dir / "tokens.css"
    css = tokens_path.read_text(encoding="utf-8")

    light = _parse_block(css, r":root")
    dark = _parse_block(css, r'\[data-theme="dark"\]')

    colors = {}
    for tok in PREVIEW_TOKENS:
        key = tok.lstrip("-")            # "--primary" -> "primary"
        if tok in light:
            colors[key] = light[tok]
    primary_dark = dark.get("--primary", colors.get("primary", "#000"))

    return {"colors": colors, "primaryDark": primary_dark}


# ── формування людської назви зі слага ────────────────────────────────────────
def humanize(slug: str) -> tuple[int, str, str]:
    """
    'palette-07-bright-orange' -> (7, 'Bright Orange', 'Палітра 07 — Bright Orange')
    Якщо номер не знайдено — order=9999, назва зі всього слага.
    """
    m = re.match(r"palette-0*(\d+)-(.+)$", slug)
    if m:
        num = int(m.group(1))
        name_part = m.group(2)
    else:
        num = 9999
        name_part = slug
    name = name_part.replace("-", " ").replace("_", " ").strip().title()
    title = f"Палітра {num:02d} — {name}" if num != 9999 else name
    return num, name, title


# ── маніфест ──────────────────────────────────────────────────────────────────
def build_manifest() -> int:
    if not VARIANTS_DIR.exists():
        print(f"  Теки {VARIANTS_DIR} не існує.")
        return 1

    items = []
    for d in sorted(VARIANTS_DIR.iterdir()):
        if not d.is_dir():
            continue
        if not all((d / f).exists() for f in REQUIRED_FILES):
            print(f"  ⚠  пропускаю '{d.name}' — немає {', '.join(REQUIRED_FILES)}")
            continue
        order, name, title = humanize(d.name)
        try:
            palette = extract_colors(d)
        except Exception as e:  # noqa: BLE001
            print(f"  ⚠  '{d.name}': не вдалося прочитати кольори ({e})")
            palette = {"colors": {}, "primaryDark": "#000"}
        items.append({
            "slug": d.name,
            "order": order,
            "name": name,
            "title": title,
            "path": f"variants/{d.name}/index.html",
            **palette,
        })

    items.sort(key=lambda x: (x["order"], x["slug"]))

    header = (
        "// ЦЕЙ ФАЙЛ ЗГЕНЕРОВАНО АВТОМАТИЧНО — не редагуй вручну.\n"
        "// Перебудова:  python scripts/build.py\n"
        "window.BOOKNEST_VARIANTS = "
    )
    body = json.dumps(items, ensure_ascii=False, indent=2)
    MANIFEST_PATH.write_text(header + body + ";\n", encoding="utf-8")

    print(f"  ✓ variants.js перебудовано — {len(items)} варіант(ів):")
    for it in items:
        primary = it["colors"].get("primary", "?")
        print(f"      {it['order']:>2}. {it['slug']:<32} {primary}")
    return 0


# ── імпорт ────────────────────────────────────────────────────────────────────
def _find_variant_root(base: Path) -> Path | None:
    """Знайти теку, що містить index.html + tokens.css (на цьому рівні чи на 1 глибше)."""
    if all((base / f).exists() for f in REQUIRED_FILES):
        return base
    for sub in base.iterdir():
        if sub.is_dir() and all((sub / f).exists() for f in REQUIRED_FILES):
            return sub
    return None


def _slug_from_name(raw: str) -> str:
    """Вивести нормалізований слаг із імені файлу/теки."""
    stem = Path(raw).name
    stem = re.sub(r"\.zip$", "", stem, flags=re.IGNORECASE)
    # прибрати типовий префікс пакета
    stem = re.sub(r"^booknest[-_]design[-_]system[-_]", "", stem, flags=re.IGNORECASE)
    stem = re.sub(r"^booknest[-_]", "", stem, flags=re.IGNORECASE)
    m = re.search(r"palette[-_]0*(\d+)[-_](.+)$", stem, flags=re.IGNORECASE)
    if m:
        num = int(m.group(1))
        rest = re.sub(r"[_\s]+", "-", m.group(2).strip()).lower()
        return f"palette-{num:02d}-{rest}"
    # запасний варіант: просто почистити рядок
    return re.sub(r"[_\s]+", "-", stem.strip()).lower()


def import_one(src: str) -> str | None:
    src_path = Path(src).expanduser()
    if not src_path.exists():
        print(f"  ✗ не знайдено: {src_path}")
        return None

    slug = _slug_from_name(src)
    dest = VARIANTS_DIR / slug

    with tempfile.TemporaryDirectory() as tmp:
        tmp_path = Path(tmp)
        if src_path.is_file() and src_path.suffix.lower() == ".zip":
            with zipfile.ZipFile(src_path) as zf:
                zf.extractall(tmp_path)
            search_base = tmp_path
        elif src_path.is_dir():
            search_base = src_path
        else:
            print(f"  ✗ не zip і не тека: {src_path}")
            return None

        variant_root = _find_variant_root(search_base)
        if variant_root is None:
            print(f"  ✗ у '{src_path.name}' не знайдено index.html + tokens.css")
            return None

        if dest.exists():
            shutil.rmtree(dest)
        dest.mkdir(parents=True)
        for item in variant_root.iterdir():
            target = dest / item.name
            if item.is_dir():
                shutil.copytree(item, target)
            else:
                shutil.copy2(item, target)

    n = len(list(dest.iterdir()))
    print(f"  ✓ {src_path.name}  ->  variants/{slug}/  ({n} файлів)")
    return slug


def cmd_import(args: list[str]) -> int:
    if not args:
        print("  Вкажи хоча б один шлях до .zip або теки.")
        return 1
    imported = [s for s in (import_one(a) for a in args) if s]
    if not imported:
        return 1
    print()
    theme_palette_pages()
    print()
    return build_manifest()


# ── сторінки в кольорах палітри (іконки + матриця статусів) ───────────────────
def _extract_token_blocks(tokens_css: str):
    """Витягнути блоки :root{…}, [data-theme="dark"]{…} та OS-fallback
    :root:not([data-theme="light"]){…} (всередині @media prefers-color-scheme: dark)
    з tokens.css палітри."""
    root = re.search(r":root\s*\{[^}]*\}", tokens_css, re.DOTALL)
    dark = re.search(r'\[data-theme="dark"\]\s*\{[^}]*\}', tokens_css, re.DOTALL)
    media = re.search(r':root:not\(\[data-theme="light"\]\)\s*\{[^}]*\}', tokens_css, re.DOTALL)
    return ((root.group(0) if root else None),
            (dark.group(0) if dark else None),
            (media.group(0) if media else None))


def _retheme_page(template_html: str, root_block: str, dark_block: str,
                  media_block: str | None = None) -> str:
    """Підмінити токен-блоки шаблону на блоки конкретної палітри."""
    # lambda як заміна — щоб не екранувати спецсимволи у блоках
    html = re.sub(r":root\s*\{[^}]*\}", lambda _m: root_block, template_html, count=1)
    html = re.sub(r'\[data-theme="dark"\]\s*\{[^}]*\}', lambda _m: dark_block, html, count=1)
    # OS-fallback всередині @media (prefers-color-scheme: dark) — підмінюємо, якщо є в обох.
    if media_block:
        html = re.sub(r':root:not\(\[data-theme="light"\]\)\s*\{[^}]*\}',
                      lambda _m: media_block, html, count=1)
    return html


# Кінець масиву CATS у index.html (одразу після нього йде `var cat = …`).
_CATS_END_RE = re.compile(
    r"\]\]\s*\];\s*var\s+cat\s*=\s*document\.getElementById\('catalog'\)"
)


def _ensure_catalog_extras(index_html: str):
    """Дописати відсутні категорії CATALOG_EXTRAS у кінець каталогу.
    Ідемпотентно та зі збереженням порядку. → (html, змінено?, точку_знайдено?)"""
    changed = False
    for marker, cat_text in CATALOG_EXTRAS:
        if marker in index_html:
            continue
        m = _CATS_END_RE.search(index_html)
        if not m:
            return index_html, changed, False
        pos = m.start() + 2  # одразу після ]] останньої наявної категорії
        index_html = index_html[:pos] + ",\n    " + cat_text + index_html[pos:]
        changed = True
    return index_html, changed, True


def _ensure_catalog_items(index_html: str):
    """Дописати окремі компоненти в існуючі категорії каталогу. Ідемпотентно."""
    changed = False
    for cat_name, marker, item_text in CATALOG_ITEMS:
        if marker in index_html:
            continue
        i = index_html.find("['" + cat_name + "',")
        if i == -1:
            continue  # категорію не знайдено
        close = index_html.find("]]", i)  # ]] = закриття списку + категорії
        if close == -1:
            continue
        j = close - 1
        while j > i and index_html[j] in " \n\t\r":
            j -= 1
        if index_html[j] != "]":  # очікуємо ] останнього пункту
            continue
        pos = j + 1
        index_html = index_html[:pos] + ",\n      " + item_text + index_html[pos:]
        changed = True
    return index_html, changed


def _catalog_icon_ids() -> set:
    """Іконки, які використовують категорії CATALOG_EXTRAS."""
    ids = set()
    for _marker, cat_text in CATALOG_EXTRAS:
        m = re.search(r"\['[^']+','(i-[a-z-]+)'", cat_text)
        if m:
            ids.add(m.group(1))
    return ids


def _load_sprite_symbols(ids: set) -> dict:
    """Витягнути markup потрібних <symbol> з повного спрайту ui-icons."""
    if not ids or not UI_SPRITE_PATH.exists():
        return {}
    sprite = UI_SPRITE_PATH.read_text(encoding="utf-8")
    out = {}
    for sid in ids:
        m = re.search(r'<symbol id="' + re.escape(sid) + r'".*?</symbol>', sprite, re.DOTALL)
        if m:
            out[sid] = m.group(0)
    return out


def _ensure_catalog_icons(index_html: str, symbols: dict):
    """Дописати у defs-спрайт index.html ті <symbol>, що потрібні категоріям і яких бракує."""
    missing = [mk for sid, mk in symbols.items() if f'<symbol id="{sid}"' not in index_html]
    if not missing:
        return index_html, False
    i = index_html.find(DEFS_SPRITE_OPEN)
    if i == -1:
        return index_html, False
    pos = i + len(DEFS_SPRITE_OPEN)
    inject = "\n  " + "\n  ".join(missing)
    return index_html[:pos] + inject + index_html[pos:], True


def _ensure_brand_mark(index_html: str):
    """Підмінити загальний #i-book у бренд-місцях index.html на знак BookNest
    (#logo-mark) і вписати сам символ у defs-спрайт. Ідемпотентно.
    Зачіпає лише бренд (хедер, hero-eyebrow, футер) — семпл-чип у вітрині
    іконок і іконки категорій «Картки»/«Екрани» не торкаємось."""
    changed = False
    # 1) символ знака у спрайт (якщо бракує)
    if '<symbol id="logo-mark"' not in index_html:
        i = index_html.find(DEFS_SPRITE_OPEN)
        if i != -1:
            pos = i + len(DEFS_SPRITE_OPEN)
            index_html = index_html[:pos] + "\n  " + LOGO_MARK_SYMBOL + index_html[pos:]
            changed = True
    # 2) бренд-місця: точкові заміни (кожна — лише якщо ще присутня)
    for old, new in BRAND_MARK_REPLACEMENTS:
        if old in index_html:
            index_html = index_html.replace(old, new)
            changed = True
    return index_html, changed


def theme_palette_pages() -> int:
    """Для кожної палітри: перетемізувати згенеровані сторінки і вписати їх у каталог."""
    templates = {}
    for name in GENERATED_PAGES:
        tpath = PAGE_TEMPLATES_DIR / name
        if not tpath.exists():
            print(f"  ⚠  шаблон не знайдено: {tpath} — крок сторінок пропущено")
            return 0
        templates[name] = tpath.read_text(encoding="utf-8")

    cat_symbols = _load_sprite_symbols(_catalog_icon_ids())  # символи іконок категорій

    done = 0
    for d in sorted(VARIANTS_DIR.iterdir()):
        if not d.is_dir() or not all((d / f).exists() for f in REQUIRED_FILES):
            continue
        root_block, dark_block, media_block = _extract_token_blocks((d / "tokens.css").read_text(encoding="utf-8"))
        if not root_block or not dark_block:
            print(f"  ⚠  '{d.name}': не знайдено :root/[data-theme] у tokens.css — пропускаю")
            continue
        for name, tpl in templates.items():
            (d / name).write_text(_retheme_page(tpl, root_block, dark_block, media_block), encoding="utf-8")
        idx_path = d / "index.html"
        idx, changed, ok = _ensure_catalog_extras(idx_path.read_text(encoding="utf-8"))
        idx, icons_changed = _ensure_catalog_icons(idx, cat_symbols)
        idx, items_changed = _ensure_catalog_items(idx)
        idx, brand_changed = _ensure_brand_mark(idx)
        if changed or icons_changed or items_changed or brand_changed:
            idx_path.write_text(idx, encoding="utf-8")
            note = "каталог оновлено"
        elif ok:
            note = "каталог уже повний"
        else:
            note = "⚠ не знайдено точку вставки в каталог"
        print(f"  ✓ {d.name}: {len(GENERATED_PAGES)} сторінки → кольори палітри · {note}")
        done += 1

    if done:
        print(f"  ✓ сторінки оновлено у {done} палітр(ах)")
    return 0


# ── точка входу ───────────────────────────────────────────────────────────────
def main() -> int:
    args = sys.argv[1:]
    if not args or args[0] == "manifest":
        theme_palette_pages()
        print()
        return build_manifest()
    if args[0] == "import":
        return cmd_import(args[1:])
    print(__doc__)
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
