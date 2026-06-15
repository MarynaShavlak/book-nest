# Book Details Page — Route and Access

> Source: book-details-page.md lines 58-130

---

## 3. Route and access

Recommended route:

```text
/books/:bookId
```

Example:

```text
/books/book_123
```

### Access rules

Сторінка доступна тільки авторизованому користувачу.

Користувач може відкрити тільки ті книги, які належать йому.

Backend має перевіряти:

* чи існує книга;
* чи книга належить поточному користувачу;
* чи книга не видалена;
* чи користувач має доступ до цієї книги.

### Deleted book behavior

Якщо книга має `deletedAt`, вона не має відкриватися як активна сторінка деталей.

Recommended behavior:

```text
404 Not Found
```

### Not found behavior

Якщо книга не існує або була видалена, показати state:

```text
Книгу не знайдено
```

Action:

```text
Повернутися до бібліотеки
```

### Forbidden behavior

Якщо книга існує, але не належить поточному користувачу, backend має повернути:

```text
403 Forbidden
```

У UI показати generic error state без деталей чужої книги.

### API endpoint

Recommended endpoint:

```http
GET /books/:bookId
```

Endpoint має повертати повну інформацію про книгу, потрібну для першого рендеру сторінки деталей.

Повні списки нотаток, цитат, персонажів або історії прогресу можуть завантажуватися окремими endpoint-ами.
