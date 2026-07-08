# Notes Module Documentation v1

Цей модуль описує фічу **«Нотатки»** для BookNest.

Документація структурована за принципом `docs/series`: окремі файли для доменних правил, сторінок, дій, інтеграцій і shared-станів, щоб розробник міг брати в роботу тільки потрібний контекст.

## Основна ідея

Нотатки — це особистий читацький архів користувача: думки, враження, спостереження, питання, ідеї для рецензій та важливі деталі під час читання.

У першій версії нотатка може бути створена:

- до книги;
- до серії.

Функціонал має бути масштабованим: у майбутньому нотатки можуть створюватися для персонажів, авторів, локацій, цитат, подій хронології та інших сутностей.

## Важливі рішення

- До однієї книги або серії можна створювати багато нотаток.
- Обсяг однієї нотатки — до **5000 символів**.
- Теги для нотаток не використовуються.
- Замість тегів використовується одна **категорія нотатки**.
- Категорія необов’язкова.
- Є категорія **«Інше»** з можливістю вказати власну назву.
- Нотатка може мати опційний **розділ**.
- Нотатка може мати опційний **номер сторінки**.
- Нотатка може бути спойлером.
- Нотатка може бути улюбленою.
- Нотатка може бути закріпленою.
- Улюблена нотатка не робить книгу/серію улюбленою.
- Закріплена нотатка впливає тільки на порядок показу нотаток.

## Як користуватися документацією

1. Почати з `00-module-map.md`.
2. Для планування реалізації відкрити `01-implementation-order.md`.
3. Для модалки створення/редагування брати `03-actions/create-edit-note/`.
4. Для блоку на сторінці книги брати `02-pages/book-details-notes-block/` + `04-integrations/book-details/`.
5. Для сторінки всіх нотаток брати `02-pages/all-notes-page/`.
6. Для майбутнього масштабування брати `04-integrations/future-entities/`.

## Recommended context packages

### Book Details Notes Block

- `00-module-map.md`
- `01-domain/01-notes-overview.md`
- `01-domain/02-entity-scope-and-ownership.md`
- `01-domain/03-note-categories.md`
- `02-pages/book-details-notes-block/`
- `03-actions/create-edit-note/`
- `05-shared/01-loading-error-empty-states.md`

### Series Details Notes Block

- `00-module-map.md`
- `01-domain/01-notes-overview.md`
- `01-domain/02-entity-scope-and-ownership.md`
- `02-pages/book-details-notes-block/`
- `04-integrations/series-details/`

### Create / Edit Note Modal

- `00-module-map.md`
- `01-domain/03-note-categories.md`
- `01-domain/04-spoiler-favorite-pinned-rules.md`
- `01-domain/05-page-and-chapter-rules.md`
- `03-actions/create-edit-note/`

### All Notes Page

- `00-module-map.md`
- `01-domain/06-search-filter-sort-rules.md`
- `02-pages/all-notes-page/`
- `05-shared/01-loading-error-empty-states.md`

### Future Entity Notes

- `00-module-map.md`
- `01-domain/02-entity-scope-and-ownership.md`
- `04-integrations/future-entities/`
