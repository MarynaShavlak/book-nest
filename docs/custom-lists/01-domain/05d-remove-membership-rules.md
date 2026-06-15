# Remove Membership Rules

## Role

Defines removing one book from one list or all lists.

## Source coverage

`add-to-custom-lists.md` sections 16-17; `custom-list-details-page.md` sections 31-32

## Content

## 16. Remove book from list

Користувач може прибрати книгу зі списку через цю ж modal.

Flow:

1. Користувач відкриває **Додати до списку**.
2. Списки, у яких книга вже є, показані checked.
3. Користувач знімає checked зі списку.
4. Натискає **Зберегти**.
5. Книга прибирається з цього списку.
6. Сама книга залишається в бібліотеці.

Important:

```text
Прибрати зі списку ≠ видалити книгу з бібліотеки.
```

Після прибирання зі списку:

* reading status не змінюється;
* ownership status не змінюється;
* favorite status не змінюється;
* книга не видаляється;
* інші списки книги не змінюються.

---

---

## 17. Remove all lists behavior

Якщо користувач знімає всі selected списки й натискає **Зберегти**:

* книга прибирається з усіх власних списків;
* книга залишається в бібліотеці;
* на Book Details більше не показується, що книга є в списках;
* сторінки відповідних списків оновлюються.

Success message:

```text
Книгу прибрано зі списків
```

Але можна залишити універсальне:

```text
Списки книги оновлено
```

Recommended for MVP:

```text
Списки книги оновлено
```

---

---

## 31. Remove book from list

Користувач може прибрати книгу зі списку.

Action label:

```text
Прибрати зі списку
```

Recommended location:

```text
Book card → More actions → Прибрати зі списку
```

Behavior:

* книга зникає тільки з поточного списку;
* книга залишається в бібліотеці;
* книга може залишатися в інших списках;
* reading status не змінюється;
* ownership status не змінюється;
* favorite status не змінюється;
* position інших книг перераховується без пропусків.

---

---

## 32. Remove book confirmation / undo

Для MVP confirmation modal не потрібна.

Reason:

```text
Це не destructive action, бо книга не видаляється з бібліотеки.
```

Recommended behavior:

```text
Click → remove from list → show toast with Undo
```

Toast:

```text
Книгу прибрано зі списку
```

Toast action:

```text
Скасувати
```

Якщо користувач натискає **Скасувати**:

* книга повертається в цей список;
* бажано повернути її на попередню позицію;
* список книг оновлюється;
* count badge повертається до попереднього значення.

---
