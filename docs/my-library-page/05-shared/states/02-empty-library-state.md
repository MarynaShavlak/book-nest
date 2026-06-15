### 14.3. Empty library state

Empty library state показується, якщо в користувача ще немає жодної активної книги.

When to show:

```text
totalBooks = 0
search is empty
filters are empty
quickFilter is empty
```

Message:

```text
Твоя бібліотека поки порожня
```

Description:

```text
Додай першу книгу, щоб почати збирати свою читацьку колекцію.
```

Primary action:

```text
+ Додати книгу
```

Behavior:

* кнопка веде на `/books/create`;
* цей state не показується, якщо книги є, але вони приховані через search або filters;
* видалені книги не враховуються.

---
