# Delivery Module Documentation v2

This folder is a context-friendly rewrite of the Delivery module documentation.

The goal is to keep every file small, focused, and safe to pass to Claude Code without losing context.

## How to use this documentation with Claude Code

For any implementation task, give Claude Code only:

1. `00-module-map.md`
2. the `README.md` inside the relevant folder
3. the exact feature/action/page file needed for the task
4. optionally one shared file from `05-shared/`

Do not provide the whole module at once unless you are asking for a high-level audit.

## Module responsibility

Delivery Module manages the purchase-delivery lifecycle for books:

```text
want_to_buy / none → in_transit → owned
```

It owns:

- active delivery records;
- Books in Transit page;
- Delivery Order History page;
- Delivery Expense Statistics page;
- delivery actions and modals;
- delivery section inside Book Form;
- delivery entry point from Books to Buy page.

It does not own:

- general book CRUD;
- reading status logic;
- series logic;
- notes, quotes, characters;
- payment processing;
- automatic carrier API tracking.

## Main implementation rule

Stored delivery status and calculated UI status are different things.

```text
delivery.status = ordered | in_transit | received | cancelled
```

Calculated UI status:

```text
arriving_soon | delayed | no_delivery_date
```

`arriving_soon`, `delayed`, and `no_delivery_date` must not be stored as `delivery.status`.
