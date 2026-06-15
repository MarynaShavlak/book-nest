# Series Module — Book Order Logic

> Source: series-module-overview.md lines 337-415

---

## 8. Book order logic

Порядок книг у серії визначається через:

```text
partNumber
```

Base sorting:

```text
partNumber ASC
```

Example:

```text
1 → 2 → 3 → 4
```

---

### 8.1. Required partNumber

У MVP нова книга не може бути додана до серії без `partNumber`.

This applies to:

* Add Book to Series flow;
* Create Book Form with selected series;
* Edit Book Form when linking book to series.

Error:

```text
Вкажіть номер частини книги в серії
```

---

### 8.2. Duplicate partNumber

У межах однієї серії не можна мати дві книги з однаковим `partNumber`.

Invalid example:

```text
Книга A → partNumber = 1
Книга B → partNumber = 1
```

Error:

```text
У цій серії вже є книга з таким номером частини
```

---

### 8.3. Gaps are allowed

Якщо після відв’язування книги виник gap, це не помилка.

Example:

```text
1 → 3 → 4
```

BookNest не має автоматично перенумеровувати інші книги.

Reason:

```text
partNumber — це реальний номер книги в серії, а не UI-position.
```

---
