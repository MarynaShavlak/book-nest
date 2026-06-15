# Part Number Core Rules

> Source: `series-book-order.md`

## 4. Core rules

### 4.1. Sorting rule

Усі книги серії мають сортуватися за:

```text
partNumber ASC
```

Example:

```text
partNumber 1
partNumber 2
partNumber 3
partNumber 4
```

Якщо книга не має `partNumber`, вона показується в кінці списку.

---

### 4.2. Required rule for new relations

У MVP нову книгу не можна додати до серії без `partNumber`.

Це стосується:

* Add Book to Series flow;
* Create Book Form, якщо книга додається до серії;
* Edit Book Form, якщо користувач прив’язує книгу до серії.

Error message:

```text
Вкажіть номер частини книги в серії
```

---

### 4.3. Old data rule

Якщо в існуючих даних уже є книга без `partNumber`, сторінка не має ламатися.

Behavior:

* книга показується в кінці списку;
* біля книги показується warning;
* користувач може перейти до редагування книги і вказати номер частини.

Message:

```text
Номер частини не вказаний
```

---

### 4.4. Duplicate partNumber rule

У MVP не можна мати дві книги з однаковим `partNumber` в одній серії.

Example invalid state:

```text
Книга A — partNumber 1
Книга B — partNumber 1
```

Error message:

```text
У цій серії вже є книга з таким номером частини
```

Recommended MVP behavior:

```text
Блокувати submit, якщо partNumber уже зайнятий.
```

---

### 4.5. Gaps are allowed

Якщо в серії є пропущені номери, це не помилка.

Example:

```text
1 → 3 → 4
```

Так може статися, якщо користувач відв’язав другу книгу від серії.

MVP behavior:

```text
Не змінювати номери інших книг автоматично.
Не блокувати відображення серії.
```

Optional hint:

```text
У серії є пропущені номери частин
```

У MVP цей hint можна не показувати.

---
