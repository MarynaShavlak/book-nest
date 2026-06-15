# Filter and Sort Rules

## Base query

All filters and sorting apply only to:

```ts
ownershipStatus === "want_to_buy"
```

## Search order

Search by:

1. title;
2. original title;
3. author;
4. publisher;
5. store name;
6. genre;
7. tags.

## Price sorting

Use `bestOfferPrice`.

Books without price:

- go last for lowest price sorting;
- go last for highest price sorting unless explicitly sorted as unknown.

## Store filters

A book matches store filter if at least one of its store links uses selected store.

## Link filters

- `has_links`: links count > 0.
- `without_links`: links count = 0.
- `has_price`: at least one link has price.
- `without_price`: no link has price.

## Best offer filter

Can show top N cheapest books or apply sorting by lowest price.

Recommended MVP:

```text
Best offers block in sidebar + price sorting in main list.
```
