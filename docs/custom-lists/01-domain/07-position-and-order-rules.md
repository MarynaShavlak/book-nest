# Position and Order Rules

## Role

Defines manual order, MVP move up/down behavior, and future drag-and-drop behavior.

## Source coverage

`custom-list-details-page.md` sections 16-19

## Content

## 16. Book position inside custom list

Кожна книга всередині custom list має мати свою позицію.

Position потрібна, щоб користувач міг вручну організувати порядок книг у списку.

Example:

```text
1. Четверте крило
2. Залізне полум’я
3. Асистент лиходія
```

Important:

* позиція книги існує тільки в межах конкретного списку;
* одна й та сама книга може мати різну позицію в різних списках;
* позиція не впливає на My Library;
* позиція не впливає на Reading Queue;
* позиція не змінює reading status або ownership status.

Example:

```text
Книга “Четверте крило” може бути:

- позиція 1 у списку “Книги з драконами”;
- позиція 5 у списку “Хочу перечитати”;
- позиція 2 у списку “Romantasy”.
```

---

---

## 17. Reorder books in list

Користувач може змінювати порядок книг у конкретному списку.

Reorder доступний тільки якщо:

```text
sorting = Позиція в списку
search is empty
page is not loading
```

Якщо активний search або інший sorting, reorder має бути disabled.

Reason:

Якщо користувач бачить відфільтрований або відсортований список, зміна позицій може бути незрозумілою.

---

---

## 18. Move book up / down for MVP

Для MVP рекомендовано зробити простий reorder через кнопки:

```text
Перемістити вище
Перемістити нижче
```

Recommended location:

```text
Book card → More actions
```

або compact buttons біля position:

```text
↑
↓
```

Behavior:

* якщо книга перша у списку, action **Перемістити вище** disabled;
* якщо книга остання у списку, action **Перемістити нижче** disabled;
* після переміщення позиції книг перераховуються;
* новий порядок одразу відображається в UI;
* порядок зберігається для поточного користувача.

Example:

Було:

```text
1. Книга A
2. Книга B
3. Книга C
```

Користувач перемістив **Книга C** вище.

Стало:

```text
1. Книга A
2. Книга C
3. Книга B
```

---

---

## 19. Drag-and-drop as future improvement

Drag-and-drop не входить у MVP.

Його можна додати пізніше як покращення reorder.

Future behavior:

* користувач перетягує книгу в потрібне місце;
* після drop позиції книг оновлюються;
* новий порядок зберігається;
* на mobile має бути fallback через move up / move down.

Important future rule:

```text
Drag-and-drop доступний тільки при sorting = Позиція в списку і без активного search.
```

---
