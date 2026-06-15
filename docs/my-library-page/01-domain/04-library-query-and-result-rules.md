# Library query and result rules

> Джерело: розділ `5, 6, 7, 9, 15` зі старого `my-library-page.md`.

### 5.5. Search + filters logic

Search і filters мають працювати разом.

Логіка:

```text
search query + active filters = filtered search results
```

Приклад:

```text
search = "крило"
genre = fantasy
readingStatus = finished
```

Результат:

```text
Показати тільки книги, які:
- містять "крило" в searchable fields;
- мають жанр fantasy;
- мають статус readingStatus = finished.
```

---

### 7.11. Filter behavior

* фільтри працюють разом із search;
* фільтри з різних груп комбінуються через `AND`;
* кілька значень всередині одного фільтра комбінуються через `OR`;
* після зміни фільтрів список книг оновлюється;
* після зміни фільтрів pagination скидається на першу сторінку;
* активні фільтри показуються в Active filters bar.

Example:

```text
search = "крило"
readingStatus = finished
genre = fantasy
format = paper
```

Result:

```text
Показати книги, які:
- містять "крило" у searchable fields;
- мають статус "Прочитано";
- мають жанр Fantasy;
- мають формат "Паперова".
```

---

### 9.7. Interaction with filters

Sorting застосовується після фільтрації.

Example:

```text id="2jfn1p"
search = "крило"
genre = fantasy
readingStatus = finished
sort = rating_desc
```

Result:

```text id="2jt1k2"
1. Спочатку знайти книги, які відповідають search і filters.
2. Потім відсортувати знайдені книги за рейтингом від найвищого до найнижчого.
```

---

### 15.7. Search, filters and sorting behavior

При зміні будь-якого параметра список має скидатися до першої порції.

Скидання відбувається після зміни:

* search query;
* quick filter;
* advanced filters;
* sorting.

Example:

```text
Було:
Показано 48 з 128 книг

Користувач вибрав жанр Fantasy

Стало:
Показано 24 з 36 книг
```

View mode не скидає завантажені книги.

---

### 15.9. API behavior

Backend має підтримувати limit / offset або cursor pagination.

Recommended request:

```text
GET /books?limit=24&offset=0
GET /books?limit=24&offset=24
GET /books?limit=24&offset=48
```

Recommended response:

```ts
{
  items: Book[];
  total: number;
  limit: number;
  offset: number;
  hasMore: boolean;
}
```

---
