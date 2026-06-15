# Mark Book as In Transit: Errors and Acceptance

## Loading behavior

Disable submit button and show loading state while saving.

## Error behavior

Possible errors:

```text
Required field missing
Invalid date
Invalid URL
Invalid price
Duplicate active delivery
Book not found
Permission denied
Save failed
```

## Cross-feature updates

After success:

- Books to Buy: remove card if it was there.
- Books in Transit: add active delivery card.
- Book Details: show delivery block.
- My Library: show ownership `in_transit`.
- Dashboard: update delivery widgets.
- Order History: add record.
- Expense Statistics: include price if provided.

## Acceptance criteria

- Action appears only for eligible ownership statuses.
- Modal contains required and optional delivery fields.
- Required fields are validated.
- Duplicate active delivery is blocked.
- Book ownership becomes `in_transit`.
- New delivery status is `ordered`.
- No unrelated book data is changed.
