# UserProfileStats Model

## Type

```ts
type UserProfileStats = {
  userId: string;

  totalBooks: number;
  readBooks: number;
  currentlyReading: number;
  favoriteBooks: number;

  notesCount: number;
  quotesCount: number;

  averageRating?: number;
};
```

## Displayed statistics

- total books;
- read books;
- currently reading;
- favorite books;
- notes count;
- quotes count.

## Empty state

If user has no books yet:

```text
Статистика з’явиться після додавання книг.
```

## Source of truth

Stats are calculated from other modules:

- library;
- reading statuses;
- favorites;
- notes;
- quotes;
- ratings.
