# Summary Calculation Rules

## Counts

- `seriesCount`: number of series created by the user.
- `booksInSeriesCount`: number of books with a valid `seriesId`.
- `finishedSeriesCount`: series where all known real books are finished.
- `unfinishedSeriesCount`: series with at least one known real book not finished.

## Progress

Use one shared helper for progress:

```ts
progressPercent = finishedBooksCount / denominator * 100
```

The denominator depends on the chosen MVP rule:

- If `totalBooksCount` exists, use it for planned progress.
- If it does not exist, use the number of known real books.

## Next book

Use one shared helper based on ordered books and reading status. Do not recalculate differently per page.
