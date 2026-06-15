# Expense Statistics: Charts, Breakdowns, Top Orders

## Monthly spending chart

Use `orderDate` to group by month.

Each month should show totals by currency.

If multiple currencies exist, either:

- render grouped bars/lines per currency;
- or show separate totals per currency in tooltip/list.

No auto-conversion in MVP.

## Orders count by month

Count records by `orderDate` month.

Can include records without price.

## Spending by store

Group priced records by `storeName`.

Show:

- store name;
- total amount;
- order count;
- percentage of total.

## Status breakdown

Group by:

```text
active
received
cancelled
```

Active means:

```text
ordered + in_transit
```

## Top expensive orders

Show the highest-priced records.

Each item should include:

- book title;
- store name;
- order date;
- price/currency;
- status.
