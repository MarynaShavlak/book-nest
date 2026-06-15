# Edit Delivery Info: Editable Fields and Status

## Editable fields

```text
storeName
orderDate
expectedDeliveryDate
orderNumber
trackingUrl
price
currency
deliveryService
customDeliveryService
trackingNumber
note
```

## Fields that cannot be edited directly

```text
bookId
userId
createdAt
receivedAt
cancelledAt
```

## Status edit

MVP may allow changing:

```text
ordered → in_transit
```

Do not allow changing active status to `received` or `cancelled` from this modal.

Use dedicated actions:

```text
Mark as Received
Cancel Delivery Order
```

## Required validation

Same validation as delivery creation:

```text
storeName required
orderDate required
orderDate not future
expectedDeliveryDate >= orderDate
valid URL
price >= 0
text max lengths
```
