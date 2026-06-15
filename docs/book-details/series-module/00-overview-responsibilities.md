# Series Module — Overview and Responsibilities

> Source: series-module-overview.md lines 1-199

---

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
