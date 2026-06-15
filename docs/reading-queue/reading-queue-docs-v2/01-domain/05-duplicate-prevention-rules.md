# Duplicate Prevention Rules

## Main rule

One book cannot be in the Reading Queue twice.

Before adding a book:

```text
check if queue item exists for userId + bookId
```

If item exists, do not create a duplicate.

## Book Details behavior

If the book is already in the queue, show:

```text
У черзі · позиція N
```

and action:

```text
Прибрати з черги
```

Do not show:

```text
Додати в чергу читання
```

## Submit protection

While add request is pending:

- submit button is disabled;
- repeated submit is blocked;
- modal does not close until successful save.

## Error protection

If add request fails:

- no duplicate should be created;
- UI should remain in previous state;
- selected position should not be cleared.
