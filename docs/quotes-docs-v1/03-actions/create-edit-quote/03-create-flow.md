# Create Quote Flow

## From Book Details

1. User opens Book Details.
2. User clicks `+ Додати цитату`.
3. Add Quote modal opens.
4. Book preview is prefilled.
5. User enters quote text.
6. User optionally enters chapter, page and comment.
7. User optionally enables spoiler toggle.
8. User optionally enables favorite toggle.
9. User clicks `Зберегти цитату`.
10. Quote is created.
11. Modal closes.
12. Quote appears in `Цитати з книги` block.
13. Show toast:

```text
Цитату додано
```

## From standalone Quotes page

1. User clicks `+ Додати цитату`.
2. User selects a book.
3. Add Quote modal opens with selected book preview.
4. User fills quote fields.
5. User saves quote.
6. Quote appears in global Quotes page.

## Payload example

```ts
const payload = {
  bookId: book.id,
  text: values.text.trim(),
  chapter: values.chapter?.trim() || undefined,
  page: values.page ? Number(values.page) : undefined,
  comment: values.comment?.trim() || undefined,
  isSpoiler: values.isSpoiler,
  isFavorite: values.isFavorite,
};
```

## Post-submit updates

After successful create:

- invalidate / refetch book quotes;
- invalidate / refetch global quotes count if needed;
- update quote statistics.
