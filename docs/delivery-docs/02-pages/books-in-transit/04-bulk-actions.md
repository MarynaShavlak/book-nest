# Books in Transit: Bulk Actions

Bulk actions are part of MVP.

## Selection mode

Entry points:

```text
Checkbox on delivery card
Select all checkbox
Bulk actions toolbar
```

When at least one item is selected, show:

```text
Вибрано 3 книги
[Позначити як отримані]
[Скасувати вибір]
```

## Bulk mark selected as received

Flow:

1. User selects active delivery cards.
2. User clicks `Позначити як отримані`.
3. Confirmation modal opens.
4. User confirms.
5. Selected books become `owned`.
6. Selected deliveries become `received`.
7. `receivedAt` is set.
8. Cards disappear from Books in Transit.
9. Records remain in Order History and Expense Statistics.

## Bulk mark all as received

This action applies to all active deliveries in the selected scope.

Recommended MVP scope:

```text
all currently visible / filtered active deliveries
```

Always require confirmation.

## Bulk safety

Do not update records that are:

- already received;
- cancelled;
- not active;
- not owned by current user.
