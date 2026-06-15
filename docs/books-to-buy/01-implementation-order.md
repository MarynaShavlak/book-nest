# Books to Buy Implementation Order

## Recommended order

1. Add correct ownership status rules.
2. Add `BookStoreLink` model.
3. Add store link validation.
4. Add Books to Buy query: books where `ownershipStatus = want_to_buy`.
5. Build Books to Buy Page route and layout.
6. Build book row with store links.
7. Add Add Store Link action.
8. Add Edit Store Link action.
9. Add Delete Store Link action.
10. Add best offer calculation.
11. Add search, filters and sorting.
12. Add Mark as Bought action.
13. Add Remove from Shopping List action.
14. Add right sidebar statistics.
15. Add loading, empty, error and responsive states.
16. Add Delivery integration action if Delivery module is enabled.
17. Add integration contracts with Book Details, Book Form, My Library, Dashboard and Statistics.
18. Verify master acceptance criteria.

## MVP first cut

Minimal implementation can include:

- page route;
- list of `want_to_buy` books;
- add store link;
- mark as bought;
- remove from shopping list;
- go to Book Details;
- search;
- basic sorting;
- empty/loading/error states.

## After MVP

Add:

- best offer sidebar;
- edit/delete links;
- advanced filters;
- delivery integration;
- statistics widgets;
- manual priority / drag-and-drop.
