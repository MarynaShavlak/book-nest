# Genres / Tags Module Map

## 1. Module responsibility

Модуль відповідає за:

- сторінку **Жанри / Теги**;
- вкладки **Жанри** та **Теги**;
- predefined genres;
- user-created tags;
- статистику по жанрах і тегах;
- пошук, фільтри, сортування;
- створення, редагування і видалення власних тегів;
- інтеграцію жанрів і тегів у Create / Edit Book Form;
- інтеграцію з Book Details;
- інтеграцію з My Library filters;
- інтеграцію зі статистикою та Dashboard.

## 2. Core concept

```text
Genres = стабільні книжкові категорії.
Tags = персональні мітки користувача: тропи, атмосфера, теми, персонажі, власні позначки.
```

## 3. MVP decision

```text
Жанри predefined.
Теги user-created only.
Немає predefined tags.
```

Це означає:

- тег не з'являється у списку, поки користувач його не створив;
- autocomplete для тегів показує тільки теги поточного користувача;
- системних тегів у MVP немає;
- теги належать конкретному `userId`.

## 4. Main user flows

```text
Book Form → select genres → save book → genre stats update
Book Form → create/select user tags → save book → tag stats update
Genres / Tags Page → click genre/tag → My Library opens with filter
Genres / Tags Page → add/edit/delete tag → user tag list updates
```
