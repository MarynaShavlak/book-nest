# Remove from Shopping List: Errors and Acceptance Criteria

## Loading

During submit:

- confirm button disabled;
- repeated submit blocked;
- row remains visible until success.

## Errors

```text
Не вдалося прибрати книгу зі списку покупок
Книгу не знайдено
Ця книга більше не знаходиться у списку покупок
```

## Acceptance Criteria

- Action is available only for `want_to_buy` books.
- Confirmation modal opens before update.
- Status changes to `none` after confirm.
- Book disappears from Books to Buy Page.
- Book remains in My Library.
- Store links are not deleted.
- This action does not delete the book.
