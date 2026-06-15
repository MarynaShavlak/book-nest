# Add Book to Series — After Success and Acceptance Criteria

> Source: `add-book-to-series.md`

## 14. After successful add

Після успішного додавання книги до серії потрібно оновити:

* Books in Series List;
* Reading Order Block;
* Your Progress in Series;
* Next Book block;
* Series Statistics;
* All Series Page card;
* count books in series;
* progress bar;
* next book logic.

---

### 14.1. Books list update

Книга має з’явитися у списку згідно з `partNumber`.

Sorting:

```text
partNumber ASC
```

---

### 14.2. Progress update

Прогрес перераховується автоматично.

Logic:

```text
finished books count / total books count * 100
```

Якщо `totalBooksCount` не вказаний:

```text
finished books count / added books count * 100
```

---

### 14.3. Next book update

Після додавання книги система має повторно визначити наступну книгу.

Next book — це:

* книга зі статусом `reading` або `rereading`, якщо така є;
* інакше перша книга з найменшим `partNumber`, яка не має `readingStatus = finished`.

---

### 14.4. Empty state removal

Якщо серія була порожня, після додавання першої книги empty state зникає.

---


## 15. What is not included

У MVP для **Add Book to Series** не входить:

* видалення книги з серії;
* відв’язування книги від серії;
* перенесення книги з однієї серії в іншу;
* drag-and-drop порядок книг;
* ручне сортування книг;
* складний reading order для спін-офів;
* однакові partNumber для основної книги і новели;
* тип книги: основна, новела, спін-оф, бонус;
* автоматичне підтягування всіх книг серії з інтернету;
* автоматичне визначення missing books;
* масове додавання книг до серії;
* імпорт серії з файлу;
* створення нової серії;
* редагування полів серії;
* видалення серії.

Important:

```text
Add Book to Series відповідає тільки за додавання книги до вже існуючої серії.
Create / Edit Series, Delete Series і Remove / Unlink Book from Series описуються окремо.
```

---


## 16. Acceptance Criteria

### Entry points

* Користувач може запустити Add Book to Series flow зі Series Details Page.
* Користувач може запустити Add Book to Series flow з empty state порожньої серії.
* Користувач може додати missing book через кнопку **Додати книгу**.
* Поточна серія автоматично вибрана в flow.

### Add existing book

* Користувач може вибрати існуючу книгу зі своєї бібліотеки.
* Користувач може шукати існуючу книгу за назвою.
* Користувач може шукати існуючу книгу за автором.
* Користувач не може додати одну й ту саму книгу в серію повторно.
* Користувач не може напряму додати книгу, яка вже належить до іншої серії.
* Після додавання існуюча книга з’являється у списку книг серії.
* Reading status існуючої книги не змінюється.
* Ownership status існуючої книги не змінюється.

### Create new book

* Користувач може створити нову книгу в межах поточної серії.
* Поточна серія вже вибрана автоматично.
* Автор книги може бути prefilled з автора серії.
* Після створення книга додається до поточної серії.
* Після створення книга з’являється у списку книг серії.
* Нова книга отримує default readingStatus.
* Нова книга отримує default ownershipStatus.

### Missing book

* Якщо книга позначена як **Ще не додано**, користувач може натиснути **Додати книгу**.
* Create Book flow відкривається з prefilled series.
* Part number може бути prefilled з missing book row.
* Після збереження missing book стає звичайною книгою в бібліотеці.
* Missing book state зникає після успішного додавання.

### Part number

* Користувач має вказати номер частини.
* Part number є required.
* Part number має бути цілим числом.
* Part number має бути більшим за 0.
* Якщо серія порожня, default part number дорівнює 1.
* Якщо в серії вже є книги, default part number дорівнює найбільшому partNumber + 1.
* Користувач не може додати книгу з duplicate partNumber.
* Якщо part number не вказаний, submit disabled або показується validation error.

### Total books count

* Якщо `totalBooksCount` не вказаний, книга може бути додана без верхнього обмеження.
* Якщо `totalBooksCount` вказаний, part number не має суперечити цьому значенню.
* Якщо part number більший за `totalBooksCount`, користувач бачить warning.
* Користувач має змінити part number або оновити totalBooksCount.

### Updates after add

* Після додавання книги оновлюється Series Details Page.
* Після додавання книги оновлюється список книг серії.
* Після додавання книги оновлюється progress bar серії.
* Після додавання книги оновлюється блок **Наступна книга**.
* Після додавання книги оновлюється блок **Статистика серії**.
* Після додавання книги оновлюється card серії на All Series Page.
* Якщо серія була порожня, empty state зникає.

### States

* Користувач бачить loading state під час завантаження flow.
* Користувач бачить empty state, якщо немає eligible books.
* Користувач бачить validation errors для невалідних полів.
* Користувач бачить warning, якщо книга вже належить до іншої серії.
* Користувач бачить error state, якщо книгу не вдалося додати.
* Користувач бачить success state після успішного додавання.

### Scope

* Add Book to Series додає книгу до вже існуючої серії.
* Add Book to Series не створює нову серію.
* Add Book to Series не редагує поля серії.
* Add Book to Series не видаляє книгу з серії.
* Add Book to Series не змінює порядок книг через drag-and-drop.
* Add Book to Series не підтримує складний reading order у MVP.
* Add Book to Series не підтягує книги серії автоматично з інтернету.
