# Feature: Delete Series

## 1. Purpose

Feature **Delete Series** дозволяє користувачу видалити книжкову серію з BookNest.

Фіча потрібна для того, щоб користувач міг:

* прибрати серію, створену помилково;
* видалити дубль серії;
* очистити список серій від непотрібних записів;
* прибрати порожню серію;
* видалити серію, але не втратити книги з бібліотеки.

Important:

```text
Delete Series не видаляє книги з бібліотеки.
Delete Series видаляє тільки саму серію і зв’язок книг із цією серією.
```

---

## 2. Main idea

У BookNest серія — це окрема сутність, яка групує книги.

Коли користувач видаляє серію:

* серія зникає з All Series Page;
* Series Details Page для цієї серії більше недоступна;
* книги, які були в серії, залишаються в бібліотеці;
* книги більше не мають зв’язку з цією серією;
* partNumber книг у межах цієї серії очищується;
* readingStatus книг не змінюється;
* ownershipStatus книг не змінюється;
* notes, quotes, characters, ratings книг не видаляються;
* книги залишаються в Reading Queue, Custom Lists, Favorites, якщо вони там були.

---

## 3. Entry points

Користувач може запустити Delete Series flow з місць, де він уже працює з конкретною серією.

| Entry point                                 | Behavior                                  |
| ------------------------------------------- | ----------------------------------------- |
| Series Details Page → More menu             | відкриває Delete Series confirmation      |
| Series Details Page → Right sidebar actions | може містити secondary/destructive action |
| Edit Series flow → More menu                | може містити action “Видалити серію”      |

Основний entry point для MVP:

```text
Series Details Page → More menu → Видалити серію
```

Delete action не потрібно показувати як основну кнопку в hero section.

Recommended placement:

```text
More menu / secondary actions / danger zone
```

---

## 4. User-facing action label

Recommended label:

```text
Видалити серію
```

Не використовувати label:

```text
Видалити книги
```

Бо книги не видаляються з бібліотеки.

У confirmation modal треба явно пояснити:

```text
Книги залишаться у вашій бібліотеці.
```

---

## 5. Delete behavior

### 5.1. Series without books

Якщо серія не має книг, видалення просте.

Behavior:

1. Користувач відкриває Series Details Page.
2. Натискає **Видалити серію**.
3. Система показує confirmation modal.
4. Користувач підтверджує видалення.
5. Серія видаляється.
6. Користувач повертається на All Series Page.
7. Серія більше не показується у списку.

---

### 5.2. Series with books

Якщо серія має книги, потрібно показати більш детальне попередження.

Behavior:

1. Користувач натискає **Видалити серію**.
2. Система показує confirmation modal.
3. У modal показується кількість книг у серії.
4. Користувач бачить пояснення, що книги не будуть видалені.
5. Користувач підтверджує дію.
6. Серія видаляється.
7. Книги залишаються в бібліотеці.
8. У книг очищується зв’язок із серією.
9. Користувач повертається на All Series Page.

Example:

```text
У цій серії є 5 книг.
Після видалення серії книги залишаться у вашій бібліотеці, але більше не будуть прив’язані до цієї серії.
```

---

### 5.3. Series with missing books

Якщо серія містить missing book rows, вони видаляються разом із серією.

Missing book — це не повноцінна книга в бібліотеці, тому після видалення серії:

* missing book rows зникають;
* у бібліотеці нічого не видаляється;
* жодні реальні книги не втрачаються.

---

## 6. What happens to books after deleting series

Після видалення серії всі реальні книги, які були прив’язані до неї, залишаються в бібліотеці.

### 6.1. Book fields that should be cleared

Для книг, які були в серії, потрібно прибрати зв’язок із серією:

```text
seriesId = null
partNumber = null
series relation = removed
```

або equivalent relation видаляється.

---

### 6.2. Book fields that should stay unchanged

Delete Series не змінює:

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
totalPages
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
Якщо книга була “Прочитано”, вона залишається “Прочитано”.
Якщо книга була в черзі читання, вона залишається в черзі.
Якщо книга була у власному списку, вона залишається у цьому списку.
```

---

## 7. Confirmation modal

Перед видаленням серії обов’язково показувати confirmation modal.

### 7.1. Modal for empty series

Title:

```text
Видалити серію?
```

Text:

```text
Цю серію буде видалено з вашої бібліотеки.
```

Buttons:

```text
Скасувати
Видалити серію
```

---

### 7.2. Modal for series with books

Title:

```text
Видалити серію?
```

Text:

```text
У цій серії є книги. Серію буде видалено, але книги залишаться у вашій бібліотеці без прив’язки до серії.
```

Additional info:

```text
Книг у серії: 5
```

Buttons:

```text
Скасувати
Видалити серію
```

---

### 7.3. Optional stronger confirmation

Для MVP достатньо confirmation modal.

Future improvement:

```text
Для серій з великою кількістю книг можна вимагати ввести назву серії для підтвердження.
```

У MVP це не обов’язково.

---

## 8. Redirect behavior

Після успішного видалення серії користувач не має залишатися на `/series/:seriesId`, бо ця сторінка більше не існує.

Recommended behavior:

```text
Після видалення → redirect to /series
```

Після redirect:

* серія зникає зі списку;
* показується success message;
* header stats оновлюються;
* empty state показується, якщо це була остання серія.

Success message:

```text
Серію видалено
```

---

## 9. All Series Page updates

Після видалення серії на All Series Page потрібно оновити:

* total series count;
* header summary cards;
* tabs count, якщо є;
* series grid;
* right sidebar blocks;
* empty state, якщо серій більше немає.

Якщо видалена серія була у блоці:

```text
Продовжити серію
```

або:

```text
Найближчі до завершення
```

потрібно переобрати іншу серію або показати empty state для блоку.

---

## 10. Series Details Page updates

Після видалення:

* поточна Series Details Page закривається через redirect;
* якщо користувач відкриє старий URL `/series/:seriesId`, потрібно показати not found state;
* breadcrumbs більше не повинні вести на видалену серію.

Not found text:

```text
Серію не знайдено
```

Action:

```text
Повернутися до серій
```

---

## 11. Book Details Page updates

Якщо користувач відкриє Book Details Page для книги, яка раніше була у видаленій серії:

* блок серії більше не показується;
* книга виглядає як standalone book;
* readingStatus, ownershipStatus, notes і rating книги залишаються без змін.

---

## 12. Reading Queue and Custom Lists

Delete Series не впливає на інші user collections.

### Reading Queue

Якщо книга з видаленої серії була в Reading Queue:

* вона залишається в Reading Queue;
* badge **У черзі** не зникає;
* книга просто більше не має series meta.

### Custom Lists

Якщо книга з видаленої серії була у Custom List:

* вона залишається у Custom List;
* порядок у Custom List не змінюється;
* custom list relation не видаляється.

### Favorites

Якщо книга була favorite:

* вона залишається favorite;
* Favorites Page не змінює книгу, окрім відсутності series meta.

---

## 13. Cover and media behavior

Якщо серія має custom cover, після видалення серії ця cover більше не використовується.

MVP behavior:

```text
Custom cover серії видаляється разом із серією.
```

Book covers не змінюються.

Important:

```text
Видалення series cover не видаляє обкладинки книг.
```

---

## 14. Undo behavior

### 14.1. MVP recommendation

Для MVP можна зробити без undo, якщо є confirmation modal.

Minimum MVP:

```text
confirmation modal required
undo optional
```

### 14.2. Optional undo

Після видалення можна показати snackbar:

```text
Серію видалено
```

Action:

```text
Скасувати дію
```

Якщо користувач натискає undo:

* серія відновлюється;
* книги знову прив’язуються до серії;
* partNumber книг відновлюється;
* All Series Page оновлюється.

Якщо undo не реалізовано, це не блокує MVP.

---

## 15. States

### 15.1. Loading state

Показується під час виконання delete action.

Recommended UI:

* disable delete button;
* show loading indicator;
* prevent double submit;
* modal не закривається до завершення дії.

---

### 15.2. Confirmation state

Показується перед видаленням.

Content має залежати від того, чи є книги в серії.

Empty series:

```text
Цю серію буде видалено з вашої бібліотеки.
```

Series with books:

```text
Книги залишаться у вашій бібліотеці, але більше не будуть прив’язані до цієї серії.
```

---

### 15.3. Success state

Після успішного видалення:

```text
Серію видалено
```

Behavior:

```text
redirect to /series
```

---

### 15.4. Error state

Якщо серію не вдалося видалити:

```text
Не вдалося видалити серію
Спробуйте ще раз.
```

Action:

```text
Спробувати ще раз
```

---

### 15.5. Not found state

Якщо користувач відкриває вже видалену серію:

```text
Серію не знайдено
```

Action:

```text
Повернутися до серій
```

---

### 15.6. Last series deleted state

Якщо користувач видалив останню серію, на All Series Page показується empty state:

```text
У вас ще немає серій
Створіть першу серію або додайте книгу як частину книжкового циклу.
```

Actions:

```text
Створити серію
Додати книгу
```

---

## 16. Validation and permissions

Delete Series доступний тільки для серій поточного користувача.

Rules:

* користувач може видаляти тільки свої серії;
* якщо серія не належить користувачу, action недоступний;
* якщо серія не знайдена, показується not found state;
* повторне видалення однієї й тієї самої серії не має ламати UI.

---

## 17. What is not included

У MVP для **Delete Series** не входить:

* видалення книг із бібліотеки;
* mass delete series;
* merge duplicate series;
* restore page для видалених серій;
* trash / archive для серій;
* історія змін серії;
* автоматичне перенесення книг в іншу серію;
* вибір “видалити серію разом із книгами”;
* видалення reading progress книг;
* видалення notes / quotes / characters книг;
* видалення книг із Reading Queue;
* видалення книг із Custom Lists;
* видалення книг із Favorites;
* автоматичне створення нової серії для відв’язаних книг.

Important:

```text
У MVP Delete Series видаляє тільки серію.
Книги залишаються в бібліотеці.
```

---

## 18. Acceptance Criteria

### Entry points

* Користувач може запустити Delete Series flow зі Series Details Page.
* Delete action доступний через More menu або secondary actions.
* Delete action не показується як основна primary button у hero section.
* Delete action доступний тільки для серій поточного користувача.

### Confirmation

* Перед видаленням користувач бачить confirmation modal.
* Якщо серія має книги, modal пояснює, що книги залишаться у бібліотеці.
* Якщо серія має книги, modal показує кількість книг у серії.
* Користувач може скасувати видалення.
* Якщо користувач скасовує дію, серія не видаляється.

### Delete empty series

* Користувач може видалити серію без книг.
* Після видалення порожня серія зникає з All Series Page.
* Після видалення користувач перенаправляється на `/series`.

### Delete series with books

* Користувач може видалити серію, яка має книги.
* Після видалення серія зникає з All Series Page.
* Після видалення Series Details Page більше недоступна.
* Книги з видаленої серії залишаються в бібліотеці.
* У книг очищується зв’язок із серією.
* У книг очищується partNumber у межах цієї серії.

### Book data safety

* Reading status книг не змінюється.
* Ownership status книг не змінюється.
* Rating книг не змінюється.
* Notes книг не видаляються.
* Quotes книг не видаляються.
* Characters книг не видаляються.
* Book covers не видаляються.
* Книги залишаються в Reading Queue, якщо були там.
* Книги залишаються у Custom Lists, якщо були там.
* Книги залишаються favorite, якщо були favorite.

### Missing books

* Missing book rows видаляються разом із серією.
* Видалення missing book rows не впливає на реальні книги в бібліотеці.

### UI updates

* Після видалення оновлюється All Series Page.
* Після видалення оновлюються header summary cards.
* Після видалення оновлюється right sidebar на All Series Page.
* Якщо це була остання серія, показується empty state.
* Якщо користувач відкриває старий URL видаленої серії, показується not found state.

### States

* Під час видалення показується loading state.
* Під час loading користувач не може повторно натиснути delete.
* Після успішного видалення показується success state.
* Якщо видалення не вдалося, показується error state.
* Error state дозволяє повторити дію.

### Scope

* Delete Series видаляє тільки серію.
* Delete Series не видаляє книги з бібліотеки.
* Delete Series не змінює readingStatus книг.
* Delete Series не змінює ownershipStatus книг.
* Delete Series не видаляє notes, quotes, characters або ratings книг.
* Delete Series не видаляє книги з Reading Queue.
* Delete Series не видаляє книги з Custom Lists.
* Delete Series не підтримує mass delete у MVP.
* Delete Series не підтримує restore page у MVP.
