# Modal Structure and Book Preview

## Role

Defines the modal shell and current book preview.

## Source coverage

`add-to-custom-lists.md` sections 5-6

## Content

## 5. Modal: Add to Custom List

Після натискання **Додати до списку** відкривається modal.

Modal title:

```text
Додати до списку
```

Subtitle:

```text
Оберіть один або кілька списків, до яких потрібно додати книгу.
```

Modal має дозволяти:

* переглянути коротке preview книги;
* вибрати один або кілька існуючих списків;
* побачити списки, у яких книга вже є;
* створити новий список прямо з modal;
* зберегти зміни;
* закрити modal без змін.

---

---

## 6. Book preview in modal

У верхній частині modal потрібно показати коротке preview книги.

| Element             | Description                          |
| ------------------- | ------------------------------------ |
| Cover               | Обкладинка книги або placeholder     |
| Title               | Назва книги                          |
| Author              | Автор                                |
| Current lists count | Скільки списків уже містять цю книгу |

Example:

```text
Четверте крило
Ребекка Яррос

Уже в 2 списках
```

Якщо книга ще не додана до жодного списку:

```text
Ще не додана до списків
```

---
