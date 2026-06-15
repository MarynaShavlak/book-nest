# Progress Calculation

> Source: `series-details-page.md, remove-unlink-book-from-series.md`

### 5.10. Right Sidebar: Your Progress in Series

Block title:

```text
Ваш прогрес у серії
```

Показати:

* прочитано книг;
* загальна кількість книг;
* відсоток прогресу;
* progress bar;
* скільки книг читається зараз;
* скільки ще не прочитано.

Example:

```text
2 з 3 книг
67%

Прочитано: 2 книги
Читаєте зараз: 1 книга
Ще не прочитано: 0 книг
```

---


### 5.11. Progress calculation

Прогрес серії рахується по книгах зі статусом:

```text
finished
```

Base formula:

```text
read books count / total books count * 100
```

Якщо `totalBooksCount` вказаний:

```text
Прочитано 2 з 5
40%
```

Якщо `totalBooksCount` не вказаний:

```text
Прочитано 2 з 4 доданих
50%
```

Якщо серія не має книг:

```text
Прогрес ще недоступний
```

Якщо всі книги прочитані:

```text
Усі книги прочитані
100%
```

Important:

```text
Якщо totalBooksCount менший за кількість уже доданих книг, це має вирішуватися у Feature: Create / Edit Series.
Series Details Page тільки відображає актуальний стан.
```

---


### 5.13. Right Sidebar: Series Statistics

Block title:

```text
Статистика серії
```

У MVP показати:

| Field            | Description                                   |
| ---------------- | --------------------------------------------- |
| Усього книг      | загальна кількість книг у серії               |
| Прочитано        | кількість книг зі статусом finished           |
| Читаю            | кількість книг зі статусом reading            |
| У черзі          | кількість книг серії, доданих у Reading Queue |
| Ще не прочитано  | кількість непрочитаних книг                   |
| Середній рейтинг | якщо ratings уже підтримуються                |
| Сторінок у серії | якщо pages count доступний                    |

Example:

```text
Усього книг: 3
Прочитано: 2
Читаю: 1
У черзі: 1
Середній рейтинг: 4.5
```

Якщо частина даних недоступна, поле можна приховати.

---


## 9. Progress recalculation

Після відв’язування книги потрібно перерахувати progress серії.

### 9.1. If totalBooksCount exists

Якщо у серії вказаний `totalBooksCount`, progress рахується від нього.

Example:

```text
totalBooksCount = 5
Було прочитано 2 книги з 5 → 40%

Користувач відв’язав одну прочитану книгу.
Стало прочитано 1 з 5 → 20%
```

Important:

```text
Відв’язування книги не змінює totalBooksCount автоматично.
```

`totalBooksCount` — це поле самої серії, яке редагується через Feature: Create / Edit Series.

---

### 9.2. If totalBooksCount does not exist

Якщо `totalBooksCount` не вказаний, progress рахується по доданих книгах.

Example:

```text
Було:
2 прочитано з 4 доданих → 50%

Користувач відв’язав одну непрочитану книгу.
Стало:
2 прочитано з 3 доданих → 67%
```

---

### 9.3. If removed book was finished

Якщо прибрана книга мала:

```text
readingStatus = finished
```

то `readBooksCount` серії зменшується на 1.

---

### 9.4. If removed book was reading

Якщо прибрана книга мала:

```text
readingStatus = reading
```

потрібно оновити:

* currently reading count;
* next book block;
* progress summary;
* series statistics.

---
