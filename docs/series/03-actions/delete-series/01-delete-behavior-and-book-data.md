# Delete Series — Delete Behavior and Book Data

> Source: `delete-series.md`

## 5. Delete behavior

### 5.1. Series without books

Якщо серія не має книг, видалення просте.

Behavior:

1. Користувач відкриває Series Details Page.
2. Натискає **Видалити серію**.
3. Система показує confirmation modal.
4. Користувач підтверджує видалення.
5. Серія видаляється.
6. Користувач повертається на All Series Page.
7. Серія більше не показується у списку.

---

### 5.2. Series with books

Якщо серія має книги, потрібно показати більш детальне попередження.

Behavior:

1. Користувач натискає **Видалити серію**.
2. Система показує confirmation modal.
3. У modal показується кількість книг у серії.
4. Користувач бачить пояснення, що книги не будуть видалені.
5. Користувач підтверджує дію.
6. Серія видаляється.
7. Книги залишаються в бібліотеці.
8. У книг очищується зв’язок із серією.
9. Користувач повертається на All Series Page.

Example:

```text
У цій серії є 5 книг.
Після видалення серії книги залишаться у вашій бібліотеці, але більше не будуть прив’язані до цієї серії.
```

---

### 5.3. Series with missing books

Якщо серія містить missing book rows, вони видаляються разом із серією.

Missing book — це не повноцінна книга в бібліотеці, тому після видалення серії:

* missing book rows зникають;
* у бібліотеці нічого не видаляється;
* жодні реальні книги не втрачаються.

---


## 6. What happens to books after deleting series

Після видалення серії всі реальні книги, які були прив’язані до неї, залишаються в бібліотеці.

### 6.1. Book fields that should be cleared

Для книг, які були в серії, потрібно прибрати зв’язок із серією:

```text
seriesId = null
partNumber = null
series relation = removed
```

або equivalent relation видаляється.

---

### 6.2. Book fields that should stay unchanged

Delete Series не змінює:

```text
title
author
cover
description
readingStatus
ownershipStatus
format
rating
progress
currentPage
totalPages
notes
quotes
characters
isFavorite
readingQueue state
custom lists
purchase status
loan status
```

Important:

```text
Якщо книга була “Прочитано”, вона залишається “Прочитано”.
Якщо книга була в черзі читання, вона залишається в черзі.
Якщо книга була у власному списку, вона залишається у цьому списку.
```

---
