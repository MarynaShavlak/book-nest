# Cancel Delivery Order: Edge Cases and Acceptance

## Edge cases

If delivery is already received:

```text
This delivery was already received and cannot be cancelled.
```

If delivery is already cancelled:

```text
This delivery was already cancelled.
```

If book ownership changed while modal was open, refresh and show current state.

## Cross-feature updates

- Books in Transit: card disappears.
- Books to Buy: card appears if user kept it in wishlist.
- Book Details: no active delivery block; history may show cancelled record.
- My Library: ownership becomes `want_to_buy` or `none`.
- Order History: record appears as cancelled.
- Expense Statistics: cancelled price is shown separately, excluded from main total by default.

## Acceptance criteria

- Cancel action appears only for active deliveries.
- Confirmation is required.
- User can choose whether to keep book in wishlist.
- Cancel reason is optional.
- Active delivery is closed as `cancelled`.
- Historical record is preserved.
- Cancelled orders are not shown on Books in Transit.
