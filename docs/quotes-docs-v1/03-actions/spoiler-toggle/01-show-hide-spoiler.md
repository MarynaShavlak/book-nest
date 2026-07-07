# Show / Hide Spoiler

## Purpose

Allow users to intentionally reveal spoiler quotes.

## Important difference

There are two states:

```ts
quote.isSpoiler // saved database value
isSpoilerVisible // local UI state
```

Showing spoiler changes only local UI state.

It must not change `quote.isSpoiler`.

## Hidden state

Show:

```text
Ця цитата містить спойлер
[Показати спойлер]
```

Do not show quote text.

## Visible state

Show quote text.

Show action:

```text
Приховати спойлер
```

## Flow

1. Quote has `isSpoiler: true`.
2. User sees spoiler placeholder.
3. User clicks `Показати спойлер`.
4. Local state changes to visible.
5. Quote text is displayed.
6. User can click `Приховати спойлер`.
7. Text becomes hidden again.

## Reset behaviour

Spoiler should become hidden again when:

- page reloads;
- user changes filters;
- user leaves and returns to page;
- quote card unmounts.

## Non-spoiler quotes

For `isSpoiler: false`, show text immediately and do not show spoiler actions.
