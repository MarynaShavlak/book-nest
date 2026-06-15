# Mark as Bought: Submit and Updates

## Submit behavior

After confirm:

```ts
book.ownershipStatus = "owned";
book.updatedAt = currentDate;
```

## What happens after success

- Book disappears from Books to Buy Page.
- Book remains in My Library.
- Book Details ownership badge becomes `Маю`.
- Store links remain saved.
- Dashboard wishlist count updates.
- Statistics/widgets update if they use wishlist data.

## Success message

```text
Книгу позначено як куплену
```

Optional action:

```text
Перейти до книги
```

## Store links after bought

Store links should not be deleted.

Reason:

```text
They can still be useful as reference data for where the user found or bought the book.
```
