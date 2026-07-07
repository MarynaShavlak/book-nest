# Quote Entity

## TypeScript model

```ts
type Quote = {
  id: string;
  userId: string;
  bookId: string;

  text: string;
  chapter?: string;
  page?: number;
  comment?: string;

  isSpoiler: boolean;
  isFavorite: boolean;

  characterId?: string;
  authorId?: string;
  seriesId?: string;

  createdAt: string;
  updatedAt: string;
};
```

## Required fields

```ts
id: string;
userId: string;
bookId: string;
text: string;
isSpoiler: boolean;
isFavorite: boolean;
createdAt: string;
```

## Optional fields

```ts
chapter?: string;
page?: number;
comment?: string;
updatedAt?: string;
```

Future-only fields:

```ts
characterId?: string;
authorId?: string;
seriesId?: string;
```

These relations must not be required for MVP.

## Ownership and permissions

A quote belongs to one user and one book.

A user must only see and edit their own quotes.

Quotes must be filtered by `userId` in all list queries.

## Book relation

For MVP, quote is connected only to book:

```ts
quote.bookId === book.id
```

If the book is deleted, quotes should either be:

1. deleted together with the book; or
2. blocked from display as orphan records.

Recommended MVP behaviour: delete quotes with the book or handle it in the same cascade-like cleanup flow.
