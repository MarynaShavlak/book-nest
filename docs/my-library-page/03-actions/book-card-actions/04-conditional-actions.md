### 11.4. Conditional actions

Деякі дії мають показуватися тільки для відповідних статусів книги.

| Action                   | Коли показувати                                                      |
| ------------------------ | -------------------------------------------------------------------- |
| Оновити прогрес          | якщо `readingStatus = reading`, `rereading` або `paused`             |
| Почати читати            | якщо книга не має active reading status                              |
| Позначити як прочитану   | якщо `readingStatus !== finished`                                    |
| Позначити як отриману    | якщо `ownershipStatus = in_transit`                                  |
| Позначити як повернуту   | якщо `ownershipStatus = borrowed_from_someone` або `lent_to_someone` |
| Додати в чергу читання   | якщо книги ще немає в reading queue                                  |
| Прибрати з черги читання | якщо книга вже є в reading queue                                     |

---
