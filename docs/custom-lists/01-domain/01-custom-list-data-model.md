# Custom List Data Model

## Core entities

Recommended domain shape:

```ts
type CustomList = {
  id: string;
  userId: string;
  title: string;
  description?: string;
  icon?: string;
  color?: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
};

type CustomListBook = {
  id: string;
  userId: string;
  listId: string;
  bookId: string;
  position: number;
  addedAt: string;
};
```

## Why membership should be separate

A book can be in multiple custom lists, and a list can contain many books.  
Because of that, the relation should be modeled as a separate membership entity or nested collection.

## Stable rules

- A custom list belongs to one user.
- A custom list can exist with zero books.
- A book can be connected to many lists.
- A book cannot appear twice in the same list.
- Deleting a custom list removes only list membership links, not the books.
- Removing a book from a list removes only the membership link.
