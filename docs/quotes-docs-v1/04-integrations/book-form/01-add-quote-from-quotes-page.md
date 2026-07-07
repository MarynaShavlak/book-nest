# Add Quote From Standalone Quotes Page

## Problem

When user adds quote from Book Details, the book is already known.

When user adds quote from standalone Quotes page, the book must be selected first.

## Required behaviour

If user clicks `+ Додати цитату` on `/quotes`, show one of these flows:

### Option A — Book select step before modal

1. User clicks `+ Додати цитату`.
2. Book picker opens.
3. User selects book.
4. Add Quote modal opens with book preview.

### Option B — Book select inside modal

1. User clicks `+ Додати цитату`.
2. Add Quote modal opens.
3. First field is required book autocomplete.
4. After selecting book, preview appears.

Recommended: Option B for fewer modal transitions.

## Book select field

Label:

```text
Книга *
```

Placeholder:

```text
Оберіть книгу...
```

Search by:

- title;
- author;
- original title.

## Validation

When quote is created from `/quotes`, book is required.

```ts
bookId: string;
```

## After creation

Quote appears in:

- standalone Quotes page;
- selected book’s Book Details quotes block.
