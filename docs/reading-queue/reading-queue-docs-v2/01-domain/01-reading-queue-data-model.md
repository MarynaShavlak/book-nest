# Reading Queue Data Model

## Main entity

Reading Queue can be implemented either:

```text
Book has queue metadata
```

or:

```text
Separate readingQueueItems collection/table
```

Recommended conceptual model:

```text
ReadingQueueItem {
  id
  userId
  bookId
  position
  addedAt
  updatedAt
}
```

## Required fields

| Field | Required | Description |
| --- | ---: | --- |
| `id` | Так | ID queue item |
| `userId` | Так | Owner of queue item |
| `bookId` | Так | Book in queue |
| `position` | Так | 1-based queue position |
| `addedAt` | Так | Date when book was added to queue |
| `updatedAt` | Ні | Date when queue item/order was updated |

## Relation to Book

Queue item must resolve book data for UI:

- title;
- original title;
- author;
- cover;
- reading status;
- ownership status;
- series info;
- pages count;
- genres/tags.

## Important

The queue item does not replace the Book entity.

Removing a queue item must not delete or mutate the Book itself.
