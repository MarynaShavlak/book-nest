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
