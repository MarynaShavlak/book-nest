# Recommended implementation order

## 1. Domain foundation

1. Implement book inclusion rules.
2. Implement user scope/access rules.
3. Implement URL query state parsing.
4. Implement shared search/filter/sort utilities.

## 2. Base page shell

1. Route `/library`.
2. Sidebar navigation item.
3. Page header.
4. Primary action `Додати книгу`.
5. Initial loading/empty/error states.

## 3. Data rendering

1. Fetch current user books.
2. Apply search.
3. Apply filters.
4. Apply sorting.
5. Render grid/list view.
6. Add pagination/load more.

## 4. Page controls

1. Toolbar.
2. Search input.
3. Quick filters.
4. Advanced filters.
5. Active filters bar.
6. Sorting select.
7. View mode toggle.

## 5. Actions

1. Book card actions.
2. Delete confirmation.
3. Selection behavior.
4. Bulk actions bar.
5. Bulk action flows.

## 6. Integrations

1. Book Details navigation.
2. Add/Edit Book flow.
3. Favorites sync.
4. Custom Lists sync.
5. Reading Queue sync.
6. Delivery/Loan ownership-related sync.
7. Dashboard/Statistics counters.
