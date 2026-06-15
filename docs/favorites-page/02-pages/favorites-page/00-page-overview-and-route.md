# Page Overview and Route

> Source: `favorites-page.md §2`

## 2. Page entry point

Сторінка має бути доступна з основної навігації застосунку.

---

### 2.1. Sidebar navigation

У sidebar має бути пункт меню:

```text
Улюблені
```

Рекомендована позиція в sidebar:

```text
Головна
Моя бібліотека
Серії
Черга читання
Списки
Книги до покупки
Книги в дорозі
Позичені книги
Улюблені
Нотатки
Цитати
Статистика
Налаштування
```

Пункт **“Улюблені”** веде на сторінку улюблених книг.

---

### 2.2. Route

Рекомендований route:

```text
/favorites
```

Альтернативний варіант:

```text
/favorite-books
```

Рекомендований варіант для BookNest:

```text
/favorites
```

Причина: route короткий, зрозумілий і добре підходить для сторінки улюблених книг.

---

### 2.3. Page access rules

Сторінка доступна тільки авторизованому користувачу.

Якщо користувач не авторизований:

- він не має бачити сторінку улюблених книг;
- його потрібно перенаправити на login page;
- після успішного login можна повернути його назад на `/favorites`.

---

### 2.4. User scope

Користувач має бачити тільки свої улюблені книги.

На сторінці не мають відображатися:

- книги інших користувачів;
- видалені книги;
- книги, де `isFavorite = false`;
- чужі списки, серії, теги або custom-дані.

Базова умова для сторінки:

```text
userId = currentUser.id
isFavorite = true
deletedAt = null
```

---

### 2.5. URL behavior

Сторінка має підтримувати query params для:

- search;
- quick filters;
- advanced filters;
- sorting;
- view mode.

Приклади:

```text
/favorites?search=wing
/favorites?readingStatus=finished
/favorites?format=ebook
/favorites?sort=favoriteAddedAt_desc
/favorites?view=grid
```

Це потрібно, щоб:

- користувач міг оновити сторінку і не втратити фільтри;
- browser history працював очікувано;
- посилання на відфільтровану сторінку було стабільним.

---

### 2.6. Acceptance Criteria

- У sidebar є пункт **Улюблені**.
- Пункт **Улюблені** веде на сторінку `/favorites`.
- Сторінка доступна тільки авторизованому користувачу.
- Користувач бачить тільки свої книги.
- На сторінці показуються тільки книги з `isFavorite = true`.
- Видалені книги не відображаються.
- URL підтримує query params для search, filters, sorting і view mode.
- Після reload сторінки активні query params відновлюються.

---
