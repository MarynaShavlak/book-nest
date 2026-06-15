# All Series Page — States

> Source: `all-series-page.md`

## 7. States

### 7.1. Loading state

Показується, коли серії завантажуються.

Recommended UI:

* skeleton header cards;
* skeleton series cards;
* skeleton right sidebar blocks;
* loading state для toolbar.

---

### 7.2. Empty state: no series

Показується, якщо користувач ще не має жодної серії.

Content:

```text
У вас ще немає серій
Створіть першу серію або додайте книгу як частину книжкового циклу.
```

Actions:

```text
Створити серію
Додати книгу
```

---

### 7.3. Empty state: no unfinished series

Показується у вкладці **Недочитані**, якщо немає серій, які користувач почав і не завершив.

Content:

```text
У вас немає недочитаних серій
Усі початі серії завершені або ви ще не починали читати серії.
```

Action:

```text
Переглянути всі серії
```

---

### 7.4. Empty state: manually created series without books

Показується на картці, якщо серія створена вручну, але книг ще немає.

Content:

```text
Книги ще не додані
Додайте першу книгу, щоб почати відстежувати прогрес серії.
```

Action:

```text
Додати книгу
```

---

### 7.5. Empty search results

Показується, якщо search не знайшов жодної серії.

Content:

```text
Серій не знайдено
Спробуйте змінити пошук або очистити фільтри.
```

Actions:

```text
Очистити пошук
Очистити фільтри
```

---

### 7.6. Error state

Показується, якщо серії не вдалося завантажити.

Content:

```text
Не вдалося завантажити серії
Спробуйте оновити сторінку.
```

Action:

```text
Спробувати ще раз
```

---
