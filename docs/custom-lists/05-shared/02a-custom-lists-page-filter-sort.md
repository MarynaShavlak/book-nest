# Custom Lists Page Filter and Sort

## Role

Search, sorting, toolbar, and view modes for `/lists`.

## Source coverage

`custom-lists-page.md` sections 8-11

## Content

## 8. Custom Lists toolbar

Toolbar знаходиться під page header і над списком карток.

Для MVP toolbar має містити:

| Element   | Type     | Description                                   |
| --------- | -------- | --------------------------------------------- |
| Search    | Input    | Пошук по власних списках                      |
| Sort      | Dropdown | Сортування списків                            |
| View mode | Toggle   | Grid / List, якщо list view уже підтримується |

Recommended layout:

```text
[ Пошук у списках... ] [ Сортувати: Останнє оновлення ] [ Grid/List ]
```

Filters не входять у MVP.

Reason:

На першому етапі списків буде небагато, тому search + sorting достатньо.

---

---

## 9. Search lists

Search потрібен, щоб користувач міг швидко знайти потрібний список.

Placeholder:

```text
Пошук у списках...
```

Search має працювати за:

* назвою списку;
* описом списку.

У MVP не потрібно шукати за назвами книг усередині списку.

Reason:

Це ускладнює пошук і може бути винесено в future improvements.

Search behavior:

* не чутливий до регістру;
* ігнорує зайві пробіли;
* працює по частковому збігу;
* якщо search input порожній, показуються всі списки.

---

---

## 10. Sorting

Default sorting:

```text
Останнє оновлення
```

Logic:

```text
updatedAt DESC
```

Recommended sorting options for MVP:

| Option            | Logic             |
| ----------------- | ----------------- |
| Останнє оновлення | `updatedAt DESC`  |
| Спочатку нові     | `createdAt DESC`  |
| Спочатку старі    | `createdAt ASC`   |
| Назва А–Я         | `title ASC`       |
| Назва Я–А         | `title DESC`      |
| Більше книг       | `booksCount DESC` |
| Менше книг        | `booksCount ASC`  |

Sorting не змінює набір списків, а тільки порядок їх відображення.

---

---

## 11. View modes

Для MVP основний вигляд:

```text
grid
```

Grid view найкраще підходить для власних списків, бо кожен список виглядає як окрема тематична полиця.

List view можна додати, якщо в застосунку вже є готовий reusable компонент.

Available view modes:

| View mode |      MVP | Description                            |
| --------- | -------: | -------------------------------------- |
| `grid`    |      Так | Списки показуються як картки           |
| `list`    | Optional | Списки показуються компактними рядками |

Default:

```text
grid
```

---
