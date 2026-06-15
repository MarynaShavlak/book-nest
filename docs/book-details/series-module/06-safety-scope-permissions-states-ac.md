# Series Module — Safety, Scope, Permissions, States and Acceptance Criteria

> Source: series-module-overview.md lines 795-1035

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
