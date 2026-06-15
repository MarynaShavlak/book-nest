# Error Rules

> Source: `favorites-page.md §14.6 + favorite-book-toggle.md §16`

### 14.6. Error state

Title:

```text
Не вдалося завантажити улюблені книги
```

Description:

```text
Спробуй оновити сторінку або повторити запит трохи пізніше.
```

Action:

```text
Спробувати ще раз
```

---

## 16. Error behavior

Якщо favorite status не вдалося оновити:

* повернути попередній стан icon;
* показати error message;
* не змінювати counters;
* не прибирати книгу зі списку.

Error message:

```text id="yiio1q"
Не вдалося оновити улюблене
```

Example:

```text id="zuzh4f"
Було: isFavorite = false
Користувач натиснув heart
UI показав filled heart
Сталася помилка
UI повернув outline heart
```

---
