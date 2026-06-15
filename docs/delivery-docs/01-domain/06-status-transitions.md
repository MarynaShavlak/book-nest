# Status Transitions

## Main ownership flow

```text
want_to_buy → in_transit → owned
```

Also allowed:

```text
none → in_transit → owned
```

## Delivery record flow

```text
ordered → in_transit → received
```

Cancellation can happen from active statuses:

```text
ordered → cancelled
in_transit → cancelled
```

## Detailed transitions

| Action | Before | After |
| --- | --- | --- |
| Mark Book as In Transit | `book.ownershipStatus = want_to_buy / none` | `book.ownershipStatus = in_transit`, `delivery.status = ordered` |
| Change Delivery Status to In Transit | `delivery.status = ordered` | `delivery.status = in_transit` |
| Mark Book as Received | `book.ownershipStatus = in_transit`, `delivery.status = ordered / in_transit` | `book.ownershipStatus = owned`, `delivery.status = received`, set `receivedAt` |
| Cancel Delivery, keep in wishlist | `book.ownershipStatus = in_transit` | `book.ownershipStatus = want_to_buy`, `delivery.status = cancelled`, set `cancelledAt` |
| Cancel Delivery, remove from wishlist | `book.ownershipStatus = in_transit` | `book.ownershipStatus = none`, `delivery.status = cancelled`, set `cancelledAt` |

## Book Form transition rule

When user edits Book Form and changes ownership status from `in_transit` to another state, reuse the same action rules:

- `in_transit → owned` means received flow;
- `in_transit → want_to_buy` means cancel and keep in wishlist;
- `in_transit → none` means cancel and remove from wishlist;
- `in_transit → borrowed/lent` should require confirmation because it closes active delivery.
