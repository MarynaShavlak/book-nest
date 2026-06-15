# Series Module Map

## Module purpose

The Series module describes how a user groups books into book series, tracks reading progress inside the series, controls part numbers, handles missing books, and moves between series pages, book details, and book forms.

## Main areas

| Area | Folder | Responsibility |
|---|---|---|
| Domain rules | `01-domain/` | Data model, statuses, part numbers, progress, next book, validation. |
| Pages | `02-pages/` | All Series Page and Series Details Page UI/behavior. |
| Actions | `03-actions/` | Create/edit/delete series, add/remove books, order logic. |
| Integrations | `04-integrations/` | Book form, book details, navigation, cross-module contracts. |
| Shared | `05-shared/` | Common update rules, states, scope, acceptance criteria. |

## Canonical decisions

- A book can belong to one series in MVP.
- Series relation is stored on the book record through `seriesId`, `seriesTitle`, and `partNumber` or equivalent relation fields.
- `partNumber` is required for new series relations. See `01-domain/06-part-number-core-rules.md` and `01-domain/07-part-number-field-and-default.md`.
- Duplicate `partNumber` inside the same series should be prevented for new data.
- Gaps in `partNumber` are allowed.
- Removing a book from a series should not delete the book.
- Deleting a series should clear series relation fields from related books, not delete the books.
- Reading progress is calculated from books inside the series.
- `totalBooksCount` is optional and used for progress/missing-book context when available.

## File usage rule for Claude Code

For implementation tasks, pass:

1. `00-module-map.md`
2. one domain rule file from `01-domain/`
3. one page/action/integration folder
4. one shared file only if the task needs loading/error/responsive or acceptance criteria

Do not pass all page docs and all action docs together.
