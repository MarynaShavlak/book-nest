# Optimistic Update and Rollback

> Source: `favorite-book-toggle.md §9 + favorites-page.md §13.5`

## 9. Toggle behavior

Favorite toggle має працювати швидко, без confirmation modal.

Recommended behavior:

```text id="jfohi5"
Click → optimistic UI update → save in background
```

Meaning:

* UI одразу змінює heart icon;
* система відправляє зміну;
* якщо запит успішний, UI залишається оновленим;
* якщо сталася помилка, UI повертається до попереднього стану.

---

### 13.5. Optimistic UI

Recommended behavior:

```text
Click → optimistic UI update → save in background
```

If success:

- UI залишається оновленим.

If error:

- повернути попередній стан;
- показати error message;
- книга не має зникати остаточно.

Error message:

```text
Не вдалося оновити улюблене
```

---
