# Delete Quote Flow

## Entry points

Delete action is available from quote card menu.

## Confirmation modal

Title:

```text
Видалити цитату?
```

Description:

```text
Цю дію неможливо скасувати. Цитата буде видалена з книги та з вашого архіву цитат.
```

Buttons:

```text
Скасувати
Видалити
```

## Flow

1. User opens quote menu.
2. User clicks `Видалити`.
3. Confirmation modal opens.
4. User confirms.
5. Quote is deleted.
6. Quote disappears from current list.
7. Quote counters update.
8. Show toast:

```text
Цитату видалено
```

## Important behaviour

Deleting quote from Book Details also removes it from standalone Quotes page.

Deleting quote from standalone Quotes page also removes it from Book Details.
