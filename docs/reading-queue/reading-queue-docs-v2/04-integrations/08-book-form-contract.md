# Book Form Contract

## Book creation/edit relation

Reading Queue module does not require queue controls inside Book Form for MVP.

If this is added later, it should reuse the same rules:

- no duplicates;
- position required only for specific position;
- positions recalculated after add;
- adding to queue does not change reading or ownership status.

## Book deletion relation

If a book is deleted, it must not remain visible in Reading Queue.

Recommended behavior:

```text
deleted book is excluded from queue query
```

Optionally, related queue item can be removed during cleanup.
