# Quotes Test Cases

## Create quote

- User can open Add Quote modal from Book Details.
- Modal shows book preview.
- User cannot save empty quote text.
- User can save quote with only required text.
- User can save quote with chapter.
- User can save quote with page.
- User can save quote with comment.
- User can save quote as spoiler.
- User can save quote as favorite.
- Created quote appears in Book Details quotes block.

## Edit quote

- User can open Edit Quote modal.
- Modal fields are prefilled.
- User can update text.
- User can update chapter.
- User can update page.
- User can update comment.
- User can toggle spoiler.
- User can toggle favorite.
- Updated quote appears after save.

## Delete quote

- User can open delete confirmation.
- User can cancel delete.
- User can confirm delete.
- Deleted quote disappears from Book Details.
- Deleted quote disappears from global Quotes page.

## Spoilers

- Spoiler quote text is hidden by default.
- Spoiler quote shows badge `Зі спойлерами`.
- User can reveal spoiler.
- User can hide spoiler again.
- Non-spoiler quote text is visible by default.
- Revealing spoiler does not change `quote.isSpoiler` in database.

## Favorites

- User can mark quote as favorite.
- Favorite icon becomes active.
- User can remove quote from favorites.
- Favorite icon becomes inactive.
- Favorite quote appears in `Улюблені` filter.
- Removing quote from favorites removes it from `Улюблені` filter.

## Critical favorite independence

- Marking quote as favorite does not mark book as favorite.
- Removing quote from favorites does not remove book from favorites.
- Marking book as favorite does not mark all book quotes as favorite.
- Removing book from favorites does not remove quote favorites.

## Search

- Search by quote text works.
- Search by book title works.
- Search by author works.
- Search by comment works.
- Search by chapter works.
- Search by page works.

## Filters

- Filter `Усі` shows all quotes.
- Filter `Без спойлерів` shows only non-spoiler quotes.
- Filter `Зі спойлерами` shows only spoiler quotes.
- Filter `Улюблені` shows only favorite quotes.
- Filter `З коментарем` shows only quotes with comment.

## Standalone Quotes page

- User sees all quotes from all books.
- User can open book from quote card.
- User can add quote from Quotes page after selecting book.
- User can sort quotes.
- Empty state appears when no quotes exist.
- Empty filter state appears when no results match filters.
