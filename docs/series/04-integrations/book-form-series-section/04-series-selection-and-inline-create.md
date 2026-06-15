# Book Form Series Section — Selection and Inline Create

> Source: `book-form-series-section.md`

## 8. Series selection

### 8.1. Existing series select

Field label:

```text
Серія
```

Placeholder:

```text
Виберіть серію
```

Type:

```text
Autocomplete / searchable select
```

Search by:

* series title;
* author;
* series status.

Show in option:

* series title;
* author, якщо є;
* books count;
* series status.

Example option:

```text
Тінь і кістка · Лі Бардуго · 3 книги · Завершена
```

---

### 8.2. Empty series list

Якщо користувач ще не має жодної серії:

```text
У вас ще немає серій
```

Action:

```text
Створити нову серію
```

---

### 8.3. Create new series option

У select можна показати option:

```text
+ Створити нову серію
```

Після кліку відкривається inline create block або nested modal.

Recommended MVP:

```text
Inline create block всередині Book Form
```

Reason:

```text
Користувач не втрачає контекст створення книги.
```

---


## 9. Inline create series block

Якщо користувач створює нову серію з форми книги, не потрібно показувати всі поля повного Create Series flow.

MVP поля:

| Field                   | Required | Description                        |
| ----------------------- | -------- | ---------------------------------- |
| Назва серії             | Так      | назва нової серії                  |
| Статус серії            | Так      | completed / ongoing / unknown      |
| Загальна кількість книг | Ні       | optional                           |
| Автор серії             | Ні       | може бути prefilled з автора книги |

---

### 9.1. Назва серії

Label:

```text
Назва серії *
```

Placeholder:

```text
Введіть назву серії
```

Rules:

* required;
* max 150 symbols;
* trim spaces;
* no HTML.

---

### 9.2. Статус серії

Label:

```text
Статус серії *
```

Default:

```text
unknown
```

Options:

```text
Завершена
Ще виходить
Невідомо
```

Important:

```text
Статус серії не означає, що користувач прочитав серію.
```

---

### 9.3. Загальна кількість книг

Label:

```text
Загальна кількість книг
```

Rules:

* optional;
* integer;
* min 1;
* якщо вказано, `partNumber` книги не може бути більшим за це значення.

---

### 9.4. Автор серії

Автор серії може бути prefilled з автора книги.

Example:

```text
Book author: Лі Бардуго
Series author: Лі Бардуго
```

Користувач може змінити автора серії.

Important:

```text
Зміна автора серії не змінює автора книги.
Зміна автора книги не змінює автора серії після створення.
```

---
