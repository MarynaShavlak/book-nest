# Feature Module: Genres / Tags

Модуль **Genres / Tags** описує сторінку **Жанри / Теги** у BookNest та всю пов'язану логіку жанрів і користувацьких тегів.

Сторінка допомагає користувачу навігувати по власній бібліотеці за великими книжковими категоріями, темами, настроями, тропами та персональними мітками.

Important:

```text
Genres і Tags — це різні сутності.
Жанри беруться із заздалегідь визначеного списку.
Теги не мають predefined list: користувач створює їх вручну, і тільки створені теги показуються в підказках та на сторінці тегів.
```

## Module structure

```text

docs/genres-tags/
  README.md
  FILE_TREE.md
  00-module-map.md
  01-implementation-order.md

  01-domain/
    README.md
    00-purpose-and-scope.md
    01-genre-vs-tag-rules.md
    02-genre-model.md
    03-user-tag-model.md
    04-tag-types.md
    05-normalization-and-duplicates.md
    06-validation-rules.md
    07-data-safety-and-permissions.md

  02-pages/
    README.md
    genres-tags-page/
      README.md
      00-overview-route-data.md
      01-layout-header-tabs.md
      02-genres-tab.md
      03-tags-tab.md
      04-search-filters-sorting.md
      05-states-responsive-acceptance.md

  03-actions/
    README.md
    add-tag/
      README.md
      00-entry-modal-fields.md
      01-submit-validation-errors.md
      02-success-updates-acceptance.md
    edit-tag/
      README.md
      00-entry-fields-submit.md
      01-validation-errors-acceptance.md
    delete-tag/
      README.md
      00-entry-confirmation.md
      01-submit-updates.md
      02-errors-acceptance.md

  04-integrations/
    README.md
    00-navigation-entry-points.md
    01-book-form-genres-tags-section.md
    02-book-details-genres-tags-block.md
    03-my-library-filters-contract.md
    04-statistics-dashboard-contract.md

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
