# Favorite Toggle Overview

> Source: `favorite-book-toggle.md §1-3`

## 1. Purpose

Feature **Favorite Toggle** дозволяє користувачу швидко додавати книгу в улюблені або прибирати її з улюблених.

Фіча працює через boolean-поле:

```text id="n3pc5d"
isFavorite: false ↔ true
```

Це не окремий статус книги, а швидка персональна позначка користувача.

---

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
