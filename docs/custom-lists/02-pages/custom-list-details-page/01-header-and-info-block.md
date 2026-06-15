# Header and Info Block

## Role

Defines page header, back action, title, description, count badge, primary action, more actions, and list information block.

## Source coverage

`custom-list-details-page.md` sections 6-12

## Content

## 6. Page header

Page header має показувати основну інформацію про список.

Required elements:

| Element             | Description                          |
| ------------------- | ------------------------------------ |
| Back action         | Повернення на сторінку всіх списків  |
| Icon / color accent | Декоративна іконка або акцент списку |
| Title               | Назва списку                         |
| Description         | Опис списку, якщо є                  |
| Count badge         | Кількість книг у списку              |
| Updated date        | Коли список востаннє оновлювався     |
| Primary action      | Додати книги                         |
| More actions        | Редагувати / Видалити список         |

---

---

## 7. Back action

Label:

```text
← До списків
```

Behavior:

* веде на сторінку `/lists`;
* не видаляє активні дані списку;
* не очищає зміни, якщо вони вже збережені.

---

---

## 8. Header title and description

Title показує назву списку.

Example:

```text
Темне фентезі
```

Description показує опис списку, якщо користувач його додав.

Example:

```text
Похмурі світи, моральні дилеми та незабутні антигерої.
```

Якщо опису немає, блок опису можна приховати.

---

---

## 9. Count badge

Count badge показує кількість книг у списку.

Example:

```text
15 книг
```

Count має оновлюватися після:

* додавання книг;
* прибирання книги зі списку;
* undo після прибирання книги;
* видалення книги з бібліотеки, якщо вона була в цьому списку.

---

---

## 10. Primary action: Add books

Primary action:

```text
+ Додати книги
```

Behavior:

* відкриває modal додавання книг до цього списку;
* користувач може вибрати одну або кілька книг зі своєї бібліотеки;
* книги, які вже є у списку, не дублюються.

---

---

## 11. More actions

У header має бути menu actions.

Actions:

```text
Редагувати список
Видалити список
```

Action **Видалити список** має бути destructive і візуально відділена від інших дій.

---

---

## 12. List information block

Під header або в sidebar можна показати коротку інформацію про список.

Recommended fields:

| Field             | Description                                |
| ----------------- | ------------------------------------------ |
| Кількість книг    | Скільки книг у списку                      |
| Останнє оновлення | Коли список редагували або змінювали книги |
| Дата створення    | Коли список був створений                  |
| Іконка / колір    | Декоративні елементи, якщо підтримуються   |

Цей блок має бути коротким і не дублювати всю сторінку.

---
