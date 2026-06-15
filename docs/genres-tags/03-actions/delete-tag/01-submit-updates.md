# Delete Tag: Submit and Updates

## Submit behavior

If tag is unused:

```text
Delete UserTag.
```

If tag is used:

```text
1. Remove tagId from all user's books that use this tag.
2. Delete UserTag.
3. Recalculate tag stats.
4. Update My Library filters.
```

## Success message

```text
Тег видалено
```

## Data safety

Deleting tag must not:

- delete books;
- delete notes;
- delete quotes;
- change genres;
- change reading/ownership statuses.
