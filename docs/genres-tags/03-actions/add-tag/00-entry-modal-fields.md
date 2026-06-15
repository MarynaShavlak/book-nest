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
| Колір | no | color / select |
| Опис | no | textarea |

## Defaults

```ts
type = "custom";
```

## Buttons

```text
Скасувати
Додати тег
```
