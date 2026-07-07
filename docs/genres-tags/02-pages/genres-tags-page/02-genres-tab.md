# Genres Tab

## Purpose

The `Genres` tab shows predefined genres that are currently used in the user's library.

Genres are not created manually by users in MVP. A genre appears on this page only when at least one user book has this genre selected.

## Main behavior

The tab should help users answer:

- which genres they read most often;
- how many books they have in each genre;
- how many books they already read in each genre;
- how many books from each genre are in the reading queue;
- which genre has the highest average rating;
- which books are inside a specific genre.

## Genre card structure

Each genre should be displayed as a card.

Recommended card content:

```text
Genre Card
├─ Genre icon
├─ Genre name
├─ Total books count
├─ Read books count
├─ Queue books count
├─ Average rating
├─ Reading progress bar
├─ Cover preview
│  ├─ Cover 1
│  ├─ Cover 2
│  ├─ Cover 3
│  └─ +N overflow
└─ Click action to filtered My Library
```

## Required card fields

| Field | Required | Description |
| ----- | -------- | ----------- |
| `genreId` | yes | Predefined genre id |
| `label` | yes | Localized genre name |
| `icon` | no | Genre icon from predefined genre dictionary |
| `totalBooksCount` | yes | Number of user's books with this genre |
| `readBooksCount` | yes | Number of finished books in this genre |
| `queueBooksCount` | no | Number of books from this genre in reading queue |
| `averageRating` | no | Average rating for rated books in this genre |
| `coverPreview` | no | First 3–4 book covers from this genre |

Recommended type:

```ts
export type GenreCardItem = {
  genreId: string;
  label: string;
  icon?: string | null;
  totalBooksCount: number;
  readBooksCount: number;
  queueBooksCount: number;
  averageRating: number | null;
  coverPreview: Array<{
    bookId: string;
    title: string;
    coverUrl?: string | null;
  }>;
  hiddenBooksCount: number;
};
```

## Reading progress

A genre card may show reading progress:

```text
18 прочитано з 42
```

Recommended formula:

```ts
const progressPercent = totalBooksCount > 0
  ? Math.round((readBooksCount / totalBooksCount) * 100)
  : 0;
```

Display options:

- text only;
- progress bar;
- text + progress bar.

For MVP, text + small progress bar is recommended.

## Queue count

A genre card may show how many books from this genre are currently in the reading queue.

Example:

```text
82 прочитано · 46 у черзі
```

Rules:

- `queueBooksCount` is calculated from user's reading queue.
- Count only books that have this genre.
- If `queueBooksCount = 0`, the UI may hide this part to reduce noise.

This connects the `Genres / Tags` page with the Reading Queue feature.

## Average rating

A genre card may show average rating for books in this genre.

Rules:

- Count only books that have a user rating.
- Ignore books without rating.
- If there are no rated books, hide rating or show `—`.
- Display rating with one decimal digit.

Example:

```text
★ 4.6
```

## Cover preview

A genre card may show first 3–4 book covers from this genre.

Recommended behavior:

- Show up to 3 or 4 covers depending on card width.
- If there are more books, show overflow counter.
- If a book has no cover, show a small fallback cover placeholder.

Example:

```text
[cover] [cover] [cover] [+25]
```

Cover preview sorting recommendation:

1. books currently reading;
2. books in reading queue;
3. recently added books;
4. highest rated books.

For MVP, recently added books are enough.

## Show all genres behavior

By default, the page may show only the most popular genres.

Recommended collapsed state:

```text
Show first 8 genres
```

Button:

```text
Показати всі жанри (24)
```

Expanded behavior:

- show all used genres;
- button text changes to `Показати менше`;
- user can collapse the list back.

## Empty state

If the user has books but none of them have genres:

```text
У ваших книгах ще немає жанрів.
Додайте жанри під час створення або редагування книги, щоб швидше знаходити книги за настроєм і категорією.
```

Action:

```text
Перейти до бібліотеки
```

## Click behavior

Clicking on a genre card opens My Library with genre filter applied.

Example route:

```text
/my-library?genre=fantasy
```

If the app uses filter state instead of URL query params, the same behavior should be preserved through app state.

## What is not allowed in MVP

- User cannot create a new genre.
- User cannot edit genre name.
- User cannot delete genre.
- User cannot merge genres.
- User cannot assign custom genre color.

## Acceptance criteria

- Genres tab shows only genres used in current user's books.
- Genre cards show genre name and total books count.
- Genre cards can show read count, queue count, average rating, progress bar, and cover preview.
- Clicking a genre opens My Library filtered by this genre.
- Empty state explains that genres are selected inside books.
- There is no `Add Genre` action.
- `Show all genres` expands the full list when there are many genres.
