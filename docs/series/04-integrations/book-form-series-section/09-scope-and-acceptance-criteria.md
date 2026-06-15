# Book Form Series Section — Scope and Acceptance Criteria

> Source: `book-form-series-section.md`

## 15. What is not included

У MVP для **Series Section in Create / Edit Book Form** не входить:

* drag-and-drop reorder книг у серії;
* складний reading order для спін-офів;
* альтернативний порядок читання;
* тип книги: основна / новела / спін-оф / бонус;
* кілька серій для однієї книги;
* автоматичне підтягування серії з інтернету;
* автоматичне визначення partNumber;
* автоматичне створення missing books;
* масове додавання книг до серії;
* merge duplicate series;
* видалення серії;
* видалення книги з бібліотеки;
* редагування всіх полів серії всередині Book Form;
* повна сторінка керування книгами серії.

Important:

```text
Book Form Series Section відповідає тільки за вибір / створення серії для конкретної книги і partNumber.
```

---


## 16. Acceptance Criteria

### Section visibility

* Create Book Form має блок **Серія**.
* Edit Book Form має блок **Серія**.
* За замовчуванням нова книга є standalone.
* Якщо toggle **Це книга із серії** вимкнений, series fields приховані.
* Якщо toggle увімкнений, користувач бачить series select і partNumber input.

### Select existing series

* Користувач може вибрати існуючу серію.
* Series select підтримує пошук.
* Series select показує назву серії.
* Series select може показувати автора, кількість книг і status.
* Після вибору серії користувач має вказати partNumber.
* Після submit книга прив’язується до вибраної серії.

### Create new series inline

* Користувач може створити нову серію з Book Form.
* Inline new series має required title.
* Inline new series має required status.
* Default status — `unknown`.
* Inline series не створюється до submit всієї Book Form.
* Якщо користувач скасував створення книги, inline series не створюється.
* Після submit створюється серія, створюється книга, і книга прив’язується до серії.

### Preselected series

* Якщо Book Form відкритий із Series Details Page, series preselected.
* Якщо Book Form відкритий із missing book row, series і partNumber prefilled.
* Користувач бачить, до якої серії буде додана книга.
* Після submit книга з’являється у відповідній серії.

### Part number

* Якщо книга належить до серії, partNumber required.
* partNumber має бути цілим числом.
* partNumber має бути більшим за 0.
* partNumber має бути унікальним у межах серії.
* Якщо partNumber дублюється, submit блокується.
* Якщо partNumber більший за totalBooksCount, показується validation error.
* У Edit mode поточний partNumber книги не вважається duplicate сам із собою.

### Edit Book mode

* Якщо книга вже має серію, Book Form показує поточну серію.
* Якщо книга вже має partNumber, Book Form показує поточний partNumber.
* Користувач може змінити partNumber.
* Користувач може прибрати книгу з серії після confirmation.
* Користувач може змінити серію після confirmation, якщо цей сценарій входить у MVP.
* Після зміни серії стара і нова серії оновлюються.

### Remove series relation

* Якщо користувач вимикає toggle у Edit Book Form, показується confirmation.
* Confirmation пояснює, що книга залишиться в бібліотеці.
* Після підтвердження у книги очищується series relation.
* Reading status книги не змінюється.
* Ownership status книги не змінюється.
* Notes, quotes, rating і characters книги не видаляються.

### Updates

* Після додавання книги до серії оновлюється Series Details Page.
* Після додавання книги до серії оновлюється All Series Page.
* Після зміни partNumber оновлюється порядок книг у серії.
* Після відв’язування книги оновлюється progress старої серії.
* Після переміщення книги між серіями оновлюються обидві серії.

### Scope

* Series Section in Book Form відповідає за series relation конкретної книги.
* Series Section in Book Form відповідає за partNumber книги.
* Series Section in Book Form не відповідає за повну логіку Series Details Page.
* Series Section in Book Form не відповідає за Delete Series.
* Series Section in Book Form не підтримує drag-and-drop reorder у MVP.
* Series Section in Book Form не підтримує кілька серій для однієї книги в MVP.
