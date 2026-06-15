# Series Details Page — Progress Calculation Sidebar

> Source: `series-details-page.md`

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
