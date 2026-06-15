# Mark as Loaned: Borrowed From Someone Fields

## Scenario

Scenario:

```text
Я взяла книгу у когось
```

This means:

```text
Книга тимчасово у користувача, але не є його власною.
```

After submit:

```ts
ownershipStatus = "borrowed_from_someone";
loan.type = "borrowed_from_someone";
loan.status = "active";
```

---

## Fields

Required:

| Field | Label |
| ----- | ----- |
| `personName` | У кого взяла * |
| `loanDate` | Дата позики * |

Optional:

| Field | Label |
| ----- | ----- |
| `expectedReturnDate` | Повернути до |
| `contact` | Контакт |
| `note` | Нотатка |
| `reminderEnabled` | Нагадати повернути |

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

Note placeholder:

```text
Додайте будь-яку важливу інформацію про позику...
```

Helper:

```text
Наприклад: стан книги, особливі умови повернення тощо.
```

Submit button:

```text
Зберегти як позичену
```
