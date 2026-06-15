# Navigation Entry Points

> Source: `favorites-page.md §2.1-2.2 + favorite-book-toggle.md §4`

### 2.1. Sidebar navigation

У sidebar має бути пункт меню:

```text
Улюблені
```

Рекомендована позиція в sidebar:

```text
Головна
Моя бібліотека
Серії
Черга читання
Списки
Книги до покупки
Книги в дорозі
Позичені книги
Улюблені
Нотатки
Цитати
Статистика
Налаштування
```

Пункт **“Улюблені”** веде на сторінку улюблених книг.

---

### 2.2. Route

Рекомендований route:

```text
/favorites
```

Альтернативний варіант:

```text
/favorite-books
```

Рекомендований варіант для BookNest:

```text
/favorites
```

Причина: route короткий, зрозумілий і добре підходить для сторінки улюблених книг.

---

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
