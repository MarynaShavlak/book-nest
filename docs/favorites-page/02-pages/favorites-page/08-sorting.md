# Sorting

> Source: `favorites-page.md §10`

## 10. Sorting

Sorting керує порядком відображення улюблених книг.

Sorting не змінює набір книг, а тільки порядок після застосування search і filters.

---

### 10.1. Default sorting

Default sorting:

```text
Нещодавно додані в улюблені
```

Logic:

```text
favoriteAddedAt DESC
```

Якщо `favoriteAddedAt` відсутній, fallback:

```text
createdAt DESC
```

---

### 10.2. Recommended sorting options

| Option | Logic |
|---|---|
| Нещодавно додані в улюблені | `favoriteAddedAt DESC` |
| Давно додані в улюблені | `favoriteAddedAt ASC` |
| Найвищий рейтинг | `rating DESC` |
| Найнижчий рейтинг | `rating ASC` |
| Назва А–Я | `title ASC` |
| Назва Я–А | `title DESC` |
| Автор А–Я | `authorName ASC` |
| Автор Я–А | `authorName DESC` |
| Нещодавно додані в бібліотеку | `createdAt DESC` |
| Нещодавно оновлені | `updatedAt DESC` |
| Новіші видання | `publicationYear DESC` |
| Старіші видання | `publicationYear ASC` |
| Більше сторінок | `pagesCount DESC` |
| Менше сторінок | `pagesCount ASC` |

---

### 10.3. Sorting behavior

- sorting застосовується після search і filters;
- sorting не очищає search;
- sorting не очищає filters;
- sorting не змінює view mode;
- після зміни sorting loaded items скидаються на першу порцію;
- sorting зберігається в URL.

Example:

```text
/favorites?sort=favoriteAddedAt_desc
```

---
