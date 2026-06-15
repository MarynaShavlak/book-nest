# Reading Queue Module Documentation v2

Ця структура замінює стару документацію з двох довгих файлів:

- `read-queue-page.md`
- `add-to-reading-queue.md`

Нова структура розбиває логіку **Черги читання** на маленькі файли, щоб Claude Code міг брати тільки потрібний контекст.

## Як користуватись

1. Спочатку відкривай `00-module-map.md`.
2. Потім бери тільки папку або файл для конкретної задачі.
3. Для реалізації завжди додавай relevant domain-файли з `01-domain/`.
4. Не передавай старі довгі файли разом із цією структурою.

## Основні зони модуля

- `01-domain/` — правила даних, позицій, доступу, статусів і безпеки.
- `02-pages/` — документація сторінки `/reading-queue`.
- `03-actions/` — окремі сценарії дій користувача.
- `04-integrations/` — контракти з Book Details, My Library, Dashboard, Favorites та іншими модулями.
- `05-shared/` — спільні правила states, search/sort, accessibility, optimistic updates і acceptance criteria.
