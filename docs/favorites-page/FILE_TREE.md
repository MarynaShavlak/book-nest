# File Tree

```text
favorites-docs-v2/
├── 00-module-map.md
├── 01-domain
│   ├── 00-purpose-and-scope.md
│   ├── 01-favorite-book-data-model.md
│   ├── 02-favorite-state-rules.md
│   ├── 03-inclusion-exclusion-rules.md
│   ├── 04-access-and-user-scope.md
│   ├── 05-favorite-added-date.md
│   ├── 06-url-query-state-rules.md
│   ├── 07-what-should-not-change.md
│   ├── 08-validation-and-safety-rules.md
│   └── README.md
├── 01-implementation-order.md
├── 02-pages
│   ├── README.md
│   └── favorites-page
│       ├── 00-page-overview-and-route.md
│       ├── 01-page-header.md
│       ├── 02-summary-cards.md
│       ├── 03-toolbar.md
│       ├── 04-search.md
│       ├── 05-quick-filters.md
│       ├── 06-advanced-filters.md
│       ├── 07-active-filters-bar.md
│       ├── 08-sorting.md
│       ├── 09-view-modes.md
│       ├── 10-book-card-row.md
│       ├── 11-remove-from-favorites-on-page.md
│       ├── 12-pagination-load-more.md
│       ├── 13-view-model.md
│       ├── 14-page-acceptance-criteria.md
│       ├── README.md
│       └── states
│           ├── 00-states-overview-and-priority.md
│           ├── 01-loading-state.md
│           ├── 02-empty-favorites-state.md
│           ├── 03-no-search-results-state.md
│           ├── 04-no-filtered-results-state.md
│           └── 05-error-state.md
├── 03-actions
│   ├── README.md
│   ├── favorite-toggle
│   │   ├── 00-overview.md
│   │   ├── 01-entry-points.md
│   │   ├── 02-ui-representation.md
│   │   ├── 03-book-details-behavior.md
│   │   ├── 04-my-library-behavior.md
│   │   ├── 05-favorites-page-behavior.md
│   │   ├── 06-add-to-favorites.md
│   │   ├── 07-remove-from-favorites.md
│   │   ├── 08-optimistic-update-and-rollback.md
│   │   ├── 09-loading-error-permissions.md
│   │   ├── 10-what-updates-after-toggle.md
│   │   ├── 11-acceptance-criteria.md
│   │   └── README.md
│   └── remove-from-favorites
│       ├── 00-trigger-and-behavior.md
│       ├── 01-no-confirmation.md
│       ├── 02-toast-with-undo.md
│       ├── 03-optimistic-ui.md
│       └── README.md
├── 04-integrations
│   ├── 00-navigation-entry-points.md
│   ├── 01-book-details-contract.md
│   ├── 02-my-library-contract.md
│   ├── 03-search-results-contract.md
│   ├── 04-custom-lists-reading-queue-series-contract.md
│   ├── 05-summary-and-dashboard-contract.md
│   └── README.md
├── 05-shared
│   ├── 00-cross-feature-update-matrix.md
│   ├── 01-summary-calculation-rules.md
│   ├── 04-view-mode-and-pagination-rules.md
│   ├── 05-mvp-vs-future-scope.md
│   ├── 06-accessibility-rules.md
│   ├── 07-master-acceptance-criteria.md
│   ├── README.md
│   ├── filter-search-sort-rules
│   │   ├── 00-search-rules.md
│   │   ├── 01-quick-filters.md
│   │   ├── 02-advanced-filters.md
│   │   ├── 03-active-filters-bar.md
│   │   ├── 04-sorting-rules.md
│   │   ├── 05-toggle-filter-behavior.md
│   │   └── README.md
│   └── states
│       ├── 00-states-overview.md
│       ├── 01-loading-rules.md
│       ├── 02-empty-and-no-results-rules.md
│       ├── 03-error-rules.md
│       ├── 04-state-priority.md
│       └── README.md
└── README.md
```
