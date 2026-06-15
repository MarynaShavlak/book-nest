### 12.7. Change reading status

Action:

```text
Змінити статус читання
```

Користувач вибирає новий reading status:

| Value          | Label          |
| -------------- | -------------- |
| `not_started`  | Не почато      |
| `want_to_read` | Хочу прочитати |
| `reading`      | Читаю          |
| `paused`       | На паузі       |
| `finished`     | Прочитано      |
| `dnf`          | Покинуто       |
| `rereading`    | Перечитую      |

Logic:

* статус змінюється для всіх вибраних книг;
* bulk action оновлює тільки `readingStatus`;
* індивідуальні поля типу rating, progress, date finished або note не заповнюються масово;
* якщо потрібні детальні дані, користувач редагує книгу окремо.

---
