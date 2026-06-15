# Series Book Order — Total Count, Reorder, Missing Gaps

> Source: `series-book-order.md`

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


## 12. Reorder logic

### 12.1. MVP

У MVP drag-and-drop reorder не входить.

BookNest не має окремої ручної позиції типу:

```text
displayOrder
```

У MVP порядок визначається тільки через:

```text
partNumber
```

---

### 12.2. How user changes order in MVP

Користувач може змінити порядок книги тільки через зміну `partNumber`.

Entry points:

* Edit Book Form;
* Add Book to Series flow;
* future Manage Series Books flow.

Example:

```text
Було:
Книга A — partNumber 2

Користувач редагує книгу:
partNumber = 3
```

Після збереження список серії пересортовується.

---

### 12.3. No automatic renumbering

BookNest не має автоматично змінювати номери інших книг.

Example:

```text
Було:
1, 2, 3

Користувач змінює книгу 3 на partNumber 5.

Стало:
1, 2, 5
```

MVP не має автоматично робити:

```text
1, 2, 3
```

Reason:

```text
partNumber — це реальна частина серії, а не UI-position.
```

---


## 13. Missing books and gaps

### 13.1. Gap does not always mean missing book

Example:

```text
1, 3
```

Це може означати:

* книга 2 ще не додана;
* користувач випадково пропустив номер;
* у серії є special edition;
* користувач не хоче додавати цю книгу.

Тому MVP не має автоматично створювати missing book.

---

### 13.2. Missing books in MVP

Missing book може існувати тільки якщо вона вже відома в межах даних користувача.

BookNest не має автоматично підтягувати список книг із зовнішніх джерел.

---

### 13.3. Optional future hint

У future можна показувати hint:

```text
Можливо, у серії пропущена книга 2
```

Actions:

```text
Додати missing book
Ігнорувати
```

У MVP це не потрібно.

---
