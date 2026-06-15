# Recommended Implementation Order

Use this order to avoid context loss and circular implementation.

## 1. Domain foundation

Implement first:

- `BookDelivery` model/type;
- stored delivery statuses;
- calculated UI status helper;
- validation rules;
- active delivery selector.

Files:

```text
01-domain/01-book-delivery-model.md
01-domain/02-delivery-fields.md
01-domain/04-stored-delivery-status.md
01-domain/05-calculated-ui-status.md
01-domain/08-validation-rules.md
```

## 2. Core actions

Implement actions in this order:

1. Mark Book as In Transit.
2. Edit Delivery Info.
3. Mark Book as Received.
4. Cancel Delivery Order.

Reason: all pages depend on these actions.

## 3. Books in Transit page

Implement the active-delivery page after the actions exist.

Start with:

- data source;
- list/grid;
- delivery card;
- search/filter/sort;
- single actions;
- bulk receive;
- states.

## 4. History and statistics

Implement after active delivery flows are stable:

- Delivery Order History;
- Delivery Expense Statistics.

These pages use inactive records and aggregated data.

## 5. Integrations

Implement last:

- Books to Buy action;
- Book Form delivery section;
- Book Details delivery block;
- Dashboard and My Library indicators.
