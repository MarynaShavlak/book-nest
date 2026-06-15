# Loan Status Actions — Borrowed From Someone

> Source: change-loan-status.md lines 130-169

---

## 8. Scenario: Я взяла книгу у когось

Цей сценарій використовується, коли користувач взяв книгу в іншої людини.

Result:

```ts
ownershipStatus = 'borrowed_from_someone'
```

### Fields

| Field              | Type        | Required | Description                               |
| ------------------ | ----------- | -------: | ----------------------------------------- |
| У кого взяла       | Text input  |      Так | Ім’я людини, у якої користувач взяв книгу |
| Дата позики        | Date picker |      Так | Дата, коли книга була позичена            |
| Повернути до       | Date picker |       Ні | Очікувана дата повернення                 |
| Контакт            | Text input  |       Ні | Телефон, email або інший контакт          |
| Нотатка            | Textarea    |       Ні | Додаткова інформація                      |
| Нагадати повернути | Toggle      |       Ні | Увімкнути нагадування                     |

### Submit button

```text
Зберегти як позичену
```

### Submit logic

Після submit:

* книга отримує `ownershipStatus = borrowed_from_someone`;
* зберігається ім’я людини, у якої книга позичена;
* зберігається дата позики;
* якщо вказано дату повернення, вона використовується для loan due logic;
* книга з’являється на сторінці **Позичені книги**;
* у Book Details sidebar оновлюється ownership status.

---
