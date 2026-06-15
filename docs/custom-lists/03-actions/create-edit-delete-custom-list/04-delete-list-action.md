# Delete List Action

## Role

Defines delete action, confirmation modal, behavior, and safety rule that books are not deleted.

## Source coverage

`create-edit-delete-custom-list.md` sections 15-18

## Content

## 15. Delete list action

Action label:

```text id="f0d25z"
Видалити список
```

Recommended location:

```text id="0xuw8o"
List card → More actions → Видалити список
```

Delete action має бути:

* у нижній частині menu;
* візуально відділена від інших дій;
* позначена як destructive action.

---

---

## 16. Modal: Delete List Confirmation

Перед видаленням списку потрібно показати confirmation modal.

Modal title:

```text id="zdfho4"
Видалити список?
```

Modal text:

```text id="itqnqr"
Список буде видалено, але книги залишаться у вашій бібліотеці.
```

Additional text, якщо у списку є книги:

```text id="otwrl4"
Книги зі списку не будуть видалені.
```

Actions:

```text id="31scjg"
Скасувати
Видалити список
```

Button **Видалити список** має бути destructive.

---

---

## 17. Delete list behavior

Після підтвердження видалення:

1. список видаляється;
2. список зникає зі сторінки **Власні списки**;
3. зв’язки книг із цим списком видаляються;
4. самі книги залишаються в бібліотеці;
5. count badge оновлюється;
6. sidebar statistics оновлюється;
7. користувач бачить success message.

Success message:

```text id="sjeav5"
Список видалено
```

Якщо користувач видалив останній список, після видалення показується empty state.

---

---

## 18. Delete list does not delete books

Це ключове правило фічі.

```text id="qc41gf"
Видалення списку не видаляє книги.
```

Example:

```text id="4sf1yz"
Список “Темне фентезі” містить 12 книг.

Користувач видаляє список.

Результат:
- список “Темне фентезі” зникає;
- 12 книг залишаються в “Моїй бібліотеці”;
- книги більше не пов’язані з цим списком.
```

Це правило потрібно чітко показувати в confirmation modal.

---
