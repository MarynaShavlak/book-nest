# Add Book to Series — Total Count, Reading, Ownership

> Source: `add-book-to-series.md`

## 10. Total books count interaction

Якщо в серії вказано `totalBooksCount`, додавання книги має враховувати це значення.

### 10.1. Adding book within totalBooksCount

Example:

```text
totalBooksCount = 5
Користувач додає книгу з partNumber = 4
```

Behavior:

```text
Книга додається без warning.
```

---

### 10.2. Adding book beyond totalBooksCount

Example:

```text
totalBooksCount = 3
Користувач додає книгу з partNumber = 4
```

Recommended MVP behavior:

* показати warning;
* не додавати книгу, поки користувач не оновить `totalBooksCount`.

Message:

```text
Номер частини більший за загальну кількість книг у серії
Оновіть загальну кількість книг у серії або змініть номер частини.
```

Actions:

```text
Редагувати серію
Змінити номер частини
```

Reason:

```text
Progress серії залежить від totalBooksCount, тому значення не має суперечити кількості доданих книг.
```

---

### 10.3. Series without totalBooksCount

Якщо `totalBooksCount` не вказаний, користувач може додавати книги без обмеження по верхній межі.

Behavior:

```text
Progress рахується по доданих книгах.
```

---


## 11. Reading status and ownership status

### 11.1. Existing book

Якщо користувач додає існуючу книгу до серії:

* readingStatus книги не змінюється;
* ownershipStatus книги не змінюється;
* rating книги не змінюється;
* progress книги не змінюється;
* queue state книги не змінюється.

Add Book to Series тільки додає series relation і `partNumber`.

---

### 11.2. New book

Якщо користувач створює нову книгу в межах серії, застосовуються default values або значення, які користувач обрав у Create Book flow.

Default:

```text
readingStatus = not_started
ownershipStatus = none
```

---

### 11.3. Book in Reading Queue

Якщо існуюча книга вже була в Reading Queue, після додавання до серії вона має показувати badge:

```text
У черзі
```

Duplicate в Reading Queue не створюється.

---
