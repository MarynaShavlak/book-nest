# Custom Lists Module Documentation v2

This folder contains the restructured documentation for the **Custom Lists** module in BookNest.

The goal of this version is to make the documentation easier for Claude Code to consume while building the web application.  
Instead of opening one long file with page, modal, validation, actions, empty states, and acceptance criteria mixed together, use a small context bundle for the exact feature being implemented.

## Main rule for Claude Code

Do **not** pass the old long files together with this structure.

Use:

```text
00-module-map.md
01-domain/... relevant domain rules
02-pages/... or 03-actions/... exact feature folder
05-shared/... only if needed
```

## Recommended context bundles

### Custom Lists Page

```text
00-module-map.md
01-domain/03-system-vs-custom-lists.md
01-domain/04-access-and-ownership-rules.md
02-pages/custom-lists-page/
05-shared/02-filter-sort-rules.md
05-shared/03-loading-error-empty-states.md
```

### Custom List Details Page

```text
00-module-map.md
01-domain/05-list-membership-rules.md
01-domain/07-position-and-order-rules.md
02-pages/custom-list-details-page/
05-shared/03-loading-error-empty-states.md
```

### Create / Edit / Delete Custom List

```text
00-module-map.md
01-domain/02-custom-list-fields.md
01-domain/08-validation-rules.md
01-domain/09-delete-safety-rules.md
03-actions/create-edit-delete-custom-list/
```

### Add Book to Custom Lists from Book Details

```text
00-module-map.md
01-domain/05-list-membership-rules.md
03-actions/add-book-to-custom-lists/
04-integrations/01-book-details-my-lists-block-contract.md
```

### Reorder books inside a custom list

```text
00-module-map.md
01-domain/07-position-and-order-rules.md
03-actions/reorder-books-in-custom-list/
```

## Folder meaning

| Folder | Purpose |
| --- | --- |
| `01-domain/` | Stable business rules and data rules |
| `02-pages/` | Page-level UI documentation |
| `03-actions/` | User actions, modals, submit behavior |
| `04-integrations/` | Contracts with Book Details, Reading Queue, navigation |
| `05-shared/` | Shared states, filters, summaries, acceptance criteria |
