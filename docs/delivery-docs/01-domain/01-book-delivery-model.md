# BookDelivery Model

## Recommended model

```ts
type DeliveryStatus = "ordered" | "in_transit" | "received" | "cancelled";
type Currency = "UAH" | "USD" | "EUR";

type BookDelivery = {
  id: string;
  userId: string;
  bookId: string;

  storeName: string;
  orderDate: string;
  expectedDeliveryDate?: string | null;

  orderNumber?: string | null;
  trackingUrl?: string | null;

  price?: number | null;
  currency?: Currency | null;

  deliveryService?: string | null;
  customDeliveryService?: string | null;
  trackingNumber?: string | null;

  note?: string | null;
  cancelReason?: string | null;

  status: DeliveryStatus;

  createdAt: string;
  updatedAt: string;

  receivedAt?: string | null;
  cancelledAt?: string | null;
};
```

## Active delivery selector

```ts
const isActiveDelivery = (book: Book, delivery: BookDelivery) => {
  return (
    book.ownershipStatus === "in_transit" &&
    (delivery.status === "ordered" || delivery.status === "in_transit")
  );
};
```

## History rule

Do not delete received or cancelled delivery records.

They must remain available for:

- Delivery Order History;
- Delivery Expense Statistics;
- Book Details delivery history preview.

## One active record rule

A book must not have more than one active delivery record.

Before creating a new delivery record, check whether an active record already exists for the same `bookId`.

If one exists, block creation and show an error or redirect user to edit existing delivery info.
