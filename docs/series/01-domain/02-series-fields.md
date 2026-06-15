# Series Fields

## Canonical MVP fields

| Group | Field | Required | Notes |
|---|---|---:|---|
| Identity | `id` | yes | Unique series id. |
| Identity | `title` | yes | Main user-facing title. |
| Metadata | `author` / `authors` | no | Can be prefilled from a book or entered manually. |
| Metadata | `description` | no | User-written description. |
| Metadata | `genres` | no | Optional genre list. |
| Metadata | `tags` | no | Optional user tags. |
| Status | `seriesStatus` | yes | Finished / ongoing / unknown. |
| Planning | `totalBooksCount` | no | Known/planned number of books. |
| Media | `coverUrl` | no | Custom cover or fallback from books. |
| Audit | `createdAt`, `updatedAt` | yes | Used for sorting and sync. |

## Book relation fields

| Field | Required | Notes |
|---|---:|---|
| `seriesId` | no | Empty means the book is standalone. |
| `seriesTitle` | no | Denormalized label for book cards/details. |
| `partNumber` | yes when linked | Main ordering field. |
| `isMissingBook` | optional | Used for missing-book placeholder rows if implemented. |

## Field source docs

For full UI field behavior, use:

- `03-actions/create-edit-series/04-field-details-main.md`
- `03-actions/create-edit-series/05-field-details-extra.md`
- `04-integrations/book-form-series-section/03-series-selection-and-inline-create.md`
