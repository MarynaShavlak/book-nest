# Book Store Link Model

## Purpose

`BookStoreLink` stores a user's link to a store page where the book can be bought.

A single book can have many store links.

Example:

```text
Yakaboo — 420 грн
Книгарня Є — 389 грн
Vivat — 575 грн
```

## Model

```ts
export type BookStoreLink = {
  id: string;
  userId: string;
  bookId: string;

  storeName: string;
  url: string;

  price?: number | null;
  currency?: "UAH" | "USD" | "EUR" | null;

  createdAt: string;
  updatedAt: string;
};
```

## Ownership rules

- Store link belongs to one user.
- Store link belongs to one book.
- Store link is visible only to its owner.
- Store links are not public.
- Store links are not shared across users.

## Relation rules

One book can have multiple links:

```text
Book 1 → many BookStoreLinks
```

A link cannot exist without:

```text
userId
bookId
storeName
url
```

## Best offer

Do not store `isBestOffer` as required source of truth.

Best offer should be calculated from prices:

```ts
bestOffer = min(storeLinks.price)
```

Optional cached field can be added later for performance, but the calculation remains the source of truth.
