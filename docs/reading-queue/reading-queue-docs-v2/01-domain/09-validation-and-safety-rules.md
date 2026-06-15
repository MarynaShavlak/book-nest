# Validation and Safety Rules

## Specific position validation

When user selects **На конкретну позицію**, position field is required.

Rules:

```text
position is required
position must be integer
position must be > 0
position must be <= queueCount + 1
```

## Empty queue behavior

If queue is empty:

- beginning and end are effectively the same;
- first added book receives `position = 1`;
- specific position can only be `1`.

## Duplicate safety

Before creating queue item, verify:

```text
userId + bookId is unique
```

## Remove safety

Remove from queue is not destructive.

It must remove only the queue item and must not delete the book from library.

## Atomic position update

Add, remove and reorder must not leave:

- duplicated positions;
- missing positions;
- wrong order in UI;
- stale position badge on Book Details.
