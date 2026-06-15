# Books in Transit: Donut Chart, Sidebar, Navigation

## Donut chart

Purpose:

- show distribution of active deliveries;
- highlight delayed and soon deliveries;
- give quick visual overview.

Recommended segments:

| Segment | Source |
| --- | --- |
| Очікуються скоро | calculated `arriving_soon` |
| Затримуються | calculated `delayed` |
| Без дати доставки | calculated `no_delivery_date` |
| В дорозі | stored `in_transit`, when no higher priority UI status |
| Замовлено | stored `ordered`, when no higher priority UI status |

One delivery record must belong to only one segment.

## Right sidebar

Recommended blocks:

```text
Delivery overview
Quick actions
Expense summary
Order history link
Helper tip
```

## Navigation links

Show quick links to:

```text
Delivery Order History
Delivery Expense Statistics
Books to Buy
```

## Dashboard connection

Dashboard may show a small widget:

```text
5 книг в дорозі
1 затримується
```

The full management stays on this page.
