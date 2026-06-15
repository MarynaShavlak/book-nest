# Reading Queue Contract

## Role

Defines add-to-reading-queue behavior from a book card inside a custom list.

## Source coverage

`custom-list-details-page.md` sections 22-23

## Content

## 22. Add to Reading Queue action

Для кожної книги у списку має бути дія:

```text
Додати в чергу
```

Behavior:

* якщо книги ще немає в Reading Queue, action додає її в чергу;
* книга додається в кінець черги за замовчуванням;
* після додавання на картці можна показати badge **У черзі**;
* повторне додавання не створює дубль;
* Reading Queue page має оновитися, якщо вона відкрита.

Success message:

```text
Книгу додано в чергу читання
```

---

---

## 23. Already in queue behavior

Якщо книга вже є в Reading Queue, замість активної кнопки **Додати в чергу** потрібно показати:

```text
У черзі
```

або action:

```text
Перейти до черги
```

Recommended MVP behavior:

```text
Badge: У черзі
Action in menu: Перейти до черги
```

Rules:

* книга не додається повторно;
* дубль у Reading Queue не створюється;
* якщо користувач натискає на **Перейти до черги**, його веде на `/reading-queue`.

---
