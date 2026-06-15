# Mark Book as Received: Single Action

## Entry points

```text
Books in Transit Page
Book Details Page
Order History, active records only
```

## Show action when

```ts
book.ownershipStatus === "in_transit" &&
(delivery.status === "ordered" || delivery.status === "in_transit")
```

## Confirmation modal

Title:

```text
Позначити книгу як отриману?
```

Body should explain:

```text
Книга буде позначена як “Маю” і зникне зі сторінки “Книги в дорозі”.
```

Optional field:

```text
Дата отримання
```

Default:

```text
today
```

## Submit result

```ts
book.ownershipStatus = "owned";
delivery.status = "received";
delivery.receivedAt = selectedDate || today;
delivery.updatedAt = now;
```
