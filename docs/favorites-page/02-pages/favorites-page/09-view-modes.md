# View Modes

> Source: `favorites-page.md §11`

## 11. View modes

View mode змінює тільки те, як візуально відображаються улюблені книги.

---

### 11.1. Available view modes

| View mode | Description |
|---|---|
| `grid` | Книги показуються як картки |
| `list` | Книги показуються як компактний список |

---

### 11.2. Default view mode

Default view mode:

```text
grid
```

---

### 11.3. View mode behavior

- користувач може перемикатися між `grid` і `list`;
- view mode не очищає search;
- view mode не очищає filters;
- view mode не змінює sorting;
- view mode не скидає loaded items;
- view mode може зберігатися як user preference;
- view mode може зберігатися в URL.

Example:

```text
/favorites?view=list
```

---
