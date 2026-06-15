# Mark as Bought: Errors and Acceptance Criteria

## Loading

During submit:

- confirm button disabled;
- repeated submit blocked;
- row stays visible until success.

Button text:

```text
Оновлення...
```

## Errors

```text
Не вдалося позначити книгу як куплену
Книгу не знайдено
Ця книга більше не знаходиться у списку покупок
```

If stale data is detected, refresh page state.

## Acceptance Criteria

- Action is available only for `want_to_buy` books.
- Confirmation modal opens before update.
- Status changes to `owned` after confirm.
- Book disappears from Books to Buy Page.
- Book stays in My Library.
- Store links are not deleted.
- User sees success message.
- Failed update does not change status.
