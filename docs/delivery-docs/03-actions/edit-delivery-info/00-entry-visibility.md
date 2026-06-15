# Edit Delivery Info: Entry and Visibility

## Entry points

```text
Books in Transit Page
Book Details Page
Order History, for active records only
```

## Show action when

```ts
book.ownershipStatus === "in_transit" &&
(delivery.status === "ordered" || delivery.status === "in_transit")
```

## Do not show action when

```text
delivery.status = received
delivery.status = cancelled
book.ownershipStatus != in_transit
```

## Modal title

```text
Редагувати доставку
```
