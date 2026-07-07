# Edit Quote Flow

## Entry points

User can edit quote from:

- Book Details quote card;
- standalone Quotes page quote card;
- full quote modal / drawer.

## Flow

1. User opens quote actions menu.
2. User clicks `Редагувати`.
3. Edit Quote modal opens.
4. Existing data is prefilled.
5. User changes fields.
6. User clicks `Зберегти зміни`.
7. Quote is updated.
8. Modal closes.
9. UI shows updated quote.
10. Show toast:

```text
Цитату оновлено
```

## Editable fields

- text;
- chapter;
- page;
- comment;
- isSpoiler;
- isFavorite.

## Important spoiler rule

Editing quote can show full spoiler text because edit mode is intentional.

## Payload

Send only changed fields or full quote update depending on backend contract.

Recommended full update payload:

```ts
const payload = {
  text: values.text.trim(),
  chapter: values.chapter?.trim() || undefined,
  page: values.page ? Number(values.page) : undefined,
  comment: values.comment?.trim() || undefined,
  isSpoiler: values.isSpoiler,
  isFavorite: values.isFavorite,
};
```
