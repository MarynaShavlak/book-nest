# Book Form Series Section — Part Number Field

> Source: `book-form-series-section.md`

## 10. Part number field

### 10.1. Field overview

| Parameter        | Value                             |
| ---------------- | --------------------------------- |
| Label            | Номер частини                     |
| Placeholder      | Наприклад, 1                      |
| Type             | Number input                      |
| Required         | Так, якщо книга належить до серії |
| Min value        | 1                                 |
| Decimal values   | Заборонено в MVP                  |
| Duplicate values | Заборонено в межах серії          |

---

### 10.2. Required rule

Якщо toggle **Це книга із серії** увімкнений, `partNumber` є required.

Error:

```text
Вкажіть номер частини книги в серії
```

---

### 10.3. Default partNumber

Якщо користувач вибрав існуючу серію, система може запропонувати default number:

```text
defaultPartNumber = max(existingPartNumbers) + 1
```

Якщо серія порожня:

```text
defaultPartNumber = 1
```

Якщо форма відкрита з missing book row:

```text
partNumber = missingBook.partNumber
```

Якщо користувач створює нову серію з цією книгою:

```text
defaultPartNumber = 1
```

---

### 10.4. Duplicate partNumber

У межах однієї серії не може бути дві книги з однаковим `partNumber`.

Error:

```text
У цій серії вже є книга з таким номером частини
```

Behavior:

* submit disabled або validation error;
* користувач має вказати інший номер;
* existing book не має дублювати сама себе в Edit mode.

Important for Edit mode:

```text
Якщо користувач редагує книгу і залишає її поточний partNumber без змін, це не вважається duplicate.
```

---

### 10.5. totalBooksCount conflict

Якщо у серії вказано `totalBooksCount`, `partNumber` не може бути більшим за це значення.

Example:

```text
totalBooksCount = 3
partNumber = 4
```

Error:

```text
Номер частини більший за загальну кількість книг у серії
```

Helper text:

```text
Оновіть загальну кількість книг у серії або змініть номер частини.
```

Action:

```text
Редагувати серію
```

---
