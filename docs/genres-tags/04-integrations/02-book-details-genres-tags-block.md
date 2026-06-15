# Book Details Genres / Tags Block

## Purpose

Book Details should show genres and tags of current book.

Block title:

```text
Жанри / Теги
```

## Content

Show:

- selected genres;
- selected user tags;
- action to edit book;
- click on genre/tag to open My Library filtered by that value.

## Click behavior

Genre:

```text
/my-library?genre=:genreValue
```

Tag:

```text
/my-library?tagId=:tagId
```

## Empty state inside block

If book has no genres or tags:

```text
Жанри й теги ще не додані
```

Action:

```text
Редагувати книгу
```
