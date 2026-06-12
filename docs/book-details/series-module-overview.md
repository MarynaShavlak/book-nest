# Feature: Series Module Overview

## 1. Purpose

Feature **Series Module Overview** описує загальну логіку модуля серій у BookNest.

Цей документ потрібен як головна навігаційна документація для всього функціоналу, пов’язаного з книжковими серіями.

Він пояснює:

* що таке серія в BookNest;
* які сторінки та flows входять у Series Module;
* як серія пов’язана з книгами;
* як працює прогрес серії;
* як працює порядок книг у серії;
* які документи відповідають за конкретні частини модуля;
* що входить у MVP;
* що не входить у MVP;
* які залежності є між фічами.

Important:

```text
Series Module Overview не замінює детальні feature docs.
Цей файл пояснює загальну структуру модуля і зв’язує всі окремі документи між собою.
```

---

## 2. What is Series Module

**Series Module** — це частина BookNest, яка дозволяє користувачу працювати з книжковими серіями.

Серія — це окрема сутність, яка групує кілька книг в один книжковий цикл.

Example:

```text
Серія: Тінь і кістка

Книга 1: Тінь і кістка
Книга 2: Облога і буря
Книга 3: Руїна і відновлення
```

Series Module дозволяє користувачу:

* переглядати всі серії;
* відкривати деталі конкретної серії;
* створювати серію;
* редагувати серію;
* видаляти серію;
* додавати книгу до серії;
* прибирати книгу з серії;
* задавати номер частини книги;
* бачити прогрес по серії;
* бачити наступну книгу;
* переходити між книгою та серією.

---

## 3. Current documentation structure

У папці `series` зараз є такі feature docs:

```text
series/
  all-series-page.md
  series-details-page.md
  create-edit-series.md
  add-book-to-series.md
  series-book-order.md
  book-form-series-section.md
  remove-unlink-book-from-series.md
  delete-series.md
```

---

### 3.1. Documentation responsibility map

| File                                | Responsibility                                                      |
| ----------------------------------- | ------------------------------------------------------------------- |
| `all-series-page.md`                | сторінка всіх серій, список, фільтри, summary cards, empty states   |
| `series-details-page.md`            | сторінка конкретної серії, список книг, прогрес, next book, sidebar |
| `create-edit-series.md`             | створення та редагування самої серії                                |
| `add-book-to-series.md`             | додавання існуючої або нової книги до серії                         |
| `series-book-order.md`              | правила `partNumber`, порядок книг, duplicate numbers, gaps         |
| `book-form-series-section.md`       | блок “Серія” у Create / Edit Book Form                              |
| `remove-unlink-book-from-series.md` | відв’язування книги від серії без видалення книги                   |
| `delete-series.md`                  | видалення серії без видалення книг                                  |

---

### 3.2. External related documentation

Series Module також пов’язаний із документацією поза папкою `series`.

Related docs:

```text
book-details-page.md
create-edit-book.md
reading-queue.md
my-library-page.md
dashboard.md
```

Особливо важливий зв’язок:

```text
Book Details Page → Series preview
```

У Book Details документації має бути описано короткий блок серії в right sidebar:

* назва серії;
* номер частини;
* статус серії;
* прогрес по серії;
* action “Переглянути серію”.

---

## 4. Series entity responsibility

Серія в BookNest відповідає за групування книг у книжковий цикл.

Series entity може містити:

| Field             | Description                                       |
| ----------------- | ------------------------------------------------- |
| `id`              | унікальний id серії                               |
| `userId`          | власник серії                                     |
| `title`           | назва серії                                       |
| `author`          | автор серії або основний автор                    |
| `description`     | короткий опис серії                               |
| `status`          | статус серії: completed / ongoing / unknown       |
| `totalBooksCount` | загальна кількість книг у серії, якщо відома      |
| `coverUrl`        | custom cover серії, якщо додана                   |
| `genres`          | жанри серії                                       |
| `tags`            | теги серії                                        |
| `createdAt`       | дата створення                                    |
| `updatedAt`       | дата останнього оновлення                         |
| `deletedAt`       | дата видалення, якщо використовується soft delete |

Important:

```text
Series entity не зберігає readingStatus книг.
Reading status належить конкретним книгам.
```

---

## 5. Book relation to series

Книга може бути standalone або частиною серії.

У MVP одна книга може належати тільки до однієї основної серії.

Possible states:

```text
1. Standalone book
2. Book is part of existing series
3. Book creates new series during Create Book flow
```

Якщо книга належить до серії, вона має мати:

```text
seriesId
partNumber
```

Where:

| Field        | Description                      |
| ------------ | -------------------------------- |
| `seriesId`   | id серії, до якої належить книга |
| `partNumber` | номер книги в межах серії        |

Important:

```text
partNumber — це номер книги в серії, а не просто позиція в UI.
```

Example:

```text
Книга 1 → partNumber = 1
Книга 2 → partNumber = 2
Книга 3 → partNumber = 3
```

---

## 6. Series status vs user progress

У Series Module є два різні поняття:

```text
seriesStatus
user reading progress
```

Їх не можна змішувати.

---

### 6.1. Series status

`seriesStatus` показує стан книжкового циклу як твору.

Options:

| Value       | Label       | Meaning                                |
| ----------- | ----------- | -------------------------------------- |
| `completed` | Завершена   | серія завершена автором / видавництвом |
| `ongoing`   | Ще виходить | нові книги ще можуть виходити          |
| `unknown`   | Невідомо    | користувач не знає статус серії        |

Example:

```text
Серія завершена
Серія ще виходить
Статус серії невідомий
```

---

### 6.2. User reading progress

User reading progress показує, скільки книг із серії користувач прочитав.

Example:

```text
Прочитано 2 з 5 книг
40%
```

Important:

```text
Серія може бути завершена автором, але користувач може ще не прочитати всі книги.
```

Example:

```text
seriesStatus = completed
user progress = 2 з 5 книг
```

---

## 7. Progress calculation

Прогрес серії рахується на основі книг зі статусом:

```text
readingStatus = finished
```

Base formula:

```text
finished books count / total books count * 100
```

---

### 7.1. If totalBooksCount exists

Якщо в серії вказаний `totalBooksCount`, прогрес рахується від нього.

Example:

```text
totalBooksCount = 5
finishedBooksCount = 2

Progress = 2 з 5
Progress percent = 40%
```

---

### 7.2. If totalBooksCount does not exist

Якщо `totalBooksCount` не вказаний, прогрес рахується від кількості доданих книг.

Example:

```text
addedBooksCount = 4
finishedBooksCount = 2

Progress = 2 з 4 доданих
Progress percent = 50%
```

---

### 7.3. Empty series

Якщо серія не має книг:

```text
Прогрес ще недоступний
```

---

### 7.4. All books finished

Якщо всі додані книги прочитані:

```text
Усі книги прочитані
100%
```

Important:

```text
“Усі книги прочитані” означає прогрес користувача.
Це не те саме, що seriesStatus = completed.
```

---

## 8. Book order logic

Порядок книг у серії визначається через:

```text
partNumber
```

Base sorting:

```text
partNumber ASC
```

Example:

```text
1 → 2 → 3 → 4
```

---

### 8.1. Required partNumber

У MVP нова книга не може бути додана до серії без `partNumber`.

This applies to:

* Add Book to Series flow;
* Create Book Form with selected series;
* Edit Book Form when linking book to series.

Error:

```text
Вкажіть номер частини книги в серії
```

---

### 8.2. Duplicate partNumber

У межах однієї серії не можна мати дві книги з однаковим `partNumber`.

Invalid example:

```text
Книга A → partNumber = 1
Книга B → partNumber = 1
```

Error:

```text
У цій серії вже є книга з таким номером частини
```

---

### 8.3. Gaps are allowed

Якщо після відв’язування книги виник gap, це не помилка.

Example:

```text
1 → 3 → 4
```

BookNest не має автоматично перенумеровувати інші книги.

Reason:

```text
partNumber — це реальний номер книги в серії, а не UI-position.
```

---

## 9. Main user flows

### 9.1. View all series

File:

```text
all-series-page.md
```

Flow:

```text
Sidebar → Серії → All Series Page
```

User can:

* переглянути всі серії;
* знайти серію;
* відфільтрувати серії;
* відсортувати серії;
* побачити summary cards;
* перейти до Series Details Page;
* створити нову серію.

---

### 9.2. View series details

File:

```text
series-details-page.md
```

Flow:

```text
All Series Page → Series Card → Series Details Page
```

User can:

* переглянути інформацію про серію;
* побачити список книг серії;
* побачити прогрес по серії;
* побачити наступну книгу;
* перейти до конкретної книги;
* запустити Add Book to Series flow;
* запустити Edit Series flow.

---

### 9.3. Create series

File:

```text
create-edit-series.md
```

Flow:

```text
All Series Page → Створити серію
```

User can:

* створити серію вручну;
* створити серію без книг;
* задати title, status, totalBooksCount, description, cover, genres, tags;
* побачити створену серію на All Series Page.

---

### 9.4. Edit series

File:

```text
create-edit-series.md
```

Flow:

```text
Series Details Page → Редагувати серію
```

User can edit:

* назву серії;
* автора;
* статус серії;
* загальну кількість книг;
* опис;
* обкладинку;
* жанри;
* теги.

Important:

```text
Edit Series не змінює readingStatus книг.
Edit Series не змінює ownershipStatus книг.
Edit Series не змінює порядок книг.
```

---

### 9.5. Add book to series

File:

```text
add-book-to-series.md
```

Flow:

```text
Series Details Page → Додати книгу в цю серію
```

User can:

* додати існуючу книгу до серії;
* створити нову книгу в межах серії;
* додати missing book;
* вказати partNumber;
* оновити список книг серії.

---

### 9.6. Link book to series from Book Form

File:

```text
book-form-series-section.md
```

Flow:

```text
Create / Edit Book Form → Series Section
```

User can:

* позначити, що книга є частиною серії;
* вибрати існуючу серію;
* створити нову серію inline;
* вказати partNumber;
* змінити series relation;
* прибрати книгу з серії в Edit Book Form.

Important:

```text
Якщо нова серія створюється inline у Create Book Form,
вона не має зберігатися до submit всієї форми книги.
```

---

### 9.7. Remove / unlink book from series

File:

```text
remove-unlink-book-from-series.md
```

Flow:

```text
Series Details Page → Book row menu → Прибрати з серії
```

or:

```text
Edit Book Form → Series Section → remove series relation
```

User can:

* прибрати книгу з серії;
* залишити книгу в бібліотеці;
* прибрати missing book;
* оновити progress, next book і books count серії.

Important:

```text
Unlink не видаляє книгу з бібліотеки.
```

---

### 9.8. Delete series

File:

```text
delete-series.md
```

Flow:

```text
Series Details Page → More menu → Видалити серію
```

User can:

* видалити серію;
* залишити книги в бібліотеці;
* очистити series relation у книг;
* повернутися на All Series Page.

Important:

```text
Delete Series не видаляє книги.
```

---

## 10. Navigation map

Main navigation:

```text
Sidebar
  → Серії
    → All Series Page
      → Series Details Page
        → Book Details Page
```

Book-to-series navigation:

```text
Book Details Page
  → Series preview
    → Series Details Page
```

Create flow navigation:

```text
All Series Page
  → Create Series

Series Details Page
  → Add Book to Series
  → Edit Series
  → Delete Series

Create / Edit Book Form
  → Series Section
    → Select existing series
    → Create new series inline
```

Unlink navigation:

```text
Series Details Page
  → Book row menu
    → Remove / Unlink Book from Series

Edit Book Form
  → Series Section
    → Remove series relation
```

---

## 11. Cross-feature update rules

Series Module має оновлювати пов’язані сторінки після змін.

---

### 11.1. After creating series

Update:

* All Series Page;
* series count;
* empty state;
* right sidebar blocks.

If created from Book Form:

* selected series in Book Form;
* after book submit — Series Details Page and All Series Page.

---

### 11.2. After editing series

Update:

* Series Details Page hero;
* All Series Page card;
* Book Details Series preview;
* breadcrumbs;
* cover fallback;
* status badge.

---

### 11.3. After adding book to series

Update:

* Series Details Page books list;
* Reading Order Block;
* progress;
* next book;
* statistics;
* All Series Page card;
* Book Details Page for added book.

---

### 11.4. After changing partNumber

Update:

* Series Details Page book order;
* Reading Order Block;
* next book;
* Book Details Series preview;
* All Series Page next book preview.

---

### 11.5. After unlinking book from series

Update:

* Series Details Page books list;
* progress;
* next book;
* statistics;
* cover fallback;
* All Series Page card;
* Book Details Page for unlinked book.

The book should become standalone unless it is linked to another series.

---

### 11.6. After deleting series

Update:

* All Series Page;
* related books;
* Book Details pages for affected books;
* Reading Queue cards, if they show series meta;
* Custom Lists cards, if they show series meta.

Important:

```text
Books remain in library.
Only series relation is removed.
```

---

## 12. Data safety rules

Series Module must protect book data.

Deleting or unlinking a series relation must not delete or change:

```text
title
author
cover
description
readingStatus
ownershipStatus
format
rating
progress
currentPage
notes
quotes
characters
isFavorite
readingQueue state
custom lists
purchase status
loan status
```

Important:

```text
Series actions should affect series relation only,
unless the user explicitly performs a book-specific action.
```

---

## 13. MVP scope

Series Module MVP includes:

* All Series Page;
* Series Details Page;
* Create Series;
* Edit Series;
* Delete Series;
* Add Book to Series;
* Remove / Unlink Book from Series;
* Series Section in Create / Edit Book Form;
* partNumber logic;
* basic progress calculation;
* next book logic;
* missing book state only if data already exists locally;
* cover fallback;
* basic filters and sorting on All Series Page;
* navigation between Book Details and Series Details.

---

## 14. What is not included

У MVP Series Module не входить:

* drag-and-drop reorder;
* складний reading order;
* alternative reading order;
* chronological order vs publication order;
* тип книги: основна / новела / спін-оф / бонус;
* кілька серій для однієї книги;
* автоматичне підтягування серій з інтернету;
* автоматичне підтягування всіх книг серії;
* автоматичне визначення partNumber;
* автоматичне створення missing books із gaps;
* рекомендації схожих серій;
* публічні серії;
* sharing series;
* comments / reviews по серії;
* notes по серії;
* quotes по серії;
* characters на рівні серії;
* merge duplicate series;
* archive series;
* restore deleted series;
* mass edit series;
* mass delete series.

Important:

```text
У MVP Series Module має бути простим, зрозумілим і без складної книжкової бібліографії.
```

---

## 15. Future improvements

Future improvements можуть включати:

* drag-and-drop reorder;
* окремий `displayOrder`;
* підтримку новел і спін-офів;
* тип книги в серії;
* альтернативні порядки читання;
* publication order;
* chronological order;
* author recommended order;
* support для `partNumber = 1.5`;
* автоматичний hint про пропущені книги;
* merge duplicate series;
* import series metadata;
* external book data integrations;
* favorite series;
* series notes;
* series quotes;
* series characters;
* similar series recommendations;
* public / shared series.

---

## 16. Permissions and access

Series Module має працювати тільки з даними поточного користувача.

Rules:

* користувач бачить тільки свої серії;
* користувач може редагувати тільки свої серії;
* користувач може видаляти тільки свої серії;
* користувач може додавати до серії тільки свої книги;
* користувач не може прив’язати чужу книгу до своєї серії;
* користувач не може відкрити Series Details Page чужої серії.

If series does not exist:

```text
Серію не знайдено
```

If user has no access:

```text
Generic error / not found state
```

Recommended behavior:

```text
Не показувати деталі чужої серії.
```

---

## 17. Error and empty states overview

Series Module має підтримувати такі загальні states:

| State                    | Where                                         |
| ------------------------ | --------------------------------------------- |
| No series yet            | All Series Page                               |
| Empty series             | Series Details Page                           |
| Series not found         | Series Details Page                           |
| Book not found           | Add / unlink flows                            |
| Missing partNumber       | Series Details Page / Book Details            |
| Duplicate partNumber     | Add Book / Edit Book / Series Details warning |
| totalBooksCount conflict | Add Book / Edit Book                          |
| Series deleted           | Book Details should not show Series preview   |
| No eligible books        | Add Book to Series flow                       |
| Loading                  | all pages / flows                             |
| Error                    | all pages / flows                             |

---

## 18. Acceptance Criteria

### Documentation structure

* Series Module має overview documentation.
* Overview documentation перелічує всі related feature docs.
* Overview documentation пояснює відповідальність кожного файлу.
* Overview documentation не дублює повністю детальні feature docs.

### Series entity

* Серія описана як окрема сутність.
* Серія може існувати без книг.
* Серія може мати title, author, status, totalBooksCount, description, cover, genres і tags.
* Серія належить конкретному користувачу.

### Book relation

* Книга може бути standalone.
* Книга може належати до однієї основної серії.
* Якщо книга належить до серії, вона має `seriesId`.
* Якщо книга належить до серії, вона має `partNumber`.
* `partNumber` визначає порядок книг у серії.

### Series status and progress

* `seriesStatus` не плутається з user reading progress.
* Series status показує стан книжкового циклу.
* User progress показує, скільки книг користувач прочитав.
* Прогрес рахується по книгах зі статусом `finished`.
* Якщо `totalBooksCount` є, прогрес рахується від нього.
* Якщо `totalBooksCount` немає, прогрес рахується по доданих книгах.

### Main flows

* Користувач може переглянути всі серії.
* Користувач може відкрити конкретну серію.
* Користувач може створити серію.
* Користувач може редагувати серію.
* Користувач може видалити серію.
* Користувач може додати книгу до серії.
* Користувач може прибрати книгу з серії.
* Користувач може задати або змінити partNumber.
* Користувач може перейти з Book Details до Series Details.

### Data safety

* Delete Series не видаляє книги з бібліотеки.
* Remove / Unlink Book from Series не видаляє книгу з бібліотеки.
* Series actions не змінюють readingStatus книги без окремої book action.
* Series actions не змінюють ownershipStatus книги без окремої book action.
* Notes, quotes, characters і ratings книг не видаляються при unlink або delete series.
* Reading Queue і Custom Lists не очищуються при delete series.

### Navigation

* All Series Page веде на Series Details Page.
* Series Details Page веде на Book Details Page.
* Book Details Page веде на Series Details Page через Series preview.
* Create / Edit Book Form дозволяє керувати series relation.
* Після видалення серії користувач повертається на All Series Page.

### MVP scope

* MVP включає базову роботу з серіями.
* MVP не включає drag-and-drop reorder.
* MVP не включає складний reading order.
* MVP не включає автоматичне підтягування даних із зовнішніх джерел.
* MVP не включає кілька серій для однієї книги.
