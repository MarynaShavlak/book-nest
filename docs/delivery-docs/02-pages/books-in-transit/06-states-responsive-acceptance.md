# Books in Transit: States, Responsive, Acceptance Criteria

## Loading state

Show skeleton cards and summary card placeholders.

## Empty state

When there are no active deliveries, show:

```text
У вас немає книг в дорозі
```

Primary action:

```text
Перейти до книг, які хочу купити
```

## Empty search/filter state

When active deliveries exist, but current filters return nothing:

```text
Нічого не знайдено
```

Action:

```text
Скинути фільтри
```

## Error state

Show retry action.

Do not clear existing local UI state until retry succeeds.

## Responsive rules

- desktop: grid/list + right sidebar;
- tablet: two-column cards, sidebar can move below;
- mobile: single-column cards, filters in drawer/popover.

## Acceptance criteria

- Page shows only active delivery records.
- Received and cancelled records are not shown.
- Search, filters, and sorting work together.
- Badge priority is respected.
- Single and bulk receive actions require confirmation where needed.
- Actions update Book and Delivery consistently.
- Empty, loading, error, and responsive states are implemented.
