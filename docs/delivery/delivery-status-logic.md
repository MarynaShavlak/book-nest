# Feature: Delivery Status Logic

## 1. Purpose

Feature **Delivery Status Logic** описує всі статуси, переходи між ними та правила розрахунку delivery state у BookNest.

Цей документ потрібен для того, щоб у всьому delivery-модулі однаково працювали:

* статус володіння книги;
* статус доставки;
* calculated UI status;
* сторінка **Книги в дорозі**;
* Book Details;
* Books to Buy;
* Order History;
* Expense Statistics;
* bulk actions;
* filters;
* badges;
* summary cards;
* donut chart.

Important:

```text
Delivery Status Logic є базовим документом для всіх delivery feature docs.
```

Пов’язані документи:

```text
delivery-module-overview.md
books-in-transit-page.md
mark-book-as-in-transit.md
edit-delivery-info.md
mark-book-as-received.md
cancel-delivery-order.md
delivery-order-history.md
delivery-expense-statistics.md
```

---

## 2. Main idea

У delivery-модулі є три різні рівні статусів:

```text
1. ownershipStatus
2. deliveryStatus
3. deliveryUiStatus
```

Їх не можна змішувати.

---

### 2.1. ownershipStatus

`ownershipStatus` відповідає на питання:

```text
Який статус володіння книги у користувача?
```

Example:

```text
Хочу купити
В дорозі
Маю
```

---

### 2.2. deliveryStatus

`deliveryStatus` відповідає на питання:

```text
Що відбувається із конкретним delivery record / замовленням?
```

Example:

```text
Замовлено
В дорозі
Отримано
Скасовано
```

---

### 2.3. deliveryUiStatus

`deliveryUiStatus` відповідає на питання:

```text
Як зараз показати доставку в UI з урахуванням очікуваної дати?
```

Example:

```text
Очікується скоро
Затримується
Без дати доставки
```

Important:

```text
deliveryUiStatus не зберігається як основний статус.
Він розраховується автоматично на основі expectedDeliveryDate і поточної дати.
```

---

## 3. Ownership status

Delivery Module використовує існуючий статус володіння книги.

Recommended ownership statuses:

```ts
export type OwnershipStatus =
  | "none"
  | "want_to_buy"
  | "in_transit"
  | "owned"
  | "borrowed_from_someone"
  | "lent_to_someone";
```

---

### 3.1. Relevant ownership statuses for delivery

| Status                  | Label             | Meaning                           |
| ----------------------- | ----------------- | --------------------------------- |
| `none`                  | Немає             | книги немає у користувача         |
| `want_to_buy`           | Хочу купити       | користувач хоче купити книгу      |
| `in_transit`            | В дорозі          | книга замовлена і очікується      |
| `owned`                 | Маю               | книга вже отримана                |
| `borrowed_from_someone` | Позичена у когось | книга позичена в іншої людини     |
| `lent_to_someone`       | Видана комусь     | користувач дав книгу іншій людині |

---

### 3.2. Important rule

```text
ebook і audiobook не є ownership statuses.
```

Вони мають бути окремими форматами:

```ts
export type BookFormat =
  | "paper"
  | "ebook"
  | "audiobook";
```

---

## 4. Stored delivery status

`deliveryStatus` — це статус, який зберігається у delivery record.

Recommended config:

```ts
export const deliveryStatuses = [
  {
    value: "ordered",
    label: "Замовлено",
    tone: "neutral",
    icon: "i-package",
    isDefault: true,
  },
  {
    value: "in_transit",
    label: "В дорозі",
    tone: "info",
    icon: "i-truck",
  },
  {
    value: "received",
    label: "Отримано",
    tone: "success",
    icon: "i-check-circle",
  },
  {
    value: "cancelled",
    label: "Скасовано",
    tone: "neutral",
    icon: "i-x-circle",
  },
] as const;

export type DeliveryStatus =
  (typeof deliveryStatuses)[number]["value"];
```

---

### 4.1. Delivery status meanings

| Status       | Label     | Meaning                                                |
| ------------ | --------- | ------------------------------------------------------ |
| `ordered`    | Замовлено | замовлення створено, книга ще не доставляється активно |
| `in_transit` | В дорозі  | доставка вже почалася або книга фактично в дорозі      |
| `received`   | Отримано  | книга отримана користувачем                            |
| `cancelled`  | Скасовано | замовлення скасоване                                   |

---

### 4.2. Default delivery status

Коли користувач позначає книгу як **В дорозі**, створюється delivery record.

Default stored status:

```ts
deliveryStatus = "ordered";
```

Reason:

```text
Користувач уже замовив книгу, але це ще не обов’язково означає, що доставка фізично почалася.
```

---

## 5. Calculated UI statuses

`deliveryUiStatus` розраховується автоматично і не має зберігатися як основний статус delivery record.

Recommended config:

```ts
export const deliveryUiStatuses = [
  {
    value: "arriving_soon",
    label: "Очікується скоро",
    tone: "accent",
    icon: "i-clock",
  },
  {
    value: "delayed",
    label: "Затримується",
    tone: "warning",
    icon: "i-alert-triangle",
  },
  {
    value: "no_delivery_date",
    label: "Без дати доставки",
    tone: "neutral",
    icon: "i-calendar-off",
  },
] as const;

export type DeliveryUiStatus =
  (typeof deliveryUiStatuses)[number]["value"];
```

---

### 5.1. UI status meanings

| UI Status          | Label             | When                                                                   |
| ------------------ | ----------------- | ---------------------------------------------------------------------- |
| `arriving_soon`    | Очікується скоро  | expected delivery date сьогодні, завтра або протягом найближчих 7 днів |
| `delayed`          | Затримується      | expected delivery date вже минула, а книга не отримана                 |
| `no_delivery_date` | Без дати доставки | expected delivery date не вказана                                      |

---

### 5.2. Why UI statuses are calculated

```text
arriving_soon і delayed залежать від поточної дати.
```

Example:

```text
Сьогодні 15.06.
Очікувана дата доставки 16.06.
UI status: Очікується скоро.

Сьогодні 17.06.
Книга ще не отримана.
UI status: Затримується.
```

Тому ці статуси краще рахувати в UI / selector logic, а не зберігати як основний delivery status.

---

## 6. Delivery UI status calculation

Recommended logic:

```ts
export const getDeliveryUiStatus = (
  expectedDeliveryDate?: string | null,
): DeliveryUiStatus | null => {
  if (!expectedDeliveryDate) {
    return "no_delivery_date";
  }

  const today = new Date();
  const expectedDate = new Date(expectedDeliveryDate);

  today.setHours(0, 0, 0, 0);
  expectedDate.setHours(0, 0, 0, 0);

  const diffInMs = expectedDate.getTime() - today.getTime();
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays < 0) {
    return "delayed";
  }

  if (diffInDays <= 7) {
    return "arriving_soon";
  }

  return null;
};
```

---

### 6.1. Calculation rules

| Condition                                         | Result             |
| ------------------------------------------------- | ------------------ |
| `expectedDeliveryDate` is empty                   | `no_delivery_date` |
| `expectedDeliveryDate < today`                    | `delayed`          |
| `expectedDeliveryDate >= today` and within 7 days | `arriving_soon`    |
| `expectedDeliveryDate > 7 days from today`        | `null`             |

If result is `null`, UI can show stored delivery status:

```text
Замовлено
```

or:

```text
В дорозі
```

---

### 6.2. Human-readable labels

UI can show additional relative text:

| Condition                    | Label                 |
| ---------------------------- | --------------------- |
| expected date is today       | Сьогодні              |
| expected date is tomorrow    | Завтра                |
| expected date in 2 days      | Через 2 дні           |
| expected date in 6 days      | Через 6 днів          |
| expected date was yesterday  | Прострочено на 1 день |
| expected date was 3 days ago | Прострочено на 3 дні  |
| no expected date             | Без дати доставки     |

---

## 7. Active delivery logic

Сторінка **Книги в дорозі** має показувати тільки активні delivery records.

Active delivery condition:

```ts
ownershipStatus === "in_transit" &&
(deliveryStatus === "ordered" || deliveryStatus === "in_transit")
```

Active deliveries include:

```text
Замовлено
В дорозі
Очікується скоро
Затримується
Без дати доставки
```

Important:

```text
Очікується скоро, Затримується і Без дати доставки — це calculated UI statuses поверх active delivery.
```

---

## 8. Inactive delivery logic

Inactive delivery records не показуються на сторінці **Книги в дорозі**.

Inactive delivery statuses:

```text
received
cancelled
```

They belong to:

```text
Order History
Expense Statistics
Book Details delivery history
```

---

### 8.1. Received delivery

When:

```ts
deliveryStatus === "received"
```

Then:

```ts
ownershipStatus = "owned";
receivedAt = currentDate;
```

Result:

* книга зникає зі сторінки **Книги в дорозі**;
* книга залишається в **Моїй бібліотеці**;
* delivery record переходить в **Order History**;
* витрати можуть враховуватися в **Expense Statistics**.

---

### 8.2. Cancelled delivery

When:

```ts
deliveryStatus === "cancelled"
```

Then:

```ts
cancelledAt = currentDate;
```

And ownership status becomes either:

```ts
ownershipStatus = "want_to_buy";
```

or:

```ts
ownershipStatus = "none";
```

Recommended default:

```ts
ownershipStatus = "want_to_buy";
```

Result:

* книга зникає зі сторінки **Книги в дорозі**;
* delivery record переходить в **Order History**;
* якщо ownershipStatus став `want_to_buy`, книга з’являється в **Книги до покупки**.

---

## 9. Status transitions

### 9.1. Main transition

```text
want_to_buy → in_transit → owned
```

Detailed:

| From ownershipStatus | Action                  | To ownershipStatus | deliveryStatus |
| -------------------- | ----------------------- | ------------------ | -------------- |
| `want_to_buy`        | Позначити як “В дорозі” | `in_transit`       | `ordered`      |
| `none`               | Позначити як “В дорозі” | `in_transit`       | `ordered`      |
| `in_transit`         | Позначити як отриману   | `owned`            | `received`     |

---

### 9.2. Cancel transition

```text
in_transit → want_to_buy
```

or:

```text
in_transit → none
```

Detailed:

| From ownershipStatus | Action                                       | To ownershipStatus | deliveryStatus |
| -------------------- | -------------------------------------------- | ------------------ | -------------- |
| `in_transit`         | Скасувати замовлення, залишити в wishlist    | `want_to_buy`      | `cancelled`    |
| `in_transit`         | Скасувати замовлення, не залишати в wishlist | `none`             | `cancelled`    |

---

### 9.3. Delivery status transition

Stored delivery status can move like this:

```text
ordered → in_transit → received
```

or:

```text
ordered → cancelled
```

or:

```text
in_transit → cancelled
```

---

## 10. Allowed actions by status

### 10.1. Actions by ownershipStatus

| ownershipStatus         | Available delivery actions                                       |
| ----------------------- | ---------------------------------------------------------------- |
| `none`                  | Позначити як “В дорозі”                                          |
| `want_to_buy`           | Позначити як “В дорозі”                                          |
| `in_transit`            | Редагувати доставку, Позначити як отриману, Скасувати замовлення |
| `owned`                 | no active delivery actions                                       |
| `borrowed_from_someone` | no delivery actions                                              |
| `lent_to_someone`       | no delivery actions                                              |

---

### 10.2. Actions by deliveryStatus

| deliveryStatus | Available actions                                                                       |
| -------------- | --------------------------------------------------------------------------------------- |
| `ordered`      | Редагувати доставку, Змінити на “В дорозі”, Позначити як отриману, Скасувати замовлення |
| `in_transit`   | Редагувати доставку, Позначити як отриману, Скасувати замовлення                        |
| `received`     | no active delivery actions, show in history                                             |
| `cancelled`    | no active delivery actions, show in history                                             |

---

## 11. Books in Transit filters

Filters on Books in Transit Page can use both stored statuses and calculated UI statuses.

Recommended filter config:

```ts
export const booksInTransitFilters = [
  {
    value: "all",
    label: "Усі",
  },
  {
    value: "ordered",
    label: "Замовлено",
  },
  {
    value: "in_transit",
    label: "В дорозі",
  },
  {
    value: "arriving_soon",
    label: "Очікується скоро",
  },
  {
    value: "this_week",
    label: "Очікуються цього тижня",
  },
  {
    value: "delayed",
    label: "Затримуються",
  },
  {
    value: "no_delivery_date",
    label: "Без дати доставки",
  },
  {
    value: "has_tracking_number",
    label: "З номером ТТН",
  },
  {
    value: "without_tracking_number",
    label: "Без номера ТТН",
  },
  {
    value: "has_tracking_url",
    label: "З посиланням",
  },
  {
    value: "without_tracking_url",
    label: "Без посилання",
  },
  {
    value: "has_price",
    label: "З ціною",
  },
  {
    value: "without_price",
    label: "Без ціни",
  },
] as const;

export type BooksInTransitFilter =
  (typeof booksInTransitFilters)[number]["value"];
```

---

### 11.1. Filter rules

| Filter                    | Logic                                         |
| ------------------------- | --------------------------------------------- |
| `all`                     | all active deliveries                         |
| `ordered`                 | `deliveryStatus = ordered`                    |
| `in_transit`              | `deliveryStatus = in_transit`                 |
| `arriving_soon`           | calculated UI status = `arriving_soon`        |
| `this_week`               | expected date is within current calendar week |
| `delayed`                 | calculated UI status = `delayed`              |
| `no_delivery_date`        | calculated UI status = `no_delivery_date`     |
| `has_tracking_number`     | `trackingNumber` exists                       |
| `without_tracking_number` | `trackingNumber` is empty                     |
| `has_tracking_url`        | `trackingUrl` exists                          |
| `without_tracking_url`    | `trackingUrl` is empty                        |
| `has_price`               | `price` exists                                |
| `without_price`           | `price` is empty                              |

---

## 12. Badge priority

Delivery card can have both stored status and calculated UI status.

Example:

```text
deliveryStatus = ordered
expectedDeliveryDate = yesterday
```

UI should show:

```text
Затримується
```

not:

```text
Замовлено
```

Recommended badge priority:

```text
1. delayed
2. arriving_soon
3. no_delivery_date
4. stored deliveryStatus
```

Reason:

```text
Затримка важливіша для користувача, ніж базовий статус “Замовлено”.
```

---

## 13. Donut chart status groups

Donut chart on Books in Transit Page should count only active deliveries.

Recommended chart groups:

| Group             | Source                                               |
| ----------------- | ---------------------------------------------------- |
| Очікуються скоро  | calculated `arriving_soon`                           |
| Затримуються      | calculated `delayed`                                 |
| Без дати доставки | calculated `no_delivery_date`                        |
| В дорозі          | stored `in_transit`, if no higher priority UI status |
| Замовлено         | stored `ordered`, if no higher priority UI status    |

Important:

```text
One delivery record should belong to only one donut segment.
```

Use badge priority to assign group:

```text
delayed → arriving_soon → no_delivery_date → in_transit → ordered
```

---

## 14. Summary cards calculation

### 14.1. Усього книг в дорозі

Count all active deliveries:

```ts
ownershipStatus === "in_transit" &&
(deliveryStatus === "ordered" || deliveryStatus === "in_transit")
```

---

### 14.2. Очікуються цього тижня

Count active deliveries where:

```text
expectedDeliveryDate is within current calendar week
```

---

### 14.3. Затримуються

Count active deliveries where:

```text
deliveryUiStatus = delayed
```

---

### 14.4. Загальна сума

Sum `price` for active deliveries where price exists.

Rules:

* ignore empty price;
* group by currency;
* default currency is `UAH`;
* do not auto-convert currencies in MVP.

---

### 14.5. Магазини

Count unique `storeName` from active deliveries.

---

## 15. Order History status logic

Order History shows all delivery records:

```text
ordered
in_transit
received
cancelled
```

But it can separate them by tabs or filters:

```text
Усі
Активні
Отримані
Скасовані
```

Recommended logic:

| Tab       | Records                 |
| --------- | ----------------------- |
| Усі       | all delivery records    |
| Активні   | `ordered`, `in_transit` |
| Отримані  | `received`              |
| Скасовані | `cancelled`             |

---

## 16. Expense Statistics status logic

Expense Statistics can include delivery records with price.

Recommended MVP behavior:

```text
Include active, received and cancelled records if price exists.
```

But show status breakdown:

| Status group | Meaning                           |
| ------------ | --------------------------------- |
| Активні      | money currently in active orders  |
| Отримані     | completed spending                |
| Скасовані    | cancelled orders with saved price |

Important:

```text
Скасовані замовлення не обов’язково означають реальні витрати.
Тому в Expense Statistics потрібно вміти фільтрувати їх окремо.
```

Recommended default for total spending:

```text
Count received + active orders.
Do not include cancelled orders in main total by default.
```

---

## 17. Bulk status changes

Bulk action is part of MVP.

### 17.1. Bulk mark selected as received

User can select multiple active deliveries and mark them as received.

Allowed records:

```text
deliveryStatus = ordered / in_transit
ownershipStatus = in_transit
```

After confirm:

```ts
ownershipStatus = "owned";
deliveryStatus = "received";
receivedAt = currentDate;
```

---

### 17.2. Bulk mark all as received

User can mark all active deliveries as received.

Important:

```text
Bulk “Позначити всі як отримані” must require confirmation.
```

Confirmation should show:

* number of books;
* warning that all selected books will disappear from Books in Transit Page;
* confirmation button.

Example:

```text
Позначити 5 книг як отримані?
Вони зникнуть зі сторінки “Книги в дорозі” і залишаться у вашій бібліотеці зі статусом “Маю”.
```

---

### 17.3. Bulk safety rules

Bulk action must not change:

* readingStatus;
* format;
* rating;
* notes;
* quotes;
* series relation;
* custom lists;
* reading queue.

---

## 18. Validation rules

### 18.1. Required fields for delivery record

Required:

```text
storeName
orderDate
```

---

### 18.2. Date validation

| Field                  | Validation                                   |
| ---------------------- | -------------------------------------------- |
| `orderDate`            | required, cannot be in the future            |
| `expectedDeliveryDate` | optional, cannot be earlier than `orderDate` |
| `receivedAt`           | set automatically when marked as received    |
| `cancelledAt`          | set automatically when cancelled             |

Error messages:

```text
Оберіть магазин
Оберіть дату замовлення
Дата замовлення не може бути в майбутньому
Очікувана дата доставки не може бути раніше дати замовлення
```

---

### 18.3. URL validation

If `trackingUrl` is filled, it must be a valid URL.

Error:

```text
Посилання має бути валідним URL
```

---

### 18.4. Price validation

If `price` is filled:

* must be a number;
* must be greater than or equal to 0;
* currency should be selected or default to `UAH`.

Errors:

```text
Ціна має бути числом
Ціна не може бути меншою за 0
```

---

### 18.5. Text field validation

| Field            | Max length  |
| ---------------- | ----------- |
| `orderNumber`    | 100 symbols |
| `trackingNumber` | 100 symbols |
| `note`           | 500 symbols |

Errors:

```text
Номер замовлення не може бути довшим за 100 символів
Номер ТТН не може бути довшим за 100 символів
Нотатка не може бути довшою за 500 символів
```

---

## 19. Data update rules

### 19.1. Mark as in transit

When user marks book as in transit:

```ts
ownershipStatus = "in_transit";
deliveryStatus = "ordered";
```

Also save:

```text
storeName
orderDate
expectedDeliveryDate
orderNumber
trackingUrl
price
currency
deliveryService
trackingNumber
note
```

---

### 19.2. Change delivery status to in_transit

If user manually changes delivery status from ordered to in_transit:

```ts
deliveryStatus = "in_transit";
```

Ownership stays:

```ts
ownershipStatus = "in_transit";
```

---

### 19.3. Mark as received

When user marks book as received:

```ts
ownershipStatus = "owned";
deliveryStatus = "received";
receivedAt = currentDate;
```

---

### 19.4. Cancel order

When user cancels order:

```ts
deliveryStatus = "cancelled";
cancelledAt = currentDate;
```

Ownership becomes:

```ts
ownershipStatus = "want_to_buy";
```

or:

```ts
ownershipStatus = "none";
```

depending on user choice.

---

## 20. Cross-page behavior

### 20.1. Books to Buy

Book appears on Books to Buy if:

```ts
ownershipStatus === "want_to_buy";
```

Book disappears from Books to Buy if:

```ts
ownershipStatus === "in_transit";
```

---

### 20.2. Books in Transit

Book appears on Books in Transit if:

```ts
ownershipStatus === "in_transit" &&
(deliveryStatus === "ordered" || deliveryStatus === "in_transit");
```

Book disappears from Books in Transit if:

```ts
deliveryStatus === "received" || deliveryStatus === "cancelled";
```

---

### 20.3. My Library

Book remains in My Library in all cases unless the book itself is deleted.

Important:

```text
Delivery actions do not delete books.
```

---

### 20.4. Book Details

Book Details should show delivery block if:

```ts
ownershipStatus === "in_transit";
```

Book Details can show delivery history if:

```text
delivery records exist
```

---

### 20.5. Order History

Order History shows all delivery records:

```text
ordered
in_transit
received
cancelled
```

---

## 21. Error states

### 21.1. Invalid status transition

If user tries an invalid transition:

```text
Неможливо змінити статус доставки
```

Example:

```text
received → in_transit
```

should not be allowed from normal UI.

---

### 21.2. Missing delivery record

If book has `ownershipStatus = in_transit`, but delivery record is missing:

```text
Інформацію про доставку не знайдено
```

Recommended action:

```text
Додати інформацію про доставку
```

---

### 21.3. Book not found

If book no longer exists:

```text
Книгу не знайдено
```

---

### 21.4. Access denied

If delivery record does not belong to current user:

```text
Замовлення не знайдено
```

Do not expose details of another user's data.

---

## 22. What is not included

У Delivery Status Logic MVP не входить:

* автоматичне оновлення статусу через API поштових сервісів;
* інтеграція з Новою поштою;
* інтеграція з Укрпоштою;
* push reminders;
* email reminders;
* автоматичне визначення deliveryStatus по ТТН;
* автоматичне створення delivery records з email;
* автоматична конвертація валют;
* кілька книг в одному delivery record;
* refund status;
* return-to-store status;
* payment status як окрема система.

Important:

```text
MVP підтримує ручне керування статусами доставки.
```

---

## 23. Acceptance Criteria

### Status separation

* `ownershipStatus`, `deliveryStatus` і `deliveryUiStatus` описані як різні рівні статусів.
* `ownershipStatus` відповідає за володіння книгою.
* `deliveryStatus` відповідає за delivery record.
* `deliveryUiStatus` розраховується автоматично для UI.
* `ebook` і `audiobook` не є ownership statuses.

### Stored delivery statuses

* `ordered` є stored delivery status.
* `in_transit` є stored delivery status.
* `received` є stored delivery status.
* `cancelled` є stored delivery status.
* `ordered` є default статусом після створення delivery record.
* `received` і `cancelled` не показуються як активні доставки.

### Calculated UI statuses

* `arriving_soon` розраховується з `expectedDeliveryDate`.
* `delayed` розраховується з `expectedDeliveryDate`.
* `no_delivery_date` розраховується, якщо expected delivery date відсутня.
* Calculated UI statuses не зберігаються як основний deliveryStatus.
* UI status може змінюватися залежно від поточної дати.

### Active deliveries

* Books in Transit Page показує тільки active deliveries.
* Active delivery має `ownershipStatus = in_transit`.
* Active delivery має `deliveryStatus = ordered` або `deliveryStatus = in_transit`.
* Received records не показуються на Books in Transit Page.
* Cancelled records не показуються на Books in Transit Page.

### Status transitions

* Користувач може перейти з `want_to_buy` в `in_transit`.
* Користувач може перейти з `none` в `in_transit`.
* Користувач може перейти з `in_transit` в `owned`.
* Користувач може скасувати delivery order.
* При скасуванні книга може повернутися в `want_to_buy`.
* При скасуванні книга може перейти в `none`.

### Filters and badges

* Filters можуть використовувати stored delivery statuses.
* Filters можуть використовувати calculated UI statuses.
* Badge priority визначений.
* `delayed` має вищий пріоритет за stored status.
* Donut chart використовує тільки active deliveries.
* One delivery record належить тільки до одного donut segment.

### Bulk actions

* Bulk mark as received доступний тільки для active deliveries.
* Bulk action має confirmation modal.
* Bulk action змінює `ownershipStatus` на `owned`.
* Bulk action змінює `deliveryStatus` на `received`.
* Bulk action встановлює `receivedAt`.

### Validation

* `storeName` required.
* `orderDate` required.
* `orderDate` не може бути в майбутньому.
* `expectedDeliveryDate` не може бути раніше `orderDate`.
* `trackingUrl` має бути валідним URL, якщо заповнений.
* `price` має бути числом, якщо заповнений.
* `trackingNumber` має max length.
* `note` має max length.

### Cross-page behavior

* Книга зі статусом `want_to_buy` показується в Books to Buy.
* Книга зі статусом `in_transit` показується в Books in Transit.
* Книга з `deliveryStatus = received` зникає з Books in Transit.
* Книга з `deliveryStatus = cancelled` зникає з Books in Transit.
* Книга залишається в My Library після delivery actions.
* Order History показує всі delivery records.

### Data safety

* Delivery status changes не видаляють книгу.
* Delivery status changes не змінюють readingStatus.
* Delivery status changes не змінюють series relation.
* Delivery status changes не видаляють notes, quotes, characters або rating.
* Delivery status changes не прибирають книгу з Reading Queue.
* Delivery status changes не прибирають книгу з Custom Lists.
