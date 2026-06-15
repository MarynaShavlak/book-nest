# Book Details Purchase Block Contract

## Purpose

Book Details can show a compact purchase block for a single book.

## When to show

Show purchase block if:

```ts
ownershipStatus === "want_to_buy"
```

or if the book has store links.

## Content

Show:

- ownership status `Хочу купити`;
- store links;
- best offer;
- action `Додати посилання`;
- action `Позначити як куплену`;
- action `Позначити як “В дорозі”` if Delivery module is enabled;
- action `Прибрати зі списку покупок`.

## Responsibility split

Book Details should not duplicate Books to Buy business logic.

It should open actions from this module:

```text
add-store-link
edit-store-link
delete-store-link
mark-as-bought
remove-from-shopping-list
```

## After updates

Book Details should update ownership badge and purchase block after any action.
