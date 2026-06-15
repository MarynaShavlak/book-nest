# Quick Filter Rules

> Source: `favorites-page.md §7`

## 7. Quick filters

Quick filters — це короткі chips під toolbar, які дають швидкий доступ до найчастіших сценаріїв перегляду улюблених книг.

Important:

```text
isFavorite = true — це базова умова сторінки, а не quick filter.
```

---

### 7.1. Recommended quick filters for MVP

| Chip | Query logic |
|---|---|
| Усі | без quick filter |
| Читаю | `readingStatus = reading` або `rereading` |
| Хочу прочитати | `readingStatus = want_to_read` |
| Прочитано | `readingStatus = finished` |
| Не почато | `readingStatus = not_started` |
| З високим рейтингом | `rating >= 4` |

---

### 7.2. What not to include as quick filters

Не потрібно додавати як quick filters:

- жанри;
- авторів;
- видавництва;
- формати;
- ownership status;
- конкретні серії;
- чергу читання;
- власні списки.

Ці параметри мають бути в advanced filters або на окремих сторінках.

---

### 7.3. Quick filters behavior

- одночасно може бути активний тільки один quick filter;
- quick filter комбінується з search;
- quick filter комбінується з advanced filters;
- chip **Усі** прибирає тільки quick filter;
- **Очистити все** прибирає search, quick filter і advanced filters;
- активний quick filter має зберігатися в URL.

Example:

```text
/favorites?quickFilter=finished
```

---
