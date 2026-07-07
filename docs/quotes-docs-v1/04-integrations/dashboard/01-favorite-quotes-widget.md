# Dashboard Favorite Quotes Widget

This is a future enhancement.

## Widget title

```text
Улюблені цитати
```

## Purpose

Show a small selection of favorite quotes on Dashboard.

## Data source

```ts
quotes.filter((quote) => quote.isFavorite)
```

## Important rule

Use quote favorite state, not book favorite state.

```ts
quote.isFavorite === true
```

Do not use:

```ts
book.isFavorite
```

## Content

Each item can show:

- quote text;
- book title;
- author;
- page/chapter if exists;
- spoiler placeholder if spoiler.

## CTA

```text
Переглянути всі цитати
```

Route:

```text
/quotes?filter=favorites
```
