# Empty Favorites State

> Source: `favorites-page.md §14.3 + favorite-book-toggle.md §14`

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
