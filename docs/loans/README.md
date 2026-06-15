# Feature: Loans / Позичені книги

Модуль **Loans** описує логіку книг, які користувач тимчасово взяв у когось або дав комусь.

UI-назва сторінки:

```text
Позичені книги
```

Модуль має два окремі сценарії:

```text
1. Користувач взяв книгу у когось
2. Користувач дав свою книгу комусь
```

Important:

```text
Не використовувати один загальний статус “Позичено”.
Він не пояснює, де фізично знаходиться книга.
```

Правильна логіка:

```text
Позичена у когось = книга фізично у користувача, але не його власна.
Видана комусь = книга належить користувачу, але фізично зараз в іншої людини.
```

## Module sections

| Section | Purpose |
| ------- | ------- |
| `01-domain` | data model, statuses, validation, permissions |
| `02-pages` | page “Позичені книги” |
| `03-actions` | create/edit/return loan flows |
| `04-integrations` | Book Details, Book Form, My Library, Dashboard |
| `05-shared` | cross-feature rules, states, acceptance criteria |
