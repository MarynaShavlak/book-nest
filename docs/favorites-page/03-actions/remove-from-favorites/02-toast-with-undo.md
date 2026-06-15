# Toast with Undo

> Source: `favorites-page.md §13.4`

### 13.4. Toast with Undo

Після remove показати toast:

```text
Книгу прибрано з улюблених
```

Toast action:

```text
Скасувати
```

Undo behavior:

```text
isFavorite: false → true
favoriteAddedAt = currentDate
```

Result:

- книга повертається на сторінку **Улюблені книги**;
- count і summary cards оновлюються;
- active filters залишаються.

---
