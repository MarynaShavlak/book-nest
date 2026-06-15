# Series Data Model

## Series entity

Recommended MVP fields:

| Field | Type | Required | Notes |
|---|---|---:|---|
| `id` | string | yes | Unique series id. |
| `title` | string | yes | Series title. |
| `author` / `authors` | string / array | optional | May be prefilled from books. |
| `seriesStatus` | enum | yes | Finished / ongoing / unknown. |
| `totalBooksCount` | number | optional | Total planned books when known. |
| `description` | string | optional | User-written description. |
| `genres` | string[] | optional | Optional categorization. |
| `tags` | string[] | optional | User tags. |
| `coverUrl` | string | optional | Custom or fallback cover. |
| `createdAt` | date | yes | Creation date. |
| `updatedAt` | date | yes | Last update date. |

## Book relation fields

Recommended MVP relation fields on a book:

| Field | Type | Required | Notes |
|---|---|---:|---|
| `seriesId` | string/null | no | Empty when book is standalone. |
| `seriesTitle` | string/null | no | Useful for denormalized display. |
| `partNumber` | number/null | no | Required when book is linked to a series in new data. |
| `isMissingBook` | boolean | optional | For missing placeholders if implemented. |

## Data safety

- Series deletion must not delete book records.
- Removing a book from a series must only clear relation fields.
- Reading status, ownership status, favorite state, notes, quotes, and custom lists should stay unchanged.
