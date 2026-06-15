# Action Availability Rules

## Add to queue

Available when:

```text
book belongs to current user
book is not deleted
book is not already in queue
```

Disabled while:

- add request is pending;
- page/modal is loading;
- required position is invalid.

## Remove from queue

Available when:

```text
book is already in queue
```

Disabled while:

- remove request is pending;
- previous reorder/remove operation is still saving.

## Reorder

Available when:

```text
search is empty
sort = position ASC
page is not loading
no reorder request is pending
```

Disabled when:

- search is active;
- sorting is not by queue position;
- data is loading;
- previous reorder is saving;
- queue failed to load.

## Start reading

Available for every queue item in MVP.

It opens confirmation modal before changing status.
