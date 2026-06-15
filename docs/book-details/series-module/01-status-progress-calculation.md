# Series Module — Status and Progress Calculation

> Source: series-module-overview.md lines 200-336

---

## 6. Series status vs user progress

У Series Module є два різні поняття:

```text
seriesStatus
user reading progress
```

Їх не можна змішувати.

---

### 6.1. Series status

`seriesStatus` показує стан книжкового циклу як твору.

Options:

| Value       | Label       | Meaning                                |
| ----------- | ----------- | -------------------------------------- |
| `completed` | Завершена   | серія завершена автором / видавництвом |
| `ongoing`   | Ще виходить | нові книги ще можуть виходити          |
| `unknown`   | Невідомо    | користувач не знає статус серії        |

Example:

```text
Серія завершена
Серія ще виходить
Статус серії невідомий
```

---

### 6.2. User reading progress

User reading progress показує, скільки книг із серії користувач прочитав.

Example:

```text
Прочитано 2 з 5 книг
40%
```

Important:

```text
Серія може бути завершена автором, але користувач може ще не прочитати всі книги.
```

Example:

```text
seriesStatus = completed
user progress = 2 з 5 книг
```

---

## 7. Progress calculation

Прогрес серії рахується на основі книг зі статусом:

```text
readingStatus = finished
```

Base formula:

```text
finished books count / total books count * 100
```

---

### 7.1. If totalBooksCount exists

Якщо в серії вказаний `totalBooksCount`, прогрес рахується від нього.

Example:

```text
totalBooksCount = 5
finishedBooksCount = 2

Progress = 2 з 5
Progress percent = 40%
```

---

### 7.2. If totalBooksCount does not exist

Якщо `totalBooksCount` не вказаний, прогрес рахується від кількості доданих книг.

Example:

```text
addedBooksCount = 4
finishedBooksCount = 2

Progress = 2 з 4 доданих
Progress percent = 50%
```

---

### 7.3. Empty series

Якщо серія не має книг:

```text
Прогрес ще недоступний
```

---

### 7.4. All books finished

Якщо всі додані книги прочитані:

```text
Усі книги прочитані
100%
```

Important:

```text
“Усі книги прочитані” означає прогрес користувача.
Це не те саме, що seriesStatus = completed.
```

---
