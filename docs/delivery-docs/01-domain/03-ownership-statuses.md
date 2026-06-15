# Ownership Statuses Related to Delivery

Delivery module uses Book ownership status to decide which delivery actions are available.

## Relevant statuses

| ownershipStatus | Delivery meaning |
| --- | --- |
| `none` | User does not own the book. Can mark as in transit. |
| `want_to_buy` | User wants to buy the book. Can mark as in transit. |
| `in_transit` | User ordered the book and waits for delivery. |
| `owned` | Book is owned. Active delivery actions are not shown. |
| `borrowed_from_someone` | Loan module owns this state. No delivery actions. |
| `lent_to_someone` | Loan module owns this state. No delivery actions. |

## Main rule

Delivery active state is connected to:

```ts
book.ownershipStatus === "in_transit"
```

When an active delivery is received:

```ts
book.ownershipStatus = "owned";
```

When an active delivery is cancelled:

```ts
book.ownershipStatus = "want_to_buy";
```

or:

```ts
book.ownershipStatus = "none";
```

This depends on the user choice in Cancel Delivery modal.
