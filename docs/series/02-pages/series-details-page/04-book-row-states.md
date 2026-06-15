# Series Details Page — Book Row States

> Source: `series-details-page.md`

### 5.7. Book row states

Книга в серії може мати різні стани.

#### Finished book

Якщо книга має:

```text
readingStatus = finished
```

Показати badge:

```text
Прочитано
```

Optional:

* дата завершення;
* рейтинг.

---

#### Currently reading book

Якщо книга має:

```text
readingStatus = reading
```

Показати badge:

```text
Читаю
```

Також показати:

* поточну сторінку;
* progress bar;
* відсоток прогресу.

---

#### Not started book

Якщо книга має:

```text
readingStatus = not_started
```

Показати badge:

```text
Не почато
```

---

#### Want to read book

Якщо книга має:

```text
readingStatus = want_to_read
```

Показати badge:

```text
Хочу прочитати
```

---

#### Paused book

Якщо книга має:

```text
readingStatus = paused
```

Показати badge:

```text
На паузі
```

---

#### DNF book

Якщо книга має:

```text
readingStatus = dnf
```

Показати badge:

```text
Покинуто
```

---

#### Rereading book

Якщо книга має:

```text
readingStatus = rereading
```

Показати badge:

```text
Перечитую
```

У MVP `rereading` можна показувати як активний стан читання, якщо цей статус уже доступний у застосунку.

---

#### Book in queue

Якщо книга додана в Reading Queue, показати окремий badge:

```text
У черзі
```

Important:

```text
У черзі — це не readingStatus.
Це окремий стан, пов’язаний з Reading Queue.
```

---

#### Missing book

Якщо книга відома як частина серії, але ще не додана в бібліотеку користувача, показати стан:

```text
Ще не додано
```

Actions:

```text
Додати цю книгу
```

Important:

```text
У MVP missing books показуються тільки тоді, коли вони вже відомі в межах даних користувача.
Автоматичне підтягування відсутніх книг з інтернету не входить у MVP.
```

---
