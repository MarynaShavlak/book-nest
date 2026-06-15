# Tag Types

## Purpose

Tag types help organize user-created tags.

Recommended types:

| Value | Label | Examples |
| ----- | ----- | -------- |
| `trope` | Троп | slow burn, enemies to lovers, found family |
| `atmosphere` | Атмосфера | cozy, dark, emotional, comfort read |
| `theme` | Тема | revenge, survival, war, family secrets |
| `character` | Персонажі | morally gray character, strong female lead |
| `format` | Формат | коротка книга, long read, anthology |
| `custom` | Власний тег | будь-яка персональна мітка |

## MVP rule

```text
Tag type is useful, but not mandatory for creating a tag.
If user does not choose type, use custom.
```

Default:

```ts
type = "custom";
```

## Filtering by tag type

Tags tab can allow filtering by:

```text
Тропи
Атмосфера
Теми
Персонажі
Формат
Власні теги
```

Only user's created tags are shown inside these groups.
