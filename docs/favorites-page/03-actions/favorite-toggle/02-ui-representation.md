# UI Representation

> Source: `favorite-book-toggle.md §5, §17`

## 5. UI representation

Favorite status показується через heart icon.

| State                | Icon          |
| -------------------- | ------------- |
| `isFavorite = false` | outline heart |
| `isFavorite = true`  | filled heart  |

Recommended labels:

```text id="rsb5yr"
Додати в улюблені
Прибрати з улюблених
```

Tooltip behavior:

| State   | Tooltip              |
| ------- | -------------------- |
| `false` | Додати в улюблені    |
| `true`  | Прибрати з улюблених |

---

## 17. Accessibility

Heart icon має бути доступним для keyboard і screen reader.

Requirements:

* button має бути focusable;
* action має працювати через Enter / Space;
* aria-label має змінюватися залежно від state.

Recommended aria labels:

```text id="xmjnat"
Додати книгу в улюблені
Прибрати книгу з улюблених
```

---
