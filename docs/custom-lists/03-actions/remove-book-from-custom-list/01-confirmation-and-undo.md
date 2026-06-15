# Confirmation and Undo

## Role

Defines confirmation or undo behavior for removal.

## Source coverage

`custom-list-details-page.md` section 32

## Content

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
