# Search, Filter and Sort Rules

## Search

Search input placeholder:

```text
Пошук цитат...
```

Search should work by:

- quote text;
- book title;
- author name;
- user comment;
- chapter;
- page value converted to string.

## Quick filters

Recommended filters:

```text
Усі
Без спойлерів
Зі спойлерами
Улюблені
З коментарем
```

## Advanced filters

Post-MVP filters:

- by book;
- by author;
- by genre;
- by date added;
- with comment;
- without comment.

## Filter definitions

### All

No extra filtering.

### Without spoilers

```ts
quote.isSpoiler === false
```

### With spoilers

```ts
quote.isSpoiler === true
```

### Favorite

```ts
quote.isFavorite === true
```

### With comment

```ts
Boolean(quote.comment?.trim())
```

### Without comment

```ts
!quote.comment?.trim()
```

## Sorting

Options:

```text
Нові спочатку
Старі спочатку
За назвою книги
За автором
За сторінкою
Спочатку улюблені
Спочатку без спойлерів
Спочатку зі спойлерами
```

## Default sorting

Recommended default:

```text
Нові спочатку
```

## Page sorting

When sorting by page, only quotes with `page` should be sorted by page number. Quotes without page can appear after them.

## Combined filters

Filters can be combined.

Example:

```text
Улюблені + Без спойлерів + Автор: Сара Гарман
```

Result:

```ts
quote.isFavorite === true && quote.isSpoiler === false && quote.book.author includes "Сара Гарман"
```
