# Sorting rules

> Джерело: розділ `9.2–9.7` зі старого `my-library-page.md`.

### 9.2. Default sorting

Default sorting:

```text id="ag4zoq"
Нещодавно додані
```

Logic:

```text id="n6clu2"
createdAt DESC
```

Новіші книги мають показуватися першими.

---

### 9.3. Recommended sorting options

| Option             | Logic                  |
| ------------------ | ---------------------- |
| Нещодавно додані   | `createdAt DESC`       |
| Давно додані       | `createdAt ASC`        |
| Нещодавно оновлені | `updatedAt DESC`       |
| Назва А–Я          | `title ASC`            |
| Назва Я–А          | `title DESC`           |
| Автор А–Я          | `authorName ASC`       |
| Автор Я–А          | `authorName DESC`      |
| Найвищий рейтинг   | `rating DESC`          |
| Найнижчий рейтинг  | `rating ASC`           |
| Новіші видання     | `publicationYear DESC` |
| Старіші видання    | `publicationYear ASC`  |
| Більше сторінок    | `pagesCount DESC`      |
| Менше сторінок     | `pagesCount ASC`       |

---

### 9.4. Sorting behavior

* sorting застосовується до результатів після search і filters;
* sorting не очищає search;
* sorting не очищає quick filter;
* sorting не очищає advanced filters;
* sorting не змінює view mode;
* після зміни sorting pagination має скидатися на першу сторінку;
* вибране sorting значення має зберігатися в URL query params;
* після reload сторінки sorting має відновлюватися з URL.

---

### 9.5. Empty values behavior

Якщо в книги немає значення для поля сортування, вона має показуватися після книг, у яких це значення є.

Examples:

| Sorting            | Books without value                                                |
| ------------------ | ------------------------------------------------------------------ |
| Рейтинг            | книги без rating показуються після оцінених                        |
| Рік видання        | книги без publication year показуються після книг із роком         |
| Кількість сторінок | книги без pages count показуються після книг із кількістю сторінок |

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
