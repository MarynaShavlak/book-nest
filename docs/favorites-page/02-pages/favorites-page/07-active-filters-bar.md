# Active Filters Bar

> Source: `favorites-page.md §9`

## 9. Active filters bar

Active filters bar показує search, quick filter і advanced filters як chips.

---

### 9.1. When to show

Active filters bar показується, якщо активний хоча б один параметр:

- search query;
- quick filter;
- advanced filter.

Якщо активних параметрів немає, блок не показується.

---

### 9.2. What to show

Example:

```text
Пошук: крило ×
Прочитано ×
Fantasy ×
Паперова ×
Рейтинг від 4 ×
Очистити все
```

---

### 9.3. Remove one filter

Користувач може прибрати окремий chip через `×`.

Logic:

- прибирається тільки відповідний параметр;
- інші активні параметри залишаються;
- список оновлюється;
- URL query params оновлюються.

---

### 9.4. Clear all

Дія:

```text
Очистити все
```

Logic:

- очищає search;
- очищає quick filter;
- очищає advanced filters;
- не змінює sorting;
- не змінює view mode;
- скидає loaded items на першу порцію.

---
