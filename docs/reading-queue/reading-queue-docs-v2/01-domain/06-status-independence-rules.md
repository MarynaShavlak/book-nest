# Reading and Ownership Status Independence

## Add to queue does not change statuses

Adding a book to queue must not change:

- `readingStatus`;
- `ownershipStatus`;
- `format`;
- rating;
- notes;
- series data.

## Remove from queue does not change statuses

Removing a book from queue must not change:

- `readingStatus`;
- `ownershipStatus`;
- `format`;
- book data;
- library inclusion.

## Allowed reading statuses

A book can be added to queue with any reading status:

- Не почато;
- Хочу прочитати;
- Читаю;
- На паузі;
- Прочитано;
- Покинуто.

Example reason:

Користувач може додати прочитану книгу в чергу, якщо хоче перечитати її пізніше.

## Allowed ownership statuses

A book can be added to queue with any ownership status:

- Немає;
- Хочу купити;
- В дорозі;
- Маю;
- Позичена у когось;
- Видана комусь.
