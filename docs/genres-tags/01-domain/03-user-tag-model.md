# User Tag Model

## Main idea

Tags are created manually by the user.

Important:

```text
There are no predefined tags.
Only tags created by the current user appear in tag autocomplete and on the Tags tab.
```

## Tag type

```ts
export type TagType =
  | "trope"
  | "atmosphere"
  | "theme"
  | "character"
  | "format"
  | "custom";
```

## UserTag entity

```ts
export type UserTag = {
  id: string;
  userId: string;

  name: string;
  normalizedName: string;
  type: TagType;

  color?: string | null;
  description?: string | null;

  createdAt: string;
  updatedAt: string;
  lastUsedAt?: string | null;
};
```

## Book tag relation

Recommended MVP option:

```ts
export type Book = {
  id: string;
  userId: string;
  tagIds: string[];
};
```

Alternative string-array option:

```ts
export type Book = {
  id: string;
  userId: string;
  tags: string[];
};
```

Recommended final rule:

```text
Use tagIds if UserTag entity exists.
This makes rename/delete safer than storing plain strings on books.
```

## Tag stats item

```ts
export type TagStatsItem = {
  id: string;
  name: string;
  normalizedName: string;
  type: TagType;
  booksCount: number;
  lastUsedAt?: string | null;
  color?: string | null;
};
```

## Visibility

A tag appears on Tags tab if:

```ts
tag.userId === currentUser.id
```

Tags with `booksCount = 0` can be shown in management view or with filter **Теги без книг**.
