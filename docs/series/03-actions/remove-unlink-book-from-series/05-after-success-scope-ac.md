# Remove / Unlink — After Success, Scope, Acceptance Criteria

> Source: `remove-unlink-book-from-series.md`

## 14. After successful unlink

Після успішного відв’язування потрібно оновити:

* Books in Series List;
* Reading Order Block;
* Your Progress in Series;
* Next Book block;
* Series Statistics;
* Series Hero books count;
* All Series Page card;
* cover fallback;
* empty state, якщо серія стала порожньою.

---

### 14.1. Books list update

Книга має зникнути зі списку книг серії.

Інші книги залишаються у своєму порядку:

```text
partNumber ASC
```

---

### 14.2. Progress update

Progress recalculation запускається автоматично.

---

### 14.3. Next book update

Next book recalculation запускається автоматично.

---

### 14.4. All Series Page card update

На All Series Page потрібно оновити:

* books count;
* read books count;
* progress bar;
* next book;
* cover fallback;
* empty series card state, якщо книг більше немає.

---


## 15. What is not included

У MVP для **Remove / Unlink Book from Series** не входить:

* видалення книги з бібліотеки;
* видалення серії;
* перенесення книги в іншу серію;
* автоматична зміна partNumber інших книг;
* drag-and-drop reorder;
* ручне сортування книг;
* merge duplicate series;
* масове відв’язування книг;
* відновлення видалених книг із бібліотеки;
* автоматичне підтягування missing books;
* зміна readingStatus книги;
* зміна ownershipStatus книги;
* зміна totalBooksCount серії;
* зміна полів серії;
* повна логіка Delete Book;
* повна логіка Delete Series.

Important:

```text
Remove / Unlink Book from Series відповідає тільки за видалення зв’язку між книгою і серією.
Книга залишається в бібліотеці.
```

---


## 16. Acceptance Criteria

### Entry points

* Користувач може відв’язати книгу від серії зі Series Details Page.
* Користувач може відв’язати книгу через book row menu.
* Користувач може прибрати missing book зі списку серії.
* Користувач може очистити series relation через Edit Book Form, якщо цей entry point реалізований.
* Дія доступна тільки для книг і серій поточного користувача.

### Confirmation

* Перед відв’язуванням користувач бачить confirmation modal.
* Confirmation modal пояснює, що книга залишиться в бібліотеці.
* Користувач може скасувати дію.
* Якщо користувач скасовує дію, книга залишається в серії.
* Якщо користувач підтверджує дію, книга прибирається з серії.

### Unlink existing book

* Після unlink книга зникає зі списку книг серії.
* Книга залишається в бібліотеці.
* Reading status книги не змінюється.
* Ownership status книги не змінюється.
* Rating книги не змінюється.
* Notes, quotes і characters книги не видаляються.
* Якщо книга була в Reading Queue, вона залишається в Reading Queue.
* Якщо книга була в Custom List, вона залишається в Custom List.

### Remove missing book

* Користувач може прибрати missing book зі списку серії.
* Після видалення missing book row зникає.
* Видалення missing book не впливає на бібліотеку, якщо книга ще не була створена.

### Part number

* Після unlink у книги прибирається series relation.
* Після unlink partNumber книги в межах серії очищується.
* Part numbers інших книг не змінюються автоматично.
* Якщо після unlink виникає gap у part numbers, це не блокує сторінку.

### Progress and statistics

* Після unlink books count серії оновлюється.
* Після unlink read books count серії оновлюється.
* Після unlink progress bar серії перераховується.
* Якщо `totalBooksCount` вказаний, він не змінюється автоматично.
* Якщо `totalBooksCount` не вказаний, progress рахується по оновленій кількості доданих книг.
* Після unlink Series Statistics оновлюється.

### Next book

* Після unlink блок **Наступна книга** перераховується.
* Якщо прибрана книга була next book, система визначає нову next book.
* Якщо всі залишені книги прочитані, показується стан завершення читання серії.
* Якщо серія стала порожньою, показується empty state.

### Cover fallback

* Якщо серія має custom cover, unlink книги не змінює cover.
* Якщо серія не має custom cover і прибрана книга була fallback cover source, система бере cover наступної книги.
* Якщо fallback cover недоступний, показується placeholder.

### UI updates

* Series Details Page оновлюється після unlink.
* All Series Page card оновлюється після unlink.
* Reading Order Block оновлюється після unlink.
* Right sidebar statistics оновлюються після unlink.
* Empty state показується, якщо у серії більше немає книг.

### States

* Користувач бачить loading state під час unlink.
* Користувач бачить success state після успішного unlink.
* Користувач бачить error state, якщо unlink не вдався.
* Користувач не може повторно натиснути submit під час loading.

### Scope

* Remove / Unlink Book from Series тільки прибирає книгу з серії.
* Remove / Unlink Book from Series не видаляє книгу з бібліотеки.
* Remove / Unlink Book from Series не видаляє серію.
* Remove / Unlink Book from Series не переносить книгу в іншу серію.
* Remove / Unlink Book from Series не змінює статуси книги.
* Remove / Unlink Book from Series не змінює totalBooksCount.
* Remove / Unlink Book from Series не змінює partNumber інших книг автоматично.
