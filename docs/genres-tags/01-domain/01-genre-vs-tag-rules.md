# Genre vs Tag Rules

## Main difference

```text
Genre відповідає на питання: “До якого типу літератури належить книга?”
Tag відповідає на питання: “Який у книги настрій, троп, тема або особливість?”
```

## Genres

Genres are stable library categories.

Examples:

```text
Фентезі
Романтика
Детектив
Трилер
Класика
Нон-фікшн
Young Adult
Наукова фантастика
Горор
Сучасна проза
```

Rules:

- genres are predefined;
- user cannot create custom genres in MVP;
- genres are selected in Book Form by autocomplete / multi-select;
- book can have multiple genres;
- genre list is shared as app dictionary, not per user.

## Tags

Tags are personal user labels.

Examples:

```text
slow burn
found family
dark academia
comfort read
witches
dragons
strong female lead
```

Rules:

- tags are not predefined in this project;
- user creates tags manually;
- tags belong to current user;
- only already-created user tags appear in autocomplete;
- tags can be edited or deleted by owner;
- a book can have multiple tags.

## Important UX rule

Book Form should explain the difference:

```text
Жанри — основні категорії книги.
Теги — ваші власні мітки: тропи, настрій, теми або особливості книги.
```
