# Book Form Series Section — Overview, Entry, Placement

> Source: `book-form-series-section.md`

## 1. Purpose

Feature **Series Section in Create / Edit Book Form** описує, як користувач може прив’язати книгу до серії під час створення або редагування книги в BookNest.

Фіча потрібна для того, щоб користувач міг:

* позначити, що книга є частиною серії;
* вибрати існуючу серію;
* створити нову серію прямо з форми книги;
* вказати номер частини книги в серії;
* змінити серію книги під час редагування;
* прибрати книгу з серії через Edit Book Form;
* не створювати дублікати `partNumber`;
* не створювати випадкові порожні серії;
* коректно оновити Series Details Page і All Series Page після submit.

Important:

```text
Series Section in Book Form не відповідає за повну сторінку серії.
Ця фіча відповідає тільки за блок “Серія” всередині Create / Edit Book Form.
```

Пов’язані feature docs:

```text
Feature: Create / Edit Book
Feature: Create / Edit Series
Feature: Add Book to Series
Feature: Remove / Unlink Book from Series
Feature: Series Book Order / Part Number Logic
Feature: Series Details Page
Feature: All Series Page
```

---


## 2. Main idea

У формі створення або редагування книги має бути окремий блок:

```text
Серія
```

Цей блок дозволяє користувачу визначити, чи книга є частиною книжкової серії.

Основна логіка:

```text
Книга може бути standalone або належати до однієї основної серії.
```

У MVP одна книга може належати тільки до однієї основної серії.

Можливі стани книги:

```text
1. Книга не належить до серії
2. Книга належить до існуючої серії
3. Книга створює нову серію під час submit форми
```

Якщо книга належить до серії, вона обов’язково має мати:

```text
seriesId
partNumber
```

Important:

```text
partNumber — це номер книги в серії, а не позиція в UI.
```

---


## 3. Entry points

Series Section використовується в кількох flows.

| Entry point                    | Behavior                                                   |
| ------------------------------ | ---------------------------------------------------------- |
| Create Book Form               | користувач може вибрати серію або створити нову            |
| Edit Book Form                 | користувач може змінити, прибрати або додати серію         |
| Series Details Page → Add Book | відкриває Create Book Form з preselected series            |
| Missing Book Row → Add Book    | відкриває Create Book Form з prefilled series і partNumber |
| My Library Page → Edit Book    | дозволяє змінити series relation                           |
| Book Details Page → Edit Book  | дозволяє змінити series relation                           |

Основний MVP сценарій:

```text
Create / Edit Book Form → Series Section → Select existing series → Set partNumber → Submit
```

---


## 4. Placement in Book Form

Series Section має бути розташований у Create / Edit Book Form після основної інформації про книгу.

Recommended form order:

```text
[Basic book information]
  - Title
  - Author
  - Cover
  - Description

[Reading information]
  - Reading status
  - Progress
  - Rating

[Ownership information]
  - Ownership status
  - Format

[Series Section]
  - Is this book part of a series?
  - Select / create series
  - Part number

[Additional information]
  - Genres
  - Tags
  - Notes
```

Reason:

```text
Спочатку користувач вводить саму книгу, а потім уточнює, чи вона належить до серії.
```

---
