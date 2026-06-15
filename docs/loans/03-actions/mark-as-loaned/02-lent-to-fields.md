# Mark as Loaned: Lent To Someone Fields

## Scenario

Scenario:

```text
Я дала свою книгу комусь
```

This means:

```text
Книга належить користувачу, але зараз фізично знаходиться в іншої людини.
```

After submit:

```ts
ownershipStatus = "lent_to_someone";
loan.type = "lent_to_someone";
loan.status = "active";
```

---

## Fields

Required:

| Field | Label |
| ----- | ----- |
| `personName` | Кому дала * |
| `loanDate` | Дата передачі * |

Optional:

| Field | Label |
| ----- | ----- |
| `expectedReturnDate` | Очікуване повернення |
| `contact` | Контакт |
| `note` | Нотатка |
| `reminderEnabled` | Нагадати забрати |

---

## UI labels

Person field placeholder:

```text
Ім’я людини
```

Date default:

```text
today
```

Return date placeholder:

```text
Оберіть дату
```

Contact placeholder:

```text
Телефон або email
```

Note helper:

```text
Наприклад: стан книги, без суперобкладинки, попросила повернути до відпустки.
```

Submit button:

```text
Зберегти як видану комусь
```
