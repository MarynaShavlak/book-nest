# Expense Statistics: Overview, Route, Data

## Route

```text
/delivery/statistics
```

Navigation label:

```text
Статистика витрат
```

## Data source

Use delivery records where:

```text
price exists
price >= 0
```

Records without price are excluded from money totals, but can be counted separately as orders without price.

## Included statuses

| delivery.status | Include in statistics | Include in main total by default |
| --- | --- | --- |
| `ordered` | yes | yes |
| `in_transit` | yes | yes |
| `received` | yes | yes |
| `cancelled` | yes | no |

Cancelled orders are visible but excluded from main total by default.
