# Total Books Count Rules

> Source: `add-book-to-series.md, series-book-order.md`

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


## 11. Relation with totalBooksCount

`totalBooksCount` — це загальна кількість книг у серії.

Він не визначає порядок, але може перевіряти partNumber.

### 11.1. totalBooksCount exists

Якщо в серії вказаний `totalBooksCount`, `partNumber` не має бути більшим за це значення.

Example:

```text
totalBooksCount = 3
partNumber = 4
```

Result:

```text
Показати validation error або warning.
```

Recommended MVP behavior:

```text
Блокувати submit і запропонувати оновити totalBooksCount.
```

Message:

```text
Номер частини більший за загальну кількість книг у серії
Оновіть загальну кількість книг у серії або змініть номер частини.
```

---

### 11.2. totalBooksCount does not exist

Якщо `totalBooksCount` не вказаний:

* partNumber може бути будь-яким цілим числом від 1;
* верхньої межі немає;
* progress рахується по доданих книгах.

---

### 11.3. Removing books does not change totalBooksCount

Якщо книгу відв’язали від серії, `totalBooksCount` не змінюється автоматично.

Example:

```text
totalBooksCount = 5
У серії було 4 додані книги
Користувач відв’язав 1 книгу

totalBooksCount залишається 5
```

---
