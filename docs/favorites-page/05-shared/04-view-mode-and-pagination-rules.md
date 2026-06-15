# View Mode and Pagination Rules

> Source: `favorites-page.md §11, §15`

## 11. View modes

View mode змінює тільки те, як візуально відображаються улюблені книги.

---

### 11.1. Available view modes

| View mode | Description |
|---|---|
| `grid` | Книги показуються як картки |
| `list` | Книги показуються як компактний список |

---

### 11.2. Default view mode

Default view mode:

```text
grid
```

---

### 11.3. View mode behavior

- користувач може перемикатися між `grid` і `list`;
- view mode не очищає search;
- view mode не очищає filters;
- view mode не змінює sorting;
- view mode не скидає loaded items;
- view mode може зберігатися як user preference;
- view mode може зберігатися в URL.

Example:

```text
/favorites?view=list
```

---

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
