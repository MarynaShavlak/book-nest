# Pagination / Load More

> Source: `favorites-page.md §15`

## 15. Pagination / Load more

Для сторінки **“Улюблені книги”** використовується підхід **Load more**.

---

### 15.1. Initial load

Initial load:

```text
24 books
```

Користувач бачить першу порцію улюблених книг.

---

### 15.2. Load more button

Якщо є ще книги для показу, під списком показується кнопка:

```text
Показати ще
```

Після кліку підвантажується наступна порція:

```text
+24 books
```

---

### 15.3. Results counter

Потрібно показувати:

```text
Показано 24 з 86
```

Якщо активні search або filters:

```text
Показано 24 з 38 знайдених
```

---

### 15.4. Reset behavior

Loaded items скидаються на першу порцію після зміни:

- search;
- quick filter;
- advanced filters;
- sorting.

Loaded items не скидаються після зміни:

- view mode;
- favorite toggle, якщо книга залишається в результатах;
- відкриття/закриття menu.

---

### 15.5. URL behavior

Search, filters, sorting і view mode можуть зберігатися в URL.

Loaded count / offset не потрібно зберігати в URL для MVP.

---
