# Toggle Favorite Quote

## Purpose

User can mark quote as favorite or remove it from favorites.

## Entry points

- heart icon on quote card;
- favorite toggle in Add / Edit Quote modal;
- actions menu item.

## Flow: add to favorites

1. User clicks inactive heart.
2. `quote.isFavorite` becomes `true`.
3. Heart icon becomes active.
4. Toast:

```text
Цитату додано в улюблені
```

## Flow: remove from favorites

1. User clicks active heart.
2. `quote.isFavorite` becomes `false`.
3. Heart icon becomes inactive.
4. Toast:

```text
Цитату прибрано з улюблених
```

## Critical independence rule

This action must not change book favorite state.

Do not update:

```ts
book.isFavorite
```

Only update:

```ts
quote.isFavorite
```

## Filters

If user is inside `Улюблені` filter and removes quote from favorites, the quote should disappear from the filtered list.

## Statistics

Favorite quote count must update after toggle.
