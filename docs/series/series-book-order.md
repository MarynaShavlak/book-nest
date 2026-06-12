# Feature: Series Book Order / Part Number Logic

## 1. Purpose

Feature **Series Book Order / Part Number Logic** описує, як BookNest визначає, зберігає, перевіряє і показує порядок книг усередині книжкової серії.

Фіча потрібна для того, щоб користувач міг:

* бачити книги серії у правильному порядку;
* розуміти, яка книга є першою, другою, третьою і далі;
* бачити коректний reading order на Series Details Page;
* правильно визначати наступну книгу для читання;
* уникати дублювання номерів частин;
* бачити warning, якщо порядок книг некоректний;
* не втрачати реальний номер книги після видалення або відв’язування іншої книги з серії.

Important:

```text
Series Book Order не відповідає за створення серії.
Series Book Order не відповідає за додавання або відв’язування книг.
Ця фіча відповідає тільки за порядок книг у межах серії.
```

---

## 2. Main idea

Кожна книга, яка належить до серії, має мати номер частини:

```text
partNumber
```

`partNumber` визначає позицію книги в серії.

Example:

```text
Книга 1 → partNumber = 1
Книга 2 → partNumber = 2
Книга 3 → partNumber = 3
```

Основна логіка MVP:

```text
Книги серії завжди сортуються за partNumber ASC.
```

Тобто:

```text
1 → 2 → 3 → 4 → 5
```

BookNest не має автоматично міняти `partNumber` інших книг після додавання, видалення або відв’язування книги.

Important:

```text
partNumber — це номер книги в серії, а не просто позиція в UI.
```

---

## 3. Entry points

Series Book Order використовується в кількох частинах застосунку.

| Entry point                      | Behavior                                                   |
| -------------------------------- | ---------------------------------------------------------- |
| Series Details Page              | показує книги у правильному порядку                        |
| Add Book to Series flow          | вимагає вказати partNumber                                 |
| Create Book Form                 | дозволяє вказати partNumber, якщо книга додається до серії |
| Edit Book Form                   | дозволяє змінити partNumber книги                          |
| Remove / Unlink Book from Series | не змінює partNumber інших книг                            |
| Next Book block                  | використовує partNumber для визначення наступної книги     |
| Reading Order Block              | будує візуальний порядок книг                              |

---

## 4. Core rules

### 4.1. Sorting rule

Усі книги серії мають сортуватися за:

```text
partNumber ASC
```

Example:

```text
partNumber 1
partNumber 2
partNumber 3
partNumber 4
```

Якщо книга не має `partNumber`, вона показується в кінці списку.

---

### 4.2. Required rule for new relations

У MVP нову книгу не можна додати до серії без `partNumber`.

Це стосується:

* Add Book to Series flow;
* Create Book Form, якщо книга додається до серії;
* Edit Book Form, якщо користувач прив’язує книгу до серії.

Error message:

```text
Вкажіть номер частини книги в серії
```

---

### 4.3. Old data rule

Якщо в існуючих даних уже є книга без `partNumber`, сторінка не має ламатися.

Behavior:

* книга показується в кінці списку;
* біля книги показується warning;
* користувач може перейти до редагування книги і вказати номер частини.

Message:

```text
Номер частини не вказаний
```

---

### 4.4. Duplicate partNumber rule

У MVP не можна мати дві книги з однаковим `partNumber` в одній серії.

Example invalid state:

```text
Книга A — partNumber 1
Книга B — partNumber 1
```

Error message:

```text
У цій серії вже є книга з таким номером частини
```

Recommended MVP behavior:

```text
Блокувати submit, якщо partNumber уже зайнятий.
```

---

### 4.5. Gaps are allowed

Якщо в серії є пропущені номери, це не помилка.

Example:

```text
1 → 3 → 4
```

Так може статися, якщо користувач відв’язав другу книгу від серії.

MVP behavior:

```text
Не змінювати номери інших книг автоматично.
Не блокувати відображення серії.
```

Optional hint:

```text
У серії є пропущені номери частин
```

У MVP цей hint можна не показувати.

---

## 5. Part number field

### 5.1. Field overview

| Parameter        | Value                             |
| ---------------- | --------------------------------- |
| Field name       | partNumber                        |
| Label            | Номер частини                     |
| Type             | number input                      |
| Required         | Так, якщо книга належить до серії |
| Min value        | 1                                 |
| Decimal values   | Заборонено в MVP                  |
| Negative values  | Заборонено                        |
| Duplicate values | Заборонено в межах однієї серії   |

---

### 5.2. Allowed values

У MVP `partNumber` має бути:

```text
ціле число
більше або дорівнює 1
унікальне в межах серії
```

Valid examples:

```text
1
2
3
10
```

Invalid examples:

```text
0
-1
1.5
abc
empty
```

---

### 5.3. Error messages

```text
Вкажіть номер частини книги в серії
Номер частини має бути цілим числом
Номер частини має бути більшим за 0
У цій серії вже є книга з таким номером частини
```

---

## 6. Default part number logic

Коли користувач додає книгу до серії, система може запропонувати default `partNumber`.

### 6.1. Empty series

Якщо в серії ще немає книг:

```text
defaultPartNumber = 1
```

Example:

```text
Серія порожня.
Користувач додає першу книгу.
Default number: 1
```

---

### 6.2. Series with existing books

Якщо в серії вже є книги:

```text
defaultPartNumber = max(existingPartNumbers) + 1
```

Example:

```text
У серії є книги:
1, 2, 3

Default для нової книги:
4
```

---

### 6.3. Series with gaps

Якщо в серії є gap:

```text
1, 3, 4
```

Recommended MVP behavior:

```text
defaultPartNumber = max(existingPartNumbers) + 1
```

Example:

```text
У серії є книги:
1, 3, 4

Default для нової книги:
5
```

Не потрібно автоматично пропонувати `2`, бо пропущений номер може означати, що друга книга існує, але ще не додана.

---

### 6.4. Missing book

Якщо користувач додає missing book, `partNumber` має бути prefilled з missing book row.

Example:

```text
Missing book:
Книга 3 — Ще не додано

Create Book flow:
partNumber = 3
```

---

## 7. Display logic

### 7.1. Series Details Page

На Series Details Page книги показуються у правильному порядку.

Sorting:

```text
partNumber ASC
```

Book row має показувати:

* номер частини;
* обкладинку;
* назву книги;
* readingStatus;
* ownershipStatus;
* queue badge;
* progress, якщо книга читається;
* actions.

Example:

```text
Книга 1 — Прочитано
Книга 2 — Читаю
Книга 3 — Хочу прочитати
Книга 4 — Ще не додано
```

---

### 7.2. Reading Order Block

Reading Order Block показує компактний порядок книг.

Example:

```text
1 Тінь і кістка → 2 Облога і буря → 3 Руїна і відновлення
```

Якщо назви дуже довгі, можна показувати коротку версію:

```text
1 → 2 → 3 → 4
```

або:

```text
Книга 1 → Книга 2 → Книга 3
```

---

### 7.3. All Series Page

На All Series Page порядок книг напряму не показується, але він впливає на:

* next book;
* progress;
* cover fallback;
* series card preview.

---

### 7.4. Book Details Page

На Book Details Page для книги, яка належить до серії, потрібно показати її номер у серії.

Example:

```text
Книга 2 у серії “Тінь і кістка”
```

або:

```text
Частина 2
```

---

## 8. Next book logic

`partNumber` використовується для визначення наступної книги.

### 8.1. Base logic

Next book — це:

```text
перша книга в серії з найменшим partNumber, яка не має readingStatus = finished
```

Якщо є книга зі статусом:

```text
reading
```

або:

```text
rereading
```

вона вважається поточною / наступною.

---

### 8.2. Example: normal order

```text
Книга 1 — Прочитано
Книга 2 — Прочитано
Книга 3 — Не почато
Книга 4 — Не почато
```

Result:

```text
Наступна книга: Книга 3
```

---

### 8.3. Example: currently reading

```text
Книга 1 — Прочитано
Книга 2 — Читаю
Книга 3 — Не почато
```

Result:

```text
Поточна / наступна книга: Книга 2
```

---

### 8.4. Example: gap in order

```text
Книга 1 — Прочитано
Книга 3 — Не почато
```

Result:

```text
Наступна книга: Книга 3
```

BookNest не має автоматично створювати missing book для `partNumber = 2` у MVP.

---

### 8.5. Example: all books finished

```text
Книга 1 — Прочитано
Книга 2 — Прочитано
Книга 3 — Прочитано
```

Result:

```text
Усі книги прочитані
```

---

## 9. Missing part number logic

Missing part number — це ситуація, коли книга належить до серії, але не має номера частини.

Це не має створюватися через нові MVP flows, але може існувати у старих або некоректних даних.

### 9.1. Display behavior

Книги без `partNumber` показуються:

```text
після всіх книг із partNumber
```

Example:

```text
Книга 1
Книга 2
Книга 3
Без номера частини
```

---

### 9.2. Warning

Message:

```text
Номер частини не вказаний
```

Action:

```text
Редагувати книгу
```

---

### 9.3. Next book behavior

Книги без `partNumber` не мають бути першими кандидатами на next book.

Recommended MVP:

```text
Спочатку визначати next book серед книг з partNumber.
Якщо таких непрочитаних книг немає, можна показати книгу без partNumber з warning.
```

---

## 10. Duplicate part number logic

Duplicate part number — це ситуація, коли дві або більше книги в одній серії мають однаковий номер частини.

### 10.1. New data

У нових flows duplicate `partNumber` має блокувати submit.

Це стосується:

* Add Book to Series;
* Create Book with selected series;
* Edit Book partNumber;
* Change book series relation.

---

### 10.2. Existing invalid data

Якщо duplicate partNumber вже існує в даних, Series Details Page має показати warning.

Message:

```text
У серії є книги з однаковим номером частини
Перевірте порядок книг, щоб серія відображалася правильно.
```

Behavior:

* книги все одно показуються;
* порядок всередині duplicate group можна стабілізувати за title або created date;
* користувач має змогу перейти до редагування книги.

---

### 10.3. Sorting duplicates

Якщо duplicate уже існує:

```text
partNumber ASC
then title ASC
```

або:

```text
partNumber ASC
then createdAt ASC
```

Recommended MVP:

```text
partNumber ASC, createdAt ASC
```

---

## 11. Relation with totalBooksCount

`totalBooksCount` — це загальна кількість книг у серії.

Він не визначає порядок, але може перевіряти partNumber.

### 11.1. totalBooksCount exists

Якщо в серії вказаний `totalBooksCount`, `partNumber` не має бути більшим за це значення.

Example:

```text
totalBooksCount = 3
partNumber = 4
```

Result:

```text
Показати validation error або warning.
```

Recommended MVP behavior:

```text
Блокувати submit і запропонувати оновити totalBooksCount.
```

Message:

```text
Номер частини більший за загальну кількість книг у серії
Оновіть загальну кількість книг у серії або змініть номер частини.
```

---

### 11.2. totalBooksCount does not exist

Якщо `totalBooksCount` не вказаний:

* partNumber може бути будь-яким цілим числом від 1;
* верхньої межі немає;
* progress рахується по доданих книгах.

---

### 11.3. Removing books does not change totalBooksCount

Якщо книгу відв’язали від серії, `totalBooksCount` не змінюється автоматично.

Example:

```text
totalBooksCount = 5
У серії було 4 додані книги
Користувач відв’язав 1 книгу

totalBooksCount залишається 5
```

---

## 12. Reorder logic

### 12.1. MVP

У MVP drag-and-drop reorder не входить.

BookNest не має окремої ручної позиції типу:

```text
displayOrder
```

У MVP порядок визначається тільки через:

```text
partNumber
```

---

### 12.2. How user changes order in MVP

Користувач може змінити порядок книги тільки через зміну `partNumber`.

Entry points:

* Edit Book Form;
* Add Book to Series flow;
* future Manage Series Books flow.

Example:

```text
Було:
Книга A — partNumber 2

Користувач редагує книгу:
partNumber = 3
```

Після збереження список серії пересортовується.

---

### 12.3. No automatic renumbering

BookNest не має автоматично змінювати номери інших книг.

Example:

```text
Було:
1, 2, 3

Користувач змінює книгу 3 на partNumber 5.

Стало:
1, 2, 5
```

MVP не має автоматично робити:

```text
1, 2, 3
```

Reason:

```text
partNumber — це реальна частина серії, а не UI-position.
```

---

## 13. Missing books and gaps

### 13.1. Gap does not always mean missing book

Example:

```text
1, 3
```

Це може означати:

* книга 2 ще не додана;
* користувач випадково пропустив номер;
* у серії є special edition;
* користувач не хоче додавати цю книгу.

Тому MVP не має автоматично створювати missing book.

---

### 13.2. Missing books in MVP

Missing book може існувати тільки якщо вона вже відома в межах даних користувача.

BookNest не має автоматично підтягувати список книг із зовнішніх джерел.

---

### 13.3. Optional future hint

У future можна показувати hint:

```text
Можливо, у серії пропущена книга 2
```

Actions:

```text
Додати missing book
Ігнорувати
```

У MVP це не потрібно.

---

## 14. Actions

### 14.1. Set part number

Користувач може задати номер частини під час додавання книги в серію.

Behavior:

* користувач вводить номер;
* система перевіряє validation;
* якщо номер валідний, книга додається до серії;
* список книг оновлюється.

---

### 14.2. Change part number

Користувач може змінити номер частини через Edit Book Form або майбутній Manage Series Books flow.

Behavior:

* користувач змінює `partNumber`;
* система перевіряє duplicate;
* система перевіряє totalBooksCount conflict;
* після збереження книга змінює позицію в списку серії.

---

### 14.3. Fix missing part number

Якщо книга не має номера частини, користувач може натиснути:

```text
Редагувати книгу
```

і додати `partNumber`.

---

### 14.4. Fix duplicate part number

Якщо дві книги мають однаковий номер, користувач може відкрити редагування однієї з книг і змінити номер.

---

## 15. States

### 15.1. Correct order state

Показується звичайний список книг без warning.

Example:

```text
1 → 2 → 3
```

---

### 15.2. Empty series state

Якщо в серії немає книг:

```text
У цій серії ще немає книг
Додайте першу книгу, щоб почати формувати серію.
```

Action:

```text
Додати книгу
```

---

### 15.3. Missing part number state

Якщо одна або кілька книг не мають номера частини:

```text
У деяких книг не вказаний номер частини
```

або на рівні row:

```text
Номер частини не вказаний
```

---

### 15.4. Duplicate part number state

Якщо в серії є дублікати номерів:

```text
У серії є книги з однаковим номером частини
Перевірте порядок книг, щоб серія відображалася правильно.
```

---

### 15.5. Total books count conflict state

Якщо користувач намагається задати `partNumber`, більший за `totalBooksCount`:

```text
Номер частини більший за загальну кількість книг у серії
```

Actions:

```text
Редагувати серію
Змінити номер частини
```

---

### 15.6. Loading state

Показується, коли порядок книг завантажується або оновлюється.

Recommended UI:

* skeleton rows;
* loading indicator;
* disabled submit під час збереження partNumber.

---

### 15.7. Error state

Якщо порядок книг не вдалося оновити:

```text
Не вдалося оновити порядок книг
Спробуйте ще раз.
```

Action:

```text
Спробувати ще раз
```

---

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
