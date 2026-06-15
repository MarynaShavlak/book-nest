# Active filter chip rules

> Джерело: розділ `8.1–8.7` зі старого `my-library-page.md`.

### 8.1. When to show

Active filters bar показується, якщо активний хоча б один параметр:

* search query;
* quick filter;
* advanced filter.

Якщо немає активних фільтрів або пошуку, цей блок не показується.

---

### 8.2. What to show

Active filters bar має показувати активні параметри як chips.

Приклад:

```text
Пошук: крило ×
Прочитано ×
Fantasy ×
Паперова ×
Автор: Сара Дж. Маас ×
Очистити все
```

---

### 8.3. Chip behavior

Кожен chip має показувати конкретний активний параметр.

| Chip type        | Example                |
| ---------------- | ---------------------- |
| Search           | `Пошук: крило`         |
| Quick filter     | `Читаю`                |
| Reading status   | `Прочитано`            |
| Ownership status | `В дорозі`             |
| Format           | `Паперова`             |
| Genre            | `Fantasy`              |
| Tag              | `slow burn`            |
| Age category     | `16+`                  |
| Language         | `Українська`           |
| Author           | `Автор: Сара Дж. Маас` |
| Publisher        | `Видавництво: КСД`     |
| Book type        | `Частина серії`        |
| Rating           | `Рейтинг від 4`        |
| Publication year | `2020–2026`            |
| Pages count      | `300–700 стор.`        |
| Cover            | `Без обкладинки`       |

---

### 8.4. Remove one filter

Користувач може прибрати окремий filter chip через `×`.

Logic:

* при видаленні chip прибирається тільки відповідний параметр;
* інші активні фільтри залишаються;
* список книг оновлюється;
* URL query params оновлюються.

Приклад:

```text
Було:
[Прочитано ×] [Fantasy ×] [Паперова ×]

Користувач прибрав Fantasy

Стало:
[Прочитано ×] [Паперова ×]
```

---

### 8.5. Clear all

У кінці Active filters bar має бути дія:

```text
Очистити все
```

Logic:

* очищає search query;
* очищає quick filter;
* очищає advanced filters;
* не змінює sort;
* не змінює view mode;
* скидає pagination на першу сторінку;
* оновлює URL query params.

---

### 8.7. Empty state

Якщо всі active filters видалені:

* Active filters bar приховується;
* список книг повертається до default state;
* URL очищається від filter/search params.

---
