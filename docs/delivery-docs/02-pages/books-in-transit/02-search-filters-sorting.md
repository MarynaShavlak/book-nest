# Books in Transit: Search, Filters, Sorting

## Search

Search should check:

- book title;
- author;
- store name;
- order number;
- tracking number / TTN;
- delivery service;
- note.

## Primary filters

```text
Усі
Замовлено
В дорозі
Очікуються скоро
Очікуються цього тижня
Затримуються
Без дати доставки
```

## Advanced filters

```text
За магазином
За службою доставки
З номером ТТН
Без номера ТТН
З посиланням
Без посилання
З ціною
Без ціни
```

## Sorting options

```text
Найближча доставка
Новіші замовлення
Старіші замовлення
Спочатку затримані
За магазином
За службою доставки
За назвою книги
За автором
За ціною
```

Default sorting:

```text
Найближча доставка
```

## Default sorting rule

- deliveries with `expectedDeliveryDate` come first;
- closest expected date comes first;
- delayed deliveries can be pinned first when selected;
- records without expected date go after dated records;
- if dates are equal, sort by `orderDate` descending.
