# Add Tag: Submit, Validation and Errors

## Submit behavior

On submit:

1. trim tag name;
2. calculate normalizedName;
3. check duplicate for current user;
4. create UserTag;
5. close modal;
6. update tag autocomplete;
7. update Tags tab;
8. show success message.

## Validation

Rules:

- name required;
- name min 2 symbols;
- name max 40 symbols;
- normalizedName unique per user;
- description max 300;
- type defaults to custom.

## Error messages

```text
Введіть назву тегу
Назва тегу має містити щонайменше 2 символи
Назва тегу не може бути довшою за 40 символів
Такий тег уже існує
Не вдалося створити тег
```
