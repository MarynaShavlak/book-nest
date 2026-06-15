# Cancel Delivery Order: Submit and Data Updates

## Submit flow

1. Confirm action.
2. Re-check delivery is still active.
3. Update delivery record.
4. Update book ownership based on checkbox.
5. Refresh related pages.

## Delivery update

```ts
delivery.status = "cancelled";
delivery.cancelledAt = now;
delivery.cancelReason = values.cancelReason ?? null;
delivery.updatedAt = now;
```

## Book ownership update

If user keeps book in wishlist:

```ts
book.ownershipStatus = "want_to_buy";
```

If user does not keep book in wishlist:

```ts
book.ownershipStatus = "none";
```

## What does not change

Do not change:

- reading status;
- rating;
- notes;
- quotes;
- series;
- lists;
- favorite state.
