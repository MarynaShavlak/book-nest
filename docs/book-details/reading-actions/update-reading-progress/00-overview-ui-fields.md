# Update Reading Progress — Overview, UI and Fields

> Source: update-reading-progress.md lines 1-80

---

# Feature: Update Reading Progress

## 1. Purpose

Feature **Update Reading Progress** дозволяє користувачу оновити прогрес читання конкретної книги.

Користувач може вказати нову поточну сторінку, побачити новий відсоток прогресу, кількість прочитаних сторінок за це оновлення та за потреби позначити книгу як прочитану.

---

## 2. Entry points

Flow оновлення прогресу може відкриватися з таких місць:

| Entry point                         | UI                                      |
| ----------------------------------- | --------------------------------------- |
| Book Details hero section           | кнопка **Оновити прогрес**              |
| Book Details Reading progress block | кнопка **Оновити прогрес**              |
| My Library book card actions        | action **Оновити прогрес**              |
| Dashboard                           | action біля книги, яку користувач читає |

---

## 3. UI type

Recommended UI:

```text
Modal
```

На mobile можна використовувати drawer або full-screen modal.

Modal title:

```text
Оновити прогрес
```

---

## 4. Modal content

Модалка має показувати короткий контекст книги та поля для оновлення прогресу.

### 4.1. Book preview

У верхній частині modal показати:

| Element     | Source        |
| ----------- | ------------- |
| Cover       | `coverUrl`    |
| Title       | `title`       |
| Author      | `author.name` |
| Total pages | `pagesCount`  |

Example:

```text
Атомні звички
Джеймс Клір

Загалом сторінок: 320
```

---

## 5. Fields

| Field                     | Type             | Required | Description                               |
| ------------------------- | ---------------- | -------: | ----------------------------------------- |
| Поточний прогрес          | Read-only text   |       Ні | Останній збережений прогрес               |
| Поточна сторінка          | Number input     |      Так | Нова сторінка, на якій зараз користувач   |
| Progress bar              | Read-only        |       Ні | Новий прогрес у відсотках                 |
| Прочитано за це оновлення | Read-only number |       Ні | Різниця між новою і попередньою сторінкою |
| Дата оновлення            | Date picker      |       Ні | Дата, за яку фіксується прогрес           |
| Позначити як прочитану    | Checkbox         |       Ні | Завершує книгу                            |

---
