# Series Book Order — Overview, Entry Points, Core Rules

> Source: `series-book-order.md`

## 1. Purpose

Feature **Series Book Order / Part Number Logic** описує, як BookNest визначає, зберігає, перевіряє і показує порядок книг усередині книжкової серії.

Фіча потрібна для того, щоб користувач міг:

* бачити книги серії у правильному порядку;
* розуміти, яка книга є першою, другою, третьою і далі;
* бачити коректний reading order на Series Details Page;
* правильно визначати наступну книгу для читання;
* уникати дублювання номерів частин;
* бачити warning, якщо порядок книг некоректний;
* не втрачати реальний номер книги після видалення або відв’язування іншої книги з серії.

Important:

```text
Series Book Order не відповідає за створення серії.
Series Book Order не відповідає за додавання або відв’язування книг.
Ця фіча відповідає тільки за порядок книг у межах серії.
```

---


## 2. Main idea

Кожна книга, яка належить до серії, має мати номер частини:

```text
partNumber
```

`partNumber` визначає позицію книги в серії.

Example:

```text
Книга 1 → partNumber = 1
Книга 2 → partNumber = 2
Книга 3 → partNumber = 3
```

Основна логіка MVP:

```text
Книги серії завжди сортуються за partNumber ASC.
```

Тобто:

```text
1 → 2 → 3 → 4 → 5
```

BookNest не має автоматично міняти `partNumber` інших книг після додавання, видалення або відв’язування книги.

Important:

```text
partNumber — це номер книги в серії, а не просто позиція в UI.
```

---


## 3. Entry points

Series Book Order використовується в кількох частинах застосунку.

| Entry point                      | Behavior                                                   |
| -------------------------------- | ---------------------------------------------------------- |
| Series Details Page              | показує книги у правильному порядку                        |
| Add Book to Series flow          | вимагає вказати partNumber                                 |
| Create Book Form                 | дозволяє вказати partNumber, якщо книга додається до серії |
| Edit Book Form                   | дозволяє змінити partNumber книги                          |
| Remove / Unlink Book from Series | не змінює partNumber інших книг                            |
| Next Book block                  | використовує partNumber для визначення наступної книги     |
| Reading Order Block              | будує візуальний порядок книг                              |

---


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
