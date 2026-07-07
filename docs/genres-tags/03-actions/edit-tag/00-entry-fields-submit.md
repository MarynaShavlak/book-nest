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
- color from predefined BookNest tag color palette;
- description.

## Submit behavior

On save:

1. validate fields;
2. check duplicate normalizedName for current user, excluding current tag;
3. validate selected color key;
4. update UserTag;
5. update all UI where tag is shown;
6. show success message.

Success:

```text
Тег оновлено
```

## Color update behavior

When the user changes the tag color, the selected color key is updated on the `UserTag` entity.

Changing tag color updates the tag display everywhere:

- Tags tab;
- Book Form;
- Book Details;
- My Library filters;
- search/filter chips.

Changing tag color does not change book data and does not affect `tagIds`.

The user cannot enter a custom color manually.

## Important

If books store `tagIds`, renaming tag automatically updates display everywhere without changing every book.
