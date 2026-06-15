# Book Details Delivery Block Contract

This file defines the contract between Delivery Module and Book Details Page.

Full Book Details block documentation can live in the Book Details module.

## When to show active block

Show active delivery block when:

```ts
book.ownershipStatus === "in_transit" &&
(delivery.status === "ordered" || delivery.status === "in_transit")
```

## Active block should show

```text
Status badge
Store
Order date
Expected delivery date
Order number
Tracking URL
Price
Delivery service
Tracking number / TTN
Note preview
```

## Active block actions

```text
Edit Delivery Info
Mark as Received
Cancel Delivery Order
Open Tracking URL, if exists
```

## History preview

Book Details may show latest received/cancelled delivery records as read-only history.

## Missing active record state

If book ownership is `in_transit` but no active delivery record exists, show recovery UI:

```text
Дані доставки не знайдено
```

Actions:

```text
Додати дані доставки
Змінити статус володіння
```
