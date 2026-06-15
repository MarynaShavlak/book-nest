# File Tree

```txt
profile-docs-v2/
├── 01-domain
│   ├── 00-purpose-and-scope.md
│   ├── 01-user-profile-data-model.md
│   ├── 02-user-profile-fields.md
│   ├── 03-editable-vs-readonly-fields.md
│   ├── 04-profile-statistics-model.md
│   ├── 05-access-and-user-scope.md
│   ├── 06-profile-visibility-rules.md
│   ├── 07-profile-validation-overview.md
│   ├── 08-data-safety-and-security-boundaries.md
│   ├── 09-state-priority-rules.md
│   ├── 10-what-should-not-be-in-profile.md
│   └── README.md
├── 02-profile-page
│   ├── profile-page
│   │   ├── states
│   │   │   ├── 00-states-overview.md
│   │   │   ├── 01-loading-state.md
│   │   │   ├── 02-error-state.md
│   │   │   ├── 03-empty-profile-fallback.md
│   │   │   ├── 04-empty-stats-state.md
│   │   │   └── 05-empty-social-links-state.md
│   │   ├── 00-page-overview-route-access.md
│   │   ├── 01-profile-header.md
│   │   ├── 02-avatar-placeholder.md
│   │   ├── 03-main-profile-info.md
│   │   ├── 04-favorite-book-quote-display.md
│   │   ├── 05-birthday-display.md
│   │   ├── 06-readonly-account-info.md
│   │   ├── 07-reading-statistics-block.md
│   │   ├── 08-social-links-preview-block.md
│   │   ├── 09-profile-actions.md
│   │   ├── 10-profile-page-states.md
│   │   └── 11-profile-page-acceptance-criteria.md
│   └── README.md
├── 03-edit-profile
│   ├── avatar
│   │   ├── 00-avatar-flow-overview.md
│   │   ├── 01-upload-avatar.md
│   │   ├── 02-remove-avatar.md
│   │   └── 03-avatar-placeholder-after-remove.md
│   ├── edit-profile-form
│   │   ├── 00-form-overview.md
│   │   ├── 01-form-entry-points.md
│   │   ├── 02-form-fields.md
│   │   ├── 03-submit-flow.md
│   │   ├── 04-normalization-rules.md
│   │   ├── 05-success-error-loading-states.md
│   │   └── 06-edit-profile-acceptance-criteria.md
│   ├── field-validation
│   │   ├── 00-validation-overview.md
│   │   ├── 01-avatar-validation.md
│   │   ├── 02-name-validation.md
│   │   ├── 03-last-name-validation.md
│   │   ├── 04-nickname-validation.md
│   │   ├── 05-date-of-birth-validation.md
│   │   ├── 06-bio-validation.md
│   │   ├── 07-favorite-quote-validation.md
│   │   └── 08-favorite-genres-validation.md
│   └── README.md
├── 04-social-links
│   ├── actions
│   │   ├── 00-actions-overview.md
│   │   ├── 01-normalize-social-link.md
│   │   ├── 02-save-social-link.md
│   │   └── 03-social-link-errors.md
│   ├── validation
│   │   ├── 00-validation-overview.md
│   │   ├── 01-general-validation.md
│   │   ├── 02-platform-validation.md
│   │   ├── 03-username-validation.md
│   │   ├── 04-url-validation.md
│   │   └── 05-label-validation.md
│   ├── 00-social-links-overview.md
│   ├── 01-social-link-data-model.md
│   ├── 02-supported-platforms.md
│   ├── 03-social-link-fields.md
│   ├── 04-social-links-block-ui.md
│   ├── 05-add-social-link.md
│   ├── 06-edit-social-link.md
│   ├── 07-delete-social-link.md
│   ├── 08-duplicate-prevention.md
│   ├── 09-username-to-url-generation.md
│   ├── 10-social-links-acceptance-criteria.md
│   └── README.md
├── 05-settings
│   ├── settings-form
│   │   ├── 00-settings-form-overview.md
│   │   ├── 01-settings-field-groups.md
│   │   ├── 02-settings-validation.md
│   │   ├── 03-settings-apply-immediately-vs-on-save.md
│   │   └── 04-settings-error-state.md
│   ├── 00-settings-overview.md
│   ├── 01-settings-data-model.md
│   ├── 02-default-settings.md
│   ├── 03-theme-mode.md
│   ├── 04-accent-color.md
│   ├── 05-interface-language.md
│   ├── 06-date-format.md
│   ├── 07-week-start-day.md
│   ├── 08-timezone.md
│   ├── 09-library-view-mode.md
│   ├── 10-confirm-before-delete.md
│   ├── 11-email-notifications.md
│   ├── 12-system-emails.md
│   ├── 13-settings-save-flow.md
│   ├── 14-settings-acceptance-criteria.md
│   └── README.md
├── 06-security-account
│   ├── 00-security-overview.md
│   ├── 01-logout-action.md
│   ├── 02-change-password-entry.md
│   ├── 03-change-password-flow.md
│   ├── 04-auth-provider-restrictions.md
│   ├── 05-email-change-boundary.md
│   ├── 06-security-acceptance-criteria.md
│   └── README.md
├── 07-integrations
│   ├── 00-navigation-entry-points.md
│   ├── 01-auth-contract.md
│   ├── 02-library-stats-contract.md
│   ├── 03-genres-contract.md
│   ├── 04-settings-consumers-contract.md
│   ├── 05-notifications-contract.md
│   ├── 06-deletion-confirmation-contract.md
│   ├── 07-profile-dashboard-contract.md
│   └── README.md
├── 08-shared
│   ├── master-acceptance-criteria
│   │   ├── 00-profile-page-ac.md
│   │   ├── 01-edit-profile-ac.md
│   │   ├── 02-social-links-ac.md
│   │   ├── 03-settings-ac.md
│   │   └── 04-security-ac.md
│   ├── 00-cross-feature-update-matrix.md
│   ├── 01-validation-error-display.md
│   ├── 02-persistence-rules.md
│   ├── 03-loading-error-empty-state-priority.md
│   ├── 04-responsive-rules.md
│   ├── 05-accessibility-rules.md
│   ├── 06-mvp-vs-future-scope.md
│   ├── 07-master-acceptance-criteria.md
│   ├── 08-copy-and-notifications.md
│   └── README.md
├── 00-module-map.md
├── 01-implementation-order.md
└── README.md
```
