# Books to Buy Module

## Purpose

`docs/books-to-buy/` describes the BookNest module for books that the user wants to buy.

The module works as a personal purchase wishlist. A book appears on the page when it has:

```ts
ownershipStatus === "want_to_buy"
```

The user can save store links, compare prices, mark a book as bought, remove it from the shopping list, or move it into delivery flow.

## Main flow

```text
Хочу купити → Маю
```

If Delivery module is enabled:

```text
Хочу купити → В дорозі → Маю
```

## Core docs

Start from:

```text
00-module-map.md
01-implementation-order.md
01-domain/00-purpose-and-scope.md
02-pages/books-to-buy-page/00-overview-route-data.md
03-actions/mark-as-bought/00-entry-confirmation.md
```

## Important rules

- `ebook` and `audiobook` are formats, not ownership statuses.
- Books to Buy Page shows only books with `ownershipStatus = want_to_buy`.
- Store links belong to the current user.
- Best offer is calculated from store links, not stored as required data.
- Mark as bought does not delete the book.
- Removing from shopping list does not delete the book.
