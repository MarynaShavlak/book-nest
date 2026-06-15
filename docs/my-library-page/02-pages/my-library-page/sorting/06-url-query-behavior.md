### 9.6. URL query behavior

Sorting має зберігатися в URL.

Examples:

```text id="t8hlbg"
/library?sort=createdAt_desc
/library?sort=title_asc
/library?sort=rating_desc
/library?sort=publicationYear_desc
/library?sort=pagesCount_asc
```

Якщо sort query param відсутній, використовується default sorting:

```text id="962hmg"
createdAt_desc
```

---
