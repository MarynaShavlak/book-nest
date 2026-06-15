# Empty and No Results Rules

> Source: `favorites-page.md §14.3-14.5 + favorite-book-toggle.md §14`

### 14.3. Empty favorites state

When:

```text
favoriteCount = 0
search is empty
filters are empty
```

Title:

```text
Улюблених книг поки немає
```

Description:

```text
Натисни серце на книзі, яка тобі особливо сподобалась, і вона з’явиться тут.
```

Action:

```text
Перейти до бібліотеки
```

Behavior:

- action веде на `/library`;
- цей state не показується, якщо улюблені є, але приховані через search або filters.

---

### 14.4. No search results state

When:

```text
favoriteCount > 0
search is active
filters are empty
resultsCount = 0
```

Title:

```text
Нічого не знайдено
```

Description:

```text
Спробуй змінити пошуковий запит або очистити пошук.
```

Action:

```text
Очистити пошук
```

---

### 14.5. No filtered results state

When:

```text
favoriteCount > 0
filters are active
resultsCount = 0
```

Title:

```text
Немає улюблених книг за вибраними фільтрами
```

Description:

```text
Спробуй змінити фільтри або очистити їх, щоб побачити більше книг.
```

Actions:

```text
Очистити фільтри
Очистити все
```

---

## 14. Empty state for Favorites

Якщо у користувача немає улюблених книг, показати empty state.

Title:

```text id="u6ymd4"
Улюблених книг ще немає
```

Description:

```text id="7f4ni5"
Додавайте книги в улюблені, щоб швидко знаходити їх тут.
```

Primary action:

```text id="fom9qp"
Перейти до бібліотеки
```

---
