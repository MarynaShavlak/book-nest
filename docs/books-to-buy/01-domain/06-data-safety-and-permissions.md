# Data Safety and Permissions

## Data safety

Books to Buy actions must not delete books.

Actions only update:

```text
ownershipStatus
BookStoreLink data
```

They must not change:

- readingStatus;
- formats;
- rating;
- reading progress;
- notes;
- quotes;
- characters;
- series relation;
- reading queue state;
- custom lists;
- favorite state;
- loan data.

## Store links persistence

Store links should remain saved when:

- user marks book as bought;
- user removes book from shopping list;
- user moves book to delivery;
- user returns book to wishlist later.

Reason:

```text
Store links are useful reference data and should not be removed by status changes.
```

## Permissions

Rules:

- User sees only own wishlist books.
- User sees only own store links.
- User can add links only to own books.
- User can edit/delete only own links.
- Do not expose another user's stores, URLs, prices or notes.

Safe error:

```text
Книгу не знайдено
```

or:

```text
Посилання не знайдено
```
