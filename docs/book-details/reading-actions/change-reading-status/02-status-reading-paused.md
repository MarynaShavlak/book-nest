# Change Reading Status — Reading and Paused

> Source: change-reading-status.md lines 160-225

---

## 10. Status: reading

Якщо користувач вибрав:

```text
Читаю
```

Показати conditional block:

```text
Прогрес читання
```

Fields:

| Field                | Type         | Required |
| -------------------- | ------------ | -------: |
| Поточна сторінка     | Number input |       Ні |
| Дата початку читання | Date picker  |       Ні |

Logic:

* `readingStatus = reading`;
* якщо `startedAt` ще немає, можна встановити дату початку як поточну дату;
* якщо користувач вводить поточну сторінку, система рахує `progressPercent`;
* книга з’являється в активному читанні.

Validation:

* поточна сторінка не може бути меншою за `0`;
* поточна сторінка не може бути більшою за `pagesCount`.

---

## 11. Status: paused

Якщо користувач вибрав:

```text
На паузі
```

Показати conditional block:

```text
Пауза в читанні
```

Fields:

| Field            | Type         | Required |
| ---------------- | ------------ | -------: |
| Поточна сторінка | Number input |       Ні |
| Дата паузи       | Date picker  |       Ні |
| Нотатка          | Textarea     |       Ні |

Logic:

* `readingStatus = paused`;
* поточний прогрес зберігається;
* книга не вважається активним читанням;
* книгу можна пізніше повернути в статус `reading`.

---
