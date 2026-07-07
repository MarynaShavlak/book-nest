# Quotes Implementation Order

## Stage 1 — Domain and backend contract

1. Add Quote model.
2. Add quote CRUD operations.
3. Add bookId relation.
4. Add validation for required text.
5. Add spoiler and favorite fields.
6. Add createdAt / updatedAt.

## Stage 2 — MVP: Book Details quotes block

1. Add `Цитати з книги` section to Book Details.
2. Fetch quotes by `bookId`.
3. Show quotes count.
4. Show empty state.
5. Show last quotes or favorite quotes.
6. Add `Додати цитату` action.
7. Add `Переглянути всі цитати книги` action if there are many quotes.

## Stage 3 — Add / Edit quote modal

1. Add book preview in modal.
2. Add required `text` textarea.
3. Add optional `chapter` input.
4. Add optional `page` input.
5. Add optional `comment` textarea.
6. Add `isSpoiler` toggle.
7. Add `isFavorite` toggle.
8. Add validation and character counters.
9. Add create and edit submit flows.

## Stage 4 — Quote card actions

1. Favorite / unfavorite quote.
2. Show / hide spoiler.
3. Edit quote.
4. Delete quote.
5. Go to Book Details.

## Stage 5 — Standalone Quotes page

1. Add `/quotes` route.
2. Add page header.
3. Add global search.
4. Add quick filters.
5. Add advanced filters.
6. Add sorting.
7. Add grid/list of quote cards.
8. Add right sidebar with stats and quick filters.
9. Add pagination or infinite scroll.

## Stage 6 — Future improvements

1. Quote of the day.
2. Favorite quotes widget on Dashboard.
3. Link quote to character.
4. Link quote to series.
5. Export quotes.
6. Generate beautiful quote image.
7. Share quote.
8. Markdown formatting.
9. Quote tags and collections.
