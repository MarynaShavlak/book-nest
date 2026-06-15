# Favorite Toggle Filter Behavior

> Source: `favorite-book-toggle.md §13`

## 13. Filters behavior

Favorite може використовуватись у quick filters або advanced filters.

### If favorite filter is not active

Після toggle книга залишається у списку.

### If favorite filter is active

Якщо користувач знаходиться у фільтрі:

```text id="17drr0"
Улюблені
```

і прибирає книгу з улюблених:

* книга має зникнути з поточного списку;
* result count має оновитися;
* якщо більше немає улюблених книг, показати empty state.

---
