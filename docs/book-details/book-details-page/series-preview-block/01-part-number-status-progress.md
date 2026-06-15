# Series Preview Block — Part Number, Series Status and Progress

> Source: book-details-page.md lines 920-1075

---

#### 7.4.7. Part number display

Part number показує, якою частиною серії є поточна книга.

Recommended format:

```text
Книга 2 з 3
```

Logic:

* `2` — це `book.partNumber`;
* `3` — це `series.totalBooksCount`, якщо він вказаний;
* якщо `totalBooksCount` не вказаний, можна використовувати кількість доданих книг у серії.

Examples:

```text
Книга 2 з 3
Книга 4 з 7
Книга 2
```

Якщо `totalBooksCount` відсутній:

```text
Книга 2
```

або:

```text
Книга 2 з 4 доданих
```

Recommended MVP:

```text
Якщо totalBooksCount відсутній, показувати тільки “Книга 2”.
```

---

#### 7.4.8. Missing part number

Якщо книга має `seriesId`, але не має `partNumber`, блок має показати warning.

Content:

```text
Номер частини не вказаний
```

Recommended UI:

```text
Серія

Тінь і кістка
Номер частини не вказаний

[Переглянути серію]
[Редагувати книгу]
```

Behavior:

* блок не має ламатися;
* action **Редагувати книгу** відкриває Edit Book Form;
* користувач може додати `partNumber` у Series Section in Book Form.

Important:

```text
Нові книги не мають додаватися до серії без partNumber.
Такий state потрібен тільки для старих або некоректних даних.
```

---

#### 7.4.9. Series status

Series status показує стан книжкового циклу.

Options:

| Value       | Label       |
| ----------- | ----------- |
| `completed` | Завершена   |
| `ongoing`   | Ще виходить |
| `unknown`   | Невідомо    |

Important:

```text
Series status не означає, що користувач прочитав серію.
```

Example:

```text
Серія завершена
```

або:

```text
Серія ще виходить
```

---

#### 7.4.10. User progress in series

У Series preview можна показати короткий прогрес користувача по серії.

Recommended format:

```text
Прочитано 2 з 5 книг · 40%
```

Progress calculation:

```text
finished books count / total books count * 100
```

Якщо `series.totalBooksCount` вказаний:

```text
Прочитано 2 з 5 книг · 40%
```

Якщо `series.totalBooksCount` не вказаний:

```text
Прочитано 2 з 4 доданих · 50%
```

Якщо прогрес не можна порахувати:

```text
Прогрес серії ще недоступний
```

Important:

```text
У цьому блоці показується тільки короткий summary.
Повна статистика серії показується на Series Details Page.
```

---
