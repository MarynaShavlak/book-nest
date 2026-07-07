# Book Details Quote Preview Card

## Purpose

Compact card for quote inside Book Details page.

Unlike global quote card, book context can be smaller because user is already on the book page.

## Card content

Show:

- quote text or spoiler placeholder;
- page / chapter if provided;
- comment if provided;
- favorite icon;
- spoiler badge;
- menu actions.

## Structure

```text
[Badge] [heart] [menu]
“Quote text...”
Розділ 12 · стор. 146
💬 User comment
```

## Spoiler state

Hidden:

```text
Ця цитата містить спойлер
[Показати спойлер]
```

Visible:

```text
“Quote text...”
[Приховати спойлер]
```

## Actions

Card actions:

```text
Додати цитату в улюблені
Редагувати
Видалити
```

If standalone Quotes page exists:

```text
Відкрити у цитатах
```

## Visual style

Use BookNest cozy card style:

- cream background;
- subtle terracotta border;
- rounded corners;
- serif quote text;
- small decorative quote mark or branch.
