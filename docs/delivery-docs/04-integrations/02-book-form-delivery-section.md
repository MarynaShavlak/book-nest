# Book Form Delivery Section

## Purpose

Book Form should allow delivery fields when user selects:

```ts
ownershipStatus = "in_transit"
```

## Recommended MVP UX

Use inline Delivery Section inside Book Form.

Show the section only when ownership status is `in_transit`.

## Fields

Use shared delivery fields:

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

Required when `ownershipStatus = in_transit`:

```text
storeName
orderDate
```

## Create book as in transit

On submit:

```ts
create Book with ownershipStatus = "in_transit";
create Delivery with status = "ordered";
```

## Edit existing book scenarios

| Scenario | Behavior |
| --- | --- |
| still `in_transit` | update active delivery fields |
| `want_to_buy` → `in_transit` | create active delivery record |
| `none` → `in_transit` | create active delivery record |
| `in_transit` → `owned` | use Mark as Received flow |
| `in_transit` → `want_to_buy` | use Cancel flow, keep in wishlist |
| `in_transit` → `none` | use Cancel flow, remove from wishlist |

## Existing delivery history

Book Form may show previous delivery records as read-only history.

Do not allow editing received/cancelled records from Book Form in MVP.

## Acceptance criteria

- Delivery section appears only for `in_transit` ownership.
- Required delivery fields are validated.
- Create flow creates Book + Delivery.
- Edit flow updates active delivery safely.
- Ownership changes from `in_transit` reuse received/cancel transitions.
- Duplicate active delivery is blocked.
