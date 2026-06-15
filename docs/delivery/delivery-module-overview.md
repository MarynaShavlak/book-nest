# Feature: Delivery Module Overview

## 1. Purpose

Feature **Delivery Module Overview** описує загальну логіку модуля доставки в BookNest.

Цей документ є головною документацією для всього функціоналу, пов’язаного з книгами, які користувач уже замовив, але ще не отримав.

Модуль потрібен для того, щоб користувач міг:

* позначити книгу як замовлену;
* додати інформацію про доставку;
* бачити всі активні книги в дорозі на окремій сторінці;
* відстежувати очікувану дату доставки;
* бачити затримані доставки;
* бачити книги, які очікуються скоро;
* редагувати інформацію про доставку;
* позначати книги як отримані;
* масово позначати книги як отримані;
* скасовувати замовлення;
* повертати книгу назад у “Хочу купити”;
* переглядати історію всіх замовлень;
* бачити статистику витрат за місяцями;
* бачити delivery statistics через summary cards і donut chart.

Delivery Module закриває проміжний сценарій між:

```text
Хочу купити → В дорозі → Маю
```

Important:

```text
Delivery Module не замінює Book Details, Books to Buy або My Library.
Він відповідає тільки за логіку замовлення, доставки, отримання та історію delivery records.
```

---

## 2. What is Delivery Module

**Delivery Module** — це частина BookNest, яка дозволяє користувачу керувати книгами, які вже замовлені, але ще не отримані.

Книга в delivery flow проходить такий шлях:

```text
Хочу купити
  ↓
Позначити як “В дорозі”
  ↓
Книги в дорозі
  ↓
Позначити як отриману
  ↓
Маю
```

Також можливий сценарій скасування:

```text
В дорозі
  ↓
Скасувати замовлення
  ↓
Хочу купити / Немає
```

Delivery Module має працювати як окремий модуль, але бути пов’язаним із:

* Book Details;
* Books to Buy;
* My Library;
* Dashboard;
* Statistics;
* Reading Queue, якщо книга одночасно є в черзі;
* Custom Lists, якщо книга додана до списків.

---

## 3. Documentation structure

Рекомендована структура документації для delivery-модуля:

```text
delivery/
  delivery-module-overview.md
  delivery-status-logic.md
  books-in-transit-page.md
  mark-book-as-in-transit.md
  edit-delivery-info.md
  mark-book-as-received.md
  cancel-delivery-order.md
  delivery-order-history.md
  delivery-expense-statistics.md
```

---

### 3.1. Documentation responsibility map

| File                             | Responsibility                                                                                          |
| -------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `delivery-module-overview.md`    | загальна логіка delivery-модуля, зв’язки між фічами, MVP scope                                          |
| `delivery-status-logic.md`       | ownership status, stored delivery status, calculated UI statuses, переходи між статусами                |
| `books-in-transit-page.md`       | сторінка “Книги в дорозі”, список, summary cards, donut chart, пошук, фільтри, сортування, bulk actions |
| `mark-book-as-in-transit.md`     | flow / modal “Позначити як В дорозі”                                                                    |
| `edit-delivery-info.md`          | редагування магазину, дат, ціни, служби доставки, ТТН, нотатки                                          |
| `mark-book-as-received.md`       | позначити одну книгу або bulk книги як отримані                                                         |
| `cancel-delivery-order.md`       | скасування замовлення, повернення в “Хочу купити” або “Немає”                                           |
| `delivery-order-history.md`      | історія всіх замовлень: active, received, cancelled                                                     |
| `delivery-expense-statistics.md` | витрати за місяцями, магазинами, статусами, валютою                                                     |

---

## 4. Main idea

Delivery Module працює навколо двох сутностей:

```text
Book
Delivery record
```

Книга має загальний статус володіння:

```text
ownershipStatus
```

Delivery record має окрему інформацію про замовлення:

```text
storeName
orderDate
expectedDeliveryDate
deliveryService
trackingNumber
price
status
```

Important:

```text
ownershipStatus і deliveryStatus — це різні речі.
```

`ownershipStatus` відповідає на питання:

```text
Чи є книга у користувача?
```

`deliveryStatus` відповідає на питання:

```text
Що відбувається із замовленням?
```

---

## 5. Ownership status logic

Delivery Module використовує існуючий `ownershipStatus` книги.

Relevant ownership statuses:

```ts
type OwnershipStatus =
  | "none"
  | "want_to_buy"
  | "in_transit"
  | "owned"
  | "borrowed_from_someone"
  | "lent_to_someone";
```

Для Delivery Module головні статуси:

| Status        | Label       | Meaning                          |
| ------------- | ----------- | -------------------------------- |
| `want_to_buy` | Хочу купити | користувач хоче купити книгу     |
| `in_transit`  | В дорозі    | книга замовлена і очікується     |
| `owned`       | Маю         | книга вже отримана               |
| `none`        | Немає       | книга не куплена і не в wishlist |

Important:

```text
ebook і audiobook не є ownership statuses.
Вони мають залишатися formats.
```

Formats:

```ts
type BookFormat =
  | "paper"
  | "ebook"
  | "audiobook";
```

---

## 6. Delivery status logic

Delivery Module має окремий stored delivery status.

Recommended stored statuses:

```ts
type DeliveryStatus =
  | "ordered"
  | "in_transit"
  | "received"
  | "cancelled";
```

| Status       | Label     | Meaning                                          |
| ------------ | --------- | ------------------------------------------------ |
| `ordered`    | Замовлено | замовлення створено, але доставка ще не почалась |
| `in_transit` | В дорозі  | книга фактично доставляється                     |
| `received`   | Отримано  | книга отримана користувачем                      |
| `cancelled`  | Скасовано | замовлення скасовано                             |

Important:

```text
received і cancelled не показуються як активні книги на сторінці “Книги в дорозі”.
Вони переходять в order history.
```

---

## 7. Calculated UI status logic

Окрім stored `deliveryStatus`, UI має calculated statuses, які рахуються автоматично на основі `expectedDeliveryDate`.

Recommended calculated UI statuses:

```ts
type DeliveryUiStatus =
  | "arriving_soon"
  | "delayed"
  | "no_delivery_date";
```

| UI Status          | Label             | When                                                     |
| ------------------ | ----------------- | -------------------------------------------------------- |
| `arriving_soon`    | Очікується скоро  | доставка сьогодні, завтра або протягом найближчих 7 днів |
| `delayed`          | Затримується      | expected delivery date вже минула, а книга не отримана   |
| `no_delivery_date` | Без дати доставки | expected delivery date не вказана                        |

Important:

```text
arriving_soon, delayed і no_delivery_date не потрібно зберігати як deliveryStatus.
Це calculated UI statuses.
```

Reason:

```text
Книга може автоматично змінити UI status з “Очікується скоро” на “Затримується” залежно від поточної дати.
```

---

## 8. Delivery entity

Delivery record зберігає інформацію про конкретне замовлення книги.

Recommended model:

```ts
type BookDelivery = {
  id: string;
  userId: string;
  bookId: string;

  storeName: string;
  orderDate: string;
  expectedDeliveryDate?: string | null;

  orderNumber?: string | null;
  trackingUrl?: string | null;

  price?: number | null;
  currency?: "UAH" | "USD" | "EUR" | null;

  deliveryService?: string | null;
  trackingNumber?: string | null;

  note?: string | null;

  status: "ordered" | "in_transit" | "received" | "cancelled";

  createdAt: string;
  updatedAt: string;

  receivedAt?: string | null;
  cancelledAt?: string | null;
};
```

---

## 9. Delivery fields

Delivery Module MVP має підтримувати такі поля.

| Field                  | Required | Description                         |
| ---------------------- | -------- | ----------------------------------- |
| `storeName`            | Так      | магазин, де замовлена книга         |
| `orderDate`            | Так      | дата замовлення                     |
| `expectedDeliveryDate` | Ні       | очікувана дата доставки             |
| `orderNumber`          | Ні       | номер замовлення                    |
| `trackingUrl`          | Ні       | посилання на замовлення або трекінг |
| `price`                | Ні       | ціна книги                          |
| `currency`             | Ні       | валюта, default `UAH`               |
| `deliveryService`      | Ні       | служба доставки                     |
| `trackingNumber`       | Ні       | номер ТТН / tracking number         |
| `note`                 | Ні       | нотатка користувача                 |
| `status`               | Так      | stored delivery status              |

---

## 10. MVP delivery services

У MVP потрібно підтримати поле **Служба доставки**.

Recommended options:

```ts
export const deliveryServices = [
  { value: "nova_poshta", label: "Нова пошта" },
  { value: "ukrposhta", label: "Укрпошта" },
  { value: "meest", label: "Meest" },
  { value: "dhl", label: "DHL" },
  { value: "amazon_delivery", label: "Amazon Delivery" },
  { value: "other", label: "Інше" },
] as const;
```

Behavior:

* поле optional;
* користувач може залишити його порожнім;
* якщо вибрано `other`, можна показати custom text input;
* поле використовується у фільтрах, картці доставки та історії замовлень.

---

## 11. Tracking number / TTN

У MVP номер ТТН має бути окремим полем.

Field:

```text
Номер ТТН / tracking number
```

Source:

```ts
trackingNumber
```

Behavior:

* optional;
* може містити букви, цифри, дефіси, пробіли;
* max length: 100 symbols;
* показується на картці книги в дорозі, якщо заповнений;
* використовується в пошуку;
* не замінює `orderNumber`.

Important:

```text
orderNumber і trackingNumber — це різні поля.
```

Example:

```text
orderNumber = 482915
trackingNumber = 20450780123456
```

---

## 12. Main user flows

### 12.1. Mark book as in transit

File:

```text
mark-book-as-in-transit.md
```

Flow:

```text
Book Details / Books to Buy → Позначити як “В дорозі”
```

Result:

* створюється delivery record;
* `ownershipStatus` стає `in_transit`;
* `deliveryStatus` стає `ordered`;
* книга зникає з Books to Buy;
* книга з’являється на Books in Transit page.

---

### 12.2. Edit delivery info

File:

```text
edit-delivery-info.md
```

Flow:

```text
Books in Transit Page / Book Details → Редагувати доставку
```

User can edit:

* магазин;
* дату замовлення;
* очікувану дату доставки;
* номер замовлення;
* посилання;
* ціну;
* валюту;
* службу доставки;
* номер ТТН;
* нотатку;
* stored delivery status.

---

### 12.3. View books in transit

File:

```text
books-in-transit-page.md
```

Flow:

```text
Sidebar → В дорозі
```

User can:

* бачити всі активні delivery records;
* шукати книги;
* фільтрувати доставки;
* сортувати доставки;
* бачити summary cards;
* бачити donut chart;
* позначати книги як отримані;
* bulk позначати книги як отримані;
* редагувати доставку;
* скасовувати замовлення;
* переходити до Book Details.

---

### 12.4. Mark book as received

File:

```text
mark-book-as-received.md
```

Flow:

```text
Books in Transit Page / Book Details → Позначити як отриману
```

Result:

* `ownershipStatus` стає `owned`;
* `deliveryStatus` стає `received`;
* встановлюється `receivedAt`;
* книга зникає з Books in Transit;
* delivery record переходить в order history.

---

### 12.5. Bulk mark as received

File:

```text
mark-book-as-received.md
```

Flow:

```text
Books in Transit Page → Select books → Позначити вибрані як отримані
```

або:

```text
Books in Transit Page → Quick actions → Позначити всі як отримані
```

Important:

```text
Bulk action має мати confirmation modal.
```

Bulk action не має виконуватися без підтвердження користувача.

---

### 12.6. Cancel delivery order

File:

```text
cancel-delivery-order.md
```

Flow:

```text
Books in Transit Page / Book Details → Скасувати замовлення
```

Result options:

```text
in_transit → want_to_buy
```

або:

```text
in_transit → none
```

Default recommended behavior:

```text
Повернути книгу в “Хочу купити”
```

---

### 12.7. View order history

File:

```text
delivery-order-history.md
```

Flow:

```text
Delivery Module → Історія замовлень
```

Order history includes:

* active deliveries;
* received orders;
* cancelled orders;
* dates;
* prices;
* stores;
* delivery services;
* tracking numbers;
* notes.

Important:

```text
Order history показує delivery records.
Вона не має видаляти або змінювати самі книги без окремої дії.
```

---

### 12.8. View expense statistics

File:

```text
delivery-expense-statistics.md
```

Flow:

```text
Delivery Module / Statistics → Витрати на замовлення
```

Statistics can show:

* витрати за місяцями;
* витрати за магазинами;
* витрати за статусами;
* total spent;
* average order price;
* number of orders per month;
* currency breakdown.

---

## 13. Books in Transit Page overview

Page name:

```text
Книги в дорозі
```

Sidebar label:

```text
В дорозі
```

Subtitle:

```text
Книги, які ви вже замовили й очікуєте отримати
```

Recommended route:

```text
/delivery/in-transit
```

або:

```text
/books/in-transit
```

Recommended MVP route:

```text
/in-transit
```

Page shows only active delivery records:

```text
deliveryStatus = ordered / in_transit
ownershipStatus = in_transit
```

It does not show:

```text
deliveryStatus = received
deliveryStatus = cancelled
```

Those belong to order history.

---

## 14. Books in Transit Page main blocks

The page should include:

* page header;
* search;
* filters;
* sorting;
* summary cards;
* books delivery list;
* delivery status badges;
* bulk actions;
* right sidebar statistics;
* donut chart;
* quick actions;
* helper tip;
* empty state;
* loading state;
* error state.

---

## 15. Summary cards

Recommended summary cards:

| Card                   | Description                                       |
| ---------------------- | ------------------------------------------------- |
| Усього книг в дорозі   | active delivery records count                     |
| Очікуються цього тижня | count by expectedDeliveryDate within current week |
| Затримуються           | delayed deliveries count                          |
| Загальна сума          | total price of active deliveries                  |
| Магазини               | unique store count                                |

Example:

```text
5 Усього книг в дорозі
2 Очікуються цього тижня
1 Затримується
2 450 грн Загальна сума
3 Магазини
```

Important:

```text
Загальна сума рахується тільки по delivery records, де price вказаний.
```

---

## 16. Donut chart

У MVP потрібен donut chart на сторінці **Книги в дорозі**.

Purpose:

* швидко показати розподіл активних доставок за статусами;
* допомогти користувачу побачити, скільки книг очікується скоро, скільки в дорозі, скільки затримується.

Recommended chart segments:

| Segment          | Source                                                                        |
| ---------------- | ----------------------------------------------------------------------------- |
| Очікуються скоро | calculated `arriving_soon`                                                    |
| В дорозі         | stored `deliveryStatus = in_transit` without delayed / arriving soon override |
| Затримуються     | calculated `delayed`                                                          |
| Замовлено        | stored `deliveryStatus = ordered`                                             |

Center label:

```text
5 книг
```

Right legend example:

```text
Очікуються скоро — 2
В дорозі — 1
Затримуються — 1
Замовлено — 1
```

Important:

```text
Donut chart показує тільки активні доставки.
Отримані та скасовані замовлення не входять у цей chart.
```

---

## 17. Search

Search placeholder:

```text
Пошук по книгах в дорозі...
```

Search should work by:

* book title;
* author;
* publisher;
* store name;
* order number;
* tracking number;
* delivery service;
* note.

---

## 18. Filters

Recommended filters:

```text
Усі
Замовлено
В дорозі
Очікуються скоро
Очікуються цього тижня
Затримуються
Без дати доставки
За магазином
За службою доставки
З номером ТТН
Без номера ТТН
З посиланням
Без посилання
Оплачені / з ціною
Без ціни
```

Important:

```text
Фільтри можуть комбінувати stored deliveryStatus і calculated UI status.
```

Example:

```text
filter = delayed
```

uses:

```text
expectedDeliveryDate < today
deliveryStatus !== received
deliveryStatus !== cancelled
```

---

## 19. Sorting

Recommended sorting options:

```text
Новіші спочатку
Старіші спочатку
За датою замовлення
За очікуваною датою доставки
Спочатку найближча доставка
Спочатку затримані
За магазином
За службою доставки
За назвою книги
За автором
За ціною
```

Default sorting:

```text
Очікувана дата доставки: найближча
```

If expectedDeliveryDate is missing:

```text
Книги без очікуваної дати показуються після книг із датою.
```

---

## 20. Delivery card overview

Each active delivery card should show:

### Book information

* cover;
* title;
* author;
* publisher;
* genres / tags.

### Order information

* store name;
* order date;
* expected delivery date;
* order number;
* tracking URL;
* price;
* currency.

### Delivery information

* delivery status badge;
* delivery service;
* tracking number;
* calculated UI status;
* note, if exists.

### Actions

* Позначити як отриману;
* Редагувати доставку;
* Скасувати замовлення;
* Перейти до книги;
* More menu.

---

## 21. Order history overview

Order history is part of MVP.

It should include all delivery records:

```text
ordered
in_transit
received
cancelled
```

Order history should allow user to see:

* active orders;
* received orders;
* cancelled orders;
* order dates;
* received dates;
* cancelled dates;
* stores;
* prices;
* delivery services;
* tracking numbers.

Important:

```text
Books in Transit Page показує активні доставки.
Order History показує всі delivery records.
```

---

## 22. Expense statistics overview

Expense statistics is part of MVP.

It should include:

* total spending;
* monthly spending;
* spending by store;
* average order value;
* number of orders per month;
* spending by status;
* currency handling.

Default currency:

```text
UAH
```

If multiple currencies exist:

```text
Показувати суми окремо по валютах або використовувати user-selected base currency in future.
```

Recommended MVP:

```text
Не робити автоматичну конвертацію валют.
Групувати витрати по currency.
```

---

## 23. Cross-feature updates

### 23.1. After marking book as in transit

Update:

* Book Details;
* Books to Buy;
* Books in Transit;
* My Library card;
* Dashboard delivery widget;
* delivery summary cards;
* order history.

---

### 23.2. After editing delivery info

Update:

* Books in Transit card;
* Book Details delivery block;
* order history;
* expense statistics;
* donut chart, if status/date changed;
* summary cards.

---

### 23.3. After marking book as received

Update:

* Book Details ownership status;
* Books in Transit list;
* My Library;
* order history;
* expense statistics;
* Dashboard;
* summary cards.

Book should no longer be active on Books in Transit Page.

---

### 23.4. After cancelling order

Update:

* Book Details ownership status;
* Books in Transit list;
* Books to Buy, if returned to wishlist;
* order history;
* expense statistics;
* summary cards.

---

## 24. Data safety rules

Delivery actions must not delete book data.

Delivery actions must not change:

```text
title
author
cover
description
readingStatus
formats
rating
progress
notes
quotes
characters
series relation
readingQueue state
custom lists
favorite state
loan data
```

Unless user performs a separate action.

Important:

```text
Скасувати замовлення ≠ видалити книгу.
Позначити як отриману ≠ створити нову книгу.
Книга вже існує в бібліотеці, змінюється тільки ownershipStatus і delivery record.
```

---

## 25. Permissions and access

Delivery records belong to a user.

Rules:

* користувач бачить тільки свої delivery records;
* користувач може редагувати тільки свої delivery records;
* користувач може позначати отриманими тільки свої книги;
* користувач не може бачити чужі замовлення;
* якщо book не належить користувачу, delivery actions недоступні;
* якщо delivery record не знайдено, показати safe error state.

Recommended not found message:

```text
Замовлення не знайдено
```

---

## 26. Main states

Delivery Module should support:

| State                     | Where                         |
| ------------------------- | ----------------------------- |
| No books in transit       | Books in Transit Page         |
| No search results         | Books in Transit Page         |
| No order history          | Order History                 |
| No expense data           | Expense Statistics            |
| Loading                   | all pages / modals            |
| Error                     | all pages / modals            |
| Delayed delivery          | delivery card                 |
| No expected delivery date | delivery card                 |
| Missing tracking number   | filters / card optional state |
| Received order            | order history                 |
| Cancelled order           | order history                 |
| Bulk action confirmation  | Books in Transit Page         |

---

## 27. MVP scope

Delivery Module MVP includes:

* ownership status `in_transit`;
* stored delivery statuses: `ordered`, `in_transit`, `received`, `cancelled`;
* calculated UI statuses: `arriving_soon`, `delayed`, `no_delivery_date`;
* page **Книги в дорозі**;
* modal **Позначити як В дорозі**;
* edit delivery info flow;
* mark as received flow;
* bulk mark as received;
* cancel delivery order flow;
* order history;
* monthly expense statistics;
* donut chart;
* summary cards;
* search;
* filters;
* sorting;
* store field;
* order date;
* expected delivery date;
* order number;
* tracking URL;
* price;
* currency;
* delivery service;
* tracking number / TTN;
* note;
* loading / empty / error states.

---

## 28. What is not included

У MVP Delivery Module не входить:

* автоматичний трекінг через Нову пошту / Укрпошту API;
* push notifications;
* email reminders;
* автоматичне оновлення статусу доставки з поштових сервісів;
* автоматична конвертація валют;
* кілька книг в одному delivery record;
* окрема система payment status;
* повернення товару в магазин;
* refund tracking;
* сканування ТТН;
* імпорт замовлень з email;
* інтеграція з магазинами;
* shared orders;
* public delivery data.

Important:

```text
MVP включає ручне відстеження доставки.
Автоматичні інтеграції залишаються на future.
```

---

## 29. Future improvements

Future improvements можуть включати:

* автоматичний tracking delivery service;
* інтеграцію з Новою поштою;
* інтеграцію з Укрпоштою;
* push reminders;
* email reminders;
* нагадування про затримки;
* автоматичний імпорт замовлень з email;
* кілька книг в одному замовленні;
* payment status;
* refund status;
* barcode / TTN scanner;
* currency conversion;
* yearly expense analytics;
* store recommendations;
* delivery calendar.

---

## 30. Acceptance Criteria

### Documentation structure

* Delivery Module має overview documentation.
* Overview documentation перелічує всі related feature docs.
* Overview documentation пояснює відповідальність кожного файла.
* Overview documentation не дублює повністю детальні feature docs.

### Status logic

* Delivery Module використовує `ownershipStatus = in_transit`.
* `ebook` і `audiobook` не використовуються як ownership statuses.
* Delivery Module має окремий `deliveryStatus`.
* `ordered`, `in_transit`, `received`, `cancelled` є stored delivery statuses.
* `arriving_soon`, `delayed`, `no_delivery_date` є calculated UI statuses.
* `received` і `cancelled` не показуються як активні доставки на Books in Transit Page.

### Delivery record

* Delivery record має `bookId`.
* Delivery record має `userId`.
* Delivery record має `storeName`.
* Delivery record має `orderDate`.
* Delivery record може мати `expectedDeliveryDate`.
* Delivery record може мати `orderNumber`.
* Delivery record може мати `trackingUrl`.
* Delivery record може мати `price`.
* Delivery record може мати `currency`.
* Delivery record може мати `deliveryService`.
* Delivery record може мати `trackingNumber`.
* Delivery record може мати `note`.

### Main flows

* Користувач може позначити книгу як “В дорозі”.
* Користувач може редагувати delivery info.
* Користувач може переглядати сторінку “Книги в дорозі”.
* Користувач може позначити книгу як отриману.
* Користувач може bulk позначити книги як отримані.
* Користувач може скасувати замовлення.
* Користувач може переглядати історію замовлень.
* Користувач може переглядати статистику витрат.

### Books in Transit Page

* Сторінка показує тільки активні доставки.
* Сторінка має summary cards.
* Сторінка має donut chart.
* Сторінка має search.
* Сторінка має filters.
* Сторінка має sorting.
* Сторінка має delivery cards.
* Користувач може перейти до Book Details.
* Користувач може редагувати доставку з картки.
* Користувач може позначити книгу як отриману з картки.
* Користувач може скасувати замовлення з картки.

### Order history

* Order history показує всі delivery records.
* Order history включає active, received і cancelled orders.
* Received orders мають `receivedAt`.
* Cancelled orders мають `cancelledAt`.
* Order history не видаляє книги з бібліотеки.

### Expense statistics

* Expense statistics показує витрати за місяцями.
* Expense statistics враховує тільки delivery records з price.
* Expense statistics підтримує currency.
* У MVP автоматична конвертація валют не потрібна.

### Data safety

* Delivery actions не видаляють книгу.
* Delivery actions не змінюють readingStatus книги.
* Delivery actions не змінюють series relation.
* Delivery actions не видаляють notes, quotes, characters або rating.
* Delivery actions не прибирають книгу з Reading Queue.
* Delivery actions не прибирають книгу з Custom Lists.

### MVP scope

* MVP підтримує ручне відстеження доставки.
* MVP підтримує службу доставки.
* MVP підтримує номер ТТН.
* MVP підтримує історію всіх замовлень.
* MVP підтримує статистику витрат за місяцями.
* MVP підтримує bulk “позначити як отримані”.
* MVP підтримує donut chart.
* MVP не підтримує автоматичні інтеграції з поштовими сервісами.
