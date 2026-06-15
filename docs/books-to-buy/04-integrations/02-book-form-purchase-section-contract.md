# Book Form Purchase Section Contract

## Purpose

Book Form allows user to set ownership status to `want_to_buy`.

## Create mode

If user creates a book with:

```ts
ownershipStatus = "want_to_buy"
```

then after save:

- book is created;
- book appears in My Library;
- book appears on Books to Buy Page.

Optional behavior:

- preselect `want_to_buy` if form was opened from Books to Buy Page.

## Edit mode

If user changes status to:

```ts
ownershipStatus = "want_to_buy"
```

then book appears on Books to Buy Page.

If user changes from `want_to_buy` to another status, book disappears from Books to Buy Page.

## Purchase fields in Book Form

Recommended MVP:

```text
Do not include full store link management inside Book Form.
```

Use Books to Buy Page or Book Details purchase block for store links.

Optional:

- show link to purchase links section;
- show short count of store links.
