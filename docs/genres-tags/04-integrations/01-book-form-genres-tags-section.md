# Book Form Genres / Tags Section

## Genres field

Label:

```text
Жанри
```

Type:

```text
Autocomplete / multi-select
```

Source:

```text
Predefined genre dictionary
```

Rules:

- user can select multiple genres;
- user can remove selected genre;
- user cannot create custom genre in MVP;
- max 5 genres per book.

## Tags field

Label:

```text
Теги
```

Type:

```text
Autocomplete / multi-select + create new tag
```

Source:

```text
Only current user's created tags
```

Important:

```text
No predefined tags are shown.
If user has no tags, autocomplete is empty and offers to create a new tag.
```

Rules:

- user can select existing own tags;
- user can create new tag from field;
- after creating tag, it is saved as UserTag;
- newly created tag can be selected for current book;
- max 15 tags per book.

## Helper text

```text
Жанри — основні категорії книги. Теги — ваші власні мітки: тропи, настрій, теми або особливості.
```
