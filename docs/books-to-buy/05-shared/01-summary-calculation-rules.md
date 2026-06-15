# Summary Calculation Rules

## Books count

```text
count books where ownershipStatus = want_to_buy
```

## Stores count

```text
unique storeName across visible wishlist books
```

## Best offer per book

```text
lowest valid price among that book's store links
```

## Average price

Use one price per book: the best offer.

```text
sum(bestOfferPrice) / count(books with bestOfferPrice)
```

Do not average every store link, because one book can have many links.

## Wishlist estimate

```text
sum(bestOfferPrice) across wishlist books
```

This is planned/estimated spending, not actual spending.

## Multiple currencies

- group totals by currency;
- default currency is `UAH`;
- do not auto-convert currencies in MVP.
