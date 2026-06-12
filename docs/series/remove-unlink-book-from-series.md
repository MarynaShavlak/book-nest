# Feature: Remove / Unlink Book from Series

## 1. Purpose

Feature **Remove / Unlink Book from Series** дозволяє користувачу прибрати книгу з конкретної книжкової серії в BookNest, не видаляючи саму книгу з бібліотеки.

Фіча потрібна для того, щоб користувач міг:

* виправити помилково додану книгу;
* відв’язати книгу від неправильної серії;
* прибрати книгу зі списку книг серії;
* прибрати missing book із серії;
* оновити правильний порядок книг у серії;
* перерахувати прогрес серії після зміни списку книг;
* залишити саму книгу в бібліотеці без втрати її даних.

Important:

```text
Remove / Unlink Book from Series не видаляє книгу з бібліотеки.
Книга тільки втрачає зв’язок із серією.
```

---

## 2. Main idea

У BookNest книга може бути прив’язана до серії через relation:

```text
book → series
```

Feature **Remove / Unlink Book from Series** прибирає цей зв’язок.

Після відв’язування:

* книга залишається в бібліотеці;
* readingStatus книги не змінюється;
* ownershipStatus книги не змінюється;
* rating книги не змінюється;
* notes / quotes / characters книги не видаляються;
* книга зникає зі списку книг цієї серії;
* прогрес серії перераховується;
* блок **Наступна книга** оновлюється;
* Series Details Page оновлюється;
* All Series Page card оновлюється.

---

## 3. Terminology

У документації можна використовувати два близькі терміни:

```text
Remove from series
Unlink from series
```

Recommended user-facing label:

```text
Відв’язати від серії
```

або коротше:

```text
Прибрати з серії
```

Щоб не плутати з видаленням книги з бібліотеки, краще не використовувати label:

```text
Видалити книгу
```

Recommended labels:

| Action                      | Meaning                              |
| --------------------------- | ------------------------------------ |
| Відв’язати від серії        | прибрати зв’язок книги з серією      |
| Прибрати з серії            | прибрати книгу зі списку серії       |
| Видалити книгу з бібліотеки | повністю видалити книгу з бібліотеки |

---

## 4. Entry points

Користувач може відв’язати книгу від серії з кількох місць.

| Entry point                            | Behavior                                       |
| -------------------------------------- | ---------------------------------------------- |
| Series Details Page → book row menu    | відкриває confirmation для відв’язування книги |
| Series Details Page → missing book row | дозволяє прибрати missing book із серії        |
| Book Details Page → Series block       | дозволяє відв’язати поточну книгу від серії    |
| Edit Book Form → Series field          | дозволяє очистити series relation              |
| More menu на book card у серії         | може містити action “Прибрати з серії”         |

Основний entry point для MVP:

```text
Series Details Page → Book row menu → Прибрати з серії
```

---

## 5. User scenarios

## 5.1. Scenario: Unlink existing book from series

Цей сценарій використовується, коли книга вже є в бібліотеці користувача і належить до серії.

### Behavior

1. Користувач відкриває Series Details Page.
2. Знаходить потрібну книгу у списку книг серії.
3. Відкриває menu actions для книги.
4. Натискає **Прибрати з серії**.
5. Система показує confirmation modal.
6. Користувач підтверджує дію.
7. Книга відв’язується від серії.
8. Книга зникає зі списку книг серії.
9. Прогрес і статистика серії перераховуються.

Important:

```text
Книга не видаляється з бібліотеки.
```

---

## 5.2. Scenario: Remove missing book from series

Missing book — це книга, яка відома як частина серії, але ще не додана в бібліотеку користувача.

Example:

```text
Книга 1 — Прочитано
Книга 2 — Читаю
Книга 3 — Ще не додано
```

Користувач може прибрати missing book, якщо вона була додана помилково або більше не потрібна.

### Behavior

1. Користувач відкриває Series Details Page.
2. Знаходить missing book row.
3. Відкриває actions.
4. Натискає **Прибрати з серії**.
5. Підтверджує дію.
6. Missing book row зникає зі списку серії.
7. Прогрес і блок **Наступна книга** оновлюються.

Important:

```text
Missing book не є повноцінною книгою в бібліотеці.
Тому її прибираємо тільки зі структури серії.
```

---

## 5.3. Scenario: Clear series in Edit Book Form

Користувач може відв’язати книгу від серії через Edit Book Form.

### Behavior

1. Користувач відкриває Edit Book Form.
2. Знаходить поле **Серія**.
3. Очищає вибрану серію.
4. Зберігає зміни.
5. Книга більше не належить до серії.
6. На Series Details Page книга більше не показується.

Recommended MVP:

```text
Основну логіку відв’язування описує ця feature.
UI Edit Book Form може просто запускати той самий unlink behavior.
```

---

## 6. Confirmation modal

Перед відв’язуванням книги потрібно показати confirmation modal, щоб користувач не сплутав цю дію з видаленням книги.

### Modal title

```text
Прибрати книгу з серії?
```

### Modal text

```text
Книга залишиться у вашій бібліотеці, але більше не буде відображатися в цій серії.
```

### Buttons

```text
Скасувати
Прибрати з серії
```

Destructive button style можна використовувати обережно, але текст має чітко пояснювати, що книга не видаляється з бібліотеки.

---

## 7. What changes after unlink

Після відв’язування книги потрібно оновити всі місця, де серія або книга відображаються.

### 7.1. Book changes

Для книги потрібно прибрати:

```text
seriesId
partNumber
series metadata relation
```

При цьому залишити без змін:

```text
title
author
cover
readingStatus
ownershipStatus
format
rating
progress
notes
quotes
characters
isFavorite
readingQueue state
custom lists
```

Important:

```text
Якщо книга була в Reading Queue, вона залишається в Reading Queue.
Якщо книга була в Custom List, вона залишається в Custom List.
```

---

### 7.2. Series changes

Для серії потрібно оновити:

* books count;
* read books count;
* progress;
* next book;
* reading order block;
* statistics;
* cover fallback, якщо прибрана книга була першою книгою;
* empty state, якщо це була остання книга в серії.

---

## 8. Part number logic

Коли книга відв’язується від серії, її `partNumber` у межах цієї серії більше не потрібен.

### 8.1. Removed book

Для відв’язаної книги:

```text
partNumber = null
seriesId = null
```

або equivalent relation видаляється.

---

### 8.2. Other books in series

MVP rule:

```text
Не змінювати partNumber інших книг автоматично.
```

Example:

```text
Було:
Книга 1 — partNumber 1
Книга 2 — partNumber 2
Книга 3 — partNumber 3

Користувач прибрав Книгу 2.

Стало:
Книга 1 — partNumber 1
Книга 3 — partNumber 3
```

Reason:

```text
partNumber — це реальний номер книги в серії, а не позиція в UI.
```

Не потрібно автоматично перетворювати `3` на `2`, бо це може зламати правильний порядок частин.

---

### 8.3. Gap in part numbers

Якщо після відв’язування виникає gap, це нормально.

Example:

```text
1 → 3 → 4
```

У MVP можна не показувати warning для gap.

Future improvement:

```text
Показати optional hint:
“У серії є пропущені номери частин”.
```

Але це не потрібно блокувати.

---

## 9. Progress recalculation

Після відв’язування книги потрібно перерахувати progress серії.

### 9.1. If totalBooksCount exists

Якщо у серії вказаний `totalBooksCount`, progress рахується від нього.

Example:

```text
totalBooksCount = 5
Було прочитано 2 книги з 5 → 40%

Користувач відв’язав одну прочитану книгу.
Стало прочитано 1 з 5 → 20%
```

Important:

```text
Відв’язування книги не змінює totalBooksCount автоматично.
```

`totalBooksCount` — це поле самої серії, яке редагується через Feature: Create / Edit Series.

---

### 9.2. If totalBooksCount does not exist

Якщо `totalBooksCount` не вказаний, progress рахується по доданих книгах.

Example:

```text
Було:
2 прочитано з 4 доданих → 50%

Користувач відв’язав одну непрочитану книгу.
Стало:
2 прочитано з 3 доданих → 67%
```

---

### 9.3. If removed book was finished

Якщо прибрана книга мала:

```text
readingStatus = finished
```

то `readBooksCount` серії зменшується на 1.

---

### 9.4. If removed book was reading

Якщо прибрана книга мала:

```text
readingStatus = reading
```

потрібно оновити:

* currently reading count;
* next book block;
* progress summary;
* series statistics.

---

## 10. Next book recalculation

Після відв’язування книги потрібно повторно визначити наступну книгу.

Next book logic:

```text
1. Якщо є книга зі статусом reading або rereading — вона поточна / наступна.
2. Інакше взяти книгу з найменшим partNumber, яка не має readingStatus = finished.
3. Якщо всі книги прочитані — показати “Усі книги прочитані”.
4. Якщо серія порожня — показати empty state.
```

### 10.1. Removed book was next book

Якщо користувач прибрав книгу, яка була next book, система має знайти наступну доступну книгу.

Example:

```text
Було:
Книга 1 — Прочитано
Книга 2 — Наступна книга
Книга 3 — Не почато

Користувач прибрав Книгу 2.

Стало:
Наступна книга — Книга 3
```

---

### 10.2. Removed book was the only unread book

Якщо прибрана книга була єдиною непрочитаною книгою, після відв’язування серія може стати повністю прочитаною.

---

### 10.3. Removed book was the only book in series

Якщо прибрана книга була останньою книгою в серії, Series Details Page має показати empty state.

---

## 11. Cover fallback logic

Якщо серія не має custom cover, вона може використовувати обкладинку першої книги.

Після відв’язування книги потрібно перевірити cover fallback.

### 11.1. Removed book was not cover source

Якщо прибрана книга не була джерелом cover, обкладинка серії не змінюється.

---

### 11.2. Removed book was cover source

Якщо прибрана книга була першою книгою і використовувалася як fallback cover:

* взяти cover наступної книги за partNumber;
* якщо наступної книги немає або cover немає — показати placeholder;
* якщо у серії є custom cover — нічого не змінювати.

---

## 12. Actions

### 12.1. Unlink existing book

Action label:

```text
Прибрати з серії
```

Behavior:

1. Користувач натискає action.
2. Відкривається confirmation modal.
3. Користувач підтверджує дію.
4. Книга відв’язується від серії.
5. UI оновлюється.

---

### 12.2. Remove missing book

Action label:

```text
Прибрати з серії
```

Behavior:

1. Користувач натискає action на missing book row.
2. Підтверджує дію.
3. Missing book row видаляється зі структури серії.
4. UI оновлюється.

---

### 12.3. Cancel unlink

Action label:

```text
Скасувати
```

Behavior:

* confirmation modal закривається;
* книга залишається в серії;
* жодні дані не змінюються.

---

### 12.4. Undo after unlink

Recommended MVP improvement:

Після успішного відв’язування можна показати snackbar з undo.

Message:

```text
Книгу прибрано з серії
```

Action:

```text
Скасувати дію
```

Behavior:

* якщо користувач натискає undo, книга повертається в серію;
* partNumber відновлюється;
* series statistics і progress знову перераховуються.

Якщо undo не реалізується в MVP, confirmation modal є обов’язковим.

---

## 13. States

### 13.1. Loading state

Показується, коли unlink action виконується.

Recommended UI:

* disable action button;
* показати loading indicator у modal;
* не дозволяти повторний submit.

---

### 13.2. Confirmation state

Показується перед відв’язуванням.

Content:

```text
Книга залишиться у вашій бібліотеці, але більше не буде відображатися в цій серії.
```

---

### 13.3. Success state

Після успішного unlink:

```text
Книгу прибрано з серії
```

Якщо прибрана missing book:

```text
Книгу прибрано зі списку серії
```

---

### 13.4. Error state

Якщо дію не вдалося виконати:

```text
Не вдалося прибрати книгу з серії
Спробуйте ще раз.
```

Action:

```text
Спробувати ще раз
```

---

### 13.5. Empty series state

Якщо після відв’язування в серії не залишилося книг:

```text
У цій серії ще немає книг
Додайте першу книгу, щоб почати формувати серію.
```

Action:

```text
Додати книгу
```

---

### 13.6. Not found state

Якщо книга або серія більше не існує:

```text
Книгу або серію не знайдено
```

Action:

```text
Оновити сторінку
```

---

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
