# Delivery Integration Contract

## Purpose

Books to Buy can move a book into Delivery module when user has already ordered it but has not received it yet.

## Action

```text
Позначити як “В дорозі”
```

Show when:

```ts
ownershipStatus === "want_to_buy"
```

and Delivery module is enabled.

## Flow

```text
Хочу купити → В дорозі
```

Open flow:

```text
mark-book-as-in-transit.md
```

After success:

```ts
book.ownershipStatus = "in_transit";
delivery.status = "ordered";
```

## UI updates

- Book disappears from Books to Buy Page.
- Book appears on Books in Transit Page.
- Delivery record appears in Order History.
- Book Details Delivery Block appears.
- Expense Statistics updates if delivery price exists.

## Responsibility split

Books to Buy owns only the entry action.
Delivery module owns delivery fields, validation and status transitions.
