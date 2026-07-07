# Add Tag: Entry and Modal Fields

## Entry points

Action:

```text
+ Додати тег
```

Available from:

- Genres / Tags Page header;
- Tags tab empty state;
- Book Form tags field when no matching tag exists.

## Modal

Title:

```text
Додати тег
```

Subtitle:

```text
Створіть власний тег для настрою, тропу, теми або особливості книги.
```

## Fields

| Field | Required | Type |
| ----- | -------- | ---- |
| Назва тегу | yes | text input |
| Тип тегу | no | select |
| Колір | no | predefined palette select |
| Опис | no | textarea |

## Defaults

```ts
type = "custom";
color = "parchment";
```

## Color behavior

The color field is not a free color picker.

The user can select only one color from the predefined BookNest tag color palette:

- Пергамент — `parchment`
- Теракота — `terracotta`
- Медовий — `honey`
- Шавлія — `sage`
- Лісовий — `forest`
- Небесний — `sky`
- Лаванда — `lavender`
- Пудрова троянда — `rose`

If the user does not select a color manually, the tag is created with the default `parchment` color.

## Recommended color selector UI

```text
Колір тегу

[● Пергамент] [● Теракота] [● Медовий] [● Шавлія]
[● Лісовий]   [● Небесний] [● Лаванда] [● Троянда]
```

Selected color should be visually highlighted.

## Buttons

```text
Скасувати
Додати тег
```
