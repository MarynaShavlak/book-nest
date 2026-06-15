# Reorder Behavior

## Role

Defines reorder books in list behavior.

## Source coverage

`custom-list-details-page.md` section 17

## Content

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
