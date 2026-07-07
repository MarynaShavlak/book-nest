# Favorite Quote Rules

## Purpose

Users can mark quote as favorite to quickly find the most meaningful fragments.

## Field

```ts
isFavorite: boolean;
```

## Default state

```ts
isFavorite: false
```

## Critical rule: quote favorite !== book favorite

Favorite quote is independent from favorite book.

```ts
book.isFavorite !== quote.isFavorite
```

A quote can be favorite even when its book is not favorite.
A book can be favorite even when none of its quotes are favorite.

## Valid combinations

| Book favorite | Quote favorite | Meaning |
|---|---:|---|
| false | false | book is not favorite, quote is not favorite |
| false | true | book is not favorite, but this quote is favorite |
| true | false | book is favorite, but this quote is not favorite |
| true | true | both book and quote are favorite |

## UI wording

Use separate labels:

```text
Додати книгу в улюблені
Додати цитату в улюблені
```

Do not use one generic “favorite” action without context when both actions can appear on the same screen.

## Toggle logic

```ts
if (!quote.isFavorite) {
  quote.isFavorite = true;
  showToast("Цитату додано в улюблені");
} else {
  quote.isFavorite = false;
  showToast("Цитату прибрано з улюблених");
}
```

## Card behaviour

If quote is favorite:

- heart / bookmark icon is active;
- quote appears in `Улюблені` filter;
- quote is counted in statistics.

If quote is not favorite:

- icon is inactive;
- quote does not appear in `Улюблені` filter.

## Favorite filter

Standalone Quotes page should include quick filter:

```text
Улюблені
```

This filter shows only quotes where:

```ts
quote.isFavorite === true
```

## Dashboard future use

Favorite quotes can later be shown as a small widget on Dashboard:

```text
Улюблені цитати
```

This widget should use quote favorite state, not book favorite state.
