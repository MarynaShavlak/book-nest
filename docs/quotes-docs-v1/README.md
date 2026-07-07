# Quotes Module Documentation v1

This folder contains the full documentation for the **Quotes** feature of BookNest.

The documentation is split into small implementation-oriented files, similar to the existing `docs/series` structure, so a developer or AI coding assistant can work with a narrow context window.

## How to use this module

1. Start with `00-module-map.md`.
2. Open `01-implementation-order.md` when planning implementation.
3. Add only the specific page/action/domain files needed for the current task.
4. Do not pass the whole module to Claude Code / AI assistant unless you need a full audit.

## Recommended context packages

### MVP: Quotes on Book Details

```text
00-module-map.md
01-domain/01-quote-entity.md
01-domain/02-quote-fields.md
01-domain/03-spoiler-rules.md
01-domain/04-favorite-quote-rules.md
02-pages/book-details-quotes-section/
03-actions/create-edit-quote/
03-actions/delete-quote/
03-actions/favorite-quote/
03-actions/spoiler-toggle/
04-integrations/book-details/
05-shared/01-ui-style-guide.md
05-shared/03-loading-error-empty-states.md
```

### Post-MVP: Full Quotes Page

```text
00-module-map.md
01-domain/01-quote-entity.md
01-domain/05-search-filter-sort-rules.md
02-pages/quotes-page/
03-actions/create-edit-quote/
03-actions/delete-quote/
03-actions/favorite-quote/
03-actions/spoiler-toggle/
05-shared/01-ui-style-guide.md
05-shared/02-responsive-rules.md
05-shared/03-loading-error-empty-states.md
```

### Modal: Add / Edit Quote

```text
00-module-map.md
01-domain/02-quote-fields.md
01-domain/03-spoiler-rules.md
01-domain/04-favorite-quote-rules.md
03-actions/create-edit-quote/
04-integrations/book-form/01-add-quote-from-quotes-page.md
05-shared/04-validation-and-permissions.md
```

## MVP scope

For MVP, Quotes can be implemented as a block on the **Book Details** page.

The standalone **Quotes** page is documented here as a full archive experience, but it can be implemented after MVP.
