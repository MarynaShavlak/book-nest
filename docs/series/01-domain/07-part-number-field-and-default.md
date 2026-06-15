# Part Number Field and Default Logic

> Source: `series-book-order.md`

## 5. Part number field

### 5.1. Field overview

| Parameter        | Value                             |
| ---------------- | --------------------------------- |
| Field name       | partNumber                        |
| Label            | Номер частини                     |
| Type             | number input                      |
| Required         | Так, якщо книга належить до серії |
| Min value        | 1                                 |
| Decimal values   | Заборонено в MVP                  |
| Negative values  | Заборонено                        |
| Duplicate values | Заборонено в межах однієї серії   |

---

### 5.2. Allowed values

У MVP `partNumber` має бути:

```text
ціле число
більше або дорівнює 1
унікальне в межах серії
```

Valid examples:

```text
1
2
3
10
```

Invalid examples:

```text
0
-1
1.5
abc
empty
```

---

### 5.3. Error messages

```text
Вкажіть номер частини книги в серії
Номер частини має бути цілим числом
Номер частини має бути більшим за 0
У цій серії вже є книга з таким номером частини
```

---


## 6. Default part number logic

Коли користувач додає книгу до серії, система може запропонувати default `partNumber`.

### 6.1. Empty series

Якщо в серії ще немає книг:

```text
defaultPartNumber = 1
```

Example:

```text
Серія порожня.
Користувач додає першу книгу.
Default number: 1
```

---

### 6.2. Series with existing books

Якщо в серії вже є книги:

```text
defaultPartNumber = max(existingPartNumbers) + 1
```

Example:

```text
У серії є книги:
1, 2, 3

Default для нової книги:
4
```

---

### 6.3. Series with gaps

Якщо в серії є gap:

```text
1, 3, 4
```

Recommended MVP behavior:

```text
defaultPartNumber = max(existingPartNumbers) + 1
```

Example:

```text
У серії є книги:
1, 3, 4

Default для нової книги:
5
```

Не потрібно автоматично пропонувати `2`, бо пропущений номер може означати, що друга книга існує, але ще не додана.

---

### 6.4. Missing book

Якщо користувач додає missing book, `partNumber` має бути prefilled з missing book row.

Example:

```text
Missing book:
Книга 3 — Ще не додано

Create Book flow:
partNumber = 3
```

---
