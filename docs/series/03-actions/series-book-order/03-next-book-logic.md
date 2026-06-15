# Series Book Order — Next Book Logic

> Source: `series-book-order.md`

## 8. Next book logic

`partNumber` використовується для визначення наступної книги.

### 8.1. Base logic

Next book — це:

```text
перша книга в серії з найменшим partNumber, яка не має readingStatus = finished
```

Якщо є книга зі статусом:

```text
reading
```

або:

```text
rereading
```

вона вважається поточною / наступною.

---

### 8.2. Example: normal order

```text
Книга 1 — Прочитано
Книга 2 — Прочитано
Книга 3 — Не почато
Книга 4 — Не почато
```

Result:

```text
Наступна книга: Книга 3
```

---

### 8.3. Example: currently reading

```text
Книга 1 — Прочитано
Книга 2 — Читаю
Книга 3 — Не почато
```

Result:

```text
Поточна / наступна книга: Книга 2
```

---

### 8.4. Example: gap in order

```text
Книга 1 — Прочитано
Книга 3 — Не почато
```

Result:

```text
Наступна книга: Книга 3
```

BookNest не має автоматично створювати missing book для `partNumber = 2` у MVP.

---

### 8.5. Example: all books finished

```text
Книга 1 — Прочитано
Книга 2 — Прочитано
Книга 3 — Прочитано
```

Result:

```text
Усі книги прочитані
```

---
