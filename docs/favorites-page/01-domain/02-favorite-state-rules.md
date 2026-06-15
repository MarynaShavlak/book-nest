# Favorite State Rules

> Source: `favorite-book-toggle.md §2-3`

## 2. Main logic

Книга може бути:

```text id="aggau6"
isFavorite = true
```

або:

```text id="5df3m7"
isFavorite = false
```

Логіка перемикання:

| Current value | User action           | New value |
| ------------- | --------------------- | --------- |
| `false`       | Add to favorites      | `true`    |
| `true`        | Remove from favorites | `false`   |

---

## 3. What is not included

Ця фіча не змінює:

* `readingStatus`;
* `ownershipStatus`;
* `formats`;
* `currentPage`;
* `progressPercent`;
* series data;
* purchase / delivery / loan data.

Important:

```text id="kkclg4"
Улюблена книга ≠ прочитана книга
Улюблена книга ≠ книга, яка є у користувача
Улюблена книга ≠ книга у списку покупок
```

Користувач може додати в улюблені будь-яку книгу зі своєї бібліотеки незалежно від її статусів.

---
