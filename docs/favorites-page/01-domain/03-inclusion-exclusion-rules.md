# Inclusion and Exclusion Rules

> Source: `favorites-page.md §3`

## 3. What books are displayed

На сторінці **“Улюблені книги”** відображаються тільки активні книги поточного користувача, які позначені як улюблені.

Книга потрапляє на сторінку після того, як користувач натискає heart icon на:

- картці книги в **Моїй бібліотеці**;
- сторінці **Book Details**;
- іншій сторінці, де доступний favorite toggle.

---

### 3.1. Inclusion rules

Книга показується на сторінці, якщо:

```text
isFavorite = true
```

і:

```text
deletedAt = null
```

і:

```text
userId = currentUser.id
```

---

### 3.2. Exclusion rules

Книга не показується на сторінці, якщо:

- `isFavorite = false`;
- книга видалена;
- книга належить іншому користувачу;
- користувач не авторизований.

---

### 3.3. Favorite added date

Для коректного сортування улюблених книг потрібно зберігати дату додавання в улюблені:

```ts
favoriteAddedAt?: string | null;
```

Recommended logic:

```text
isFavorite: false → true
favoriteAddedAt = currentDate
```

```text
isFavorite: true → false
favoriteAddedAt = null
```

Для MVP краще очищати `favoriteAddedAt`, коли книгу прибрали з улюблених, бо сторінка показує тільки активні улюблені книги.

---
