# Query and Filtering Logic

## Fetch strategy

MVP can fetch books and derive dedications on frontend.

```ts
const booksWithDedications = books.filter(book => Boolean(book.authorDedication?.trim()));
```

Full version can have backend endpoint:

```txt
GET /dedications
```

or Firebase query abstraction.

---

## Frontend filtering pipeline

Recommended order:

```txt
1. base list: books with dedication
2. search filter
3. main filter chip
4. genre filter
5. sort
6. pagination
```

---

## Search matching

Normalize:

```ts
const normalize = (value: string) => value.toLowerCase().trim();
```

Search fields:

```ts
[
  dedication.text,
  book.title,
  book.originalTitle,
  authorNames.join(' '),
  genreNames.join(' '),
  tagNames.join(' '),
]
```

---

## Sorting

```ts
type DedicationSort =
  | 'newest'
  | 'recently_updated'
  | 'book_title_asc'
  | 'author_asc'
  | 'favorites_first'
  | 'publication_year_desc';
```

---

## URL query params

```ts
type DedicationsQueryParams = {
  search?: string;
  filter?: 'all' | 'favorites' | 'finished' | 'unfinished';
  genreId?: string;
  sort?: DedicationSort;
  page?: number;
};
```
