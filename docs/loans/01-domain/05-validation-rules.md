# Validation Rules

## Required fields

For `borrowed_from_someone`:

| Field | Required |
| ----- | -------- |
| `personName` | yes |
| `loanDate` | yes |
| `expectedReturnDate` | no |
| `contact` | no |
| `note` | no |
| `reminderEnabled` | no |

For `lent_to_someone`:

| Field | Required |
| ----- | -------- |
| `personName` | yes |
| `loanDate` | yes |
| `expectedReturnDate` | no |
| `contact` | no |
| `note` | no |
| `reminderEnabled` | no |

---

## Validation

Rules:

* `personName` is required;
* `personName` max length: 100;
* `loanDate` is required;
* `loanDate` cannot be in the future;
* `expectedReturnDate` cannot be earlier than `loanDate`;
* `contact` max length: 100;
* `note` max length: 500;
* `reminderEnabled = true` only allowed if `expectedReturnDate` exists.

Error messages:

```text
Вкажіть ім’я людини
Оберіть дату позики
Дата позики не може бути в майбутньому
Дата повернення не може бути раніше дати позики
Контакт не може бути довшим за 100 символів
Нотатка не може бути довшою за 500 символів
Щоб увімкнути нагадування, вкажіть дату повернення
```

---

## Reminder validation

If `expectedReturnDate` is empty:

```ts
reminderEnabled = false
```

UI behavior:

* disable reminder toggle;
* or show helper text:

```text
Щоб увімкнути нагадування, спочатку вкажіть дату повернення.
```

MVP reminder behavior:

```text
reminderEnabled = true means remind on expectedReturnDate.
```

Actual push/email reminders can be future scope.
