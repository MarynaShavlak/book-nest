# Drag Hint

## Purpose

Drag hint explains that the user can reorder books manually.

Recommended text:

```text
Перетягуйте книги, щоб змінити порядок
```

## Visibility

Show the hint when:

- queue is not empty;
- search is empty;
- sort is `position ASC`;
- drag-and-drop is enabled.

If drag-and-drop is disabled because search is active, show:

```text
Очистіть пошук, щоб змінити порядок книг у черзі.
```
