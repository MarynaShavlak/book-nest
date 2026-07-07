# Edit Tag: Validation, Errors and Acceptance

## Validation

Same as Add Tag:

- name required;
- min 2;
- max 40;
- unique normalizedName per user;
- description max 300;
- selected color must be one of predefined BookNest tag color keys.

## Color validation

The selected color must be one of the predefined BookNest tag color keys:

```ts
"parchment" | "terracotta" | "honey" | "sage" | "forest" | "sky" | "lavender" | "rose"
```

If the selected color is invalid, show:

```text
Оберіть колір зі списку доступних кольорів.
```

The app should fallback to `parchment` only when rendering old or corrupted data.

The edit form should not allow saving unsupported color values.

## Errors

```text
Тег не знайдено
Такий тег уже існує
Оберіть колір зі списку доступних кольорів.
Не вдалося оновити тег
```

## Acceptance Criteria

- User can edit own tag.
- User cannot edit another user's tag.
- User can change tag color only from predefined BookNest palette.
- User cannot enter arbitrary HEX/RGB/OKLCH color values.
- Edited tag updates in Tags tab.
- Edited tag updates in Book Form autocomplete.
- Edited tag updates in Book Details and My Library.
- Duplicate normalized name is blocked.
