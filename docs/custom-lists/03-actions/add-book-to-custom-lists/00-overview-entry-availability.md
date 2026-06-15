# Overview, Entry, Availability

## Role

Defines purpose, main idea, Book Details entry point, and availability rules.

## Source coverage

`add-to-custom-lists.md` sections 1-4

## Content

## 1. Purpose

Feature **Add Book to Custom List from Book Details** дозволяє користувачу додати конкретну книгу до одного або кількох власних списків прямо зі сторінки деталей книги.

Фіча потрібна, щоб користувач міг швидко організовувати книги у персональні добірки без переходу на окрему сторінку списків.

Examples of custom lists:

```text
Осіннє читання
Улюблене фентезі
Книги для настрою
Хочу перечитати
Подарунки
Книги від блогерів
```

---

---

## 2. Main idea

Книга може бути додана до одного або кількох власних списків.

Example:

```text
Книга “Четверте крило” може бути одночасно у списках:
- Улюблене фентезі
- Книги з драконами
- Хочу перечитати
```

Important:

* власний список — це не reading status;
* власний список — це не ownership status;
* власний список — це не favorite;
* додавання книги до списку не змінює дані книги;
* книга залишається в бібліотеці незалежно від того, у яких списках вона є;
* одна книга не може дублюватися в одному й тому самому списку.

---

---

## 3. Entry point from Book Details

Дія доступна на сторінці **Book Details**.

Recommended location:

```text
Book Details → Right sidebar → Quick actions
```

Action label:

```text
Додати до списку
```

Alternative label, якщо потрібно підкреслити можливість кількох списків:

```text
Додати до списків
```

Recommended label for UI:

```text
Додати до списку
```

Reason:

Коротший label краще виглядає в quick actions, а в modal уже можна пояснити, що користувач може вибрати кілька списків.

---

---

## 4. When action is available

Action **Додати до списку** доступна, якщо:

* книга належить поточному користувачу;
* книга не видалена;
* користувач авторизований.

Action не потрібно блокувати через:

* reading status;
* ownership status;
* format;
* favorite status;
* наявність книги в черзі читання.

Користувач може додати до списку будь-яку свою активну книгу.

---
