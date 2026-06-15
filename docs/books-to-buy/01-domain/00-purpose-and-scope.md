# Purpose and Scope

## Purpose

Books to Buy module is a personal wishlist for books the user plans to buy.

A book belongs to this module when:

```ts
book.ownershipStatus === "want_to_buy"
```

The page helps the user:

- keep purchase wishlist in one place;
- save store links;
- compare prices;
- find best offers;
- mark books as bought;
- move ordered books into Delivery module.

## Core flow

```text
Хочу купити → Маю
```

Optional delivery flow:

```text
Хочу купити → В дорозі → Маю
```

## Included in module

- Books to Buy Page.
- Store links.
- Best offer calculation.
- Mark as bought.
- Remove from shopping list.
- Search, filters and sorting.
- Right sidebar summary.
- Delivery integration contract.

## Not included

- Automatic price parsing.
- Price history.
- Discount notifications.
- Shared wishlist.
- Payment/refund flow.
- Actual spending statistics.
- Multiple books in one order.

Actual spending belongs to Delivery Expense Statistics and uses delivery records, not wishlist links.
