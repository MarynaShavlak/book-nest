# Actions by Status

## Actions by book ownership status

| ownershipStatus | Available delivery actions |
| --- | --- |
| `none` | Mark Book as In Transit |
| `want_to_buy` | Mark Book as In Transit |
| `in_transit` | Edit Delivery Info, Mark as Received, Cancel Delivery Order |
| `owned` | No active delivery actions |
| `borrowed_from_someone` | No delivery actions |
| `lent_to_someone` | No delivery actions |

## Actions by stored delivery status

| delivery.status | Available actions |
| --- | --- |
| `ordered` | Edit, Change status to In Transit, Mark as Received, Cancel |
| `in_transit` | Edit, Mark as Received, Cancel |
| `received` | Read-only history actions only |
| `cancelled` | Read-only history actions only |

## History actions

For all delivery records:

```text
Go to Book
View Details
Open Tracking URL, if exists
```

For active records inside Order History, MVP may also show:

```text
Edit Delivery
Mark as Received
Cancel Delivery
```

Primary active management should remain on Books in Transit page.
