# Edit Tag: Entry, Fields and Submit

## Entry points

- Tags tab → tag card/chip → Edit;
- Book Form tag management menu, optional.

## Modal title

```text
Редагувати тег
```

## Editable fields

- name;
- type;
- color;
- description.

## Submit behavior

On save:

1. validate fields;
2. check duplicate normalizedName for current user, excluding current tag;
3. update UserTag;
4. update all UI where tag is shown;
5. show success message.

Success:

```text
Тег оновлено
```

## Important

If books store `tagIds`, renaming tag automatically updates display everywhere without changing every book.
