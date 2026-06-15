# Queue Toolbar

Toolbar знаходиться під page header і над списком книг.

Для MVP toolbar має містити:

| Element   | Type     | Description                 |
| --------- | -------- | --------------------------- |
| Search    | Input    | Пошук по книгах у черзі     |
| Sort      | Dropdown | Default sorting за позицією |
| Drag hint | Text     | Підказка про зміну порядку  |

Recommended layout:

```text
[ Пошук у черзі... ] [ Сортувати: Позиція в черзі ]
```

Під toolbar або всередині списку потрібно показати підказку:

```text
Перетягуйте книги, щоб змінити порядок
```

---
