# Series Book Order — Display Logic

> Source: `series-book-order.md`

## 7. Display logic

### 7.1. Series Details Page

На Series Details Page книги показуються у правильному порядку.

Sorting:

```text
partNumber ASC
```

Book row має показувати:

* номер частини;
* обкладинку;
* назву книги;
* readingStatus;
* ownershipStatus;
* queue badge;
* progress, якщо книга читається;
* actions.

Example:

```text
Книга 1 — Прочитано
Книга 2 — Читаю
Книга 3 — Хочу прочитати
Книга 4 — Ще не додано
```

---

### 7.2. Reading Order Block

Reading Order Block показує компактний порядок книг.

Example:

```text
1 Тінь і кістка → 2 Облога і буря → 3 Руїна і відновлення
```

Якщо назви дуже довгі, можна показувати коротку версію:

```text
1 → 2 → 3 → 4
```

або:

```text
Книга 1 → Книга 2 → Книга 3
```

---

### 7.3. All Series Page

На All Series Page порядок книг напряму не показується, але він впливає на:

* next book;
* progress;
* cover fallback;
* series card preview.

---

### 7.4. Book Details Page

На Book Details Page для книги, яка належить до серії, потрібно показати її номер у серії.

Example:

```text
Книга 2 у серії “Тінь і кістка”
```

або:

```text
Частина 2
```

---
