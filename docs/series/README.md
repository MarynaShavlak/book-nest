# Series Module Documentation v2

This folder is the refactored documentation structure for the **Series module** of BookNest.

The old documentation was split into small implementation-oriented files so Claude Code can work with a narrow context window.

Use this module like this:

1. Start with `00-module-map.md`.
2. Open `01-implementation-order.md` when planning implementation.
3. Add only the specific page/action/domain files needed for the current task.
4. Do not pass the whole module to Claude Code unless you need a full audit.

Recommended context packages:

```txt
# All Series Page
00-module-map.md
01-domain/03-series-status-and-reading-state.md
01-domain/04-progress-calculation.md
02-pages/all-series-page/
05-shared/03-loading-error-empty-states.md
```

```txt
# Series Details Page
00-module-map.md
01-domain/06-part-number-core-rules.md
01-domain/07-part-number-field-and-default.md
01-domain/05-next-book-logic.md
02-pages/series-details-page/
```

```txt
# Create / Edit Series
00-module-map.md
01-domain/02-series-fields.md
01-domain/10-validation-and-permissions.md
03-actions/create-edit-series/
```

```txt
# Add book to series
00-module-map.md
01-domain/06-part-number-core-rules.md
01-domain/07-part-number-field-and-default.md
01-domain/08-total-books-count-rules.md
03-actions/add-book-to-series/
```

```txt
# Book form series section
00-module-map.md
01-domain/06-part-number-core-rules.md
01-domain/07-part-number-field-and-default.md
04-integrations/book-form-series-section/
```
