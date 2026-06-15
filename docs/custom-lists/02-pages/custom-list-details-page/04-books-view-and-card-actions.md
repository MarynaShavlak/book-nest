# Books View and Card Actions

## Role

Defines books view and card-level actions including add to reading queue and view book.

## Source coverage

`custom-list-details-page.md` sections 20-24

## Content

## 20. Books view

Основний блок сторінки — це книги, які належать до списку.

У MVP можна використовувати ті самі card / list components, що й у **My Library**.

Кожна книга має показувати:

| Element          | Required | Description                            |
| ---------------- | -------: | -------------------------------------- |
| Position         |      Так | Позиція книги в цьому списку           |
| Cover            |      Так | Обкладинка або placeholder             |
| Title            |      Так | Назва книги                            |
| Author           |      Так | Автор                                  |
| Reading status   |      Так | Статус читання                         |
| Ownership status |      Так | Статус володіння                       |
| Format           |       Ні | Паперова / електронна / аудіокнига     |
| Rating           |       Ні | Оцінка, якщо є                         |
| Genres / tags    |       Ні | Короткі chips                          |
| Series info      |       Ні | Якщо книга є частиною серії            |
| Queue badge      |       Ні | Показує, що книга вже в черзі          |
| Actions          |      Так | Переглянути книгу / Прибрати зі списку |

---

---

## 21. Book card actions

На кожній книзі в списку мають бути доступні основні дії.

Visible actions:

| Action            | Behavior                                          |
| ----------------- | ------------------------------------------------- |
| Переглянути книгу | Відкриває Book Details                            |
| Додати в чергу    | Додає книгу в Reading Queue, якщо її там ще немає |
| Heart icon        | Favorite toggle, якщо використовується на картках |

More actions menu:

| Action                  | Behavior                             |
| ----------------------- | ------------------------------------ |
| Прибрати зі списку      | Видаляє зв’язок книги з цим списком  |
| Додати до іншого списку | Відкриває modal додавання до списків |
| Перемістити вище        | Змінює позицію книги                 |
| Перемістити нижче       | Змінює позицію книги                 |
| Редагувати книгу        | Відкриває edit book flow             |

Для MVP обов’язкові:

```text
Переглянути книгу
Додати в чергу
Прибрати зі списку
Перемістити вище / нижче
```

---

---

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

---

## 24. View book action

Для кожної книги має бути дія:

```text
Переглянути книгу
```

Behavior:

* відкриває детальну сторінку книги;
* recommended route:

```text
/books/:bookId
```

---
