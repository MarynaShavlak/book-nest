# Optimistic UI

> Source: `favorites-page.md §13.5`

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
