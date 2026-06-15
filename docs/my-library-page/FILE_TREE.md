# File tree

```text
my-library-docs-v2/
├── 01-domain
│   ├── url-query-rules
│   │   ├── 00-index.md
│   │   ├── 01-page-url-behavior.md
│   │   ├── 02-search-url-behavior.md
│   │   ├── 03-quick-filters-url-behavior.md
│   │   ├── 04-advanced-filters-url-behavior.md
│   │   ├── 05-active-filters-url-behavior.md
│   │   ├── 06-sorting-url-behavior.md
│   │   ├── 07-view-mode-url-behavior.md
│   │   └── 08-pagination-url-behavior.md
│   ├── 00-purpose-and-scope.md
│   ├── 01-book-inclusion-rules.md
│   ├── 02-access-and-user-scope.md
│   ├── 03-url-query-state-rules.md
│   ├── 04-library-query-and-result-rules.md
│   ├── 05-summary-calculation-rules.md
│   ├── 06-book-card-action-availability-rules.md
│   ├── 07-bulk-selection-and-action-rules.md
│   ├── 08-delete-safety-rules.md
│   └── 09-state-priority-rules.md
├── 02-pages
│   └── my-library-page
│       ├── active-filters-bar
│       │   ├── 00-overview.md
│       │   ├── 01-when-to-show.md
│       │   ├── 02-what-to-show.md
│       │   ├── 03-chip-behavior.md
│       │   ├── 04-remove-one-filter.md
│       │   ├── 05-clear-all.md
│       │   ├── 06-url-behavior.md
│       │   ├── 07-empty-state.md
│       │   └── 08-acceptance-criteria.md
│       ├── advanced-filters
│       │   ├── 00-overview.md
│       │   ├── 01-purpose.md
│       │   ├── 02-recommended-filters.md
│       │   ├── 03-reading-status-filter.md
│       │   ├── 04-ownership-status-filter.md
│       │   ├── 05-format-filter.md
│       │   ├── 06-classification-filters.md
│       │   ├── 07-author-and-publisher-filters.md
│       │   ├── 08-book-type-filter.md
│       │   ├── 09-rating-and-edition-filters.md
│       │   ├── 10-filters-that-should-not-be-included-here.md
│       │   ├── 11-filter-behavior.md
│       │   ├── 12-clear-behavior.md
│       │   ├── 13-url-query-behavior.md
│       │   └── 14-acceptance-criteria.md
│       ├── header
│       │   ├── 00-overview.md
│       │   ├── 01-header-content.md
│       │   ├── 02-title.md
│       │   ├── 03-subtitle.md
│       │   ├── 04-primary-action.md
│       │   ├── 05-primary-action-logic.md
│       │   ├── 06-summary-cards.md
│       │   ├── 07-summary-cards-behavior.md
│       │   └── 08-acceptance-criteria.md
│       ├── page-entry
│       │   ├── 00-overview.md
│       │   ├── 01-sidebar-navigation.md
│       │   ├── 02-route.md
│       │   ├── 03-page-access-rules.md
│       │   ├── 04-user-scope.md
│       │   ├── 05-header-action-entry-point.md
│       │   ├── 06-url-behavior.md
│       │   └── 07-acceptance-criteria.md
│       ├── pagination
│       │   ├── 00-overview.md
│       │   ├── 01-purpose.md
│       │   ├── 02-default-behavior.md
│       │   ├── 03-counter.md
│       │   ├── 04-button-behavior.md
│       │   ├── 05-loading-state.md
│       │   ├── 06-end-state.md
│       │   ├── 07-search-filters-and-sorting-behavior.md
│       │   ├── 08-url-behavior.md
│       │   ├── 09-api-behavior.md
│       │   ├── 10-error-behavior.md
│       │   └── 11-acceptance-criteria.md
│       ├── quick-filters
│       │   ├── 00-overview.md
│       │   ├── 01-recommended-quick-filters.md
│       │   ├── 02-ui-behavior.md
│       │   ├── 03-filter-behavior.md
│       │   ├── 04-url-query-behavior.md
│       │   ├── 05-what-not-to-include-as-quick-filters.md
│       │   └── 06-acceptance-criteria.md
│       ├── search
│       │   ├── 00-overview.md
│       │   ├── 01-search-input.md
│       │   ├── 02-search-fields.md
│       │   ├── 03-what-search-should-not-include.md
│       │   ├── 04-search-behavior.md
│       │   ├── 05-search-filters-logic.md
│       │   ├── 06-url-query-behavior.md
│       │   ├── 07-empty-search-behavior.md
│       │   ├── 08-no-results-state.md
│       │   ├── 09-technical-behavior.md
│       │   └── 10-acceptance-criteria.md
│       ├── sorting
│       │   ├── 00-overview.md
│       │   ├── 01-purpose.md
│       │   ├── 02-default-sorting.md
│       │   ├── 03-recommended-sorting-options.md
│       │   ├── 04-sorting-behavior.md
│       │   ├── 05-empty-values-behavior.md
│       │   ├── 06-url-query-behavior.md
│       │   ├── 07-interaction-with-filters.md
│       │   └── 08-acceptance-criteria.md
│       ├── states
│       │   ├── 00-overview.md
│       │   ├── 01-states-overview.md
│       │   ├── 02-loading-state.md
│       │   ├── 03-empty-library-state.md
│       │   ├── 04-no-search-results-state.md
│       │   ├── 05-no-filtered-results-state.md
│       │   ├── 06-error-state.md
│       │   ├── 07-state-priority.md
│       │   └── 08-acceptance-criteria.md
│       ├── summary-sidebar
│       │   ├── 00-overview.md
│       │   ├── 01-purpose.md
│       │   ├── 02-sidebar-blocks.md
│       │   ├── 03-top-genres.md
│       │   ├── 04-top-tags.md
│       │   ├── 05-recently-added-books.md
│       │   ├── 06-quick-links.md
│       │   ├── 07-responsive-behavior.md
│       │   └── 08-acceptance-criteria.md
│       ├── toolbar
│       │   ├── 00-overview.md
│       │   ├── 01-purpose.md
│       │   ├── 02-toolbar-elements.md
│       │   ├── 03-recommended-layout.md
│       │   ├── 04-basic-behavior.md
│       │   └── 05-acceptance-criteria.md
│       ├── view-modes
│       │   ├── 00-overview.md
│       │   ├── 01-available-view-modes.md
│       │   ├── 02-default-view-mode.md
│       │   ├── 03-grid-view.md
│       │   ├── 04-list-view.md
│       │   ├── 05-view-mode-behavior.md
│       │   ├── 06-url-query-behavior.md
│       │   ├── 07-responsive-behavior.md
│       │   └── 08-acceptance-criteria.md
│       └── README.md
├── 03-actions
│   ├── book-card-actions
│   │   ├── 00-overview.md
│   │   ├── 01-purpose.md
│   │   ├── 02-visible-actions.md
│   │   ├── 03-more-actions-menu.md
│   │   ├── 04-conditional-actions.md
│   │   ├── 05-delete-behavior.md
│   │   ├── 06-behavior-after-action.md
│   │   ├── 07-what-not-to-do.md
│   │   └── 08-acceptance-criteria.md
│   ├── bulk-actions
│   │   ├── 00-overview.md
│   │   ├── 01-purpose.md
│   │   ├── 02-selection-behavior.md
│   │   ├── 03-bulk-actions-bar.md
│   │   ├── 04-recommended-minimal-bulk-actions.md
│   │   ├── 05-add-to-custom-list.md
│   │   ├── 06-add-to-reading-queue.md
│   │   ├── 07-change-reading-status.md
│   │   ├── 08-change-ownership-status.md
│   │   ├── 09-add-tags.md
│   │   ├── 10-favorite-actions.md
│   │   ├── 11-delete-books.md
│   │   ├── 12-what-not-to-include-in-bulk-actions.md
│   │   ├── 13-behavior-after-bulk-action.md
│   │   └── 14-acceptance-criteria.md
│   └── README.md
├── 04-integrations
│   ├── 00-navigation-entry-points.md
│   ├── 01-book-details-contract.md
│   ├── 02-add-edit-book-contract.md
│   ├── 03-custom-lists-contract.md
│   ├── 04-reading-queue-contract.md
│   ├── 05-favorites-contract.md
│   ├── 06-delivery-loan-ownership-contract.md
│   ├── 07-series-authors-genres-statistics-contract.md
│   └── 08-dashboard-summary-contract.md
├── 05-shared
│   ├── filter-search-sort-rules
│   │   ├── advanced-filter-rules
│   │   │   ├── 00-index.md
│   │   │   ├── 01-recommended-filters.md
│   │   │   ├── 02-reading-status-filter.md
│   │   │   ├── 03-ownership-status-filter.md
│   │   │   ├── 04-format-filter.md
│   │   │   ├── 05-classification-filters.md
│   │   │   ├── 06-author-and-publisher-filters.md
│   │   │   ├── 07-book-type-filter.md
│   │   │   ├── 08-rating-and-edition-filters.md
│   │   │   ├── 09-excluded-filters.md
│   │   │   ├── 10-filter-behavior.md
│   │   │   └── 11-clear-behavior.md
│   │   ├── 00-search-fields.md
│   │   ├── 01-search-behavior.md
│   │   ├── 02-quick-filter-rules.md
│   │   ├── 04-active-filter-chip-rules.md
│   │   └── 05-sorting-rules.md
│   ├── master-acceptance-criteria
│   │   ├── 00-index.md
│   │   ├── 01-page-entry-ac.md
│   │   ├── 02-header-ac.md
│   │   ├── 03-toolbar-ac.md
│   │   ├── 04-search-ac.md
│   │   ├── 05-quick-filters-ac.md
│   │   ├── 06-advanced-filters-ac.md
│   │   ├── 07-active-filters-bar-ac.md
│   │   ├── 08-sorting-ac.md
│   │   ├── 09-view-modes-ac.md
│   │   ├── 10-book-card-actions-ac.md
│   │   ├── 11-bulk-actions-ac.md
│   │   ├── 12-summary-sidebar-ac.md
│   │   ├── 13-states-ac.md
│   │   └── 14-pagination-ac.md
│   ├── pagination-rules
│   │   ├── 00-index.md
│   │   ├── 01-default-behavior.md
│   │   ├── 02-counter.md
│   │   ├── 03-button-behavior.md
│   │   ├── 04-loading-state.md
│   │   ├── 05-search-filters-sorting-behavior.md
│   │   ├── 06-api-behavior.md
│   │   └── 07-error-behavior.md
│   ├── states
│   │   ├── 00-state-priority.md
│   │   ├── 01-loading-state.md
│   │   ├── 02-empty-library-state.md
│   │   ├── 03-no-search-results-state.md
│   │   ├── 04-no-filtered-results-state.md
│   │   └── 05-error-state.md
│   ├── 00-cross-feature-update-matrix.md
│   ├── 01-view-mode-and-responsive-rules.md
│   ├── 02-pagination-rules.md
│   └── 03-mvp-vs-future-scope.md
├── 00-module-map.md
├── 01-implementation-order.md
├── FILE_TREE.md
└── README.md
```
