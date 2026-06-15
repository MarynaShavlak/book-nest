# Favorites Toolbar

> Source: `favorites-page.md §5`

## 5. Favorites toolbar

Toolbar сторінки **“Улюблені книги”** — це панель керування списком улюблених книг.

Вона розташована під page header і над списком книг.

---

### 5.1. Toolbar elements

| Element | Type | Description |
|---|---|---|
| Search | Input | Пошук серед улюблених книг |
| Filters | Button | Відкриває advanced filters |
| Sort | Dropdown | Змінює порядок книг |
| View mode | Toggle | Перемикає `grid` / `list` |
| Results count | Text | Показує кількість знайдених результатів |
| Clear all | Button / Link | Очищає search і filters |

---

### 5.2. Recommended layout

```text
[ Пошук в улюблених... ] [ Фільтри ] [ Сортувати ] [ Grid/List ]  24 книги
```

Якщо активні search або filters:

```text
[ Пошук в улюблених... ] [ Фільтри • 3 ] [ Сортувати ] [ Grid/List ]  Знайдено 8 з 24  [ Очистити все ]
```

---

### 5.3. Basic behavior

- search шукає тільки серед улюблених книг;
- filters застосовуються тільки до набору `isFavorite = true`;
- sort змінює порядок улюблених книг;
- view mode змінює тільки вигляд;
- results count оновлюється після search або filters;
- **Очистити все** показується тільки якщо є активний search або filters.

---
