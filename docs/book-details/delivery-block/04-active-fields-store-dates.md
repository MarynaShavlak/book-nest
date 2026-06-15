# Delivery Block — Active Fields: Store and Dates

> Source: book-details-delivery-block.md lines 389-476

---

## 10. Fields shown in active block

### 10.1. Store

Label:

```text
Магазин
```

Source:

```ts
delivery.storeName
```

Required field.

Example:

```text
Магазин: Yakaboo
```

---

### 10.2. Order date

Label:

```text
Замовлено
```

Source:

```ts
delivery.orderDate
```

Example:

```text
Замовлено: 12.06.2026
```

---

### 10.3. Expected delivery date

Label:

```text
Очікується
```

Source:

```ts
delivery.expectedDeliveryDate
```

Example:

```text
Очікується: 16.06.2026
```

If delivery is delayed:

```text
Очікувалась: 14.06.2026
```

If missing:

```text
Дата доставки не вказана
```

Recommended MVP:

```text
If expectedDeliveryDate is missing, show badge “Без дати доставки” and do not show separate empty field.
```

---
