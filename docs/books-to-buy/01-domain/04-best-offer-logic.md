# Best Offer Logic

## Purpose

Best offer helps the user quickly identify the lowest known price for a book.

## Calculation per book

Best offer is the lowest valid price among the book's store links.

```ts
const bestOffer = min(
  storeLinks
    .filter((link) => link.price != null)
    .map((link) => link.price)
);
```

## Rules

- Ignore links without price.
- Ignore invalid prices.
- Compare prices only within the same currency.
- Default currency is `UAH`.
- Do not auto-convert currencies in MVP.
- If multiple currencies exist, calculate best offer per selected currency or show grouped values.

## Example

```text
Yakaboo — 420 грн
Книгарня Є — 389 грн
Vivat — 575 грн
```

Best offer:

```text
Книгарня Є — 389 грн
```

## Page-level best offer

The right sidebar can show the lowest best offer across all wishlist books.

Calculation:

```text
min(book.bestOfferPrice) across visible wishlist books
```

## Average price

Average price uses each book's best offer, not every link price.

Reason:

```text
If a book has 3 store links, it should still count as 1 planned purchase.
```

Calculation:

```text
sum(book.bestOfferPrice) / count(books with bestOfferPrice)
```
