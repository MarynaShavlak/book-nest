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
