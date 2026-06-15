# Change Reading Status — Overview, Options and Conditional Blocks

> Source: change-reading-status.md lines 1-120

---

# Feature: Change Reading Status

## 1. Purpose

Feature **Change Reading Status** дозволяє користувачу змінити статус читання конкретної книги.

Ця фіча відповідає тільки за `readingStatus`.

Вона не змінює:

* статус володіння;
* формат книги;
* дані доставки;
* дані позики;
* жанри;
* теги;
* серію.

---

## 2. Entry points

Flow зміни статусу читання може відкриватися з таких місць:

| Entry point                  | UI                                      |
| ---------------------------- | --------------------------------------- |
| Book Details                 | action **Редагувати статуси** у sidebar |
| My Library book card actions | action **Змінити статус читання**       |
| Reading Queue                | action біля книги в черзі               |
| Dashboard                    | action біля книги, яку користувач читає |

---

## 3. UI type

Recommended UI:

```text
Modal
```

На mobile можна використовувати drawer або full-screen modal.

Modal title:

```text
Змінити статус читання
```

---

## 4. Modal content

Модалка має показувати короткий контекст книги.

### Book preview

| Element        | Source          |
| -------------- | --------------- |
| Cover          | `coverUrl`      |
| Title          | `title`         |
| Author         | `author.name`   |
| Current status | `readingStatus` |

Example:

```text
Четверте крило
Ребекка Яррос

Поточний статус: Читаю
```

---

## 5. Reading status options

Користувач може вибрати один статус читання.

| Value          | Label          | Description                              |
| -------------- | -------------- | ---------------------------------------- |
| `not_started`  | Не почато      | Книга додана, але читання ще не почалося |
| `want_to_read` | Хочу прочитати | Користувач хоче прочитати книгу          |
| `reading`      | Читаю          | Користувач зараз читає книгу             |
| `paused`       | На паузі       | Користувач тимчасово відклав читання     |
| `finished`     | Прочитано      | Книга прочитана                          |
| `dnf`          | Покинуто       | Користувач вирішив не дочитувати книгу   |

`rereading` можна додати пізніше, якщо буде окрема логіка повторного читання.

---

## 6. Selection behavior

Статуси мають працювати як single-select radio group.

Logic:

* користувач може вибрати тільки один статус;
* поточний статус має бути виділений;
* якщо користувач вибрав той самий статус, кнопка **Зберегти зміни** може бути disabled;
* після вибору нового статусу може з’являтися conditional block.

---

## 7. Conditional blocks

Conditional block залежить від вибраного статусу.

| Selected status | Conditional block                                    |
| --------------- | ---------------------------------------------------- |
| `not_started`   | Не показувати додаткові поля                         |
| `want_to_read`  | Не показувати додаткові поля                         |
| `reading`       | Показати поле поточної сторінки                      |
| `paused`        | Показати поточну сторінку, дату паузи, optional note |
| `finished`      | Показати дату завершення і optional rating           |
| `dnf`           | Показати сторінку зупинки і optional reason          |

---
