# Genre Model

## Genre dictionary

Genres are predefined app-level values.

Recommended model:

```ts
export type Genre = {
  id: string;
  value: string;
  label: string;
  icon?: string;
  group?: "fiction" | "non_fiction" | "children" | "other";
};
```

Example:

```ts
export const BOOK_GENRES: Genre[] = [
  { id: "fantasy", value: "fantasy", label: "Фентезі", icon: "sword", group: "fiction" },
  { id: "romance", value: "romance", label: "Романтика", icon: "heart", group: "fiction" },
  { id: "detective", value: "detective", label: "Детектив", icon: "magnifier", group: "fiction" },
  { id: "non_fiction", value: "non_fiction", label: "Нон-фікшн", icon: "book-open", group: "non_fiction" }
];
```

## Book field

For MVP, book can store genre values:

```ts
export type Book = {
  id: string;
  userId: string;
  title: string;
  genres: string[];
};
```

## Genre aggregation item

```ts
export type GenreStatsItem = {
  value: string;
  label: string;
  icon?: string;
  booksCount: number;
  readCount: number;
  readingQueueCount: number;
  wantToBuyCount: number;
  averageRating?: number | null;
  coverUrls: string[];
};
```

## Rules

- genre stats are calculated from user's books;
- genre card appears only if user has at least one book with this genre;
- predefined genre can exist in dictionary but not be shown if unused, unless filter “Усі жанри” is added later;
- user cannot edit/delete predefined genres in MVP.
