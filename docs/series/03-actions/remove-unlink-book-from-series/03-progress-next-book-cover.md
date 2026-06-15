# Remove / Unlink — Progress, Next Book, Cover

> Source: `remove-unlink-book-from-series.md`

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


## 10. Next book recalculation

Після відв’язування книги потрібно повторно визначити наступну книгу.

Next book logic:

```text
1. Якщо є книга зі статусом reading або rereading — вона поточна / наступна.
2. Інакше взяти книгу з найменшим partNumber, яка не має readingStatus = finished.
3. Якщо всі книги прочитані — показати “Усі книги прочитані”.
4. Якщо серія порожня — показати empty state.
```

### 10.1. Removed book was next book

Якщо користувач прибрав книгу, яка була next book, система має знайти наступну доступну книгу.

Example:

```text
Було:
Книга 1 — Прочитано
Книга 2 — Наступна книга
Книга 3 — Не почато

Користувач прибрав Книгу 2.

Стало:
Наступна книга — Книга 3
```

---

### 10.2. Removed book was the only unread book

Якщо прибрана книга була єдиною непрочитаною книгою, після відв’язування серія може стати повністю прочитаною.

---

### 10.3. Removed book was the only book in series

Якщо прибрана книга була останньою книгою в серії, Series Details Page має показати empty state.

---


## 11. Cover fallback logic

Якщо серія не має custom cover, вона може використовувати обкладинку першої книги.

Після відв’язування книги потрібно перевірити cover fallback.

### 11.1. Removed book was not cover source

Якщо прибрана книга не була джерелом cover, обкладинка серії не змінюється.

---

### 11.2. Removed book was cover source

Якщо прибрана книга була першою книгою і використовувалася як fallback cover:

* взяти cover наступної книги за partNumber;
* якщо наступної книги немає або cover немає — показати placeholder;
* якщо у серії є custom cover — нічого не змінювати.

---
