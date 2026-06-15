# My Library Contract

## Queue badge

If My Library card displays queue information, it should update after:

- add to queue;
- remove from queue;
- reorder, if position is visible;
- start reading with remove checked.

Possible badge:

```text
У черзі · позиція N
```

## Book data

Reading Queue actions must not remove book from My Library.

## Updates

My Library should react to:

- queue membership changes;
- reading status changes after **Почати читати**;
- ownership status remains unchanged.
