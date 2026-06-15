# Missing Books and Gaps

> Source: `series-book-order.md, add-book-to-series.md`

## 9. Missing part number logic

Missing part number — це ситуація, коли книга належить до серії, але не має номера частини.

Це не має створюватися через нові MVP flows, але може існувати у старих або некоректних даних.

### 9.1. Display behavior

Книги без `partNumber` показуються:

```text
після всіх книг із partNumber
```

Example:

```text
Книга 1
Книга 2
Книга 3
Без номера частини
```

---

### 9.2. Warning

Message:

```text
Номер частини не вказаний
```

Action:

```text
Редагувати книгу
```

---

### 9.3. Next book behavior

Книги без `partNumber` не мають бути першими кандидатами на next book.

Recommended MVP:

```text
Спочатку визначати next book серед книг з partNumber.
Якщо таких непрочитаних книг немає, можна показати книгу без partNumber з warning.
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


## 7. Scenario: Add missing book

Missing book — це книга, яка відома як частина серії, але ще не додана в бібліотеку користувача.

Example:

```text
Книга 1 — Прочитано
Книга 2 — Читаю
Книга 3 — Ще не додано
```

### 7.1. MVP logic

У MVP missing books показуються тільки тоді, коли вони вже відомі в межах даних користувача.

Important:

```text
Автоматичне підтягування повного списку книг серії з інтернету не входить у MVP.
```

Missing book може з’явитися, якщо:

* користувач вручну додав запис про відсутню книгу;
* система має локальні дані про книгу в межах серії;
* книга була запланована як частина серії, але ще не створена як повноцінна книга в бібліотеці.

---

### 7.2. Add missing book behavior

Якщо користувач натискає:

```text
Додати книгу
```

на missing book row, відкривається Create Book flow з prefilled даними:

| Field            | Prefilled value                 |
| ---------------- | ------------------------------- |
| Series           | поточна серія                   |
| Title            | назва missing book, якщо відома |
| Part number      | номер частини missing book      |
| Author           | автор серії, якщо доступний     |
| Reading status   | `not_started`                   |
| Ownership status | `none`                          |

Після збереження:

* missing book стає повноцінною книгою в бібліотеці;
* state **Ще не додано** зникає;
* книга показується як звичайна книга в списку серії;
* прогрес і статистика серії оновлюються.

---
