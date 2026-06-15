# Edit List Action

## Role

Defines edit action, modal, behavior, and validation.

## Source coverage

`create-edit-delete-custom-list.md` sections 11-14

## Content

## 11. Edit list action

Action label:

```text id="yh7zi0"
Редагувати список
```

Recommended location:

```text id="pew0ld"
List card → Edit icon
List card → More actions → Редагувати список
```

Behavior:

* відкриває modal редагування;
* поля заповнені поточними даними списку;
* користувач може змінити назву, опис, іконку або колір;
* після збереження картка списку оновлюється.

---

---

## 12. Modal: Edit List

Modal title:

```text id="cvmr3e"
Редагувати список
```

Fields:

| Field        | Editable | Required |
| ------------ | -------: | -------: |
| Назва списку |      Так |      Так |
| Опис         |      Так |       Ні |
| Іконка       |      Так |       Ні |
| Колір        |      Так |       Ні |

Actions:

```text id="xkbvm1"
Скасувати
Зберегти
```

---

---

## 13. Edit list behavior

Після відкриття modal:

* показати поточну назву списку;
* показати поточний опис, якщо він є;
* показати обрану іконку або default icon;
* показати обраний колір або default color.

Кнопка **Зберегти** має бути disabled, якщо користувач нічого не змінив.

Після натискання **Зберегти**:

1. система валідує форму;
2. оновлює список;
3. закриває modal;
4. оновлює картку списку;
5. оновлює `updatedAt`;
6. оновлює порядок списків, якщо active sorting = **Останнє оновлення**;
7. показує success message.

Success message:

```text id="xpesam"
Список оновлено
```

---

---

## 14. Edit list validation

Для edit list використовуються ті самі правила, що і для create list.

Important:

* якщо користувач не змінив назву, duplicate title validation не має блокувати збереження;
* якщо користувач змінив назву на назву іншого існуючого списку, показати validation error.

Message:

```text id="is7bad"
Список із такою назвою вже існує
```

---
