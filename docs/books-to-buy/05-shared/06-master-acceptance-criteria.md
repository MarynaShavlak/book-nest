# Master Acceptance Criteria

## General

- Book with `ownershipStatus = want_to_buy` appears on Books to Buy Page.
- Book without `ownershipStatus = want_to_buy` does not appear.
- User can open the page from sidebar.
- Page has title, subtitle and count badge.
- User can open Book Details from each row.

## Store links

- User can add store link.
- User can edit store link.
- User can delete store link.
- Store link has store name and URL.
- URL is validated.
- Price is optional.
- Currency defaults to `UAH`.
- Store links belong only to current user.

## Best offer

- Best offer is calculated from store links.
- Links without price are ignored.
- Lowest valid price is shown as best offer.
- Multiple currencies are not auto-converted in MVP.

## Search, filters and sorting

- User can search by title, author, publisher and store.
- User can filter by links, price, store, publisher, genre and tag.
- User can sort by date, title, author, publisher and price.
- Price sorting uses best offer.

## Mark as bought

- User can mark a wishlist book as bought.
- Confirmation modal opens.
- Status changes to `owned` after confirm.
- Book disappears from Books to Buy Page.
- Book remains in My Library.
- Store links are not deleted.

## Remove from shopping list

- User can remove a book from shopping list.
- Confirmation modal opens.
- Status changes to `none` after confirm.
- Book disappears from Books to Buy Page.
- Book remains in My Library.
- Store links are not deleted.

## Delivery integration

- If Delivery module is enabled, user can mark book as in transit.
- Mark as in transit opens Delivery flow.
- After success, book disappears from Books to Buy and appears in Books in Transit.

## States

- Loading state exists.
- Empty page state exists.
- Empty search state exists.
- No links state exists.
- Error state exists.
- Action loading and error states exist.

## Data safety

- No Books to Buy action deletes the book.
- Store links are not deleted during ownership status changes.
- Actions do not change readingStatus, formats, rating, notes, quotes, characters, series relation, reading queue, custom lists or favorite state.

## Permissions

- User sees only own wishlist books.
- User sees only own store links.
- User cannot edit or delete another user's data.
