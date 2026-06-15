# Feature: Mark Book as In Transit

## 1. Purpose

Feature **Mark Book as In Transit** описує flow, який дозволяє користувачу позначити книгу як замовлену та додати інформацію про доставку.

Ця дія переводить книгу в delivery flow:

```text
Хочу купити → В дорозі
```

або:

```text
Немає → В дорозі
```

Після виконання дії:

* у книги змінюється `ownershipStatus`;
* створюється delivery record;
* книга з’являється на сторінці **Книги в дорозі**;
* книга зникає зі сторінки **Книги до покупки**, якщо була там;
* на Book Details з’являється блок з інформацією про доставку.

---

## 2. Main idea

Користувач може замовити книгу і вручну позначити її як **В дорозі**.

Це означає:

```text
Книга вже замовлена, але ще не отримана.
```

У цьому flow створюється delivery record із деталями замовлення:

* магазин;
* дата замовлення;
* очікувана дата доставки;
* номер замовлення;
* посилання на замовлення / трекінг;
* ціна;
* валюта;
* служба доставки;
* номер ТТН;
* нотатка.

Important:

```text
Mark Book as In Transit не створює нову книгу.
Він працює з уже існуючою книгою в бібліотеці.
```

---

## 3. Related documentation

Related docs:

```text
delivery-module-overview.md
delivery-status-logic.md
books-in-transit-page.md
edit-delivery-info.md
mark-book-as-received.md
cancel-delivery-order.md
delivery-order-history.md
delivery-expense-statistics.md
book-details-page.md
books-to-buy-page.md
```

---

## 4. Entry points

Action **Позначити як “В дорозі”** може бути доступна з кількох місць.

### 4.1. Book Details Page

Recommended location:

```text
Book Details → Right sidebar → Quick actions
```

Action label:

```text
Позначити як “В дорозі”
```

Show when:

```ts
ownershipStatus === "none" || ownershipStatus === "want_to_buy"
```

---

### 4.2. Books to Buy Page

Recommended location:

```text
Books to Buy Page → Book card actions
```

Action label:

```text
Позначити як “В дорозі”
```

or shorter:

```text
Замовила
```

Recommended MVP:

```text
Позначити як “В дорозі”
```

Reason:

```text
Назва дії має бути зрозумілою і збігатися з delivery flow.
```

---

### 4.3. My Library Page

Optional entry point:

```text
My Library → Book card menu → Позначити як “В дорозі”
```

Show only if book has:

```ts
ownershipStatus === "none" || ownershipStatus === "want_to_buy"
```

---

### 4.4. Create / Edit Book Form

Якщо користувач у Create / Edit Book Form вибирає ownership status:

```text
В дорозі
```

система має показати delivery fields або відкрити modal для заповнення delivery information.

Recommended MVP behavior:

```text
У Book Form можна вибрати статус “В дорозі”, але delivery details краще заповнювати через той самий modal / section, що і в цьому flow.
```

---

## 5. When to show action

Action **Позначити як “В дорозі”** показується, якщо книга ще не в активній доставці.

Allowed statuses:

| ownershipStatus         | Show action |
| ----------------------- | ----------- |
| `none`                  | yes         |
| `want_to_buy`           | yes         |
| `in_transit`            | no          |
| `owned`                 | no          |
| `borrowed_from_someone` | no          |
| `lent_to_someone`       | no          |

---

## 6. When not to show action

Action не показується, якщо:

```ts
ownershipStatus === "in_transit"
```

Reason:

```text
Книга вже знаходиться в delivery flow.
```

Action не показується, якщо:

```ts
ownershipStatus === "owned"
```

Reason:

```text
Книга вже отримана.
```

Action не показується, якщо:

```ts
ownershipStatus === "borrowed_from_someone" ||
ownershipStatus === "lent_to_someone"
```

Reason:

```text
Позичені або видані книги не мають переходити в delivery flow.
```

---

## 7. Modal: Mark Book as In Transit

Після натискання action відкривається modal.

Modal title:

```text
Позначити як “В дорозі”
```

Subtitle:

```text
Додайте інформацію про замовлення, щоб відстежувати доставку.
```

Primary button:

```text
Позначити як “В дорозі”
```

Secondary button:

```text
Скасувати
```

---

## 8. Modal layout

Recommended modal layout:

```text
[Modal title]
[Subtitle]

[Book preview]

[Delivery form]
  [Магазин *]
  [Дата замовлення *]
  [Очікувана дата доставки]
  [Номер замовлення]
  [Посилання на замовлення / трекінг]
  [Ціна] [Валюта]
  [Служба доставки]
  [Номер ТТН]
  [Нотатка]

[Helper tip]

[Cancel] [Submit]
```

On desktop:

```text
Left side: Book preview
Right side: Delivery form
```

On mobile:

```text
1 column layout
Book preview above form
```

---

## 9. Book preview

Modal має показувати короткий preview книги, щоб користувач був упевнений, що змінює правильну книгу.

Show:

| Element          | Source                              |
| ---------------- | ----------------------------------- |
| Cover            | `book.coverUrl`                     |
| Title            | `book.title`                        |
| Author           | `book.author`                       |
| Publisher        | `book.publisher`                    |
| Genre / main tag | `book.genres[0]` або `book.tags[0]` |

Example:

```text
Четверте крило
Ребекка Яррос
Vivat · Фентезі
```

If cover is missing:

```text
Show book cover placeholder.
```

---

## 10. Delivery form fields

### 10.1. Store

Field label:

```text
Магазин *
```

Source:

```ts
storeName
```

Type:

```text
Select / Autocomplete / Text input
```

Required:

```text
Yes
```

Placeholder:

```text
Оберіть магазин
```

Recommended options:

```ts
export const bookStores = [
  { value: "yakaboo", label: "Yakaboo" },
  { value: "knyharnia_ye", label: "Книгарня Є" },
  { value: "vivat", label: "Vivat" },
  { value: "ksd", label: "КСД" },
  { value: "nash_format", label: "Наш Формат" },
  { value: "bookchef", label: "BookChef" },
  { value: "laboratory", label: "Лабораторія" },
  { value: "amazon", label: "Amazon" },
  { value: "other", label: "Інше" },
] as const;
```

Behavior:

* user can select predefined store;
* user can enter custom store;
* if selected `other`, show custom store input;
* value is used in filters, search, statistics and order history.

Validation:

```text
Required
Trim spaces
Max 100 symbols
```

Error:

```text
Оберіть магазин
```

---

### 10.2. Order date

Field label:

```text
Дата замовлення *
```

Source:

```ts
orderDate
```

Type:

```text
Date picker
```

Required:

```text
Yes
```

Placeholder:

```text
Оберіть дату
```

Default:

```text
Current date
```

Validation:

* required;
* cannot be in the future.

Error messages:

```text
Оберіть дату замовлення
Дата замовлення не може бути в майбутньому
```

---

### 10.3. Expected delivery date

Field label:

```text
Очікувана дата доставки
```

Source:

```ts
expectedDeliveryDate
```

Type:

```text
Date picker
```

Required:

```text
No
```

Placeholder:

```text
Оберіть дату
```

Validation:

* optional;
* cannot be earlier than `orderDate`.

Error:

```text
Очікувана дата доставки не може бути раніше дати замовлення
```

Used for:

* badge **Очікується скоро**;
* badge **Затримується**;
* filter **Очікуються цього тижня**;
* filter **Без дати доставки**;
* summary cards;
* donut chart.

---

### 10.4. Order number

Field label:

```text
Номер замовлення
```

Source:

```ts
orderNumber
```

Type:

```text
Text input
```

Required:

```text
No
```

Placeholder:

```text
Наприклад: № 482915
```

Validation:

* optional;
* max 100 symbols.

Error:

```text
Номер замовлення не може бути довшим за 100 символів
```

Important:

```text
Номер замовлення не замінює номер ТТН.
```

---

### 10.5. Tracking URL

Field label:

```text
Посилання на замовлення / трекінг
```

Source:

```ts
trackingUrl
```

Type:

```text
URL input
```

Required:

```text
No
```

Placeholder:

```text
https://
```

Can contain:

* link to store order page;
* link to delivery tracking;
* link to book order.

Validation:

* optional;
* must be valid URL if filled.

Error:

```text
Посилання має бути валідним URL
```

---

### 10.6. Price

Field label:

```text
Ціна
```

Source:

```ts
price
```

Type:

```text
Number input
```

Required:

```text
No
```

Placeholder:

```text
520
```

Validation:

* optional;
* must be a number;
* cannot be negative.

Error messages:

```text
Ціна має бути числом
Ціна не може бути меншою за 0
```

Used for:

* summary card **Загальна сума**;
* expense statistics;
* monthly spending;
* order history.

---

### 10.7. Currency

Field label:

```text
Валюта
```

Source:

```ts
currency
```

Type:

```text
Select
```

Required:

```text
No
```

Default:

```text
UAH
```

Recommended options:

```ts
export const currencies = [
  { value: "UAH", label: "грн" },
  { value: "USD", label: "$" },
  { value: "EUR", label: "€" },
] as const;
```

Behavior:

* if price is filled and currency is empty, use `UAH`;
* do not auto-convert currencies in MVP;
* statistics should group by currency if multiple currencies exist.

---

### 10.8. Delivery service

Field label:

```text
Служба доставки
```

Source:

```ts
deliveryService
```

Type:

```text
Select / Autocomplete
```

Required:

```text
No
```

Placeholder:

```text
Оберіть службу доставки
```

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

* optional;
* used in search;
* used in filters;
* shown on delivery card;
* shown in order history;
* if selected `other`, allow custom value.

---

### 10.9. Tracking number / TTN

Field label:

```text
Номер ТТН / tracking number
```

Source:

```ts
trackingNumber
```

Type:

```text
Text input
```

Required:

```text
No
```

Placeholder:

```text
Наприклад: 20450780123456
```

Validation:

* optional;
* max 100 symbols;
* allow letters, numbers, spaces, hyphens.

Error:

```text
Номер ТТН не може бути довшим за 100 символів
```

Used for:

* delivery card;
* search;
* filters;
* order history.

Important:

```text
trackingNumber is separate from orderNumber.
```

---

### 10.10. Note

Field label:

```text
Нотатка
```

Source:

```ts
note
```

Type:

```text
Textarea
```

Required:

```text
No
```

Placeholder:

```text
Додайте нотатку, якщо потрібно
```

Validation:

* optional;
* max 500 symbols.

Error:

```text
Нотатка не може бути довшою за 500 символів
```

Examples:

```text
Оплачено онлайн.
Очікую після передзамовлення.
Доставка Новою поштою.
Має прийти разом з іншими книгами.
```

---

## 11. Helper tip

Modal can show helper tip.

Text:

```text
Порада

Книги зі статусом “В дорозі” будуть зібрані на окремій сторінці для зручного відстеження.
```

---

## 12. Submit behavior

When user clicks:

```text
Позначити як “В дорозі”
```

system should:

1. validate form;
2. check that book belongs to current user;
3. check that book is not already `in_transit`;
4. create delivery record;
5. update book ownership status;
6. update related pages;
7. show success notification;
8. close modal.

---

## 13. Data changes after submit

### 13.1. Book update

Book ownership status becomes:

```ts
ownershipStatus = "in_transit";
```

If previous status was:

```ts
ownershipStatus = "want_to_buy";
```

book disappears from **Books to Buy**.

If previous status was:

```ts
ownershipStatus = "none";
```

book simply enters delivery flow.

---

### 13.2. Delivery record creation

Create delivery record:

```ts
const deliveryRecord = {
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

  status: "ordered";

  createdAt: string;
  updatedAt: string;
};
```

Default stored delivery status:

```ts
deliveryStatus = "ordered";
```

Reason:

```text
Після створення delivery record книга вже замовлена, але доставка не обов’язково фізично почалась.
```

---

## 14. Success behavior

Success message:

```text
Книгу позначено як “В дорозі”
```

After success:

* modal closes;
* Book Details updates ownership badge;
* delivery block appears on Book Details;
* book appears on Books in Transit Page;
* book disappears from Books to Buy Page;
* My Library card updates ownership badge;
* Dashboard delivery widget updates;
* order history receives new active order;
* expense statistics update if price exists;
* summary cards update;
* donut chart updates.

---

## 15. Redirect behavior

Recommended behavior:

```text
Do not redirect automatically.
```

If user started from Book Details:

```text
Stay on Book Details.
```

If user started from Books to Buy:

```text
Stay on Books to Buy and remove card from list.
```

Optional success action:

```text
Перейти до книг в дорозі
```

Notification example:

```text
Книгу позначено як “В дорозі”

[Перейти до книг в дорозі]
```

---

## 16. Loading behavior

After submit:

* submit button becomes disabled;
* modal fields remain visible;
* user cannot submit twice;
* show loading state on button.

Button text:

```text
Збереження...
```

Do not close modal until save is successful.

---

## 17. Error behavior

If submit fails:

* modal stays open;
* entered data is not cleared;
* book status does not change;
* delivery record is not created;
* show error message;
* allow user to retry.

Error message:

```text
Не вдалося позначити книгу як “В дорозі”
```

Specific errors:

```text
Книгу не знайдено
Інформацію про книгу не вдалося оновити
Не вдалося створити запис доставки
```

---

## 18. Duplicate delivery record behavior

If book already has active delivery record:

```ts
ownershipStatus === "in_transit"
```

or:

```ts
deliveryStatus === "ordered" || deliveryStatus === "in_transit"
```

then action should not be available.

If duplicate is detected during submit:

```text
Ця книга вже знаходиться в дорозі
```

Recommended action:

```text
Перейти до інформації про доставку
```

or:

```text
Редагувати доставку
```

---

## 19. Invalid status behavior

If user tries to mark as in transit from invalid ownership status:

| Current status          | Behavior     |
| ----------------------- | ------------ |
| `owned`                 | block action |
| `in_transit`            | block action |
| `borrowed_from_someone` | block action |
| `lent_to_someone`       | block action |

Error:

```text
Неможливо позначити цю книгу як “В дорозі”
```

---

## 20. Cross-feature updates

### 20.1. Books to Buy

If book was in Books to Buy:

```ts
ownershipStatus = "want_to_buy";
```

After submit:

```ts
ownershipStatus = "in_transit";
```

Result:

```text
Book disappears from Books to Buy.
```

---

### 20.2. Books in Transit

After submit, book appears on Books in Transit Page if:

```ts
ownershipStatus === "in_transit" &&
deliveryStatus === "ordered";
```

---

### 20.3. Book Details

Book Details should show:

* ownership badge **В дорозі**;
* delivery information block;
* actions:

    * Позначити як отриману;
    * Редагувати доставку;
    * Скасувати замовлення.

---

### 20.4. My Library

My Library card should show:

```text
В дорозі
```

or more contextual badge:

```text
Очікується 16.06
```

if expected delivery date exists.

---

### 20.5. Dashboard

Dashboard delivery widget should update:

```text
5 книг зараз у дорозі
2 очікуються цього тижня
1 доставка затримується
```

---

### 20.6. Order History

New delivery record appears in Order History as active order.

Status:

```text
Замовлено
```

---

### 20.7. Expense Statistics

If price exists, it should affect:

* active order total;
* monthly spending;
* spending by store;
* currency breakdown.

---

## 21. Validation summary

| Field                  | Required | Validation                       |
| ---------------------- | -------- | -------------------------------- |
| `storeName`            | yes      | max 100, trim                    |
| `orderDate`            | yes      | cannot be in future              |
| `expectedDeliveryDate` | no       | cannot be earlier than orderDate |
| `orderNumber`          | no       | max 100                          |
| `trackingUrl`          | no       | valid URL                        |
| `price`                | no       | number, min 0                    |
| `currency`             | no       | default UAH                      |
| `deliveryService`      | no       | predefined or custom             |
| `trackingNumber`       | no       | max 100                          |
| `note`                 | no       | max 500                          |

---

## 22. Data safety rules

Mark Book as In Transit must not change:

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
reading queue state
custom lists
favorite state
loan data
```

Important:

```text
This action only changes ownershipStatus and creates delivery record.
```

---

## 23. Permissions and access

Rules:

* user can mark only own books as in transit;
* user cannot create delivery record for another user’s book;
* delivery record must use current userId;
* if book does not belong to current user, show generic error;
* do not expose private data from another user.

Recommended error:

```text
Книгу не знайдено
```

---

## 24. Analytics / statistics impact

After successful submit:

* active deliveries count increases by 1;
* stores count may change;
* total active price may change;
* monthly expense statistics may change;
* donut chart receives new segment:

    * `ordered`;
    * or calculated `arriving_soon`;
    * or calculated `delayed`;
    * or calculated `no_delivery_date`.

Important:

```text
One delivery record should belong to only one donut segment.
```

---

## 25. What is not included

У цьому flow не входить:

* автоматичне підтягування доставки за ТТН;
* інтеграція з Новою поштою API;
* інтеграція з Укрпоштою API;
* автоматичне оновлення deliveryStatus;
* push reminders;
* email reminders;
* створення кількох книг в одному delivery record;
* payment status;
* refund status;
* return-to-store flow;
* автоматична конвертація валют;
* сканування ТТН.

Important:

```text
MVP підтримує ручне створення delivery record.
```

---

## 26. Acceptance Criteria

### Entry points

* Користувач може запустити action **Позначити як “В дорозі”** з Book Details.
* Користувач може запустити action **Позначити як “В дорозі”** з Books to Buy Page.
* Action показується для книг зі статусом `none`.
* Action показується для книг зі статусом `want_to_buy`.
* Action не показується для книг зі статусом `in_transit`.
* Action не показується для книг зі статусом `owned`.
* Action не показується для позичених або виданих книг.

### Modal

* Після натискання action відкривається modal.
* Modal має title **Позначити як “В дорозі”**.
* Modal має subtitle.
* Modal показує preview книги.
* Modal показує cover книги або placeholder.
* Modal показує title книги.
* Modal показує author книги.
* Modal має delivery form.
* Modal має helper tip.

### Required fields

* Користувач має вказати магазин.
* Користувач має вказати дату замовлення.
* Якщо магазин не вказаний, показується validation error.
* Якщо дата замовлення не вказана, показується validation error.
* Дата замовлення не може бути в майбутньому.

### Optional fields

* Користувач може вказати очікувану дату доставки.
* Користувач може вказати номер замовлення.
* Користувач може вказати tracking URL.
* Користувач може вказати ціну.
* Користувач може вибрати валюту.
* Користувач може вибрати службу доставки.
* Користувач може вказати номер ТТН.
* Користувач може додати нотатку.

### Validation

* Очікувана дата доставки не може бути раніше дати замовлення.
* Tracking URL має бути валідним URL.
* Ціна має бути числом.
* Ціна не може бути меншою за 0.
* Номер замовлення має max length.
* Номер ТТН має max length.
* Нотатка має max length.

### Submit

* Після submit створюється delivery record.
* Delivery record має `bookId`.
* Delivery record має `userId`.
* Delivery record має `storeName`.
* Delivery record має `orderDate`.
* Delivery record отримує default `deliveryStatus = ordered`.
* Book отримує `ownershipStatus = in_transit`.
* Якщо книга була в Books to Buy, вона зникає з цієї сторінки.
* Книга з’являється на Books in Transit Page.
* Book Details показує delivery block.
* My Library card оновлює ownership badge.
* Order History отримує новий active record.
* Expense Statistics оновлюється, якщо price exists.

### Loading and error

* Під час submit кнопка disabled.
* Повторний submit блокується.
* Якщо submit успішний, modal закривається.
* Якщо submit failed, modal залишається відкритим.
* Якщо submit failed, введені дані не очищуються.
* Якщо submit failed, book ownershipStatus не змінюється.
* Якщо submit failed, delivery record не створюється.
* Користувач бачить error message.

### Duplicate protection

* Якщо книга вже має active delivery record, action не показується.
* Якщо duplicate detected during submit, система показує error.
* Користувач може перейти до редагування existing delivery info.

### Data safety

* Action не видаляє книгу.
* Action не змінює readingStatus.
* Action не змінює format.
* Action не змінює rating.
* Action не змінює notes.
* Action не змінює quotes.
* Action не змінює characters.
* Action не змінює series relation.
* Action не прибирає книгу з Reading Queue.
* Action не прибирає книгу з Custom Lists.
