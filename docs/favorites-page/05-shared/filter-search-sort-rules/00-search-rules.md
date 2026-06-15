# Search Rules

> Source: `favorites-page.md §6`

## 6. Search

Search на сторінці **“Улюблені книги”** потрібен, щоб користувач міг швидко знайти книгу серед улюблених.

---

### 6.1. Search input

Placeholder:

```text
Пошук в улюблених...
```

Search має працювати тільки по активних книгах поточного користувача з `isFavorite = true`.

---

### 6.2. Search fields

Пошук має працювати за такими полями:

| Field | Priority |
|---|---:|
| Назва книги | High |
| Оригінальна назва | High |
| Автор | High |
| Назва серії | High |
| Видавництво | Medium |
| Жанри | Medium |
| Теги | Medium |
| ISBN | Medium |

---

### 6.3. What search should not include

Search не має шукати по:

- нотатках;
- цитатах;
- персонажах;
- службових полях;
- опису серії;
- присвяті.

Ці дані належать до окремих фіч.

---

### 6.4. Search behavior

- пошук не чутливий до регістру;
- зайві пробіли на початку і в кінці ігноруються;
- кілька пробілів всередині запиту сприймаються як один;
- пошук працює по частковому збігу;
- search працює разом із quick filters та advanced filters;
- після зміни search query потрібно скидати loaded items на першу порцію.

Recommended debounce:

```text
300ms
```

Minimum query length:

```text
2 символи
```

---

### 6.5. URL query behavior

Search query має зберігатися в URL:

```text
/favorites?search=крило
```

Після reload сторінки search input має відновити значення з URL.

---
