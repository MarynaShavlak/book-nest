# Feature: Series Section in Create / Edit Book Form

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

## 5. UI structure

### 5.1. Section title

```text
Серія
```

Optional helper text:

```text
Додайте книгу до книжкового циклу, якщо вона є частиною серії.
```

---

### 5.2. Main toggle / checkbox

Recommended label:

```text
Це книга із серії
```

Alternative label:

```text
Книга належить до серії
```

Behavior:

* якщо toggle off — книга standalone;
* якщо toggle on — показуються поля вибору серії та номера частини;
* якщо toggle вимикається в Edit Book Form, потрібно підтвердити відв’язування книги від серії.

---

### 5.3. Expanded section when toggle is on

Коли користувач вмикає toggle, показати:

```text
[Series select]
[Create new series option]
[Part number input]
[Series helper / validation messages]
```

Recommended UI:

```text
Серія
[Виберіть серію або створіть нову]

Номер частини
[1]
```

---

## 6. Create Book mode

Create Book mode використовується, коли користувач створює нову книгу.

### 6.1. Default state

За замовчуванням нова книга не належить до серії.

Default values:

| Field           | Default |
| --------------- | ------- |
| isPartOfSeries  | false   |
| seriesId        | null    |
| partNumber      | null    |
| createNewSeries | false   |
| newSeriesDraft  | null    |

---

### 6.2. User selects existing series

Behavior:

1. Користувач вмикає toggle **Це книга із серії**.
2. Обирає існуючу серію.
3. Система пропонує default `partNumber`.
4. Користувач може змінити `partNumber`.
5. Користувач submit-ить форму книги.
6. Книга створюється і прив’язується до вибраної серії.
7. Series Details Page і All Series Page оновлюються.

---

### 6.3. User creates new series from book form

Користувач може створити нову серію прямо з форми книги.

Recommended UI option:

```text
+ Створити нову серію
```

Behavior:

1. Користувач вмикає toggle **Це книга із серії**.
2. Натискає **Створити нову серію**.
3. Заповнює короткі дані нової серії.
4. Продовжує заповнювати форму книги.
5. Натискає submit форми книги.
6. Система створює нову серію.
7. Система створює книгу.
8. Книга прив’язується до нової серії.

Important MVP rule:

```text
Якщо нова серія створюється всередині Create Book Form, вона не має зберігатися окремо до submit всієї форми книги.
```

Reason:

```text
Це запобігає появі випадкових порожніх серій, якщо користувач закриє форму книги або скасує створення.
```

Тобто inline-created series має бути тимчасовим draft до моменту submit.

---

### 6.4. Create Book opened from Series Details Page

Якщо Create Book Form відкривається зі сторінки конкретної серії, series field має бути preselected.

Example:

```text
Series Details Page → Додати книгу в цю серію
```

Preselected values:

| Field          | Value                      |
| -------------- | -------------------------- |
| isPartOfSeries | true                       |
| seriesId       | current series id          |
| series title   | current series title       |
| partNumber     | next available part number |

Recommended behavior:

```text
Серія вже вибрана автоматично.
Користувач бачить, до якої серії буде додана книга.
```

У цьому сценарії можна зробити series field readonly, щоб користувач випадково не додав книгу в іншу серію.

---

### 6.5. Create Book opened from Missing Book Row

Якщо форма відкривається з missing book row, потрібно prefill дані.

Prefilled values:

| Field           | Value                            |
| --------------- | -------------------------------- |
| isPartOfSeries  | true                             |
| seriesId        | current series id                |
| title           | missing book title, якщо відомий |
| author          | series author, якщо доступний    |
| partNumber      | missing book partNumber          |
| readingStatus   | `not_started`                    |
| ownershipStatus | `none`                           |

Після submit:

* missing book стає реальною книгою в бібліотеці;
* missing book row зникає;
* книга з’являється у списку серії як звичайна книга;
* progress і next book logic оновлюються.

---

## 7. Edit Book mode

Edit Book mode використовується, коли користувач редагує існуючу книгу.

### 7.1. Book has no series

Якщо книга не належить до серії:

* toggle **Це книга із серії** вимкнений;
* series fields приховані;
* користувач може увімкнути toggle і вибрати серію.

---

### 7.2. Book already has a series

Якщо книга вже належить до серії:

* toggle **Це книга із серії** увімкнений;
* series field показує поточну серію;
* partNumber показує поточний номер частини;
* користувач може змінити partNumber;
* користувач може прибрати книгу з серії;
* користувач може змінити серію, якщо такий сценарій дозволений у MVP.

Example:

```text
Серія: Тінь і кістка
Номер частини: 2
```

---

### 7.3. User changes partNumber

Behavior:

1. Користувач змінює `partNumber`.
2. Система перевіряє validation.
3. Якщо номер валідний, зміна зберігається.
4. Series Details Page оновлює порядок книг.
5. Next Book block перераховується.

Important:

```text
Зміна partNumber не змінює readingStatus книги.
```

---

### 7.4. User removes book from series

Користувач може вимкнути toggle **Це книга із серії** або очистити поле Series.

Behavior:

1. Користувач прибирає series relation.
2. Система показує confirmation.
3. Користувач підтверджує дію.
4. Книга відв’язується від серії.
5. Книга залишається в бібліотеці.
6. Series Details Page і All Series Page оновлюються.

Confirmation title:

```text
Прибрати книгу з серії?
```

Confirmation text:

```text
Книга залишиться у вашій бібліотеці, але більше не буде відображатися в цій серії.
```

Buttons:

```text
Скасувати
Прибрати з серії
```

Important:

```text
Ця дія не видаляє книгу з бібліотеки.
```

---

### 7.5. User changes series

У Edit Book Form користувач може перенести книгу з однієї серії в іншу, якщо це входить у MVP.

Recommended MVP behavior:

```text
Дозволити зміну серії тільки через Edit Book Form і тільки після confirmation.
```

Behavior:

1. Книга вже належить до Series A.
2. Користувач вибирає Series B.
3. Система показує confirmation.
4. Користувач підтверджує зміну.
5. Книга відв’язується від Series A.
6. Книга прив’язується до Series B.
7. Користувач вказує новий `partNumber` для Series B.
8. Обидві серії оновлюють progress, books count і next book logic.

Confirmation title:

```text
Змінити серію книги?
```

Confirmation text:

```text
Книга буде прибрана з поточної серії та додана до нової. Дані книги залишаться без змін.
```

Buttons:

```text
Скасувати
Змінити серію
```

Important:

```text
Зміна серії не змінює readingStatus, ownershipStatus, rating, notes або quotes книги.
```

---

## 8. Series selection

### 8.1. Existing series select

Field label:

```text
Серія
```

Placeholder:

```text
Виберіть серію
```

Type:

```text
Autocomplete / searchable select
```

Search by:

* series title;
* author;
* series status.

Show in option:

* series title;
* author, якщо є;
* books count;
* series status.

Example option:

```text
Тінь і кістка · Лі Бардуго · 3 книги · Завершена
```

---

### 8.2. Empty series list

Якщо користувач ще не має жодної серії:

```text
У вас ще немає серій
```

Action:

```text
Створити нову серію
```

---

### 8.3. Create new series option

У select можна показати option:

```text
+ Створити нову серію
```

Після кліку відкривається inline create block або nested modal.

Recommended MVP:

```text
Inline create block всередині Book Form
```

Reason:

```text
Користувач не втрачає контекст створення книги.
```

---

## 9. Inline create series block

Якщо користувач створює нову серію з форми книги, не потрібно показувати всі поля повного Create Series flow.

MVP поля:

| Field                   | Required | Description                        |
| ----------------------- | -------- | ---------------------------------- |
| Назва серії             | Так      | назва нової серії                  |
| Статус серії            | Так      | completed / ongoing / unknown      |
| Загальна кількість книг | Ні       | optional                           |
| Автор серії             | Ні       | може бути prefilled з автора книги |

---

### 9.1. Назва серії

Label:

```text
Назва серії *
```

Placeholder:

```text
Введіть назву серії
```

Rules:

* required;
* max 150 symbols;
* trim spaces;
* no HTML.

---

### 9.2. Статус серії

Label:

```text
Статус серії *
```

Default:

```text
unknown
```

Options:

```text
Завершена
Ще виходить
Невідомо
```

Important:

```text
Статус серії не означає, що користувач прочитав серію.
```

---

### 9.3. Загальна кількість книг

Label:

```text
Загальна кількість книг
```

Rules:

* optional;
* integer;
* min 1;
* якщо вказано, `partNumber` книги не може бути більшим за це значення.

---

### 9.4. Автор серії

Автор серії може бути prefilled з автора книги.

Example:

```text
Book author: Лі Бардуго
Series author: Лі Бардуго
```

Користувач може змінити автора серії.

Important:

```text
Зміна автора серії не змінює автора книги.
Зміна автора книги не змінює автора серії після створення.
```

---

## 10. Part number field

### 10.1. Field overview

| Parameter        | Value                             |
| ---------------- | --------------------------------- |
| Label            | Номер частини                     |
| Placeholder      | Наприклад, 1                      |
| Type             | Number input                      |
| Required         | Так, якщо книга належить до серії |
| Min value        | 1                                 |
| Decimal values   | Заборонено в MVP                  |
| Duplicate values | Заборонено в межах серії          |

---

### 10.2. Required rule

Якщо toggle **Це книга із серії** увімкнений, `partNumber` є required.

Error:

```text
Вкажіть номер частини книги в серії
```

---

### 10.3. Default partNumber

Якщо користувач вибрав існуючу серію, система може запропонувати default number:

```text
defaultPartNumber = max(existingPartNumbers) + 1
```

Якщо серія порожня:

```text
defaultPartNumber = 1
```

Якщо форма відкрита з missing book row:

```text
partNumber = missingBook.partNumber
```

Якщо користувач створює нову серію з цією книгою:

```text
defaultPartNumber = 1
```

---

### 10.4. Duplicate partNumber

У межах однієї серії не може бути дві книги з однаковим `partNumber`.

Error:

```text
У цій серії вже є книга з таким номером частини
```

Behavior:

* submit disabled або validation error;
* користувач має вказати інший номер;
* existing book не має дублювати сама себе в Edit mode.

Important for Edit mode:

```text
Якщо користувач редагує книгу і залишає її поточний partNumber без змін, це не вважається duplicate.
```

---

### 10.5. totalBooksCount conflict

Якщо у серії вказано `totalBooksCount`, `partNumber` не може бути більшим за це значення.

Example:

```text
totalBooksCount = 3
partNumber = 4
```

Error:

```text
Номер частини більший за загальну кількість книг у серії
```

Helper text:

```text
Оновіть загальну кількість книг у серії або змініть номер частини.
```

Action:

```text
Редагувати серію
```

---

## 11. Validation rules

### 11.1. Standalone book

Якщо книга не належить до серії:

```text
isPartOfSeries = false
```

Then:

```text
seriesId = null
partNumber = null
```

Series validation не виконується.

---

### 11.2. Existing series selected

Якщо користувач вибрав існуючу серію:

Required:

```text
seriesId
partNumber
```

Validation:

* series exists;
* series belongs to current user;
* partNumber is integer;
* partNumber >= 1;
* partNumber is unique in this series;
* partNumber <= totalBooksCount, якщо totalBooksCount існує.

---

### 11.3. New series created inline

Якщо користувач створює нову серію inline:

Required:

```text
newSeriesTitle
newSeriesStatus
partNumber
```

Validation:

* new series title required;
* new series title max 150 symbols;
* new series status required;
* partNumber required;
* partNumber integer;
* partNumber >= 1;
* якщо newSeriesTotalBooksCount вказаний, partNumber <= newSeriesTotalBooksCount.

---

### 11.4. Duplicate series title warning

Якщо користувач створює нову серію inline і така назва вже існує, показати warning.

Warning:

```text
Серія з такою назвою вже існує
```

Actions:

```text
Вибрати існуючу серію
Створити все одно
Скасувати
```

Recommended MVP:

```text
Не блокувати створення повністю, але показати warning.
```

---

### 11.5. HTML validation

HTML tags заборонені в:

* series title;
* series author;
* custom tags;
* helper note fields, якщо вони є.

---

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

## 13. States

### 13.1. Default standalone state

Content:

```text
Це книга із серії
```

Toggle off.

Fields hidden:

```text
Series select
Part number
Create new series
```

---

### 13.2. Series selected state

Content:

```text
Серія вибрана
```

Показати:

* назву серії;
* автора серії, якщо є;
* status badge;
* partNumber input.

---

### 13.3. New series draft state

Показати inline block:

```text
Нова серія
```

Fields:

* Назва серії;
* Статус серії;
* Загальна кількість книг;
* Автор серії.

---

### 13.4. Preselected series state

Якщо форма відкрита з Series Details Page:

```text
Книга буде додана до серії “Назва серії”
```

Series field може бути readonly.

---

### 13.5. Loading state

Показується, коли завантажуються series options.

Recommended UI:

```text
Завантажуємо серії...
```

---

### 13.6. Empty series list state

Якщо користувач не має серій:

```text
У вас ще немає серій
```

Action:

```text
Створити нову серію
```

---

### 13.7. Duplicate partNumber state

Error:

```text
У цій серії вже є книга з таким номером частини
```

Submit disabled або validation error.

---

### 13.8. totalBooksCount conflict state

Error:

```text
Номер частини більший за загальну кількість книг у серії
```

Action:

```text
Редагувати серію
```

---

### 13.9. Remove series confirmation state

Confirmation:

```text
Прибрати книгу з серії?
Книга залишиться у вашій бібліотеці, але більше не буде відображатися в цій серії.
```

---

### 13.10. Error state

Якщо series section не вдалося зберегти:

```text
Не вдалося оновити дані серії для книги
Спробуйте ще раз.
```

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
