# Delivery Block — Active Block and Status Badge

> Source: book-details-delivery-block.md lines 261-388

---

## 7. Active Delivery Block

If book has active delivery, show block title:

```text
Доставка
```

or:

```text
Замовлення
```

Recommended MVP title:

```text
Доставка
```

Block should show:

* delivery status badge;
* store name;
* order date;
* expected delivery date;
* delivery service;
* tracking number / TTN;
* price;
* tracking URL action;
* note preview;
* main actions.

---

## 8. Active delivery UI example

Example:

```text
Доставка

Очікується скоро

Магазин: Yakaboo
Замовлено: 12.06.2026
Очікується: 16.06.2026
Служба доставки: Нова пошта
ТТН: 20450780123456
Ціна: 520 грн

[Відкрити трекінг]
[Позначити як отриману]
[Редагувати]
```

If delivery is delayed:

```text
Доставка

Затримується

Магазин: Yakaboo
Замовлено: 12.06.2026
Очікувалась: 14.06.2026
Служба доставки: Нова пошта
ТТН: 20450780123456

[Позначити як отриману]
[Редагувати]
[Скасувати замовлення]
```

If expected delivery date is missing:

```text
Доставка

Без дати доставки

Магазин: Yakaboo
Замовлено: 12.06.2026
Служба доставки: Нова пошта

[Редагувати доставку]
```

---

## 9. Delivery status badge

Delivery Block should show the most useful status badge.

Badge priority:

```text
1. delayed
2. arriving_soon
3. no_delivery_date
4. stored deliveryStatus
```

Stored delivery statuses:

| Status       | Label     |
| ------------ | --------- |
| `ordered`    | Замовлено |
| `in_transit` | В дорозі  |
| `received`   | Отримано  |
| `cancelled`  | Скасовано |

Calculated UI statuses:

| UI Status          | Label             |
| ------------------ | ----------------- |
| `arriving_soon`    | Очікується скоро  |
| `delayed`          | Затримується      |
| `no_delivery_date` | Без дати доставки |

Important:

```text
If active delivery is delayed, show “Затримується” even if stored status is “Замовлено”.
```

---
