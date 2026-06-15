# Reorder Acceptance Criteria

- User can change queue order via drag-and-drop.
- Drag-and-drop is available only when search is empty.
- Drag-and-drop is available only when sort is `position ASC`.
- Drag-and-drop is disabled during loading.
- After reorder, positions are recalculated.
- New order is saved.
- UI immediately shows updated order.
- If save fails, UI rolls back to previous order.
- No duplicated positions are created.
- No position gaps remain after reorder.
