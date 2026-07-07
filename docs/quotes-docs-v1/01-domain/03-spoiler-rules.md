# Spoiler Rules

## Purpose

Spoiler mode protects the user from accidentally seeing important plot details when browsing quotes.

## Field

```ts
isSpoiler: boolean;
```

## Default state

```ts
isSpoiler: false
```

## Display rules

### If `isSpoiler === false`

Show quote text immediately.

Show badge:

```text
Без спойлерів
```

### If `isSpoiler === true`

Do not show quote text by default.

Show spoiler placeholder:

```text
Ця цитата містить спойлер
```

Show action:

```text
Показати спойлер
```

Show badge:

```text
Зі спойлерами
```

After clicking `Показати спойлер`, reveal quote text and show action:

```text
Приховати спойлер
```

## Important UI rule

Spoiler visibility is a local UI state and should not change `quote.isSpoiler`.

```ts
quote.isSpoiler = true;
localState.isSpoilerVisible = false;
```

When user clicks `Показати спойлер`:

```ts
localState.isSpoilerVisible = true;
```

The database value remains unchanged.

## Search behaviour

Spoiler quotes can appear in search results, but their text should remain hidden until the user explicitly reveals it.

## Global Quotes page

On the standalone Quotes page, spoiler text must be hidden by default every time the page is loaded.

This prevents accidental spoilers while browsing the archive.

## Book Details section

In the Book Details quotes block, spoiler quotes must also be hidden by default.

## Editing spoiler quotes

When editing a spoiler quote, the modal can show the full quote text because the user intentionally opened edit mode.

## Copy behaviour

If quote is spoiler and currently hidden, copy action should either be disabled or require explicit reveal first.

Recommended MVP behaviour:

- hide copy button while spoiler is hidden;
- show copy button after spoiler is revealed.
