# Mark Book as Received: Bulk Selected Action

## Scope

Only selected active delivery records.

Allowed records:

```ts
book.ownershipStatus === "in_transit" &&
(delivery.status === "ordered" || delivery.status === "in_transit")
```

## Flow

1. User selects cards.
2. User clicks `Позначити як отримані`.
3. Confirmation modal opens.
4. User confirms.
5. Each selected active book becomes `owned`.
6. Each selected delivery becomes `received`.
7. `receivedAt` is set for each record.

## Partial success

If some records cannot be updated, show:

```text
3 книги позначено як отримані, 1 не вдалося оновити.
```

Refresh data after action.
