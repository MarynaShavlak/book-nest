# Page Actions — Custom List and Loan Entry Points

> Source: book-details-page.md lines 1970-2039

---

### 9.9. Add to custom list

Action:

```text
Додати до списку
```

UI location:

```text
Right sidebar → Quick actions
```

Behavior:

* відкриває modal вибору власного списку;
* користувач може вибрати один або кілька списків;
* якщо потрібно, користувач може створити новий список у цьому flow.

Logic:

* після підтвердження книга додається до вибраних списків;
* якщо книга вже є в списку, дубль не створюється;
* книга залишається на сторінці Book Details.

---

### 9.10. Lend book to someone

Action:

```text
Видати комусь
```

UI location:

```text
Right sidebar → Quick actions
```

Behavior:

* відкриває modal / drawer позики;
* використовується, коли користувач дає свою книгу іншій людині.

Fields:

| Field                     | Required |
| ------------------------- | -------- |
| Кому видана               | Так      |
| Дата передачі             | Ні       |
| Очікувана дата повернення | Ні       |
| Нотатка                   | Ні       |

After submit:

```ts
ownershipStatus = 'lent_to_someone'
```

Result:

* книга з’являється на сторінці **Позичені книги**;
* у sidebar оновлюється ownership status;
* якщо формат або інші поля не змінювались, вони залишаються без змін.

---
