# Favorites Module Map

## Core concept

Favorites module відповідає за персональну позначку книги як улюбленої.

```text
isFavorite: false ↔ true
```

## Main route

```text
/favorites
```

## Main entities

- Book
- Favorite book item view model
- Current authenticated user

## Main user flows

1. User opens Favorites page.
2. System shows only active books where `isFavorite = true`.
3. User can search, filter, sort, switch view mode.
4. User can open Book Details.
5. User can remove book from favorites.
6. User can undo accidental remove.

## File groups

| Folder | Purpose |
| ------ | ------- |
| `01-domain/` | Favorite rules and data model |
| `02-pages/` | Favorites page structure |
| `03-actions/` | Favorite toggle and remove logic |
| `04-integrations/` | Contracts with other modules/pages |
| `05-shared/` | Reusable states, filters, sorting, AC |
