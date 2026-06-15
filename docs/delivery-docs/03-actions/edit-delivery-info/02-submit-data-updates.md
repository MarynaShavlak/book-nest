# Edit Delivery Info: Submit and Data Updates

## Submit flow

1. Validate form.
2. Re-read or verify current delivery status.
3. Block update if delivery is no longer active.
4. Update allowed fields.
5. Set `updatedAt`.
6. Refresh active delivery views and statistics.

## Delivery update

```ts
delivery.storeName = values.storeName;
delivery.orderDate = values.orderDate;
delivery.expectedDeliveryDate = values.expectedDeliveryDate ?? null;
delivery.orderNumber = values.orderNumber ?? null;
delivery.trackingUrl = values.trackingUrl ?? null;
delivery.price = values.price ?? null;
delivery.currency = values.currency ?? "UAH";
delivery.deliveryService = values.deliveryService ?? null;
delivery.customDeliveryService = values.customDeliveryService ?? null;
delivery.trackingNumber = values.trackingNumber ?? null;
delivery.note = values.note ?? null;
delivery.updatedAt = now;
```

## Cross-feature updates

- Books in Transit card updates immediately.
- Book Details delivery block updates.
- Order History active record updates.
- Expense Statistics updates if price/currency/orderDate changed.
- Dashboard widgets update if expected date/status changed.
