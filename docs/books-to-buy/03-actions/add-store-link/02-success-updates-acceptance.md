# Add Store Link: Success, Updates and Acceptance Criteria

## Success behavior

Success message:

```text
Посилання додано
```

After success:

- modal closes;
- link appears in book row;
- best offer recalculates;
- sidebar statistics update;
- filters/search results update if needed.

## Data created

```ts
BookStoreLink = {
  userId,
  bookId,
  storeName,
  url,
  price,
  currency,
  createdAt,
  updatedAt,
}
```

## Acceptance Criteria

- User can open Add Store Link modal.
- Modal shows book preview.
- User can choose store.
- User can enter URL.
- User can enter optional price.
- User can choose currency.
- URL is validated.
- Link is saved only for current user.
- Link appears on book row after save.
- Best offer updates after save.
- Book is not deleted or moved.
