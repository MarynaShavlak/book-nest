# Remove from Shopping List: Submit and Updates

## Submit behavior

After confirm:

```ts
book.ownershipStatus = "none";
book.updatedAt = currentDate;
```

## After success

- Book disappears from Books to Buy Page.
- Book remains in My Library.
- Book Details ownership badge becomes `Немає`.
- Store links remain saved.
- Wishlist count updates.

## Success message

```text
Книгу прибрано зі списку покупок
```

## Store links

Recommended MVP:

```text
Keep store links after removing from shopping list.
```

Reason:

```text
If the user later returns the book to wishlist, saved links can still be useful.
```
