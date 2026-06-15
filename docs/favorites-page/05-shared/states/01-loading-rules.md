# Loading Rules

> Source: `favorites-page.md §14.2 + favorite-book-toggle.md §15`

### 14.2. Loading state

When:

```text
isLoading = true
```

UI:

- skeleton для header / summary cards;
- skeleton для toolbar;
- skeleton для cards або rows.

---

## 15. Loading behavior

Під час збереження favorite toggle:

* heart icon може мати disabled state;
* повторний клік по тому самому icon блокується до завершення запиту;
* не потрібно показувати global loader;
* можна показати маленький spinner або просто тимчасово disabled icon.

Recommended:

```text id="9cswaj"
Disable only clicked heart icon
```

---
