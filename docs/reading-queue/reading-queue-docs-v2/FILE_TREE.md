# File Tree

```text
reading-queue-docs-v2/
├── 01-domain
│   ├── 00-purpose-and-scope.md
│   ├── 01-reading-queue-data-model.md
│   ├── 02-queue-item-fields.md
│   ├── 03-access-and-user-scope.md
│   ├── 04-position-and-order-rules.md
│   ├── 05-duplicate-prevention-rules.md
│   ├── 06-status-independence-rules.md
│   ├── 07-action-availability-rules.md
│   ├── 08-state-priority-rules.md
│   ├── 09-validation-and-safety-rules.md
│   ├── 10-what-should-not-change.md
│   └── README.md
├── 02-pages
│   ├── reading-queue-page
│   │   ├── states
│   │   │   ├── 00-empty-state.md
│   │   │   ├── 01-no-search-results-state.md
│   │   │   ├── 02-loading-state.md
│   │   │   ├── 03-error-state.md
│   │   │   ├── 04-state-priority.md
│   │   │   └── README.md
│   │   ├── 00-page-overview-route-access.md
│   │   ├── 01-page-header.md
│   │   ├── 02-toolbar.md
│   │   ├── 03-search.md
│   │   ├── 04-sorting.md
│   │   ├── 05-drag-hint.md
│   │   ├── 06-queue-list.md
│   │   ├── 07-queue-item-structure.md
│   │   ├── 08-position-display.md
│   │   ├── 09-next-to-read-sidebar.md
│   │   ├── 10-basic-queue-statistics.md
│   │   ├── 11-ui-updates-after-actions.md
│   │   ├── 12-page-acceptance-criteria.md
│   │   ├── 13-mvp-exclusions.md
│   │   └── README.md
│   └── README.md
├── 03-actions
│   ├── add-book-to-queue-from-page
│   │   ├── 00-entry-point.md
│   │   ├── 01-book-selection-contract.md
│   │   ├── 02-position-and-submit.md
│   │   ├── 03-acceptance-criteria.md
│   │   └── README.md
│   ├── add-to-reading-queue
│   │   ├── 00-overview-and-main-idea.md
│   │   ├── 01-entry-point-and-availability.md
│   │   ├── 02-book-details-ui-states.md
│   │   ├── 03-modal-shell.md
│   │   ├── 04-book-preview-in-modal.md
│   │   ├── 05-position-selection.md
│   │   ├── 06-position-logic.md
│   │   ├── 07-specific-position-validation.md
│   │   ├── 08-empty-queue-behavior.md
│   │   ├── 09-submit-behavior.md
│   │   ├── 10-duplicate-prevention.md
│   │   ├── 11-ui-after-successful-add.md
│   │   ├── 12-loading-error-accessibility.md
│   │   ├── 13-mvp-exclusions.md
│   │   ├── 14-acceptance-criteria.md
│   │   └── README.md
│   ├── remove-from-reading-queue
│   │   ├── 00-overview-entry-points.md
│   │   ├── 01-remove-from-book-details.md
│   │   ├── 02-remove-from-reading-queue-page.md
│   │   ├── 03-remove-behavior.md
│   │   ├── 04-undo-remove-logic.md
│   │   ├── 05-position-recalculation-after-remove.md
│   │   ├── 06-ui-after-successful-remove.md
│   │   ├── 07-loading-and-error-behavior.md
│   │   ├── 08-acceptance-criteria.md
│   │   └── README.md
│   ├── reorder-reading-queue
│   │   ├── 00-overview.md
│   │   ├── 01-disabled-states.md
│   │   ├── 02-position-recalculation.md
│   │   ├── 03-save-and-error-behavior.md
│   │   ├── 04-acceptance-criteria.md
│   │   └── README.md
│   ├── start-reading-from-queue
│   │   ├── 00-action-ui.md
│   │   ├── 01-start-reading-logic.md
│   │   ├── 02-checkbox-remove-from-queue.md
│   │   ├── 03-ui-updates-after-start.md
│   │   ├── 04-acceptance-criteria.md
│   │   └── README.md
│   ├── view-book-from-queue
│   │   ├── 00-view-book-action.md
│   │   ├── 01-navigation-return-behavior.md
│   │   └── README.md
│   └── README.md
├── 04-integrations
│   ├── 00-navigation-entry-points.md
│   ├── 01-book-details-contract.md
│   ├── 02-my-library-contract.md
│   ├── 03-favorites-contract.md
│   ├── 04-dashboard-contract.md
│   ├── 05-custom-lists-contract.md
│   ├── 06-series-contract.md
│   ├── 07-statistics-contract.md
│   ├── 08-book-form-contract.md
│   └── README.md
├── 05-shared
│   ├── filter-search-sort-rules
│   │   ├── 00-search-rules.md
│   │   ├── 01-sort-rules.md
│   │   ├── 02-drag-disabled-by-search-or-sort.md
│   │   └── README.md
│   ├── master-acceptance-criteria
│   │   ├── 01-general.md
│   │   ├── 02-page-header.md
│   │   ├── 03-queue-list.md
│   │   ├── 04-drag-and-drop.md
│   │   ├── 05-search.md
│   │   ├── 06-start-reading.md
│   │   ├── 07-remove-from-queue.md
│   │   ├── 08-sidebar.md
│   │   ├── 09-states.md
│   │   ├── 20-add-to-queue.md
│   │   ├── 21-remove-from-queue.md
│   │   ├── 22-reorder.md
│   │   ├── 23-start-reading.md
│   │   └── README.md
│   ├── states
│   │   ├── 00-empty-queue-state.md
│   │   ├── 01-no-search-results-state.md
│   │   ├── 02-loading-state.md
│   │   ├── 03-error-state.md
│   │   ├── 04-action-loading-states.md
│   │   ├── 05-action-error-states.md
│   │   ├── 06-state-priority.md
│   │   └── README.md
│   ├── 00-cross-feature-update-matrix.md
│   ├── 01-loading-error-empty-state-priority.md
│   ├── 02-optimistic-update-and-rollback.md
│   ├── 03-accessibility-rules.md
│   ├── 04-responsive-rules.md
│   ├── 05-mvp-vs-future-scope.md
│   └── README.md
├── 00-module-map.md
├── 01-implementation-order.md
└── README.md
```
