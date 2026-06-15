# Series Book Order — Missing and Duplicate Part Number

> Source: `series-book-order.md`

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


## 10. Duplicate part number logic

Duplicate part number — це ситуація, коли дві або більше книги в одній серії мають однаковий номер частини.

### 10.1. New data

У нових flows duplicate `partNumber` має блокувати submit.

Це стосується:

* Add Book to Series;
* Create Book with selected series;
* Edit Book partNumber;
* Change book series relation.

---

### 10.2. Existing invalid data

Якщо duplicate partNumber вже існує в даних, Series Details Page має показати warning.

Message:

```text
У серії є книги з однаковим номером частини
Перевірте порядок книг, щоб серія відображалася правильно.
```

Behavior:

* книги все одно показуються;
* порядок всередині duplicate group можна стабілізувати за title або created date;
* користувач має змогу перейти до редагування книги.

---

### 10.3. Sorting duplicates

Якщо duplicate уже існує:

```text
partNumber ASC
then title ASC
```

або:

```text
partNumber ASC
then createdAt ASC
```

Recommended MVP:

```text
partNumber ASC, createdAt ASC
```

---
