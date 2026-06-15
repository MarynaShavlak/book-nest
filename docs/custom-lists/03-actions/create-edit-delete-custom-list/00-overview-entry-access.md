# Overview, Entry Points, Access

## Role

Defines purpose, entry points, and access rules for create/edit/delete actions.

## Source coverage

`create-edit-delete-custom-list.md` sections 1-4

## Content

## 1. Purpose

Feature **Create / Edit / Delete Custom List** дозволяє користувачу керувати власними книжковими списками в BookNest.

Фіча покриває три основні дії:

* створити новий власний список;
* редагувати існуючий список;
* видалити список.

Ця фіча працює зі списками як окремими добірками книг, але не відповідає за детальне керування книгами всередині списку.

---

---

## 2. Main idea

Власний список — це ручна тематична добірка книг, яку створює користувач.

Examples:

```text id="d6vprk"
Осіннє читання
Темне фентезі
Книги для настрою
Хочу перечитати
Книги з драконами
```

Important:

```text id="md606w"
Видалення списку не видаляє книги з бібліотеки.
```

Після видалення списку:

* список зникає;
* зв’язки книг із цим списком видаляються;
* самі книги залишаються в бібліотеці користувача.

---

---

## 3. Entry points

### 3.1. Create list

Дію створення списку можна викликати з:

```text id="y5y95h"
Custom Lists Page → Header → + Створити список
Custom Lists Page → Empty state → Створити список
Custom Lists Page → Sidebar → Швидкі дії → Створити новий список
Add Book to Custom List modal → + Створити новий список
```

Основний entry point для MVP:

```text id="j47t5g"
Custom Lists Page → + Створити список
```

---

### 3.2. Edit list

Дію редагування списку можна викликати з:

```text id="a76pnn"
Custom Lists Page → List card → Edit icon
Custom Lists Page → List card → More actions → Редагувати список
Custom List Details Page → Редагувати список
```

Основний entry point для MVP:

```text id="apduv3"
Custom Lists Page → List card → Edit icon
```

---

### 3.3. Delete list

Дію видалення списку можна викликати з:

```text id="hhbsf3"
Custom Lists Page → List card → More actions → Видалити список
Custom List Details Page → More actions → Видалити список
```

Основний entry point для MVP:

```text id="w5fyv0"
Custom Lists Page → List card → More actions → Видалити список
```

---

---

## 4. Access rules

Користувач може створювати, редагувати та видаляти тільки свої списки.

Система має перевіряти:

* користувач авторизований;
* список належить поточному користувачу;
* список не видалений;
* користувач не може редагувати або видаляти чужі списки.

Якщо список недоступний, дія не має виконуватися.

---
