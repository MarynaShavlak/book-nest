# Add Book to Series — Form Fields and Part Number

> Source: `add-book-to-series.md`

## 8. Form fields

### 8.1. Add existing book fields

У режимі **Існуюча книга** форма має містити:

| Field         | Required | Description                              |
| ------------- | -------- | ---------------------------------------- |
| Книга         | Так      | книга з бібліотеки користувача           |
| Номер частини | Так      | позиція книги в серії                    |
| Примітка      | Ні       | коротка службова примітка, якщо потрібна |

---

### 8.2. Create new book fields

У режимі **Нова книга** використовується Create Book flow.

Мінімально важливі поля для цієї фічі:

| Field            | Required | Description                              |
| ---------------- | -------- | ---------------------------------------- |
| Назва книги      | Так      | назва нової книги                        |
| Автор            | Ні       | автор книги, може бути prefilled з серії |
| Серія            | Так      | поточна серія, preselected               |
| Номер частини    | Так      | позиція книги в серії                    |
| Статус читання   | Ні       | default `not_started`                    |
| Статус володіння | Ні       | default `none`                           |
| Формат           | Ні       | паперова / електронна / аудіокнига       |
| Обкладинка       | Ні       | cover книги                              |

Повна логіка Create Book Form описується в окремій feature documentation.

---


## 9. Part number logic

`partNumber` — це номер книги в межах серії.

Він потрібен для:

* правильного порядку книг;
* визначення наступної книги;
* побудови progress logic;
* коректного відображення Series Details Page;
* правильного сортування книг у серії.

---

### 9.1. Required rule

У Add Book to Series flow `partNumber` є required.

Reason:

```text
Книга в серії має мати номер частини, щоб BookNest міг правильно показати порядок читання.
```

Якщо part number не вказаний, книга не додається через цей flow.

Error message:

```text
Вкажіть номер частини книги в серії
```

---

### 9.2. Allowed values

MVP rule:

```text
partNumber має бути цілим числом від 1 і більше.
```

Validation:

```text
тільки ціле число
мінімум 1
без від’ємних значень
без дробових значень
```

Error messages:

```text
Номер частини має бути цілим числом
Номер частини має бути більшим за 0
```

---

### 9.3. Default part number

Коли користувач додає нову книгу, система може запропонувати наступний номер частини.

Logic:

```text
defaultPartNumber = max(existingPartNumbers) + 1
```

Example:

```text
У серії вже є книги 1, 2, 3.
Default part number для нової книги: 4.
```

Якщо серія порожня:

```text
Default part number: 1.
```

Якщо користувач додає missing book:

```text
partNumber prefilled з missing book row.
```

---

### 9.4. Duplicate part number

Якщо в серії вже є книга з таким самим `partNumber`, потрібно показати warning або validation error.

Recommended MVP behavior:

```text
Блокувати submit і попросити вибрати інший номер частини.
```

Error message:

```text
У цій серії вже є книга з таким номером частини
```

Reason:

```text
У MVP не підтримується складний порядок читання, спін-офи, новели або книги з однаковим номером.
```

---

### 9.5. Missing part number in old data

Якщо в існуючих даних уже є книга без `partNumber`, Series Details Page може показувати її в кінці списку з warning.

Але Add Book to Series flow не має створювати нові книги без `partNumber`.

Rule:

```text
Через Add Book to Series flow не можна додати книгу без номера частини.
```

---
