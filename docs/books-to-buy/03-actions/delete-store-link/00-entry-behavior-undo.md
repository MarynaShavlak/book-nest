# Delete Store Link: Entry, Behavior and Undo

## Entry point

Action:

```text
Видалити посилання
```

Available from:

```text
Book row → Store link → More menu
```

## Behavior

Deleting a store link removes only the link.

It does not:

- delete the book;
- remove the book from Books to Buy;
- change ownership status.

## Confirmation

Recommended MVP:

```text
No confirmation, but show undo snackbar.
```

Reason:

```text
Deleting one link is reversible enough if undo exists.
```

Undo snackbar:

```text
Посилання видалено
[Скасувати]
```

If undo is not implemented, use confirmation modal.
