# Book Details Integration Contract

## Requirement

Book Details page must show quotes connected to current book.

## Data needed

Book Details should receive or fetch:

```ts
type BookDetailsQuotesData = {
  book: Book;
  quotes: Quote[];
};
```

Quotes must be filtered by:

```ts
quote.bookId === book.id
```

and current user.

## UI block

Add block:

```text
Цитати з книги
```

## Display summary

Show:

```text
N цитат
M улюблених
K зі спойлерами
```

This summary is optional for MVP but recommended.

## Primary action

```text
+ Додати цитату
```

## Secondary actions

```text
Переглянути всі цитати книги
```

Available only if standalone Quotes page / filtered Quotes page exists.

## Quote card actions

From Book Details quote card user can:

- show/hide spoiler;
- add/remove favorite;
- edit quote;
- delete quote.

## Empty state

If no quotes:

```text
У цій книзі ще немає цитат
```

Action:

```text
+ Додати цитату
```

## Route to all quotes for book

Recommended route:

```text
/quotes?bookId={bookId}
```

or:

```text
/books/{bookId}/quotes
```

For consistency with global archive, recommended:

```text
/quotes?bookId={bookId}
```
