# Add / Edit Quote Modal Overview

## Modal titles

Create:

```text
Додати цитату
```

Edit:

```text
Редагувати цитату
```

## Reference image

See:

```text
assets/add-quote-modal-reference.png
```

## Modal structure

```text
Title + close button
Decorative branch
Book preview
Quote text textarea
Chapter + page inputs
Comment textarea
Spoiler toggle
Favorite toggle
Info note about spoilers
Footer actions
```

## Book preview

At the top of modal, show:

- book cover;
- book title;
- book author.

Example:

```text
[cover]
Один світанок влітку
Шарі Лоу
```

## Buttons

Create mode:

```text
Скасувати
Зберегти цитату
```

Edit mode:

```text
Скасувати
Зберегти зміни
```

## Close behaviour

If form has unsaved changes, show confirmation:

```text
Вийти без збереження?
Ваші зміни буде втрачено.
```

## Add from Book Details

When adding quote from Book Details, book is already known and selected.

## Add from standalone Quotes page

When adding quote from `/quotes`, user must select a book first.
