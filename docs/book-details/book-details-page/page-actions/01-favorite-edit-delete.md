# Page Actions — Favorite, Edit and Delete

> Source: book-details-page.md lines 1716-1830

---

### 9.2. Favorite toggle

Action:

```text
Додати в улюблені / Прибрати з улюблених
```

UI:

* heart icon у hero section;
* якщо `isFavorite = false`, показати outline heart;
* якщо `isFavorite = true`, показати filled heart.

Logic:

* при кліку значення `isFavorite` перемикається;
* якщо книга додана в улюблені, вона з’являється на сторінці **Улюблені книги**;
* якщо книга прибрана з улюблених, вона зникає зі сторінки **Улюблені книги**;
* книга залишається в бібліотеці в обох випадках.

State update:

```ts
isFavorite: false → true
isFavorite: true → false
```

---

### 9.3. Edit book

Action:

```text
Редагувати книгу
```

UI location:

```text
Right sidebar → Quick actions
```

Behavior:

* action виконує redirect на сторінку редагування книги;
* рекомендований route:

```text
/books/:bookId/edit
```

Logic:

* форма редагування відкривається з поточними даними книги;
* після збереження користувач може повернутися на Book Details;
* після оновлення дані на Book Details мають бути актуальними.

---

### 9.4. Delete book

Action:

```text
Видалити з бібліотеки
```

UI location:

```text
Right sidebar → Quick actions
```

Behavior:

* action не видаляє книгу одразу;
* відкривається confirmation modal.

Modal:

```text
Видалити книгу?

Книга зникне з бібліотеки та пов’язаних розділів.
```

Actions:

```text
Скасувати
Видалити
```

Logic:

* **Скасувати** закриває modal без змін;
* **Видалити** виконує soft delete;
* після успішного видалення користувача потрібно повернути до бібліотеки.

Recommended redirect after delete:

```text
/library
```

Backend state:

```ts
deletedAt: Date
```

---
