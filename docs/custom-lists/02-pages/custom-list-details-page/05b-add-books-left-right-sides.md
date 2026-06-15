# Add Books Modal Left and Right Sides

## Role

Defines the left-side library search/selection and right-side selected books preview.

## Source coverage

`custom-list-details-page.md` sections 27-28

## Content

## 27. Add Books modal: left side

Left side title:

```text
Ваша бібліотека
```

Left side містить:

* search input;
* список книг користувача;
* checkbox для кожної книги;
* disabled state для книг, які вже є у списку.

Search placeholder:

```text
Пошук за назвою або автором...
```

Search має працювати за:

* назвою книги;
* автором;
* серією;
* жанром;
* тегом;
* видавництвом.

Для кожної книги показати:

| Element               | Description                |
| --------------------- | -------------------------- |
| Checkbox              | Вибір книги                |
| Cover                 | Обкладинка або placeholder |
| Title                 | Назва книги                |
| Author                | Автор                      |
| Reading status        | Статус читання             |
| Already in list label | Якщо книга вже є в списку  |

Якщо книга вже є в цьому списку, вона має бути disabled або checked disabled.

Label:

```text
Уже в списку
```

---

---

## 28. Add Books modal: right side

Right side title:

```text
Вибрано книг: N
```

Right side показує всі книги, які користувач вибрав для додавання.

Для кожної вибраної книги показати:

| Element       | Description                         |
| ------------- | ----------------------------------- |
| Small cover   | Маленька обкладинка або placeholder |
| Title         | Назва книги                         |
| Author        | Автор                               |
| Remove action | Прибрати з вибраних                 |

Actions:

```text
Очистити
Додати до списку
```

Button **Очистити**:

* прибирає всі вибрані книги;
* не закриває modal;
* не змінює список, поки користувач не натиснув submit.

Button **Додати до списку** disabled, якщо не вибрана жодна нова книга.

---
