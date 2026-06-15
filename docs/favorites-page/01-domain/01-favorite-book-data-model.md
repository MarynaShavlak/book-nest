# Favorite Book Data Model

> Source: `favorites-page.md §16 + favorite-book-toggle.md §2`

## 16. Data model / View model

---

### 16.1. Book model fields

```ts
type Book = {
  id: string;
  userId: string;

  title: string;
  originalTitle?: string;
  authorName: string;
  publisherName?: string;
  coverUrl?: string;

  isFavorite: boolean;
  favoriteAddedAt?: string | null;

  rating?: number;
  readingStatus: ReadingStatus;
  ownershipStatus: OwnershipStatus;
  formats: BookFormat[];

  genreIds: string[];
  tagIds: string[];
  seriesId?: string | null;

  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
};
```

---

### 16.2. Favorite book item view model

```ts
type FavoriteBookItem = {
  id: string;
  title: string;
  originalTitle?: string;
  authorName: string;
  publisherName?: string;
  coverUrl?: string;

  genres: string[];
  tags: string[];

  rating?: number;
  readingStatus: ReadingStatus;
  ownershipStatus: OwnershipStatus;
  formats: BookFormat[];

  isFavorite: true;
  favoriteAddedAt?: string | null;
};
```

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
