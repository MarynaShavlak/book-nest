# Expense Statistics: Spending, Currency, Date Rules

## Main spending rule

Recommended MVP rule:

```text
Main total = active orders + received orders
```

Where active orders are:

```text
ordered / in_transit
```

Completed orders are:

```text
received
```

Excluded by default:

```text
cancelled
```

## Currency logic

Default currency:

```text
UAH
```

If price exists and currency is empty:

```ts
currency = "UAH";
```

No automatic currency conversion in MVP.

If multiple currencies exist, show grouped totals:

```text
8 450 грн
120 $
45 €
```

## Date logic

Monthly statistics use:

```text
orderDate
```

Reason: the spending belongs to the order moment, not the received moment.

Example:

```text
orderDate = 12.06.2026
receivedAt = 02.07.2026
Expense month = June 2026
```
