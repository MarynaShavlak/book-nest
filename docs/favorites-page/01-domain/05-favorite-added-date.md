# Favorite Added Date

> Source: `favorites-page.md §3.3`

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
