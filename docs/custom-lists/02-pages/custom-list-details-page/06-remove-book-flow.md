# Remove Book Flow

## Role

Defines remove book from list and confirmation/undo behavior.

## Source coverage

`custom-list-details-page.md` sections 31-32

## Related files

Reusable action docs live in `03-actions/remove-book-from-custom-list/`.

## Content

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
