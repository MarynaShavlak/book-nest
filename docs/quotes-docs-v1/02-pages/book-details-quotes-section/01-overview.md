# Book Details Quotes Section Overview

## Block title

```text
Цитати з книги
```

## Purpose

This block shows quotes saved from the current book.

This is the main MVP location for Quotes feature.

## What user can do

- see all quotes from current book;
- add new quote;
- edit quote;
- delete quote;
- mark quote as spoiler;
- mark quote as favorite;
- show / hide spoiler;
- open standalone quotes page;
- open all quotes from current book.

## Data source

Book Details page should fetch quotes by current book id:

```ts
quotes.filter((quote) => quote.bookId === book.id)
```

## Count

Show quote count near title:

```text
Цитати з книги · 4
```

or badge:

```text
4 цитати
```

## Primary action

```text
+ Додати цитату
```

## Secondary action

If standalone Quotes page exists:

```text
Переглянути всі цитати
```

If only book-level quotes are implemented:

```text
Показати всі
```
