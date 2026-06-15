# Summary and Dashboard Contract

> Source: `favorite-book-toggle.md §12, §19`

## 12. Summary cards behavior

Якщо на сторінці є summary card **Улюблених**, вона має оновлюватися після favorite toggle.

Example:

```text id="u3qqp6"
Було: Улюблених 12
Додали книгу в улюблені
Стало: Улюблених 13
```

або:

```text id="03p278"
Було: Улюблених 12
Прибрали книгу з улюблених
Стало: Улюблених 11
```

---

## 19. What should update after toggle

Після успішної зміни favorite status мають оновитися:

* Book Details hero section;
* My Library card;
* Favorites page;
* Dashboard, якщо там є favorite books block;
* summary cards;
* active filters;
* result count.

---
