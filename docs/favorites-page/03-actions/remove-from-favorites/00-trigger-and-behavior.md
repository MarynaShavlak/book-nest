# Trigger and Behavior

> Source: `favorites-page.md §13.1-13.2`

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
