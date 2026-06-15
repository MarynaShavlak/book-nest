# Data Safety and Permissions

## User ownership

A user can access only own delivery records.

Every query must be scoped by:

```ts
userId === currentUser.id
```

## Data safety rules

Delivery actions must not change:

- reading status;
- reading progress;
- rating;
- notes;
- quotes;
- characters;
- series relation;
- custom lists;
- favorite state;
- book cover and metadata.

## Bulk safety

Bulk receive actions must update only selected/active deliveries.

Bulk actions must not affect:

- cancelled records;
- received records;
- records belonging to another user;
- books that are no longer `in_transit`.

## Transaction rule

When an action updates both Book and BookDelivery, treat it as one logical transaction.

Examples:

- Mark as received updates book + delivery.
- Cancel order updates book + delivery.
- Mark as in transit updates book + creates delivery.

If one update fails, avoid partial state.
