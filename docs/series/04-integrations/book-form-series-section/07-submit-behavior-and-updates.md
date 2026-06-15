# Book Form Series Section — Submit Behavior and Updates

> Source: `book-form-series-section.md`

## 12. Submit behavior

### 12.1. Submit standalone book

Якщо книга standalone:

1. Створити або оновити книгу.
2. Не створювати series relation.
3. Не створювати нову серію.
4. Не оновлювати Series Details Page.

---

### 12.2. Submit book with existing series

Create mode:

1. Створити книгу.
2. Додати `seriesId`.
3. Додати `partNumber`.
4. Оновити series books count.
5. Оновити progress і next book logic.

Edit mode:

1. Оновити книгу.
2. Оновити series relation, якщо вона змінилася.
3. Оновити `partNumber`, якщо він змінився.
4. Оновити related series pages.

---

### 12.3. Submit book with new inline series

1. Validate book fields.
2. Validate inline series fields.
3. Create new series.
4. Create book.
5. Link book to new series.
6. Set `partNumber`.
7. Update All Series Page.
8. Update Series Details Page.

Important:

```text
Якщо submit форми книги не відбувся, inline series не створюється.
```

---

### 12.4. Submit after removing series in Edit Book

1. Користувач підтверджує відв’язування.
2. Book Form submit зберігає книгу без series relation.
3. У книги очищуються `seriesId` і `partNumber`.
4. Книга залишається в бібліотеці.
5. Стара серія оновлює books count, progress і next book.

---

### 12.5. Submit after changing series in Edit Book

1. Користувач вибирає нову серію.
2. Користувач підтверджує зміну.
3. Система перевіряє `partNumber` для нової серії.
4. Книга відв’язується від старої серії.
5. Книга прив’язується до нової серії.
6. Обидві серії оновлюються.

---


## 14. UI updates after submit

### 14.1. If book was added to series

Оновити:

* Series Details Page;
* All Series Page card;
* Books in Series List;
* Reading Order Block;
* Next Book block;
* Series Statistics;
* Book Details Page series block.

---

### 14.2. If book was removed from series

Оновити:

* old Series Details Page;
* old All Series Page card;
* Book Details Page;
* My Library Page book card.

Книга більше не показує series badge.

---

### 14.3. If book moved between series

Оновити:

* old Series Details Page;
* new Series Details Page;
* old All Series Page card;
* new All Series Page card;
* Book Details Page series block;
* My Library Page book card.

---
