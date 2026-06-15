# Position and Order Rules

## Core rules

- Queue positions start from `1`.
- Default order is `position ASC`.
- Every queue item must have a position.
- Positions must be sequential.
- There must be no gaps.
- One book cannot appear in the queue twice.

## Add to beginning

New book receives:

```text
position = 1
```

All existing items shift down by `+1`.

## Add to end

New book receives:

```text
position = queueCount + 1
```

Existing positions stay unchanged.

## Add to specific position

If user chooses position `N`:

```text
new item position = N
existing items from N shift down by +1
```

Allowed range:

```text
1 <= N <= queueCount + 1
```

## Remove from queue

When a book is removed:

```text
items after removed position shift up by -1
```

## Reorder

After drag-and-drop:

1. moved book gets a new position;
2. affected books shift accordingly;
3. positions are recalculated;
4. the new order is saved;
5. UI shows the updated order.

## Important

All position updates should be treated as one logical operation.

Do not leave the queue in a temporary state with duplicated positions or gaps.
