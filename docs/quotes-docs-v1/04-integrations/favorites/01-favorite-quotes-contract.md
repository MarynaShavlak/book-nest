# Favorites Integration Contract

## Purpose

BookNest can have different favorite types:

- favorite books;
- favorite authors;
- favorite series;
- favorite quotes;
- favorite dedications.

## Critical rule

Favorite quote is not favorite book.

```ts
quote.isFavorite !== book.isFavorite
```

## Favorite quote source

Favorite Quotes view should query:

```ts
quote.isFavorite === true
```

## UI wording

Use explicit wording:

```text
Улюблені цитати
```

not just:

```text
Улюблені
```

when context can be unclear.

## Removing from favorite quotes

Removing quote from favorite quotes should only update:

```ts
quote.isFavorite = false
```

It must not update:

```ts
book.isFavorite = false
```

## Book favorite action

Toggling book favorite must not update any quote favorite state.
