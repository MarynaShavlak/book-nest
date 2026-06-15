# Mark Book as In Transit: Submit and Data Updates

## Submit behavior

On submit:

1. Validate form.
2. Re-check duplicate active delivery.
3. Update book ownership.
4. Create delivery record.
5. Show success message.
6. Update related pages.

## Book update

```ts
book.ownershipStatus = "in_transit";
book.updatedAt = now;
```

Do not change reading status.

## Delivery record creation

```ts
delivery = {
  bookId: book.id,
  userId: currentUser.id,
  storeName,
  orderDate,
  expectedDeliveryDate,
  orderNumber,
  trackingUrl,
  price,
  currency: currency ?? "UAH",
  deliveryService,
  customDeliveryService,
  trackingNumber,
  note,
  status: "ordered",
  createdAt: now,
  updatedAt: now,
};
```

## Success behavior

Recommended toast:

```text
Книгу додано до “Книги в дорозі”
```

Optional action:

```text
Перейти до книг в дорозі
```
