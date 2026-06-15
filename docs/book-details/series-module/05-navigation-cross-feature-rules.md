# Series Module — Navigation and Cross-Feature Rules

> Source: series-module-overview.md lines 648-794

---

## 10. Navigation map

Main navigation:

```text
Sidebar
  → Серії
    → All Series Page
      → Series Details Page
        → Book Details Page
```

Book-to-series navigation:

```text
Book Details Page
  → Series preview
    → Series Details Page
```

Create flow navigation:

```text
All Series Page
  → Create Series

Series Details Page
  → Add Book to Series
  → Edit Series
  → Delete Series

Create / Edit Book Form
  → Series Section
    → Select existing series
    → Create new series inline
```

Unlink navigation:

```text
Series Details Page
  → Book row menu
    → Remove / Unlink Book from Series

Edit Book Form
  → Series Section
    → Remove series relation
```

---

## 11. Cross-feature update rules

Series Module має оновлювати пов’язані сторінки після змін.

---

### 11.1. After creating series

Update:

* All Series Page;
* series count;
* empty state;
* right sidebar blocks.

If created from Book Form:

* selected series in Book Form;
* after book submit — Series Details Page and All Series Page.

---

### 11.2. After editing series

Update:

* Series Details Page hero;
* All Series Page card;
* Book Details Series preview;
* breadcrumbs;
* cover fallback;
* status badge.

---

### 11.3. After adding book to series

Update:

* Series Details Page books list;
* Reading Order Block;
* progress;
* next book;
* statistics;
* All Series Page card;
* Book Details Page for added book.

---

### 11.4. After changing partNumber

Update:

* Series Details Page book order;
* Reading Order Block;
* next book;
* Book Details Series preview;
* All Series Page next book preview.

---

### 11.5. After unlinking book from series

Update:

* Series Details Page books list;
* progress;
* next book;
* statistics;
* cover fallback;
* All Series Page card;
* Book Details Page for unlinked book.

The book should become standalone unless it is linked to another series.

---

### 11.6. After deleting series

Update:

* All Series Page;
* related books;
* Book Details pages for affected books;
* Reading Queue cards, if they show series meta;
* Custom Lists cards, if they show series meta.

Important:

```text
Books remain in library.
Only series relation is removed.
```

---
