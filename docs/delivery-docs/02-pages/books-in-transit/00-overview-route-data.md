# Books in Transit: Overview, Route, Data

## Route

```text
/delivery/in-transit
```

Navigation label:

```text
Книги в дорозі
```

## Access

Only authenticated users can access this page.

If user is not authenticated, redirect to login.

## Data source

This page uses two data sources:

```text
Book
BookDelivery
```

Book fields used:

- `id`;
- `title`;
- `author`;
- `coverUrl`;
- `publisher`;
- `genres`;
- `tags`;
- `ownershipStatus`;
- `readingStatus`;
- `series` info, if exists.

Delivery fields used:

- all active delivery fields;
- `status`;
- `createdAt`;
- `updatedAt`.

## Active delivery condition

```ts
book.ownershipStatus === "in_transit" &&
(delivery.status === "ordered" || delivery.status === "in_transit")
```

Do not show received or cancelled records on this page.
