# Data Model / View Model

> Source: `favorites-page.md §16`

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
