# Page Header

> Source: `favorites-page.md §4`

## 4. Page header

Page header сторінки **“Улюблені книги”** має показувати назву сторінки, короткий опис, кількість улюблених книг і коротку статистику.

---

### 4.1. Header content

| Element | Description |
|---|---|
| Title | Назва сторінки |
| Subtitle | Короткий опис сторінки |
| Count badge | Кількість улюблених книг |
| Summary cards | Коротка статистика по улюблених книгах |

---

### 4.2. Title

```text
Улюблені книги
```

---

### 4.3. Subtitle

```text
Книги, які ти позначила як особливо улюблені
```

---

### 4.4. Count badge

Поруч із title або під subtitle потрібно показувати кількість улюблених книг.

Example:

```text
24 книги
```

Logic:

```text
favoriteCount = count of books where isFavorite = true and deletedAt = null
```

---

### 4.5. Header actions

На сторінці **“Улюблені книги”** не потрібно робити primary action **+ Додати книгу**.

Причина: книга додається в улюблені через favorite toggle, а не створюється напряму на цій сторінці.

Recommended secondary action:

```text
Перейти до бібліотеки
```

Behavior:

- веде на `/library`;
- не створює книгу;
- не змінює favorite status.

---

### 4.6. Summary cards

Рекомендовані summary cards:

| Card | Logic |
|---|---|
| Усього улюблених | `isFavorite = true` |
| Прочитано | `isFavorite = true` + `readingStatus = finished` |
| Читаю | `isFavorite = true` + `readingStatus = reading` або `rereading` |
| Середній рейтинг | average rating серед улюблених книг з rating |

---

### 4.7. Summary cards behavior

- cards мають бути інформаційними;
- cards не мають бути клікабельними;
- cards рахують тільки активні книги поточного користувача;
- видалені книги не враховуються;
- cards оновлюються після favorite toggle, зміни reading status, rating або видалення книги.

---
