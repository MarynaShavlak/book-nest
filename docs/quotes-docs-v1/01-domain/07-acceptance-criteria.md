# Acceptance Criteria

## Book Details

- Book Details page has `Цитати з книги` block.
- User can click `Додати цитату`.
- Add Quote modal opens.
- Modal shows book preview.
- User can enter quote text.
- User can enter chapter.
- User can enter page.
- User can add comment.
- User can mark quote as spoiler.
- User can mark quote as favorite.
- User can save quote.
- Quote appears in the book quotes block.

## Validation

- Quote text is required.
- Empty spaces are not accepted as text.
- Text counter is shown.
- Comment counter is shown.
- Page accepts only positive integer values.

## Spoilers

- If quote is marked as spoiler, quote text is hidden by default.
- User can click `Показати спойлер`.
- Quote text becomes visible.
- User can click `Приховати спойлер`.
- Quote text becomes hidden again.

## Favorite quotes

- User can mark quote as favorite.
- Favorite quote has active icon.
- User can remove quote from favorites.
- Favorite quote state does not affect book favorite state.
- Book favorite state does not affect quote favorite state.

## Edit / delete

- User can edit quote.
- Edit modal is prefilled with existing quote data.
- User can delete quote.
- Delete action requires confirmation.
- Deleted quote disappears from list.

## Standalone Quotes page

- User sees all their quotes.
- User can search quotes.
- User can filter quotes.
- User can sort quotes.
- User can go from quote to book.
- User can edit quote.
- User can delete quote.
- Spoiler quotes are hidden by default.
