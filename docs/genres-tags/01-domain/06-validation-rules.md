# Validation Rules

## Genres field validation

Recommended MVP limits:

| Rule | Value |
| ---- | ----- |
| Min genres per book | 0 |
| Max genres per book | 5 |
| Source | predefined genre dictionary only |
| Custom genres | not allowed in MVP |

Error:

```text
Можна вибрати максимум 5 жанрів
```

## Tags field validation

Recommended MVP limits:

| Rule | Value |
| ---- | ----- |
| Min tags per book | 0 |
| Max tags per book | 15 |
| Source | current user's created tags only |
| Create new tag | allowed |

Error:

```text
Можна вибрати максимум 15 тегів
```

## UserTag validation

| Field | Required | Rule |
| ----- | -------- | ---- |
| name | yes | min 2, max 40, unique by normalizedName per user |
| type | no | default `custom` |
| color | no | optional, future-friendly |
| description | no | max 300 |

Errors:

```text
Введіть назву тегу
Назва тегу має містити щонайменше 2 символи
Назва тегу не може бути довшою за 40 символів
Такий тег уже існує
Опис не може бути довшим за 300 символів
```
