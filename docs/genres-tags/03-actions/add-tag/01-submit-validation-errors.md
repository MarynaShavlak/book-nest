# Add Tag: Submit, Validation and Errors

## Submit behavior

On submit:

1. trim tag name;
2. calculate normalizedName;
3. check duplicate for current user;
4. resolve tag type;
5. resolve tag color;
6. create UserTag;
7. close modal;
8. update tag autocomplete;
9. update Tags tab;
10. show success message.

## Validation

Rules:

- name required;
- name min 2 symbols;
- name max 40 symbols;
- normalizedName unique per user;
- description max 300;
- type defaults to custom;
- color defaults to parchment;
- color must be one of predefined BookNest tag color keys.

## Color validation

Allowed values:

```ts
const allowedTagColors = [
  "parchment",
  "terracotta",
  "honey",
  "sage",
  "forest",
  "sky",
  "lavender",
  "rose",
];
```

If color is missing:

```ts
color = "parchment";
```

If color is invalid, show validation error:

```text
Оберіть колір зі списку доступних кольорів.
```

The app must not accept arbitrary HEX/RGB/OKLCH values from the UI.

## Error messages

```text
Введіть назву тегу
Назва тегу має містити щонайменше 2 символи
Назва тегу не може бути довшою за 40 символів
Такий тег уже існує
Оберіть колір зі списку доступних кольорів.
Не вдалося створити тег
```
