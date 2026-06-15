# Expense Statistics: Sidebar, States, Responsive, Acceptance

## Right sidebar

Recommended blocks:

```text
Quick summary
Top stores
Currency breakdown
Quick links
```

Quick links:

```text
Books in Transit
Order History
Books to Buy
```

## Empty state

When no delivery records exist:

```text
Поки немає даних про витрати на доставки
```

## No price data state

When orders exist but none have price:

```text
Додайте ціну до замовлень, щоб побачити статистику витрат
```

## Empty filtered state

```text
Немає даних за вибраними фільтрами
```

## Responsive

- desktop: charts + sidebar;
- tablet: charts stacked, sidebar below;
- mobile: summary cards first, charts stacked vertically.

## Acceptance criteria

- Uses only delivery prices.
- Excludes cancelled from main total by default.
- Supports multiple currencies without conversion.
- Monthly stats use `orderDate`.
- Handles no-price state separately from no-orders state.
- Charts and summary cards respond to filters.
