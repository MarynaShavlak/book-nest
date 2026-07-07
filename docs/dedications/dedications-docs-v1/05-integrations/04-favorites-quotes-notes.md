# Integration with Favorites, Quotes and Notes

## Favorites

Book favorite and dedication favorite are separate.

```ts
book.isFavorite
book.isFavoriteDedication
```

Do not automatically favorite a book when dedication is favorited.

### Critical separation rule

The Dedications feature must not reuse the same favorite action as book favorite without explicit separation.

Book favorite controls whether the book appears in the user’s favorite books. Dedication favorite controls only whether the dedication appears in the “Улюблені присвяти” filter and dedication statistics.

```txt
book.isFavorite = favorite book
book.isFavoriteDedication = favorite dedication
```

Required behavior:

```txt
Toggle dedication heart -> changes only isFavoriteDedication
Toggle book heart -> changes only isFavorite
Favorites page for books -> uses isFavorite
Dedications page favorite filter -> uses isFavoriteDedication
```

Do not merge these states in UI, API, query params, filters, or analytics.

---


## Quotes

Dedications are not quotes.

Do not show dedications on Quotes page unless there is a special filter:

```txt
Include dedications
```

Recommended MVP: keep separate.

---

## Notes

Dedications are not user notes.

A user may create a note about a dedication later, but this is not MVP.

Possible future action:

```txt
Додати нотатку про присвяту
```

---

## Statistics

Dedications can be included in general statistics as a small metric:

```txt
Усього присвят
Улюблених присвят
```

This is optional.
