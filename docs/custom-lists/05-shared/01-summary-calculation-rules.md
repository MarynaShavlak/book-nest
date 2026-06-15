# Summary Calculation Rules

## List count

On Custom Lists Page:

```text
listsCount = active custom lists owned by current user
```

## Book count per list

On list cards and details header:

```text
bookCount = active books connected to this list and owned by current user
```

Do not count:

- deleted books;
- books owned by another user;
- books whose membership was removed;
- books from deleted lists.

## Preview covers

List card preview covers should be taken from active books in the list.

Recommended MVP:

```text
show up to 3 or 4 covers
```

If the list has no books, show an empty preview state.

## Updated date

`updatedAt` should change when:

- list title changes;
- list description changes;
- icon/color changes;
- book is added to list;
- book is removed from list;
- order changes.
