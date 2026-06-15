# Summary Calculation Rules

## Active delivery count

```ts
count where book.ownershipStatus === "in_transit" &&
(delivery.status === "ordered" || delivery.status === "in_transit")
```

## Expected this week

Count active deliveries where `expectedDeliveryDate` is within current calendar week.

Records without expected date are excluded.

## Delayed

Count active deliveries where:

```text
expectedDeliveryDate < today
```

## Active total price

Sum `price` for active deliveries.

If multiple currencies exist, group by currency.

No auto-conversion in MVP.

## Unique stores

Count unique normalized `storeName` among active deliveries.

Trim spaces before grouping.

## Order history totals

All orders count:

```text
ordered + in_transit + received + cancelled
```

Main amount excludes cancelled by default.

## Expense statistics main total

```text
ordered + in_transit + received
```

Cancelled is shown separately unless user enables include-cancelled toggle.
