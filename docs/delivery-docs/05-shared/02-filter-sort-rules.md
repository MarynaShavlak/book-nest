# Filter and Sort Rules

## Active delivery filters

| Filter | Rule |
| --- | --- |
| all | all active deliveries |
| ordered | `delivery.status = ordered` |
| in_transit | `delivery.status = in_transit` |
| arriving_soon | calculated UI status = `arriving_soon` |
| this_week | expected date within current week |
| delayed | calculated UI status = `delayed` |
| no_delivery_date | expected date empty |
| has_tracking_number | tracking number exists |
| without_tracking_number | tracking number empty |
| has_tracking_url | tracking URL exists |
| without_tracking_url | tracking URL empty |
| has_price | price exists |
| without_price | price empty |

## Default active sorting

```text
Найближча доставка
```

Rules:

1. Records with expected date first.
2. Closest date first.
3. Records without expected date after dated records.
4. If same expected date, newest order date first.

## History sorting

Default:

```text
Новіші замовлення
```

Use `orderDate` descending.

## Statistics filtering

Statistics filters must affect:

- summary cards;
- charts;
- top orders;
- store breakdown;
- status breakdown.
