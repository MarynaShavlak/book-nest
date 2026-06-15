# Validation and Safety Rules

> Source: `favorites-page.md §13 + favorite-book-toggle.md §18`

## 13. Remove from favorites logic

Користувач може прибрати книгу з улюблених зі сторінки **“Улюблені книги”**.

---

### 13.1. Trigger

Trigger:

```text
filled heart icon
```

або menu action:

```text
Прибрати з улюблених
```

---

### 13.2. Behavior

Після кліку:

```text
isFavorite: true → false
favoriteAddedAt = null
```

Result:

- книга зникає зі сторінки **Улюблені книги**;
- книга залишається в **Моїй бібліотеці**;
- книга не видаляється;
- reading status не змінюється;
- ownership status не змінюється;
- formats не змінюються.

---

### 13.3. Confirmation

Confirmation modal не потрібна для MVP.

Причина:

- дія не є destructive;
- книгу легко повернути в улюблені;
- confirmation сповільнює взаємодію.

---

### 13.4. Toast with Undo

Після remove показати toast:

```text
Книгу прибрано з улюблених
```

Toast action:

```text
Скасувати
```

Undo behavior:

```text
isFavorite: false → true
favoriteAddedAt = currentDate
```

Result:

- книга повертається на сторінку **Улюблені книги**;
- count і summary cards оновлюються;
- active filters залишаються.

---

### 13.5. Optimistic UI

Recommended behavior:

```text
Click → optimistic UI update → save in background
```

If success:

- UI залишається оновленим.

If error:

- повернути попередній стан;
- показати error message;
- книга не має зникати остаточно.

Error message:

```text
Не вдалося оновити улюблене
```

---

## 18. Permissions

Користувач може змінювати favorite status тільки для своїх книг.

System має перевіряти:

* книга існує;
* книга належить поточному користувачу;
* книга не видалена.

Якщо книга видалена або недоступна, favorite action не має виконуватися.

---
