# Books to Buy Module File Tree

```text
docs/books-to-buy/
  README.md
  FILE_TREE.md
  00-module-map.md
  01-implementation-order.md

  01-domain/
    README.md
    00-purpose-and-scope.md
    01-ownership-status-rules.md
    02-book-store-link-model.md
    03-store-link-fields.md
    04-best-offer-logic.md
    05-validation-rules.md
    06-data-safety-and-permissions.md

  02-pages/
    README.md
    books-to-buy-page/
      README.md
      00-overview-route-data.md
      01-layout-header-summary.md
      02-search-filters-sorting.md
      03-book-row-store-links.md
      04-right-sidebar.md
      05-states-responsive-acceptance.md

  03-actions/
    README.md
    add-store-link/
      README.md
      00-entry-modal-fields.md
      01-submit-validation-errors.md
      02-success-updates-acceptance.md
    edit-store-link/
      README.md
      00-entry-fields-submit.md
      01-validation-errors-acceptance.md
    delete-store-link/
      README.md
      00-entry-behavior-undo.md
      01-success-errors-acceptance.md
    mark-as-bought/
      README.md
      00-entry-confirmation.md
      01-submit-updates.md
      02-errors-acceptance.md
    remove-from-shopping-list/
      README.md
      00-entry-confirmation.md
      01-submit-updates.md
      02-errors-acceptance.md

  04-integrations/
    README.md
    00-navigation-entry-points.md
    01-book-details-purchase-block-contract.md
    02-book-form-purchase-section-contract.md
    03-delivery-integration-contract.md
    04-my-library-dashboard-statistics-contract.md

  05-shared/
    README.md
    00-cross-feature-update-matrix.md
    01-summary-calculation-rules.md
    02-filter-sort-rules.md
    03-loading-error-empty-states.md
    04-responsive-rules.md
    05-mvp-vs-future-scope.md
    06-master-acceptance-criteria.md
```

## Structure principle

Module is split into small docs:

- `01-domain` — statuses, data model, store links, price logic, validation, permissions.
- `02-pages` — Books to Buy Page UI and behavior.
- `03-actions` — all user actions that change wishlist data.
- `04-integrations` — contracts with Book Details, Book Form, Delivery, My Library, Dashboard and Statistics.
- `05-shared` — shared calculations, states, responsive rules, scope and master acceptance criteria.
