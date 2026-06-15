# Position Recalculation After Reorder

## Rule

After reorder, all items should have sequential positions.

Example:

```text
Було:
1. Книга A
2. Книга B
3. Книга C

Користувач перемістив Книгу C на перше місце

Стало:
1. Книга C
2. Книга A
3. Книга B
```

## Requirements

- Recalculate affected positions.
- Save the new order.
- Update UI immediately.
- Do not duplicate positions.
- Do not leave gaps.
- Do not change reading or ownership status.
