# Book Details Module Map

## Problem in the old structure

The old documentation mixed page shell, sidebar blocks, delivery UI, series logic, status transitions and modal flows in a few very long files. This makes Claude Code lose context because it has to keep unrelated details in memory.

## New rule

One file should describe one implementation responsibility:

- page shell/layout;
- visual block;
- action/modal;
- state transition;
- validation/error/loading behavior;
- integration/update rules.

## Biggest files from the old archive

| Old file | Approx. lines | New location |
|---|---:|---|
| `book-details-page.md` | 2190 | `book-details-page/` + nested `series-preview-block/` + `page-actions/` |
| `book-details-delivery-block.md` | 1411 | `delivery-block/` |
| `series-module-overview.md` | 1035 | `series-module/` |
| `change-loan-status.md` | 601 | `ownership-actions/loan/` |
| `change-delivery-status.md` | 562 | `delivery-actions/` |

## Cross-links to keep in page docs

The Book Details Page should link to these smaller docs instead of duplicating their content:

- Series preview block → `book-details-page/series-preview-block/`
- Delivery block → `delivery-block/`
- Delivery status modals → `delivery-actions/`
- Reading progress modal → `reading-actions/update-reading-progress/`
- Reading status modal → `reading-actions/change-reading-status/`
- Ownership actions → `ownership-actions/`
- Format modal → `format-actions/change-book-format.md`
