# Series Preview Block — Actions and Remove From Series

> Source: book-details-page.md lines 1140-1230

---

#### 7.4.13. Actions

Main action:

```text
Переглянути серію
```

Behavior:

* redirect на Series Details Page;
* route:

```text
/series/:seriesId
```

Secondary actions, якщо потрібні:

```text
Редагувати серію книги
Прибрати з серії
```

Recommended MVP behavior:

| Action                 | Behavior                                              |
| ---------------------- | ----------------------------------------------------- |
| Переглянути серію      | redirect to `/series/:seriesId`                       |
| Редагувати серію книги | відкриває Edit Book Form або Book Form Series Section |
| Прибрати з серії       | відкриває confirmation unlink flow                    |

Important:

```text
Book Details не має напряму редагувати series relation без відповідного flow.
```

Тобто:

* зміна серії книги відбувається через Edit Book Form;
* відв’язування книги від серії відбувається через Remove / Unlink Book from Series flow;
* редагування самої серії відбувається через Create / Edit Series flow.

---

#### 7.4.14. Remove from series action

Action:

```text
Прибрати з серії
```

Цю дію можна показати в More menu всередині Series preview або залишити тільки в Edit Book Form.

Recommended MVP:

```text
Основний шлях: Редагувати книгу → Series Section → прибрати серію.
```

Якщо action показується прямо в Series preview, потрібно обов’язково показати confirmation modal.

Confirmation title:

```text
Прибрати книгу з серії?
```

Confirmation text:

```text
Книга залишиться у вашій бібліотеці, але більше не буде відображатися в цій серії.
```

Buttons:

```text
Скасувати
Прибрати з серії
```

Important:

```text
Ця дія не видаляє книгу з бібліотеки.
```

---
