# Series Module — Main User Flows Part 2

> Source: series-module-overview.md lines 552-647

---

### 9.6. Link book to series from Book Form

File:

```text
book-form-series-section.md
```

Flow:

```text
Create / Edit Book Form → Series Section
```

User can:

* позначити, що книга є частиною серії;
* вибрати існуючу серію;
* створити нову серію inline;
* вказати partNumber;
* змінити series relation;
* прибрати книгу з серії в Edit Book Form.

Important:

```text
Якщо нова серія створюється inline у Create Book Form,
вона не має зберігатися до submit всієї форми книги.
```

---

### 9.7. Remove / unlink book from series

File:

```text
remove-unlink-book-from-series.md
```

Flow:

```text
Series Details Page → Book row menu → Прибрати з серії
```

or:

```text
Edit Book Form → Series Section → remove series relation
```

User can:

* прибрати книгу з серії;
* залишити книгу в бібліотеці;
* прибрати missing book;
* оновити progress, next book і books count серії.

Important:

```text
Unlink не видаляє книгу з бібліотеки.
```

---

### 9.8. Delete series

File:

```text
delete-series.md
```

Flow:

```text
Series Details Page → More menu → Видалити серію
```

User can:

* видалити серію;
* залишити книги в бібліотеці;
* очистити series relation у книг;
* повернутися на All Series Page.

Important:

```text
Delete Series не видаляє книги.
```

---
