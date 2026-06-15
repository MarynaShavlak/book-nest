# Delivery Block — Data Source

> Source: book-details-delivery-block.md lines 202-260

---

## 6. Data source

Delivery Block uses two data sources:

```text
Book
Delivery record
```

Book fields:

```ts
type Book = {
  id: string;
  userId: string;
  title: string;
  author: string;
  coverUrl?: string | null;
  ownershipStatus: OwnershipStatus;
  readingStatus: ReadingStatus;
  formats?: BookFormat[];
};
```

Delivery fields:

```ts
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
  currency?: "UAH" | "USD" | "EUR" | null;

  deliveryService?: string | null;
  trackingNumber?: string | null;

  note?: string | null;

  status: "ordered" | "in_transit" | "received" | "cancelled";

  receivedAt?: string | null;
  cancelledAt?: string | null;

  createdAt: string;
  updatedAt: string;
};
```

---
