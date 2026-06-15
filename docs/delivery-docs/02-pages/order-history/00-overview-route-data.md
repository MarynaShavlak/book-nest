# Order History: Overview, Route, Data

## Route

```text
/delivery/history
```

Navigation label:

```text
Історія замовлень
```

## Data source

Show all current user's delivery records:

```text
ordered
in_transit
received
cancelled
```

Join with Book data for title, author, cover, and deleted-book fallback.

## Record groups

| Group | delivery.status |
| --- | --- |
| Активні | `ordered`, `in_transit` |
| Отримані | `received` |
| Скасовані | `cancelled` |

## Important rule

Order History includes active records, but active delivery management stays primarily on Books in Transit page.
