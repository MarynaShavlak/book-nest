# Quotes Module Map

## Feature name

**Цитати / Quotes**

## Goal

Allow users to save meaningful book fragments, favorite phrases, important thoughts and personal comments connected to a specific book.

Quotes work as a personal reading archive.

For MVP, quotes can be implemented only inside the **Book Details** page as a block called **“Цитати з книги”**.

After MVP, BookNest can add a standalone **Quotes** page that displays all quotes from all books.

## Main user value

Users can:

- save quote text from a book;
- add page and chapter information;
- add their own comment;
- mark a quote as spoiler;
- hide / show spoiler content;
- mark a quote as favorite;
- edit or delete a quote;
- see all quotes from a specific book;
- later, browse all quotes from all books in one archive.

## Main areas

### MVP

- Book Details → `Цитати з книги` block
- Add Quote modal
- Edit Quote modal
- Delete Quote confirmation
- Spoiler show/hide behaviour
- Favorite quote toggle

### Post-MVP

- Standalone `/quotes` page
- Global quotes search
- Filters and sorting
- Quote archive with all books
- Dashboard favorite quotes widget
- Quote image generation / sharing

## Core files

- `01-domain/01-quote-entity.md` — Quote data model
- `01-domain/03-spoiler-rules.md` — spoiler visibility rules
- `01-domain/04-favorite-quote-rules.md` — favorite quote rules
- `02-pages/book-details-quotes-section/` — MVP UI block on Book Details
- `02-pages/quotes-page/` — full archive page
- `03-actions/create-edit-quote/` — modal and create/edit flows

## Important naming

Use **quote favorite** as a separate feature.

`quote.isFavorite` means “favorite quote”. It must not be confused with `book.isFavorite`.

A book can be not favorite, but one of its quotes can be favorite.
A book can be favorite, but none of its quotes have to be favorite.
