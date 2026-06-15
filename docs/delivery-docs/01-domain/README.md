# Delivery Domain

This folder contains the rules that every Delivery page/action must follow.

Use these files before implementing any UI:

```text
01-book-delivery-model.md
02-delivery-fields.md
03-ownership-statuses.md
04-stored-delivery-status.md
05-calculated-ui-status.md
06-status-transitions.md
07-actions-by-status.md
08-validation-rules.md
09-data-safety-and-permissions.md
```

## Domain summary

A delivery record represents one book order.

A book can have many historical delivery records, but only one active delivery record.

Active delivery means:

```ts
book.ownershipStatus === "in_transit" &&
(delivery.status === "ordered" || delivery.status === "in_transit")
```

Inactive delivery means:

```text
received | cancelled
```

Inactive records stay available in Order History and Expense Statistics.
