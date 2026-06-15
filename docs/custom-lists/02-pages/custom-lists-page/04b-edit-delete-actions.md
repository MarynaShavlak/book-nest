# Edit and Delete Actions

## Role

Defines edit/delete list actions and confirmation from the page/card level.

## Source coverage

`custom-lists-page.md` sections 21-25

## Content

## 21. Edit list action

На кожній картці списку має бути action:

```text
Редагувати список
```

Recommended location:

```text
List card → edit icon
List card → more actions menu
```

Для MVP редагування краще робити через modal, а не inline edit.

Reason:

Inline edit складніший: потрібен auto-focus, save/cancel у картці, обробка validation error і keyboard behavior.

---

---

## 22. Modal: Edit List

Modal title:

```text
Редагувати список
```

Editable fields:

* назва списку;
* опис;
* іконка;
* колір.

Actions:

```text
Скасувати
Зберегти
```

Після збереження:

* картка списку оновлюється;
* `updatedAt` оновлюється;
* sorting за останнім оновленням може перемістити список вище;
* користувач бачить success message.

Success message:

```text
Список оновлено
```

---

---

## 23. Delete list action

На кожній картці списку має бути action:

```text
Видалити список
```

Recommended location:

```text
List card → more actions menu
```

Delete action має бути:

* внизу menu;
* візуально відділена від інших дій;
* позначена як destructive action.

---

---

## 24. Delete list confirmation

Видалення списку має відкривати confirmation modal.

Modal title:

```text
Видалити список?
```

Modal text:

```text
Список буде видалено, але книги залишаться у вашій бібліотеці.
```

Actions:

```text
Скасувати
Видалити список
```

Important:

```text
Видалити список ≠ видалити книги.
```

---

---

## 25. Delete list behavior

Після підтвердження:

1. список видаляється;
2. список зникає зі сторінки **Власні списки**;
3. зв’язки книг із цим списком видаляються;
4. самі книги залишаються в бібліотеці;
5. count badge оновлюється;
6. користувач бачить success message.

Success message:

```text
Список видалено
```

Якщо видаляється останній список, показується empty state.

---
