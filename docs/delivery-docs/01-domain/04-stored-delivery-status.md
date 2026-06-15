# Stored Delivery Status

## Stored values

```ts
type DeliveryStatus = "ordered" | "in_transit" | "received" | "cancelled";
```

## Meanings

| delivery.status | Meaning | Active? |
| --- | --- | --- |
| `ordered` | Order was created, but shipping may not have started. | yes |
| `in_transit` | Order is being shipped. | yes |
| `received` | User received the book. | no |
| `cancelled` | User cancelled the order. | no |

## Default status

When a book is marked as in transit, create delivery with:

```ts
delivery.status = "ordered";
```

The user can later change it to:

```ts
delivery.status = "in_transit";
```

## Important rule

Do not store these as `delivery.status`:

```text
arriving_soon
delayed
no_delivery_date
```

They are calculated UI statuses.
