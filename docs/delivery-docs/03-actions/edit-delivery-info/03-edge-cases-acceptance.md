# Edit Delivery Info: Edge Cases and Acceptance

## Edge cases

If delivery was received while modal is open:

```text
This delivery was already marked as received.
```

Close modal and refresh data.

If delivery was cancelled while modal is open:

```text
This delivery was cancelled.
```

Close modal and refresh data.

If current filter no longer matches after save, the card may disappear from current filtered view.

## Error behavior

Show field-level errors for validation.

Show general error for save failure.

## Acceptance criteria

- Action appears only for active deliveries.
- Editable fields are prefilled.
- Received/cancelled records cannot be edited.
- Save updates only delivery fields.
- `updatedAt` changes after save.
- Related pages reflect updated values.
- Stale data is handled safely.
