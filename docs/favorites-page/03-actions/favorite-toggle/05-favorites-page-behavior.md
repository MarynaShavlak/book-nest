# Favorites Page Behavior

> Source: `favorite-book-toggle.md §8`

## 8. Favorites page behavior

Сторінка **Favorites** показує тільки книги:

```text id="g8m9qm"
isFavorite = true
```

На цій сторінці користувач може прибрати книгу з улюблених.

Behavior after removing from favorites:

* книга зникає зі сторінки Favorites;
* книга не видаляється з бібліотеки;
* книга залишається доступною на My Library;
* показується success message.

Success message:

```text id="kzp7eb"
Книгу прибрано з улюблених
```

---
