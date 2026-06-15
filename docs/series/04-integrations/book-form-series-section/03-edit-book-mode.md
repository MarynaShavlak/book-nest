# Book Form Series Section — Edit Book Mode

> Source: `book-form-series-section.md`

## 7. Edit Book mode

Edit Book mode використовується, коли користувач редагує існуючу книгу.

### 7.1. Book has no series

Якщо книга не належить до серії:

* toggle **Це книга із серії** вимкнений;
* series fields приховані;
* користувач може увімкнути toggle і вибрати серію.

---

### 7.2. Book already has a series

Якщо книга вже належить до серії:

* toggle **Це книга із серії** увімкнений;
* series field показує поточну серію;
* partNumber показує поточний номер частини;
* користувач може змінити partNumber;
* користувач може прибрати книгу з серії;
* користувач може змінити серію, якщо такий сценарій дозволений у MVP.

Example:

```text
Серія: Тінь і кістка
Номер частини: 2
```

---

### 7.3. User changes partNumber

Behavior:

1. Користувач змінює `partNumber`.
2. Система перевіряє validation.
3. Якщо номер валідний, зміна зберігається.
4. Series Details Page оновлює порядок книг.
5. Next Book block перераховується.

Important:

```text
Зміна partNumber не змінює readingStatus книги.
```

---

### 7.4. User removes book from series

Користувач може вимкнути toggle **Це книга із серії** або очистити поле Series.

Behavior:

1. Користувач прибирає series relation.
2. Система показує confirmation.
3. Користувач підтверджує дію.
4. Книга відв’язується від серії.
5. Книга залишається в бібліотеці.
6. Series Details Page і All Series Page оновлюються.

Confirmation title:

```text
Прибрати книгу з серії?
```

Confirmation text:

```text
Книга залишиться у вашій бібліотеці, але більше не буде відображатися в цій серії.
```

Buttons:

```text
Скасувати
Прибрати з серії
```

Important:

```text
Ця дія не видаляє книгу з бібліотеки.
```

---

### 7.5. User changes series

У Edit Book Form користувач може перенести книгу з однієї серії в іншу, якщо це входить у MVP.

Recommended MVP behavior:

```text
Дозволити зміну серії тільки через Edit Book Form і тільки після confirmation.
```

Behavior:

1. Книга вже належить до Series A.
2. Користувач вибирає Series B.
3. Система показує confirmation.
4. Користувач підтверджує зміну.
5. Книга відв’язується від Series A.
6. Книга прив’язується до Series B.
7. Користувач вказує новий `partNumber` для Series B.
8. Обидві серії оновлюють progress, books count і next book logic.

Confirmation title:

```text
Змінити серію книги?
```

Confirmation text:

```text
Книга буде прибрана з поточної серії та додана до нової. Дані книги залишаться без змін.
```

Buttons:

```text
Скасувати
Змінити серію
```

Important:

```text
Зміна серії не змінює readingStatus, ownershipStatus, rating, notes або quotes книги.
```

---
