# Layout, Header and Summary

## Desktop layout

```text
[Page header]
[Toolbar]
[Books list] [Right sidebar]
```

## Mobile layout

```text
Header
Search
Filters
Sorting
Summary
Books list
Sidebar blocks
```

## Header

Show:

- title;
- subtitle;
- count badge;
- primary action.

Example:

```text
Книги до покупки 14 книг
Ваш список бажаних книг, які ви плануєте придбати.
[Додати книгу]
```

## Primary action

Action:

```text
Додати книгу
```

Behavior:

- opens Create Book Form;
- preselects `ownershipStatus = want_to_buy` if opened from this page;
- created book appears on Books to Buy Page.

## Summary placement

Recommended MVP:

```text
Show summary in right sidebar.
```

Optional top summary cards:

- Усього книг;
- Середня ціна;
- Магазинів відстежується;
- Найвигідніша пропозиція.

## Summary calculations

- Books count: count wishlist books.
- Average price: average of best offer prices.
- Stores count: unique `storeName` across links.
- Best offer: lowest best offer across books.
