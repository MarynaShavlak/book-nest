# Edit Tag: Validation, Errors and Acceptance

## Validation

Same as Add Tag:

- name required;
- min 2;
- max 40;
- unique normalizedName per user;
- description max 300.

## Errors

```text
Тег не знайдено
Такий тег уже існує
Не вдалося оновити тег
```

## Acceptance Criteria

- User can edit own tag.
- User cannot edit another user's tag.
- Edited tag updates in Tags tab.
- Edited tag updates in Book Form autocomplete.
- Edited tag updates in Book Details and My Library.
- Duplicate normalized name is blocked.
