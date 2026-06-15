# Custom Lists Module Map

## Module purpose

The **Custom Lists** module lets a user create manual thematic book collections.

Examples:

```text
Осіннє читання
Темне фентезі
Книги для настрою
Хочу перечитати
Книги з драконами
Книги від блогерів
```

## Core concept

A custom list is a user-owned collection of books.

Important rules:

- one list can contain many books;
- one book can be in multiple custom lists;
- one book cannot be duplicated inside the same custom list;
- removing a book from a list does not delete the book;
- deleting a list does not delete books from the library;
- custom lists do not replace system pages like Favorites, Reading Queue, Books to Buy, Delivery, Borrowed Books, or Series.

## Main routes

| Route | Page |
| --- | --- |
| `/lists` | Custom Lists Page |
| `/lists/:listId` | Custom List Details Page |

## Main documents

| Area | Folder |
| --- | --- |
| Custom lists domain rules | `01-domain/` |
| All lists page | `02-pages/custom-lists-page/` |
| Single list details page | `02-pages/custom-list-details-page/` |
| Create / edit / delete list | `03-actions/create-edit-delete-custom-list/` |
| Add book to custom lists from Book Details | `03-actions/add-book-to-custom-lists/` |
| Add multiple books to one list from details page | `03-actions/add-books-to-list/` |
| Remove book from one list | `03-actions/remove-book-from-custom-list/` |
| Reorder books in a list | `03-actions/reorder-books-in-custom-list/` |
| Book Details / Reading Queue integration contracts | `04-integrations/` |
| Shared UI states and acceptance criteria | `05-shared/` |

## Implementation principle

Build the module in this order:

1. Domain model and validation.
2. `/lists` page shell.
3. Create list action.
4. List cards and cover previews.
5. `/lists/:listId` details page.
6. Add books to list.
7. Add book to list from Book Details.
8. Remove book from list.
9. Reorder books in list.
10. Final loading, empty, error, and accessibility states.
