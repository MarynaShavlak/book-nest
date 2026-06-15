# Master Acceptance Criteria Index

This file is intentionally an index, not a giant duplicated checklist.

Use the acceptance criteria from the specific feature file you are implementing:

| Feature | Acceptance criteria file |
|---|---|
| All Series Page | `02-pages/all-series-page/10-scope-and-acceptance-criteria.md` |
| Series Details Page | `02-pages/series-details-page/10-scope-and-acceptance-criteria.md` |
| Create / Edit Series | `03-actions/create-edit-series/08-scope-and-acceptance-criteria.md` |
| Add Book to Series | `03-actions/add-book-to-series/08-after-success-and-acceptance-criteria.md` |
| Series Book Order | `03-actions/series-book-order/07-scope-future-and-acceptance-criteria.md` |
| Book Form Series Section | `04-integrations/book-form-series-section/09-scope-and-acceptance-criteria.md` |
| Remove / Unlink Book from Series | `03-actions/remove-unlink-book-from-series/05-after-success-scope-ac.md` |
| Delete Series | `03-actions/delete-series/05-scope-and-acceptance-criteria.md` |

## Global acceptance rule

Every Series module implementation should preserve these global rules:

- Series mutations must not accidentally delete books.
- Book reading status, ownership status, notes, quotes, custom lists, favorites, and queue state must stay safe during series relation changes.
- Part number and progress calculation must use shared helpers.
- Loading, empty, error, and success states must be handled for every mutation.
- Page UI should stay responsive on desktop, tablet, and mobile.
