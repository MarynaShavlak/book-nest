# File tree

```text
create-edit-book-docs-v2/
├── 01-domain
│   ├── 00-purpose-and-scope.md
│   ├── 01-form-modes-create-edit.md
│   ├── 02-submit-flow.md
│   ├── 03-text-normalization-and-html-rules.md
│   ├── 04-duplicate-check-and-custom-values.md
│   ├── 05-preview-contract.md
│   ├── 06-field-source-rules.md
│   ├── 07-validation-overview.md
│   ├── 08-conditional-data-rules.md
│   ├── 09-data-safety-and-user-scope.md
│   ├── 10-what-should-not-be-in-form.md
│   └── README.md
├── 02-form-shell
│   ├── states
│   │   ├── 00-loading-state.md
│   │   ├── 01-error-state.md
│   │   └── 02-success-state.md
│   ├── 00-route-and-entry-points.md
│   ├── 01-create-mode-initialization.md
│   ├── 02-edit-mode-initialization.md
│   ├── 03-layout-and-section-order.md
│   ├── 04-submit-flow.md
│   ├── 05-preview-panel.md
│   ├── 06-unsaved-changes-and-cancel.md
│   └── README.md
├── 03-form-blocks
│   ├── 01-basic-information
│   │   ├── 00-overview-and-fields.md
│   │   ├── 01-title-field.md
│   │   ├── 02-author-field.md
│   │   ├── 03-publisher-field.md
│   │   ├── 04-spoiler-free-description-field.md
│   │   ├── 05-block-behavior.md
│   │   ├── 06-acceptance-criteria.md
│   │   └── README.md
│   ├── 02-classification
│   │   ├── 00-overview-and-fields.md
│   │   ├── 01-genres-field.md
│   │   ├── 02-tags-field.md
│   │   ├── 03-age-category-field.md
│   │   ├── 04-language-field.md
│   │   ├── 05-normalization-before-submit.md
│   │   ├── 06-block-behavior.md
│   │   ├── 07-acceptance-criteria.md
│   │   └── README.md
│   ├── 03-status
│   │   ├── 00-overview-ui-order-fields.md
│   │   ├── 01-reading-status.md
│   │   ├── 02-reading-conditional-not-started.md
│   │   ├── 02-reading-conditionals-overview.md
│   │   ├── 03-reading-conditional-want-to-read.md
│   │   ├── 04-reading-conditional-reading.md
│   │   ├── 05-reading-conditional-finished.md
│   │   ├── 06-reading-conditional-paused.md
│   │   ├── 07-reading-conditional-dnf.md
│   │   ├── 08-reading-conditional-rereading.md
│   │   ├── 09-ownership-status.md
│   │   ├── 10-ownership-conditional-want-to-buy.md
│   │   ├── 10-ownership-conditionals-overview.md
│   │   ├── 11-ownership-conditional-in-transit.md
│   │   ├── 12-ownership-conditional-borrowed.md
│   │   ├── 13-ownership-conditional-lent.md
│   │   ├── 14-format-field.md
│   │   ├── 15-conditional-data-behavior.md
│   │   ├── 16-validation-summary.md
│   │   ├── 17-normalization-before-submit.md
│   │   ├── 18-block-behavior.md
│   │   ├── 19-preview-logic.md
│   │   ├── 20-acceptance-criteria.md
│   │   └── README.md
│   ├── 04-book-type-series
│   │   ├── 00-overview-ui-fields.md
│   │   ├── 01-book-type-toggle.md
│   │   ├── 02-series-select-field.md
│   │   ├── 03-create-series-modal.md
│   │   ├── 04-series-creation-option.md
│   │   ├── 05-part-number-field.md
│   │   ├── 06-block-behavior.md
│   │   ├── 07-conditional-data-behavior.md
│   │   ├── 08-validation-summary.md
│   │   ├── 09-acceptance-criteria.md
│   │   └── README.md
│   ├── 05-edition-details
│   │   ├── 00-overview-and-fields.md
│   │   ├── 01-pages-count-field.md
│   │   ├── 02-publication-year-field.md
│   │   ├── 03-isbn-field.md
│   │   ├── 04-original-title-field.md
│   │   ├── 05-dedication-field.md
│   │   ├── 06-translator-field.md
│   │   ├── 07-illustrator-field.md
│   │   ├── 08-normalization-before-submit.md
│   │   ├── 09-block-behavior.md
│   │   ├── 10-preview-logic.md
│   │   ├── 11-validation-summary.md
│   │   ├── 12-acceptance-criteria.md
│   │   └── README.md
│   ├── 06-library-organization
│   │   ├── 00-overview-ui-fields.md
│   │   ├── 01-add-to-favorites.md
│   │   ├── 02-add-to-reading-queue.md
│   │   ├── 03-queue-priority.md
│   │   ├── 04-add-to-custom-lists.md
│   │   ├── 05-create-custom-list-modal.md
│   │   ├── 06-new-list-creation-option.md
│   │   ├── 07-conditional-data-behavior.md
│   │   ├── 08-normalization-before-submit.md
│   │   ├── 09-block-behavior.md
│   │   ├── 10-preview-logic.md
│   │   ├── 11-validation-summary.md
│   │   ├── 12-acceptance-criteria.md
│   │   └── README.md
│   ├── 07-cover
│   │   ├── 00-overview-format-ui-fields.md
│   │   ├── 01-upload-area.md
│   │   ├── 02-accepted-file-formats.md
│   │   ├── 03-file-size-rules.md
│   │   ├── 04-image-dimensions.md
│   │   ├── 05-preview-behavior.md
│   │   ├── 06-replace-cover.md
│   │   ├── 07-remove-cover.md
│   │   ├── 08-upload-flow.md
│   │   ├── 09-validation.md
│   │   ├── 10-fallback-cover.md
│   │   ├── 11-accessibility.md
│   │   ├── 12-normalization-before-submit.md
│   │   ├── 13-block-behavior.md
│   │   ├── 14-preview-logic.md
│   │   ├── 15-acceptance-criteria.md
│   │   └── README.md
│   └── README.md
├── 04-actions
│   ├── create-book
│   │   ├── 00-overview.md
│   │   ├── 01-initial-values.md
│   │   ├── 02-submit-side-effects.md
│   │   ├── 03-success-navigation.md
│   │   └── README.md
│   ├── create-custom-author
│   │   ├── 00-draft-author.md
│   │   ├── 01-duplicate-check.md
│   │   └── README.md
│   ├── create-custom-list-from-form
│   │   ├── 00-draft-list.md
│   │   ├── 01-list-submit-flow.md
│   │   └── README.md
│   ├── create-custom-publisher
│   │   ├── 00-draft-publisher.md
│   │   ├── 01-duplicate-check.md
│   │   └── README.md
│   ├── create-custom-tag
│   │   ├── 00-draft-tag.md
│   │   ├── 01-first-book-tags.md
│   │   └── README.md
│   ├── create-series-from-form
│   │   ├── 00-draft-series.md
│   │   ├── 01-series-submit-flow.md
│   │   └── README.md
│   ├── edit-book
│   │   ├── 00-overview.md
│   │   ├── 01-initial-values.md
│   │   ├── 02-conditional-change-confirmation.md
│   │   ├── 03-success-flow.md
│   │   └── README.md
│   ├── submit-form
│   │   ├── 00-submit-pipeline.md
│   │   ├── 01-normalization-step.md
│   │   ├── 02-validation-step.md
│   │   ├── 03-post-save-sync.md
│   │   └── README.md
│   ├── upload-replace-remove-cover
│   │   ├── 00-cover-upload-action.md
│   │   ├── 01-replace-cover-action.md
│   │   ├── 02-remove-cover-action.md
│   │   └── README.md
│   └── README.md
├── 05-integrations
│   ├── 00-navigation-entry-points.md
│   ├── 01-authors-contract.md
│   ├── 02-publishers-contract.md
│   ├── 03-tags-contract.md
│   ├── 04-config-dictionaries-contract.md
│   ├── 05-series-contract.md
│   ├── 06-delivery-contract.md
│   ├── 07-loan-contract.md
│   ├── 08-purchase-contract.md
│   ├── 09-reading-queue-contract.md
│   ├── 10-custom-lists-contract.md
│   ├── 11-favorites-contract.md
│   ├── 12-book-details-contract.md
│   ├── 13-my-library-contract.md
│   ├── 14-dashboard-statistics-contract.md
│   ├── 15-cover-storage-contract.md
│   └── README.md
├── 06-shared
│   ├── autocomplete-creatable-rules
│   │   ├── 00-pattern.md
│   │   ├── 01-draft-value-lifetime.md
│   │   ├── 02-duplicate-prevention.md
│   │   ├── 03-user-scope.md
│   │   └── README.md
│   ├── conditional-block-rules
│   │   ├── 00-create-mode.md
│   │   ├── 01-edit-mode.md
│   │   ├── 02-confirmation-modal.md
│   │   └── README.md
│   ├── master-acceptance-criteria
│   │   ├── 00-final-acceptance-criteria.md
│   │   ├── 01-create-mode-ac.md
│   │   └── 02-edit-mode-ac.md
│   ├── states
│   │   ├── 00-loading.md
│   │   ├── 01-error.md
│   │   ├── 02-empty.md
│   │   ├── 03-success.md
│   │   └── README.md
│   ├── validation-rules
│   │   ├── 00-required-fields.md
│   │   ├── 01-text-fields.md
│   │   ├── 02-url-fields.md
│   │   ├── 03-number-fields.md
│   │   ├── 04-date-fields.md
│   │   ├── 05-file-fields.md
│   │   ├── 06-enum-fields.md
│   │   └── README.md
│   ├── 00-cross-feature-update-matrix.md
│   ├── 01-responsive-rules.md
│   ├── 02-accessibility-rules.md
│   ├── 03-mvp-vs-future-scope.md
│   └── README.md
├── 00-module-map.md
├── 01-implementation-order.md
├── FILE_TREE.md
└── README.md
```
