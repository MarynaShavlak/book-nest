# Summary Cards

> Source: `favorites-page.md §4.6-4.7 + favorite-book-toggle.md §12`

### 4.6. Summary cards

Рекомендовані summary cards:

| Card | Logic |
|---|---|
| Усього улюблених | `isFavorite = true` |
| Прочитано | `isFavorite = true` + `readingStatus = finished` |
| Читаю | `isFavorite = true` + `readingStatus = reading` або `rereading` |
| Середній рейтинг | average rating серед улюблених книг з rating |

---

### 4.7. Summary cards behavior

- cards мають бути інформаційними;
- cards не мають бути клікабельними;
- cards рахують тільки активні книги поточного користувача;
- видалені книги не враховуються;
- cards оновлюються після favorite toggle, зміни reading status, rating або видалення книги.

---

## 12. Summary cards behavior

Якщо на сторінці є summary card **Улюблених**, вона має оновлюватися після favorite toggle.

Example:

```text id="u3qqp6"
Було: Улюблених 12
Додали книгу в улюблені
Стало: Улюблених 13
```

або:

```text id="03p278"
Було: Улюблених 12
Прибрали книгу з улюблених
Стало: Улюблених 11
```

---
