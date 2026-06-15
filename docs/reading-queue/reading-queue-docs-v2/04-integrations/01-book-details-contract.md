# Book Details Contract

## Book Details must show queue state

If book is not in queue:

```text
Додати в чергу читання
```

If book is already in queue:

```text
У черзі · позиція N
Прибрати з черги
```

## Add behavior

Book Details opens Add to Reading Queue modal.

After successful add:

- Book Details shows queue status;
- Reading Queue Page updates;
- My Library card updates if it shows queue badge;
- Dashboard updates if it shows queue block.

## Remove behavior

After successful remove:

- Book Details returns to **Додати в чергу читання** action;
- Reading Queue Page updates;
- queue positions are recalculated;
- related counters update.

## Important

Book Details should display actual current position after any add, remove or reorder.
