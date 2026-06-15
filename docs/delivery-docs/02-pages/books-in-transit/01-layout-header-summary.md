# Books in Transit: Layout, Header, Summary

## Page layout

Recommended desktop layout:

```text
Page Header
Summary Cards
Search + Filters + Sorting
Main List/Grid
Right Sidebar
```

Recommended mobile layout:

```text
Page Header
Summary Cards
Search
Filters
Delivery Cards
Donut Chart
Quick Links
```

## Header

Title:

```text
Книги в дорозі
```

Subtitle:

```text
Відстежуйте книги, які вже замовлені, але ще не отримані.
```

Primary actions:

```text
Позначити всі як отримані
Історія замовлень
Статистика витрат
```

## Summary cards

Recommended cards:

| Card | Source |
| --- | --- |
| Усього книг в дорозі | active deliveries count |
| Очікуються цього тижня | expected date within current calendar week |
| Затримуються | calculated `delayed` count |
| Загальна сума | active deliveries with price |
| Магазини | unique `storeName` count |

If no price data exists, show:

```text
—
```

for money card instead of hiding the whole card.
