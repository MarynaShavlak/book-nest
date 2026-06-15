# Delivery Block — Active Fields: Tracking, Price, Service and Note

> Source: book-details-delivery-block.md lines 477-655

---

### 10.4. Order number

Label:

```text
Номер замовлення
```

Source:

```ts
delivery.orderNumber
```

Show only if exists.

Example:

```text
Номер замовлення: №482915
```

---

### 10.5. Tracking URL

Action label:

```text
Відкрити трекінг
```

Source:

```ts
delivery.trackingUrl
```

Show only if valid URL exists.

Behavior:

* opens in new tab;
* does not change delivery record;
* action can be secondary.

---

### 10.6. Price

Label:

```text
Ціна
```

Source:

```ts
delivery.price
delivery.currency
```

Example:

```text
Ціна: 520 грн
```

If price missing:

```text
Do not show price row.
```

Recommended MVP:

```text
Hide empty price field in Book Details Delivery Block.
```

---

### 10.7. Delivery service

Label:

```text
Служба доставки
```

Source:

```ts
delivery.deliveryService
```

Example:

```text
Служба доставки: Нова пошта
```

Show only if exists.

---

### 10.8. Tracking number / TTN

Label:

```text
ТТН
```

or:

```text
Tracking number
```

Recommended Ukrainian label:

```text
ТТН
```

Source:

```ts
delivery.trackingNumber
```

Example:

```text
ТТН: 20450780123456
```

Show only if exists.

Important:

```text
trackingNumber is separate from orderNumber.
```

---

### 10.9. Note preview

Label:

```text
Нотатка
```

Source:

```ts
delivery.note
```

Show only if exists.

Behavior:

* show 1–2 lines;
* if note is long, truncate;
* full note is available in Edit Delivery Info or Order Details.

Example:

```text
Нотатка: Оплачено онлайн. Очікую разом з іншим замовленням.
```

---
