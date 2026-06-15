# Filter and Sort Rules

## Genre filters

Apply to aggregated genre items.

Examples:

```text
popular
fiction
non_fiction
with_unread
with_want_to_buy
with_queue
```

## Tag filters

Apply only to current user's tags.

Examples:

```text
all
trope
atmosphere
theme
character
format
custom
recently_used
without_books
```

## Sorting

Default:

```text
name ASC
```

Other options:

```text
booksCount DESC
readCount DESC
lastUsedAt DESC
type ASC
```

## Empty values

- tags without lastUsedAt go last in last used sorting;
- tags without books can be shown only if filter allows them;
- genres without books are hidden in default MVP view.
