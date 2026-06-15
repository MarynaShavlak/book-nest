# Tags Tab

## Purpose

Tags tab shows only tags created by the current user.

Important:

```text
There are no predefined tags.
If user has not created tags yet, Tags tab shows empty state.
```

## Tag display options

Tags can be displayed as:

- chips;
- small cards;
- grouped sections by type.

Recommended MVP:

```text
Use compact chips/cards with books count.
```

Example:

```text
slow burn · 12 книг
found family · 8 книг
dark academia · 6 книг
```

## Tag card content

Show:

- tag name;
- tag type;
- books count;
- last used date if available;
- edit action;
- delete action.

## Click behavior

Clicking tag opens My Library with tag filter:

```text
/my-library?tagId=:tagId
```

## Empty tags state

If user has no tags:

```text
Тегів поки немає
Створіть перший тег, щоб позначати настрій, тропи або теми книг.
```

Actions:

```text
Додати тег
Додати книгу
```

## Tags without books

If a user tag exists but is not attached to any book:

- show it in Tags tab if filter **Усі теги** is active;
- show `0 книг`;
- allow edit/delete;
- do not show it in Popular Tags block.
