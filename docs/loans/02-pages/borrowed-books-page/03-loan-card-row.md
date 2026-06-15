# Borrowed Books Page: Loan Card / Row

## Loan row

Each active loan should be displayed as a row/card.

Recommended structure:

```text
[Cover] [Book info] [Loan info] [Dates] [Actions]
```

Book info:

* cover;
* title;
* author;
* ownership badge;
* loan note preview.

Loan info:

* person name;
* contact if available;
* loan date;
* expected return date;
* UI badge.

---

## Borrowed from someone row

Show:

* cover;
* title;
* author;
* badge;
* `Позичила у: personName`;
* `Дата позики`;
* `Повернути до`;
* note;
* reminder icon if enabled;
* actions.

Actions:

```text
Позначити як повернуту
Редагувати
Перейти до книги
```

Example:

```text
Четверте крило
Ребекка Яррос

Повернути скоро
Позичила у: Олена Коваль
Дата позики: 12.05.2024
Повернути до: 24.05.2024

Нотатка: Читати уважно розділи про драконів.

[Позначити як повернуту]
[Редагувати]
[Перейти до книги]
```

---

## Lent to someone row

Show:

* cover;
* title;
* author;
* badge;
* `Дала кому: personName`;
* `Дата передачі`;
* `Очікуване повернення`;
* note;
* reminder icon if enabled;
* actions.

Actions:

```text
Позначити як повернену мені
Редагувати
Перейти до книги
```

---

## Badges

| UI Status | Label |
| --------- | ----- |
| `on_time` | Вчасно |
| `return_soon` | Повернути скоро |
| `overdue` | Прострочено |
| `no_return_date` | Без дати |

If overdue, show relative text:

```text
на 3 дні пізніше
```

If return soon:

```text
через 2 дні
```

---

## Optional fields display rule

Do not show empty rows for optional values.

If `contact` is empty, hide contact.

If `note` is empty, hide note chip.

If `expectedReturnDate` is empty, show badge **Без дати**.
