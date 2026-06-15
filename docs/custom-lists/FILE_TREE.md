# File Tree

```text
custom-lists-docs-v2/
├── 01-domain/
│   ├── 00-purpose-and-scope.md
│   ├── 01-custom-list-data-model.md
│   ├── 02-custom-list-fields.md
│   ├── 03-system-vs-custom-lists.md
│   ├── 04-access-and-ownership-rules.md
│   ├── 05-list-membership-rules.md
│   ├── 05a-membership-main-idea.md
│   ├── 05b-existing-list-selection.md
│   ├── 05c-duplicate-prevention.md
│   ├── 05d-remove-membership-rules.md
│   ├── 05e-displayed-books-rules.md
│   ├── 06-book-count-and-cover-preview-rules.md
│   ├── 07-position-and-order-rules.md
│   ├── 08-validation-rules.md
│   ├── 09-delete-safety-rules.md
│   ├── 09a-delete-list-safety.md
│   ├── 09b-remove-book-from-list-safety.md
│   ├── 10-custom-list-state-model.md
│   └── README.md
├── 02-pages/
│   ├── custom-list-details-page/
│   │   ├── 00-overview-route-access.md
│   │   ├── 01-header-and-info-block.md
│   │   ├── 02-toolbar-search-sort.md
│   │   ├── 03-book-position-and-reorder.md
│   │   ├── 04-books-view-and-card-actions.md
│   │   ├── 05-add-books-modal.md
│   │   ├── 05a-add-books-entry-and-modal-shell.md
│   │   ├── 05b-add-books-left-right-sides.md
│   │   ├── 05c-add-books-submit-and-duplicates.md
│   │   ├── 06-remove-book-flow.md
│   │   ├── 07-list-management-from-details.md
│   │   ├── 08-related-book-details-ui.md
│   │   ├── 09-states-priority.md
│   │   ├── 10-scope-and-future.md
│   │   ├── 11-acceptance-criteria.md
│   │   └── README.md
│   ├── custom-lists-page/
│   │   ├── 00-overview-route-access.md
│   │   ├── 01-header.md
│   │   ├── 02-toolbar-search-sort-view.md
│   │   ├── 03-lists-grid-and-card.md
│   │   ├── 04-card-actions.md
│   │   ├── 04a-open-create-actions.md
│   │   ├── 04b-edit-delete-actions.md
│   │   ├── 05-sidebar.md
│   │   ├── 06-states-priority.md
│   │   ├── 07-page-updates-and-scope.md
│   │   ├── 08-acceptance-criteria.md
│   │   └── README.md
│   └── README.md
├── 03-actions/
│   ├── add-book-to-custom-lists/
│   │   ├── 00-overview-entry-availability.md
│   │   ├── 01-modal-structure-and-book-preview.md
│   │   ├── 02-existing-lists-selection.md
│   │   ├── 03-create-new-list-inside-modal.md
│   │   ├── 04-duplicate-prevention.md
│   │   ├── 05-submit-and-no-changes.md
│   │   ├── 06-remove-from-lists.md
│   │   ├── 07-ui-updates-after-submit.md
│   │   ├── 08-loading-error-validation-accessibility.md
│   │   ├── 09-scope-and-ac.md
│   │   └── README.md
│   ├── add-books-to-list/
│   │   ├── 00-overview-entry-modal.md
│   │   ├── 01-submit-and-duplicate-prevention.md
│   │   ├── 02-states-and-links.md
│   │   └── README.md
│   ├── create-edit-delete-custom-list/
│   │   ├── 00-overview-entry-access.md
│   │   ├── 01-create-list-entry-and-modal.md
│   │   ├── 02-create-list-validation-submit.md
│   │   ├── 03-edit-list-action.md
│   │   ├── 04-delete-list-action.md
│   │   ├── 05-loading-error-ui-updates.md
│   │   ├── 06-accessibility-scope-ac.md
│   │   └── README.md
│   ├── remove-book-from-custom-list/
│   │   ├── 00-remove-flow.md
│   │   ├── 01-confirmation-and-undo.md
│   │   ├── 02-safety-rules.md
│   │   └── README.md
│   ├── reorder-books-in-custom-list/
│   │   ├── 00-position-model.md
│   │   ├── 01-reorder-behavior.md
│   │   ├── 02-move-up-down-mvp.md
│   │   ├── 03-drag-and-drop-future.md
│   │   └── README.md
│   └── README.md
├── 04-integrations/
│   ├── 00-navigation-entry-points.md
│   ├── 01-book-details-my-lists-block-contract.md
│   ├── 02-reading-queue-contract.md
│   ├── 03-book-details-add-to-list-action-contract.md
│   ├── 04-dashboard-my-library-contract.md
│   └── README.md
├── 05-shared/
│   ├── 00-cross-feature-update-matrix.md
│   ├── 01-summary-calculation-rules.md
│   ├── 02-filter-sort-rules.md
│   ├── 02a-custom-lists-page-filter-sort.md
│   ├── 02b-custom-list-details-filter-sort.md
│   ├── 03-loading-error-empty-states.md
│   ├── 03a-custom-lists-page-states.md
│   ├── 03b-custom-list-details-page-states.md
│   ├── 03c-1-add-to-custom-lists-loading-error.md
│   ├── 03c-2-create-edit-delete-loading-error.md
│   ├── 03c-action-loading-error-states.md
│   ├── 04-responsive-rules.md
│   ├── 05-mvp-vs-future-scope.md
│   ├── 06-master-acceptance-criteria.md
│   ├── 06a-custom-lists-page-ac.md
│   ├── 06b-custom-list-details-page-ac.md
│   ├── 06c-add-book-to-custom-lists-ac.md
│   ├── 06d-create-edit-delete-list-ac.md
│   └── README.md
├── 00-module-map.md
├── 01-implementation-order.md
├── FILE_TREE.md
└── README.md
```
