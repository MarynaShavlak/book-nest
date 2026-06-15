# Series Module — Main User Flows Part 1

> Source: series-module-overview.md lines 416-551

---

## 9. Main user flows

### 9.1. View all series

File:

```text
all-series-page.md
```

Flow:

```text
Sidebar → Серії → All Series Page
```

User can:

* переглянути всі серії;
* знайти серію;
* відфільтрувати серії;
* відсортувати серії;
* побачити summary cards;
* перейти до Series Details Page;
* створити нову серію.

---

### 9.2. View series details

File:

```text
series-details-page.md
```

Flow:

```text
All Series Page → Series Card → Series Details Page
```

User can:

* переглянути інформацію про серію;
* побачити список книг серії;
* побачити прогрес по серії;
* побачити наступну книгу;
* перейти до конкретної книги;
* запустити Add Book to Series flow;
* запустити Edit Series flow.

---

### 9.3. Create series

File:

```text
create-edit-series.md
```

Flow:

```text
All Series Page → Створити серію
```

User can:

* створити серію вручну;
* створити серію без книг;
* задати title, status, totalBooksCount, description, cover, genres, tags;
* побачити створену серію на All Series Page.

---

### 9.4. Edit series

File:

```text
create-edit-series.md
```

Flow:

```text
Series Details Page → Редагувати серію
```

User can edit:

* назву серії;
* автора;
* статус серії;
* загальну кількість книг;
* опис;
* обкладинку;
* жанри;
* теги.

Important:

```text
Edit Series не змінює readingStatus книг.
Edit Series не змінює ownershipStatus книг.
Edit Series не змінює порядок книг.
```

---

### 9.5. Add book to series

File:

```text
add-book-to-series.md
```

Flow:

```text
Series Details Page → Додати книгу в цю серію
```

User can:

* додати існуючу книгу до серії;
* створити нову книгу в межах серії;
* додати missing book;
* вказати partNumber;
* оновити список книг серії.

---
