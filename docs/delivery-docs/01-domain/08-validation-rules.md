# Delivery Validation Rules

Use these rules in every delivery form and modal.

## Required fields

```text
storeName
orderDate
```

## Date validation

| Field | Validation |
| --- | --- |
| `orderDate` | required, cannot be in the future |
| `expectedDeliveryDate` | optional, cannot be earlier than `orderDate` |
| `receivedAt` | set automatically when marked as received |
| `cancelledAt` | set automatically when cancelled |

Error messages:

```text
Оберіть магазин
Оберіть дату замовлення
Дата замовлення не може бути в майбутньому
Очікувана дата доставки не може бути раніше дати замовлення
```

## URL validation

If `trackingUrl` is filled, it must be a valid URL.

Error:

```text
Посилання має бути валідним URL
```

## Price validation

If `price` is filled:

- must be a number;
- must be greater than or equal to 0;
- currency should be selected or default to `UAH`.

Errors:

```text
Ціна має бути числом
Ціна не може бути меншою за 0
```

## Text max lengths

| Field | Max length |
| --- | --- |
| `storeName` | 100 symbols |
| `orderNumber` | 100 symbols |
| `trackingNumber` | 100 symbols |
| `customDeliveryService` | 100 symbols |
| `note` | 500 symbols |
| `cancelReason` | 500 symbols |

## Duplicate protection

Before creating a new active delivery record, check:

```ts
bookId === currentBookId &&
(status === "ordered" || status === "in_transit")
```

If found, do not create a second active record.
