# Loans Module Map

## 1. Module responsibility

Модуль `loans` відповідає за:

* створення активної позики;
* редагування активної позики;
* завершення позики;
* сторінку **Позичені книги**;
* дві вкладки: **Взяла у когось** і **Дала комусь**;
* loan badges: **Вчасно**, **Повернути скоро**, **Прострочено**, **Без дати**;
* зв’язок із Book Details;
* зв’язок із Book Form;
* зв’язок із My Library;
* зв’язок із Dashboard.

---

## 2. Main flows

### User borrowed a book from someone

```text
none / want_to_buy → borrowed_from_someone → none
```

Meaning:

```text
Користувач взяв чужу книгу.
Після повернення книга більше фізично не у користувача.
```

---

### User lent own book to someone

```text
owned → lent_to_someone → owned
```

Meaning:

```text
Користувач дав свою книгу комусь.
Після повернення книга знову фізично у користувача.
```

---

## 3. Main entities

```text
Book
BookLoan
```

`Book` зберігає загальний статус володіння.

`BookLoan` зберігає конкретну інформацію про позику: людину, дату, дедлайн, нотатку, контакт, нагадування і статус.

---

## 4. Main page

```text
Позичені книги
```

Recommended route:

```text
/loans
```

Page shows only active loans:

```ts
loan.status === "active"
```

Returned loans are saved for future history/statistics, but are not shown in the active list.
