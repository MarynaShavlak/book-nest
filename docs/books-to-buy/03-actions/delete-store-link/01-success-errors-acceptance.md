# Delete Store Link: Success, Errors and Acceptance Criteria

## Success

After delete:

- link disappears from row;
- best offer recalculates;
- sidebar statistics update;
- store filters update;
- book remains on page.

## Errors

```text
Посилання не знайдено
Не вдалося видалити посилання
```

## Acceptance Criteria

- User can delete own store link.
- Deleted link disappears from book row.
- Book remains in Books to Buy list.
- Best offer recalculates.
- Statistics update.
- User cannot delete another user's link.
- Undo is shown if no confirmation modal is used.
