# Books to Buy Module Map

## Module responsibility

Books to Buy module owns the wishlist purchase experience:

- showing all books with `ownershipStatus = want_to_buy`;
- adding, editing and deleting store links;
- calculating best offers;
- searching, filtering and sorting wishlist books;
- marking a book as bought;
- removing a book from the shopping list;
- integrating with Delivery module when the user marks a book as in transit.

## Not responsible for

This module does not own:

- full Book CRUD;
- full Book Details UI;
- full Delivery business logic;
- actual spending statistics from delivery records;
- automatic price tracking;
- store API integrations.

## Key entities

```text
Book
BookStoreLink
Derived wishlist data
```

## Key statuses

A book appears on this page only when:

```ts
ownershipStatus === "want_to_buy"
```

After mark as bought:

```ts
ownershipStatus = "owned"
```

After move to delivery:

```ts
ownershipStatus = "in_transit"
```

After removing from shopping list:

```ts
ownershipStatus = "none"
```

## User flows

| Flow | Doc |
| ---- | --- |
| View wishlist page | `02-pages/books-to-buy-page/` |
| Add store link | `03-actions/add-store-link/` |
| Edit store link | `03-actions/edit-store-link/` |
| Delete store link | `03-actions/delete-store-link/` |
| Mark as bought | `03-actions/mark-as-bought/` |
| Remove from shopping list | `03-actions/remove-from-shopping-list/` |
| Move to delivery | `04-integrations/03-delivery-integration-contract.md` |

## Cross-feature contracts

| Feature | Contract |
| ------- | -------- |
| Book Details | shows purchase block/actions for current book |
| Book Form | can set `ownershipStatus = want_to_buy` |
| Delivery | handles `want_to_buy → in_transit` |
| My Library | filters by ownership status |
| Dashboard | can show wishlist summary |
| Statistics | can use wishlist estimate separately from actual spending |
