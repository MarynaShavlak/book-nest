# Series Book Order — Scope, Future, Acceptance Criteria

> Source: `series-book-order.md`

## 16. What is not included

У MVP для **Series Book Order / Part Number Logic** не входить:

* drag-and-drop порядок книг;
* окреме поле `displayOrder`;
* ручне сортування без partNumber;
* автоматична перенумерація книг;
* автоматичне створення missing books із gaps;
* автоматичне підтягування порядку книг з інтернету;
* складний reading order для спін-офів;
* альтернативний порядок читання;
* chronological order vs publication order;
* тип книги: основна, новела, спін-оф, бонус;
* дробові номери типу 1.5;
* однакові номери для основної книги і новели;
* reorder через keyboard shortcuts;
* batch reorder;
* merge duplicates.

Important:

```text
У MVP порядок книг у серії визначається тільки через partNumber.
```

---


## 17. Future improvements

Пізніше можна додати:

* drag-and-drop reorder;
* окремий `displayOrder`;
* тип книги: main book / novella / spin-off / bonus;
* альтернативні порядки читання;
* publication order;
* chronological order;
* author recommended order;
* support для `partNumber = 1.5`;
* support для labels типу `2.5 novella`;
* автоматичний hint про пропущені книги;
* імпорт порядку книг із зовнішніх джерел;
* масове редагування partNumber;
* reorder keyboard accessibility.

---


## 18. Acceptance Criteria

### Basic order

* Книги серії показуються у правильному порядку.
* Порядок книг базується на `partNumber`.
* Книги сортуються за `partNumber ASC`.
* Якщо серія порожня, користувач бачить empty state.
* Якщо книга не має `partNumber`, вона показується в кінці списку.

### Part number

* Книга, яка додається до серії, має отримати `partNumber`.
* `partNumber` є required для нових series relations.
* `partNumber` має бути цілим числом.
* `partNumber` має бути більшим за 0.
* `partNumber` має бути унікальним у межах однієї серії.
* Якщо `partNumber` невалідний, користувач бачить validation error.

### Default part number

* Якщо серія порожня, default `partNumber` дорівнює 1.
* Якщо в серії вже є книги, default `partNumber` дорівнює найбільшому існуючому номеру + 1.
* Якщо в серії є gaps, default `partNumber` все одно рахується як max + 1.
* Якщо додається missing book, `partNumber` може бути prefilled з missing book row.

### Duplicate part number

* Користувач не може додати нову книгу з duplicate `partNumber`.
* Користувач не може зберегти зміну `partNumber`, якщо такий номер уже зайнятий.
* Якщо duplicate вже існує в старих даних, користувач бачить warning.
* Сторінка не ламається, якщо duplicate partNumber уже існує.

### Missing part number

* Нові книги не можуть додаватися до серії без `partNumber`.
* Старі книги без `partNumber` показуються в кінці списку.
* Для книги без `partNumber` показується warning.
* Користувач може перейти до редагування книги, щоб додати номер частини.

### Gaps

* Gap між номерами частин не блокує сторінку.
* BookNest не змінює номери інших книг автоматично.
* Після відв’язування книги partNumber інших книг не змінюється.
* Gap не створює missing book автоматично в MVP.

### Total books count

* Якщо `totalBooksCount` вказаний, `partNumber` не може бути більшим за це значення.
* Якщо `partNumber` більший за `totalBooksCount`, користувач бачить validation error або warning.
* Якщо `totalBooksCount` не вказаний, верхньої межі для `partNumber` немає.
* Відв’язування книги не змінює `totalBooksCount`.

### Next book

* Next book визначається на основі `partNumber`.
* Якщо є книга зі статусом `reading`, вона вважається поточною / наступною.
* Якщо є книга зі статусом `rereading`, вона може вважатися поточною / наступною.
* Якщо немає активної книги, next book — це перша непрочитана книга з найменшим `partNumber`.
* Якщо всі книги прочитані, показується state “Усі книги прочитані”.

### Reading Order Block

* Reading Order Block показує порядок книг у серії.
* Reading Order Block використовує `partNumber`.
* Якщо серія має одну книгу, Reading Order Block можна не показувати.
* Якщо книги мають duplicate або missing partNumber, Reading Order Block показує warning або приховується до виправлення.

### Scope

* Series Book Order відповідає за порядок книг у серії.
* Series Book Order не створює серію.
* Series Book Order не додає книгу до серії.
* Series Book Order не відв’язує книгу від серії.
* Series Book Order не підтримує drag-and-drop у MVP.
* Series Book Order не підтримує складний порядок спін-офів у MVP.
* Series Book Order не підтягує порядок книг із зовнішніх джерел.
