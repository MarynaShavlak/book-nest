# Optimistic Update and Rollback

## Recommended optimistic actions

Can use optimistic UI for:

- add to queue;
- remove from queue;
- reorder;
- start reading.

## Add rollback

If add fails:

- remove temporary queue item;
- restore previous positions;
- keep modal open;
- show error message.

## Remove rollback

If remove fails:

- restore queue item;
- restore previous position;
- restore Book Details queue badge;
- show error message.

## Reorder rollback

If reorder fails:

- restore previous order;
- restore previous positions;
- show toast:

```text
Не вдалося оновити чергу читання
```

## Start reading rollback

If status update fails:

- restore previous reading status;
- restore queue item if it was removed optimistically;
- show error message.
