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

## Tag color

Tags do not store arbitrary custom colors.

In MVP, each tag uses one semantic color key from the predefined BookNest tag color palette.

```ts
export type TagColor =
  | "parchment"
  | "terracotta"
  | "honey"
  | "sage"
  | "forest"
  | "sky"
  | "lavender"
  | "rose";
```

Default value:

```ts
color = "parchment";
```

See:

```text
01-domain/08-tag-color-palette.md
```

## UserTag entity

```ts
export type UserTag = {
  id: string;
  userId: string;
  name: string;
  normalizedName: string;
  type: TagType;
  color: TagColor;
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
  color: TagColor;
};
```

## Visibility

A tag appears on Tags tab if:

```ts
tag.userId === currentUser.id;
```

Tags with `booksCount = 0` can be shown in management view or with filter **Теги без книг**.

## Fallback rule for old data

If an old tag does not have a color value, the UI should resolve it as:

```ts
color = "parchment";
```

If a stored color value is invalid, UI rendering should fallback to `parchment`, but Add/Edit forms should not allow saving unsupported values.
