# Open and Create Actions

## Role

Defines open list and create list actions from the page/card level.

## Source coverage

`custom-lists-page.md` sections 16-20

## Content

## 16. Open list action

На кожній картці має бути кнопка:

```text
Відкрити список
```

Behavior:

* відкриває детальну сторінку конкретного списку;
* recommended route:

```text
/lists/:listId
```

На сторінці всіх списків не потрібно показувати всі книги зі списку. Для цього має бути окрема сторінка деталей списку.

---

---

## 17. Create list action

Користувач може створити новий список через кнопку:

```text
+ Створити список
```

Recommended location:

```text
Page header
```

Також дію можна дублювати в sidebar у блоці **Швидкі дії**.

---

---

## 18. Modal: Create List

Після натискання **Створити список** відкривається modal.

Modal title:

```text
Створити список
```

Fields:

| Field        | Type                  | Required |
| ------------ | --------------------- | -------: |
| Назва списку | Text input            |      Так |
| Опис         | Textarea              |       Ні |
| Іконка       | Select / picker       |       Ні |
| Колір        | Color picker / select |       Ні |

Для MVP доступ списку не показуємо, бо всі списки приватні за замовчуванням.

---

---

## 19. Create list validation

### Назва списку

Rules:

| Rule            | Message                                  |
| --------------- | ---------------------------------------- |
| required        | Введіть назву списку                     |
| min 2 symbols   | Назва має містити щонайменше 2 символи   |
| max 80 symbols  | Назва не може бути довшою за 80 символів |
| no HTML         | Назва містить недопустимі символи        |
| duplicate title | Список із такою назвою вже існує         |

### Опис

Rules:

| Rule            | Message                                  |
| --------------- | ---------------------------------------- |
| max 300 symbols | Опис не може бути довшим за 300 символів |
| no HTML         | Опис містить недопустимі символи         |

---

---

## 20. Create list behavior

Після натискання **Створити список**:

1. система валідує форму;
2. створюється новий список;
3. modal закривається;
4. новий список з’являється на сторінці;
5. count badge у header оновлюється;
6. користувач бачить success message.

Success message:

```text
Список створено
```

Після створення список може з’явитися першим, якщо active sorting = `Останнє оновлення`.

---
