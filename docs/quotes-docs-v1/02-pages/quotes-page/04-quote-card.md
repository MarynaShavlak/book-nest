# Quote Card

## Purpose

Quote card displays one saved quote with book context and available actions.

## Card content

Each card should show:

- book cover;
- book title;
- book author;
- quote text or spoiler placeholder;
- chapter if provided;
- page if provided;
- spoiler badge;
- favorite icon;
- menu actions;
- user comment if provided;
- link to book.

## Structure

```text
[Cover] Book title                  [heart] [menu]
        Author

        “Quote text...”

        Chapter · page
        [Badge]

        Comment block if exists

        До книги →
```

## Spoiler card state

If quote is spoiler and hidden:

```text
Ця цитата містить спойлер
[Показати спойлер]
```

Quote text is not shown.

After reveal:

```text
“Quote text...”
[Приховати спойлер]
```

## Badges

No spoiler:

```text
Без спойлерів
```

Spoiler:

```text
Зі спойлерами
```

## Metadata line

Examples:

```text
Розділ 12 · стор. 146
```

```text
стор. 87
```

```text
Розділ III
```

If neither page nor chapter exists, metadata line can be hidden.

## Comment block

If comment exists:

```text
💬 Дуже сильний момент, який мене зачепив.
```

Use subtle background or top border.

## Actions menu

Menu actions:

```text
Редагувати
Перейти до книги
Скопіювати цитату
Видалити
```

If spoiler is hidden, copy action can be hidden or disabled.

## Favorite icon

Inactive:

```text
♡
```

Active:

```text
♥
```

Tooltip:

```text
Додати цитату в улюблені
Прибрати цитату з улюблених
```
