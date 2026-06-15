# Remove / Unlink — Data Changes and Part Number

> Source: `remove-unlink-book-from-series.md`

## 7. What changes after unlink

Після відв’язування книги потрібно оновити всі місця, де серія або книга відображаються.

### 7.1. Book changes

Для книги потрібно прибрати:

```text
seriesId
partNumber
series metadata relation
```

При цьому залишити без змін:

```text
title
author
cover
readingStatus
ownershipStatus
format
rating
progress
notes
quotes
characters
isFavorite
readingQueue state
custom lists
```

Important:

```text
Якщо книга була в Reading Queue, вона залишається в Reading Queue.
Якщо книга була в Custom List, вона залишається в Custom List.
```

---

### 7.2. Series changes

Для серії потрібно оновити:

* books count;
* read books count;
* progress;
* next book;
* reading order block;
* statistics;
* cover fallback, якщо прибрана книга була першою книгою;
* empty state, якщо це була остання книга в серії.

---


## 8. Part number logic

Коли книга відв’язується від серії, її `partNumber` у межах цієї серії більше не потрібен.

### 8.1. Removed book

Для відв’язаної книги:

```text
partNumber = null
seriesId = null
```

або equivalent relation видаляється.

---

### 8.2. Other books in series

MVP rule:

```text
Не змінювати partNumber інших книг автоматично.
```

Example:

```text
Було:
Книга 1 — partNumber 1
Книга 2 — partNumber 2
Книга 3 — partNumber 3

Користувач прибрав Книгу 2.

Стало:
Книга 1 — partNumber 1
Книга 3 — partNumber 3
```

Reason:

```text
partNumber — це реальний номер книги в серії, а не позиція в UI.
```

Не потрібно автоматично перетворювати `3` на `2`, бо це може зламати правильний порядок частин.

---

### 8.3. Gap in part numbers

Якщо після відв’язування виникає gap, це нормально.

Example:

```text
1 → 3 → 4
```

У MVP можна не показувати warning для gap.

Future improvement:

```text
Показати optional hint:
“У серії є пропущені номери частин”.
```

Але це не потрібно блокувати.

---
