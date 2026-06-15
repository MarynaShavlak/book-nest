# Books to Buy Delivery Action

## Purpose

Allows user to move a book from `want_to_buy` to `in_transit` directly from Books to Buy page.

## Entry point

Card/action button:

```text
Позначити як в дорозі
```

## Show when

```ts
book.ownershipStatus === "want_to_buy"
```

## Behavior

Open the same Mark Book as In Transit modal.

After submit:

```ts
book.ownershipStatus = "in_transit";
delivery.status = "ordered";
```

## Page update

After success:

- remove book card from Books to Buy list;
- if list becomes empty, show empty state;
- update summary cards;
- add record to Books in Transit;
- add record to Order History;
- include price in Expense Statistics, if provided.

## Acceptance criteria

- Action appears on eligible Books to Buy cards.
- It uses the shared Mark Book as In Transit modal.
- On success, book leaves Books to Buy page.
- No duplicate active delivery can be created.
