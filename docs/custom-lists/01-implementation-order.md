# Implementation Order

## 1. Domain first

Start with these files:

```text
01-domain/01-custom-list-data-model.md
01-domain/02-custom-list-fields.md
01-domain/05-list-membership-rules.md
01-domain/08-validation-rules.md
01-domain/09-delete-safety-rules.md
```

This prevents bugs where the UI is implemented before ownership, duplicates, list deletion, and membership behavior are clear.

## 2. Build Custom Lists Page

Use:

```text
02-pages/custom-lists-page/
03-actions/create-edit-delete-custom-list/
```

Implement page shell, header, toolbar, grid/list cards, empty state, and create/edit/delete actions.

## 3. Build Custom List Details Page

Use:

```text
02-pages/custom-list-details-page/
03-actions/add-books-to-list/
03-actions/remove-book-from-custom-list/
03-actions/reorder-books-in-custom-list/
```

This page depends on the domain rules for membership and ordering.

## 4. Add Book Details integration

Use:

```text
03-actions/add-book-to-custom-lists/
04-integrations/01-book-details-my-lists-block-contract.md
04-integrations/03-book-details-add-to-list-action-contract.md
```

The Book Details page should not contain the full custom lists module logic. It should only call the action and show the user’s list memberships.

## 5. Add polish

Use:

```text
05-shared/02-filter-sort-rules.md
05-shared/03-loading-error-empty-states.md
05-shared/04-responsive-rules.md
05-shared/06-master-acceptance-criteria.md
```

Do this after the main flows work.
