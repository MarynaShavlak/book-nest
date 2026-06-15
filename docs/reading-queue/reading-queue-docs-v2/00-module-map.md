# Reading Queue Module Map

## Purpose

Модуль **Reading Queue / Черга читання** відповідає за впорядкований список книг, які користувач планує читати далі.

Головне питання сторінки:

```text
Що я буду читати наступним?
```

## Core concepts

- Книга може бути або не бути в черзі.
- Якщо книга в черзі, вона має `position`.
- Позиції починаються з `1`.
- Позиції мають бути послідовними без пропусків.
- Одна книга не може бути в черзі двічі.
- Додавання в чергу не змінює `readingStatus`.
- Прибирання з черги не видаляє книгу з бібліотеки.
- Drag-and-drop змінює тільки порядок черги.
- Start reading може змінити `readingStatus` на `reading`.

## Recommended implementation packages for Claude Code

### Build Reading Queue Page

```text
00-module-map.md
01-domain/01-reading-queue-data-model.md
01-domain/04-position-and-order-rules.md
02-pages/reading-queue-page/
05-shared/states/
05-shared/filter-search-sort-rules/
```

### Build Add to Reading Queue from Book Details

```text
00-module-map.md
01-domain/03-access-and-user-scope.md
01-domain/04-position-and-order-rules.md
01-domain/05-duplicate-prevention-rules.md
03-actions/add-to-reading-queue/
04-integrations/01-book-details-contract.md
```

### Build Drag-and-drop Reorder

```text
00-module-map.md
01-domain/04-position-and-order-rules.md
03-actions/reorder-reading-queue/
05-shared/02-optimistic-update-and-rollback.md
```

### Build Start Reading

```text
00-module-map.md
03-actions/start-reading-from-queue/
04-integrations/04-dashboard-contract.md
05-shared/00-cross-feature-update-matrix.md
```

### Build Remove from Queue with Undo

```text
00-module-map.md
01-domain/04-position-and-order-rules.md
03-actions/remove-from-reading-queue/
05-shared/02-optimistic-update-and-rollback.md
```
