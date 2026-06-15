# Order History: Sidebar, States, Responsive, Acceptance

## Right sidebar

Recommended blocks:

```text
Order statistics
Expense summary
Top stores
Quick links
```

Quick links:

```text
Books in Transit
Expense Statistics
Books to Buy
```

## Deleted book state

If the related book was deleted, the history record should still be visible.

Show fallback:

```text
Книгу видалено
```

Keep delivery metadata visible.

## Empty state

```text
Історія замовлень порожня
```

## Empty filtered state

```text
Немає замовлень за вибраними фільтрами
```

## Responsive

- desktop: cards/table with sidebar;
- tablet: cards + sidebar below;
- mobile: card list, filters in drawer.

## Acceptance criteria

- Shows all delivery statuses.
- Tabs correctly group records.
- Search and filters work together.
- Active records may expose active actions.
- Received/cancelled records are read-only.
- Deleted-book fallback works.
- Empty/loading/error states exist.
