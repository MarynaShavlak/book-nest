# Loan Status Actions — Common Loan Fields

> Source: change-loan-status.md lines 210-312

---

## 10. Date logic

### Loan date

Поле **Дата позики / Дата передачі** є required.

Default value:

```text
Сьогодні
```

Validation:

* дата не може бути в майбутньому;
* дата має бути валідною.

### Expected return date

Поле **Повернути до** optional.

Validation:

* дата повернення не може бути раніше дати позики / передачі;
* якщо reminder увімкнений, дату повернення бажано зробити required.

---

## 11. Reminder logic

Toggle:

```text
Нагадати повернути
```

або

```text
Нагадати про повернення
```

Behavior:

* toggle optional;
* якщо toggle вимкнений, reminder не створюється;
* якщо toggle увімкнений, система має використати дату **Повернути до**;
* якщо дата повернення не вибрана, показати validation message.

Validation message:

```text
Оберіть дату повернення для нагадування
```

Reminder не має блокувати саму позику, якщо toggle вимкнений.

---

## 12. Contact field

Поле **Контакт** optional.

Може містити:

* телефон;
* email;
* username;
* будь-який короткий текст.

Validation:

* max 100 символів;
* HTML-теги заборонені.

Контакт потрібен тільки для зручності користувача і не впливає на ownership status.

---

## 13. Note field

Поле **Нотатка** optional.

Може містити:

* стан книги;
* умови повернення;
* місце, де домовились повернути книгу;
* будь-який короткий коментар.

Validation:

* max 300 символів;
* HTML-теги заборонені.

Example:

```text
Повернути в такому ж стані, без загнутих сторінок.
```

---
