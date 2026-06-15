# Loan Status Actions — Lent To Someone

> Source: change-loan-status.md lines 170-209

---

## 9. Scenario: Я дала свою книгу комусь

Цей сценарій використовується, коли користувач дав свою книгу іншій людині.

Result:

```ts
ownershipStatus = 'lent_to_someone'
```

### Fields

| Field                   | Type        | Required | Description                            |
| ----------------------- | ----------- | -------: | -------------------------------------- |
| Кому дала               | Text input  |      Так | Ім’я людини, якій користувач дав книгу |
| Дата передачі           | Date picker |      Так | Дата, коли книгу передали              |
| Повернути до            | Date picker |       Ні | Очікувана дата повернення              |
| Контакт                 | Text input  |       Ні | Телефон, email або інший контакт       |
| Нотатка                 | Textarea    |       Ні | Додаткова інформація                   |
| Нагадати про повернення | Toggle      |       Ні | Увімкнути нагадування                  |

### Submit button

```text
Зберегти як видану
```

### Submit logic

Після submit:

* книга отримує `ownershipStatus = lent_to_someone`;
* зберігається ім’я людини, якій передали книгу;
* зберігається дата передачі;
* якщо вказано дату повернення, вона використовується для loan due logic;
* книга з’являється на сторінці **Позичені книги**;
* у Book Details sidebar оновлюється ownership status.

---
