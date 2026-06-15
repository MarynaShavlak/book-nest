# Data Safety and Permissions

## Permissions

Rules:

- user can see only own tags;
- user can create tags only for own account;
- user can edit only own tags;
- user can delete only own tags;
- user cannot access another user's tag names, colors, descriptions or stats;
- genre dictionary is public app-level data.

Safe errors:

```text
Тег не знайдено
Книгу не знайдено
```

## Data safety

Genres / Tags actions must not:

- delete books;
- change ownershipStatus;
- change readingStatus;
- change delivery data;
- change loan data;
- remove books from Reading Queue;
- remove books from Custom Lists;
- remove favorite state;
- delete notes, quotes or characters.

Allowed changes:

```text
Book.genres
Book.tagIds
UserTag entity
```

## Delete tag safety

Deleting a tag must not delete books.

If tag is used:

```text
Remove tag relation from all user's books, then delete UserTag.
```
