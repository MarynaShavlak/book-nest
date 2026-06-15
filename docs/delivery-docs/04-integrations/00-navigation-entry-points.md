# Delivery Navigation and Entry Points

## Navigation routes

```text
/delivery/in-transit
/delivery/history
/delivery/statistics
```

## Primary entry points

| Source | Delivery behavior |
| --- | --- |
| Book Details | Show active delivery block and delivery actions. |
| Books to Buy | User can mark wanted book as in transit. |
| Book Form | User can create/edit delivery info when ownership is `in_transit`. |
| My Library | Show ownership status and quick actions. |
| Dashboard | Show summary widgets and links. |

## Action entry point map

| Action | Primary places |
| --- | --- |
| Mark Book as In Transit | Book Details, Books to Buy, My Library, Book Form |
| Edit Delivery Info | Books in Transit, Book Details, Order History active records |
| Mark as Received | Books in Transit, Book Details, Order History active records |
| Cancel Delivery | Books in Transit, Book Details, Order History active records |
