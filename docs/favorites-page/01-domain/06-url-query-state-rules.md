# URL Query State Rules

> Source: `favorites-page.md §2.5, §6.5, §15.5`

### 2.5. URL behavior

Сторінка має підтримувати query params для:

- search;
- quick filters;
- advanced filters;
- sorting;
- view mode.

Приклади:

```text
/favorites?search=wing
/favorites?readingStatus=finished
/favorites?format=ebook
/favorites?sort=favoriteAddedAt_desc
/favorites?view=grid
```

Це потрібно, щоб:

- користувач міг оновити сторінку і не втратити фільтри;
- browser history працював очікувано;
- посилання на відфільтровану сторінку було стабільним.

---

### 6.5. URL query behavior

Search query має зберігатися в URL:

```text
/favorites?search=крило
```

Після reload сторінки search input має відновити значення з URL.

---

### 15.5. URL behavior

Search, filters, sorting і view mode можуть зберігатися в URL.

Loaded count / offset не потрібно зберігати в URL для MVP.

---
