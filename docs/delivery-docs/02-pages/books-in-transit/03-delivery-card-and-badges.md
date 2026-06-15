# Books in Transit: Delivery Card and Badges

## Card content

Each delivery card should show:

### Book information

- cover;
- title;
- author;
- series info, if exists;
- reading status, optional.

### Order information

- store name;
- order date;
- expected delivery date;
- order number, if exists;
- price, if exists.

### Delivery information

- delivery service, if exists;
- tracking number / TTN, if exists;
- tracking URL action, if exists;
- note preview, if exists.

## Badge priority

Show only the most important current badge:

```text
1. delayed
2. arriving_soon
3. no_delivery_date
4. stored delivery.status
```

## Badge labels

| Status | Label |
| --- | --- |
| `delayed` | Затримується |
| `arriving_soon` | Очікується скоро |
| `no_delivery_date` | Без дати доставки |
| `ordered` | Замовлено |
| `in_transit` | В дорозі |

## Card actions

For active delivery:

```text
Позначити як отриману
Редагувати доставку
Перейти до книги
Скасувати замовлення
```

If `trackingUrl` exists:

```text
Відкрити трекінг
```
