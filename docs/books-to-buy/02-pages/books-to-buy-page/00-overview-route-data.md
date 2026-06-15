# Overview, Route and Data

## Purpose

Books to Buy Page shows all books the user wants to purchase.

Visibility condition:

```ts
ownershipStatus === "want_to_buy"
```

## Route

Recommended route:

```text
/books-to-buy
```

Sidebar label:

```text
Книги до покупки
```

Page title:

```text
Книги до покупки
```

Subtitle:

```text
Ваш список бажаних книг, які ви плануєте придбати.
```

## Data loaded

The page should load:

- books with `ownershipStatus = want_to_buy`;
- related store links for these books;
- derived values: best offer, links count, has price, unique stores;
- filters/sorting metadata if needed.

## Book display fields

- cover;
- title;
- original title;
- author;
- publisher;
- genres/tags;
- ownership badge;
- store links;
- best offer.

## Store link display fields

- store name;
- URL;
- price;
- currency;
- external link action.

## Access

Only authenticated users can access the page.

User can see only own books and own store links.
