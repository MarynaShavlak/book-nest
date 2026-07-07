# Genres / Tags Module Documentation

## Purpose

This module describes how BookNest handles book genres and user-created tags.

Genres are predefined book categories selected inside book forms. Tags are personal labels created by the user to describe tropes, mood, themes, characters, format, or any custom meaning.

## MVP principles

- Genres are predefined.
- Users cannot create custom genres in MVP.
- Tags are created manually by users.
- There are no predefined tags in MVP.
- Tag colors are selected from the predefined BookNest palette.
- Genre and tag items can navigate to filtered My Library.

## Module structure

```text
docs/genres-tags/
  README.md
  FILE_TREE.md
  00-module-map.md

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
    08-tag-color-palette.md

  02-pages/
    genres-tags-page/
      01-layout-overview.md
      02-genres-tab.md
      03-tags-tab.md
      04-search-filters-sorting.md
      05-states-responsive-acceptance.md
      06-sketch-based-mvp-updates.md

  03-actions/
    add-tag/
      00-entry-modal-fields.md
      01-submit-validation-errors.md
    edit-tag/
      00-entry-fields-submit.md
      01-validation-errors-acceptance.md
    delete-tag/
      00-entry-confirmation.md

  04-integrations/
    01-book-form-genres-tags-section.md
    02-book-details-genres-tags-block.md
    03-my-library-filters-contract.md
    04-statistics-dashboard-contract.md

  05-shared/
    05-mvp-vs-future-scope.md
    06-master-acceptance-criteria.md
```

## Sketch-based MVP additions

The page documentation includes the following product improvements:

1. Top statistics summary cards.
2. Advanced genre cards with icon, counts, reading progress, rating and cover preview.
3. Queue count inside genre cards.
4. Popular tags block with tag chips and book counters.
5. Show all / show more behavior.
6. Tab-specific search.
7. Sorting and filters toolbar.
8. Info hint explaining genres vs tags.
9. Add Tag CTA only.
10. Navigation from genre/tag to filtered My Library.
