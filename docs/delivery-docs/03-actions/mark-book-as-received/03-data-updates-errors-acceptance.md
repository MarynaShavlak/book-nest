# Mark Book as Received: Data Updates, Errors, Acceptance

## Data updates

For each valid record:

```ts
book.ownershipStatus = "owned";
delivery.status = "received";
delivery.receivedAt = receivedDate || now;
delivery.updatedAt = now;
```

## Cross-feature updates

- Books in Transit: card disappears.
- Book Details: delivery block becomes history/received state.
- My Library: ownership shows `owned`.
- Order History: record stays visible as received.
- Expense Statistics: record moves from active spending to received spending.
- Dashboard: active delivery count decreases.

## Error behavior

Possible errors:

```text
Delivery already received
Delivery cancelled
Delivery not found
Book not found
Permission denied
Update failed
```

## Acceptance criteria

- Single action works for active deliveries only.
- Bulk selected works only for selected active records.
- Bulk all requires confirmation.
- Received records are removed from active list.
- Historical record is preserved.
- Partial success is handled safely.
