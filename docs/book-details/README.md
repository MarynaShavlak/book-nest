# Book Details Documentation v2

This structure is split into small Claude-Code-friendly files.

## How to use

1. Start with `00-module-map.md`.
2. Open only the specific block/action file you are implementing.
3. Avoid loading the old long files together with this v2 structure.
4. For Book Details Page implementation, use files from `book-details-page/` first, then open the needed nested block/action folder.

## Main folders

- `book-details-page/` — page shell, layout, hero, sidebar, reading progress, page-level actions.
- `book-details-page/series-preview-block/` — series preview block shown in the sidebar.
- `delivery-block/` — delivery block UI on Book Details Page.
- `delivery-actions/` — modals/actions for delivery status changes.
- `reading-actions/` — reading progress and reading status modals.
- `ownership-actions/` — ownership, purchase and loan flows.
- `format-actions/` — book format modal.
- `series-module/` — extracted series module overview that was mixed into this archive.

## Suggested implementation order

1. `book-details-page/00-overview-and-entry-points.md`
2. `book-details-page/01-route-and-access.md`
3. `book-details-page/02-page-layout.md`
4. `book-details-page/03-book-hero-section.md`
5. `book-details-page/04-main-book-information.md`
6. `book-details-page/05-right-sidebar-base.md`
7. `book-details-page/06-reading-progress-block.md`
8. Add nested blocks/actions only when needed.
