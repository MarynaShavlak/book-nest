# Dashboard Contract

## Dashboard updates after queue actions

Dashboard should update if it has:

- Reading Queue preview;
- Next to Read block;
- Current Reading block;
- counters based on queue count.

## After add to queue

Update:

- queue count;
- next to read if added to position `1`;
- preview list if displayed.

## After remove from queue

Update:

- queue count;
- next to read;
- preview list.

## After start reading

Update:

```text
readingStatus → reading
```

Also update block:

```text
Читаю зараз
```

If book is removed from queue, update queue preview too.
