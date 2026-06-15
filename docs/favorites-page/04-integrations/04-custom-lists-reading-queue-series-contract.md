# Custom Lists, Reading Queue and Series Contract

> Source: `favorite-book-toggle.md §4, §13`

## 4. Entry points

Favorite action має бути доступна у кількох місцях.

| Entry point         | UI element                                                |
| ------------------- | --------------------------------------------------------- |
| Book Details        | Heart icon у hero section                                 |
| My Library          | Heart icon на book card                                   |
| Search results      | Heart icon на book card                                   |
| Favorites page      | Heart icon або action “Прибрати з улюблених”              |
| Custom list details | Heart icon на book card                                   |
| Reading Queue       | Heart icon на book card, якщо там показуються картки книг |
| Series details      | Heart icon на book card                                   |

---

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
