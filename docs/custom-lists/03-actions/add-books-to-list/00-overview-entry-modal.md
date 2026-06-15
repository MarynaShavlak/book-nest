# Overview, Entry, Modal

## Role

Defines Add Books entry point and modal layout.

## Source coverage

`custom-list-details-page.md` sections 25-28

## Content

## 25. Add books to list

Користувач може додати книги до поточного списку через кнопку:

```text
+ Додати книги
```

Після натискання відкривається modal.

Modal title:

```text
Додати книги до списку
```

Subtitle:

```text
Оберіть книги зі своєї бібліотеки, щоб додати їх до цього списку.
```

---

---

## 26. Modal: Add Books to List

Modal має дозволяти вибрати одну або кілька книг зі своєї бібліотеки.

Recommended layout:

```text
Left side: Ваша бібліотека
Right side: Вибрано книг: N
```

Це зручно, бо користувач одночасно бачить:

* які книги доступні для додавання;
* які книги вже вибрані;
* скільки книг буде додано.

---

---

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
