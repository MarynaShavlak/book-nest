# Feature: Mark Book as Received

## 1. Purpose

Feature **Mark Book as Received** описує flow, який дозволяє користувачу позначити одну або кілька книг у доставці як отримані.

Ця дія завершує delivery flow:

```text
В дорозі → Маю
```

Після виконання дії:

* книга отримує `ownershipStatus = owned`;
* delivery record отримує `deliveryStatus = received`;
* встановлюється `receivedAt`;
* книга зникає зі сторінки **Книги в дорозі**;
* книга залишається в **Моїй бібліотеці**;
* delivery record переходить в **Історію замовлень**;
* статистика доставок і витрат оновлюється.

Important:

```text
Позначити як отриману ≠ створити нову книгу.
Книга вже існує в бібліотеці, змінюються тільки ownershipStatus і delivery record.
```

---

## 2. Main idea

Коли користувач отримав замовлену книгу, він може натиснути:

```text
Позначити як отриману
```

або коротше:

```text
Отримано
```

Після підтвердження книга переходить із активної доставки в бібліотеку як книга, яку користувач вже має.

Main transition:

```text
ownershipStatus: in_transit → owned
deliveryStatus: ordered / in_transit → received
```

---

## 3. Related documentation

Related docs:

```text
delivery-module-overview.md
delivery-status-logic.md
books-in-transit-page.md
mark-book-as-in-transit.md
edit-delivery-info.md
cancel-delivery-order.md
delivery-order-history.md
delivery-expense-statistics.md
book-details-page.md
my-library-page.md
```

---

## 4. Entry points

Action **Позначити як отриману** може бути доступна з кількох місць.

---

### 4.1. Books in Transit Page

Recommended location:

```text
Books in Transit Page → Delivery card → Позначити як отриману
```

Short card label:

```text
Отримано
```

Full label:

```text
Позначити як отриману
```

Recommended MVP:

```text
Отримано
```

Reason:

```text
На delivery card контекст уже зрозумілий, тому коротка кнопка читається краще.
```

---

### 4.2. Book Details Page

Recommended location:

```text
Book Details → Delivery block → Позначити як отриману
```

or:

```text
Book Details → Right sidebar → Quick actions
```

Show when:

```ts
ownershipStatus === "in_transit"
```

and active delivery record exists.

---

### 4.3. Bulk actions on Books in Transit Page

Bulk action is part of MVP.

Entry points:

```text
Books in Transit Page → Select delivery cards → Позначити вибрані як отримані
```

or:

```text
Books in Transit Page → Quick actions → Позначити всі як отримані
```

Important:

```text
Будь-яка bulk дія має мати confirmation modal.
```

---

## 5. When to show action

Action **Позначити як отриману** показується тільки для активних доставок.

Allowed condition:

```ts
ownershipStatus === "in_transit" &&
(deliveryStatus === "ordered" || deliveryStatus === "in_transit")
```

Allowed delivery statuses:

| deliveryStatus | Show action |
| -------------- | ----------- |
| `ordered`      | yes         |
| `in_transit`   | yes         |
| `received`     | no          |
| `cancelled`    | no          |

---

## 6. When not to show action

Action не показується, якщо:

```ts
ownershipStatus !== "in_transit"
```

Action не показується, якщо delivery record має статус:

```ts
deliveryStatus === "received" || deliveryStatus === "cancelled"
```

Reason:

```text
Отримані та скасовані замовлення більше не є активними доставками.
```

Action також не показується, якщо:

* delivery record не знайдено;
* книга не належить поточному користувачу;
* delivery record не належить поточному користувачу;
* книга була видалена.

---

## 7. Single book confirmation modal

Перед зміною статусу потрібно показати confirmation modal.

Modal title:

```text
Позначити книгу як отриману?
```

Description:

```text
Книга буде позначена як “Маю”.
Вона зникне зі сторінки “Книги в дорозі”, але залишиться у вашій бібліотеці.
```

Status transition:

```text
В дорозі → Маю
```

Buttons:

```text
Скасувати
Позначити як отриману
```

Primary button tone:

```text
success
```

---

## 8. Confirmation modal content

Modal має показувати короткий preview книги.

Show:

| Element          | Source                          |
| ---------------- | ------------------------------- |
| Cover            | `book.coverUrl`                 |
| Title            | `book.title`                    |
| Author           | `book.author`                   |
| Store            | `delivery.storeName`            |
| Expected date    | `delivery.expectedDeliveryDate` |
| Delivery service | `delivery.deliveryService`      |
| Tracking number  | `delivery.trackingNumber`       |

Example:

```text
Четверте крило
Ребекка Яррос

Магазин: Yakaboo
Очікувалась: 16.06.2026
Служба доставки: Нова пошта
ТТН: 20450780123456
```

If optional fields are empty, do not show empty rows.

---

## 9. Received date

When user confirms, system should set:

```ts
receivedAt = currentDate;
```

Recommended MVP:

```text
Дата отримання встановлюється автоматично.
```

Optional future improvement:

```text
Дозволити користувачу вручну вибрати дату отримання.
```

For MVP, manual received date picker is not required.

---

## 10. Submit behavior: single book

When user confirms **Позначити як отриману**, system should:

1. check that book belongs to current user;
2. check that delivery record belongs to current user;
3. check that delivery record is active;
4. update book ownership status;
5. update delivery status;
6. set received date;
7. update related pages;
8. show success notification.

Book update:

```ts
ownershipStatus = "owned";
```

Delivery record update:

```ts
deliveryStatus = "received";
receivedAt = currentDate;
updatedAt = currentDate;
```

---

## 11. Success behavior: single book

Success message:

```text
Книгу позначено як отриману
```

After success:

* confirmation modal closes;
* book disappears from **Books in Transit Page**;
* book remains in **My Library**;
* Book Details ownership badge changes to **Маю**;
* delivery block is no longer shown as active delivery;
* delivery record appears in **Order History** as received;
* summary cards update;
* donut chart updates;
* expense statistics update;
* Dashboard delivery widget updates.

---

## 12. Redirect behavior

Recommended behavior:

```text
Do not redirect automatically.
```

If action was triggered from Books in Transit Page:

```text
Remove card from active list.
Stay on Books in Transit Page.
```

If action was triggered from Book Details:

```text
Stay on Book Details.
Update ownership badge and delivery section.
```

Optional notification action:

```text
Переглянути історію замовлень
```

---

## 13. Bulk mark selected as received

Bulk action allows user to mark selected active deliveries as received.

Entry point:

```text
Books in Transit Page → Select cards → Позначити вибрані як отримані
```

Show bulk toolbar when at least one card is selected.

Bulk toolbar example:

```text
Вибрано 3 книги

[Позначити як отримані]
[Скасувати вибір]
```

---

### 13.1. Allowed records for bulk selected action

Only active deliveries can be selected for this action:

```ts
ownershipStatus === "in_transit" &&
(deliveryStatus === "ordered" || deliveryStatus === "in_transit")
```

If some selected records are no longer active during submit, system should skip them and show partial result.

---

### 13.2. Bulk selected confirmation modal

Modal title:

```text
Позначити вибрані книги як отримані?
```

Description:

```text
Вибрані книги зникнуть зі сторінки “Книги в дорозі” і залишаться у вашій бібліотеці зі статусом “Маю”.
```

Dynamic count:

```text
Вибрано 3 книги
```

Buttons:

```text
Скасувати
Позначити як отримані
```

---

### 13.3. Bulk selected submit behavior

After confirm:

For each selected active delivery:

```ts
book.ownershipStatus = "owned";
delivery.deliveryStatus = "received";
delivery.receivedAt = currentDate;
delivery.updatedAt = currentDate;
```

After success:

* selected cards disappear from active list;
* records appear in Order History;
* summary cards update;
* donut chart updates;
* bulk selection clears;
* success message appears.

Success message:

```text
Вибрані книги позначено як отримані
```

Alternative with count:

```text
3 книги позначено як отримані
```

---

## 14. Bulk mark all as received

Bulk **Позначити всі як отримані** is part of MVP.

Entry point:

```text
Books in Transit Page → Right sidebar → Quick actions → Позначити всі як отримані
```

or:

```text
Books in Transit Page → Bulk actions → Позначити всі як отримані
```

Important:

```text
Ця дія має бути захищена confirmation modal.
```

---

### 14.1. Scope of “all”

Recommended MVP behavior:

```text
Позначити всі як отримані = всі активні delivery records користувача.
```

Alternative behavior:

```text
Позначити всі як отримані = тільки поточний filtered list.
```

Recommended final rule:

```text
Use visible filtered list only if action is triggered from selected / filtered toolbar.
Use all active deliveries if action is triggered from global Quick actions.
```

To avoid confusion, labels should be explicit.

Examples:

```text
Позначити всі активні як отримані
```

or:

```text
Позначити всі знайдені як отримані
```

Recommended MVP label:

```text
Позначити всі активні як отримані
```

---

### 14.2. Bulk all confirmation modal

Modal title:

```text
Позначити всі активні книги як отримані?
```

Description:

```text
Усі активні книги в дорозі буде позначено як “Маю”.
Вони зникнуть зі сторінки “Книги в дорозі”, але залишаться у вашій бібліотеці.
```

Dynamic count:

```text
Буде оновлено 5 книг
```

Buttons:

```text
Скасувати
Позначити всі як отримані
```

Primary button tone:

```text
success
```

---

### 14.3. Bulk all submit behavior

After confirm:

For each active delivery:

```ts
book.ownershipStatus = "owned";
delivery.deliveryStatus = "received";
delivery.receivedAt = currentDate;
delivery.updatedAt = currentDate;
```

After success:

* active list becomes empty or filtered list updates;
* summary cards recalculate;
* donut chart disappears if no active deliveries remain;
* order history receives received records;
* expense statistics update;
* success message appears.

Success message:

```text
Усі активні книги позначено як отримані
```

Alternative with count:

```text
5 книг позначено як отримані
```

---

## 15. Partial success behavior

Bulk actions can have partial success.

Example:

```text
5 books selected
4 updated successfully
1 failed because record was already cancelled
```

Recommended message:

```text
4 книги позначено як отримані.
1 книгу не вдалося оновити.
```

UI behavior:

* successfully updated cards disappear;
* failed cards remain;
* user can retry failed records;
* details can be shown in error summary.

---

## 16. Loading behavior

### 16.1. Single action loading

When confirming single book action:

* confirm button disabled;
* cancel button can be disabled;
* show loading state.

Button text:

```text
Оновлення...
```

---

### 16.2. Bulk action loading

When confirming bulk action:

* confirm button disabled;
* cancel button disabled;
* selection controls disabled;
* affected cards can show loading state;
* repeated submit blocked.

Button text:

```text
Оновлення...
```

---

## 17. Error behavior

If action fails:

* modal stays open;
* book status does not change;
* delivery status does not change;
* user sees error message;
* user can retry.

Single action error:

```text
Не вдалося позначити книгу як отриману
```

Bulk action error:

```text
Не вдалося позначити вибрані книги як отримані
```

Specific errors:

```text
Книгу не знайдено
Замовлення не знайдено
Це замовлення вже завершене
Це замовлення вже скасоване
```

---

## 18. Edge cases

### 18.1. Delivery already received

If user tries to mark already received record:

```text
Цю книгу вже позначено як отриману
```

Behavior:

* do not update again;
* refresh page state;
* remove card from active list if still visible.

---

### 18.2. Delivery cancelled before confirmation

If delivery was cancelled while modal was open:

```text
Це замовлення вже скасоване
```

Behavior:

* block submit;
* close modal or ask user to refresh;
* remove card from active list.

---

### 18.3. Delivery record not found

If delivery record no longer exists:

```text
Замовлення не знайдено
```

Behavior:

* block action;
* remove broken card from active list if needed.

---

### 18.4. Book not found

If related book no longer exists:

```text
Книгу не знайдено
```

Behavior:

* block action;
* do not create new book;
* do not update delivery record as received from normal UI.

---

### 18.5. Book already owned

If book already has:

```ts
ownershipStatus === "owned"
```

and delivery record is still active due to stale data:

```text
Книга вже має статус “Маю”
```

Recommended behavior:

* sync delivery record to `received`, or
* show safe error and ask user to refresh.

MVP:

```text
Show safe error and refresh state.
```

---

## 19. Cross-feature updates

### 19.1. Books in Transit Page

After mark as received:

* card disappears from active list;
* total active count decreases;
* delayed count can decrease;
* arriving soon count can decrease;
* donut chart updates;
* empty state appears if no active deliveries remain.

---

### 19.2. Book Details Page

Book Details should update:

* ownership badge becomes **Маю**;
* active delivery actions disappear;
* delivery block can move to delivery history section;
* actions **Позначити як отриману**, **Редагувати доставку**, **Скасувати замовлення** disappear.

---

### 19.3. My Library Page

My Library card should update:

```text
В дорозі → Маю
```

Book remains visible in My Library.

---

### 19.4. Order History

Delivery record appears as received order.

Show:

* book title;
* store;
* order date;
* received date;
* price;
* delivery service;
* tracking number;
* status **Отримано**.

---

### 19.5. Expense Statistics

Expense statistics should update if record has price.

Recommended behavior:

* received order is included in completed spending;
* active orders total decreases;
* monthly spending can include received order by orderDate or receivedAt depending on statistics rule.

Recommended MVP rule:

```text
Monthly expense statistics uses orderDate.
```

Reason:

```text
Витрата зазвичай відноситься до місяця замовлення, а не до місяця отримання.
```

---

### 19.6. Dashboard

Dashboard delivery widget should update:

* active deliveries count;
* expected this week count;
* delayed count;
* nearest delivery;
* active spending.

If no active deliveries remain:

```text
У вас немає книг у дорозі
```

---

## 20. Data safety rules

Mark Book as Received must not change:

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
This action only changes ownershipStatus and delivery record status.
```

---

## 21. Permissions and access

Rules:

* user can mark only own delivery records as received;
* user can mark only own books as received;
* delivery record must belong to current user;
* related book must belong to current user;
* bulk action must affect only records of current user;
* if access denied, show generic not found message.

Recommended error:

```text
Замовлення не знайдено
```

---

## 22. Analytics / statistics impact

After marking as received:

* active deliveries count decreases;
* received orders count increases;
* active spending decreases;
* completed spending may increase;
* delayed count may decrease;
* donut chart updates;
* order history updates;
* monthly expense statistics may update.

Important:

```text
received records are no longer included in active Books in Transit donut chart.
```

---

## 23. What is not included

У цьому flow не входить:

* редагування delivery information;
* скасування замовлення;
* повернення книги в “Хочу купити”;
* видалення книги;
* видалення delivery record;
* створення нової книги;
* ручний вибір дати отримання в MVP;
* автоматичне підтвердження отримання через delivery service API;
* сканування ТТН;
* refund / return flow;
* payment status.

Important:

```text
Mark Book as Received завершує активну доставку, але не видаляє delivery history.
```

---

## 24. Acceptance Criteria

### Entry points

* Користувач може позначити книгу як отриману з Books in Transit Page.
* Користувач може позначити книгу як отриману з Book Details Page.
* Користувач може позначити вибрані книги як отримані через bulk action.
* Користувач може позначити всі активні книги як отримані через quick action.
* Action доступна тільки для active delivery records.
* Action недоступна для received records.
* Action недоступна для cancelled records.

### Single confirmation

* Після натискання **Позначити як отриману** відкривається confirmation modal.
* Modal має title **Позначити книгу як отриману?**
* Modal пояснює, що книга стане **Маю**.
* Modal пояснює, що книга зникне зі сторінки **Книги в дорозі**.
* Modal показує preview книги.
* User can cancel action.
* User can confirm action.

### Single submit

* Після confirm book отримує `ownershipStatus = owned`.
* Після confirm delivery record отримує `deliveryStatus = received`.
* Після confirm встановлюється `receivedAt`.
* Після confirm встановлюється `updatedAt`.
* Книга зникає зі сторінки **Книги в дорозі**.
* Книга залишається в **Моїй бібліотеці**.
* Book Details оновлює ownership badge.
* Delivery record переходить в Order History.
* Користувач бачить success message.

### Bulk selected action

* Користувач може вибрати кілька active delivery cards.
* Після вибору з’являється bulk toolbar.
* Користувач може натиснути **Позначити вибрані як отримані**.
* Перед bulk update відкривається confirmation modal.
* Confirmation modal показує кількість вибраних книг.
* Після confirm вибрані книги отримують `ownershipStatus = owned`.
* Після confirm вибрані delivery records отримують `deliveryStatus = received`.
* Після confirm вибрані cards зникають з active list.
* Bulk selection clears after success.

### Bulk all action

* Користувач може натиснути **Позначити всі активні як отримані**.
* Перед дією відкривається confirmation modal.
* Confirmation modal показує кількість книг, які будуть оновлені.
* Після confirm всі active deliveries отримують `deliveryStatus = received`.
* Після confirm усі відповідні книги отримують `ownershipStatus = owned`.
* Якщо active deliveries більше немає, показується empty state.
* Donut chart не показується, якщо active deliveries більше немає.

### Status rules

* Action дозволена для `deliveryStatus = ordered`.
* Action дозволена для `deliveryStatus = in_transit`.
* Action не дозволена для `deliveryStatus = received`.
* Action не дозволена для `deliveryStatus = cancelled`.
* Action переводить `ownershipStatus` з `in_transit` у `owned`.
* Action переводить `deliveryStatus` у `received`.

### Loading and error

* Під час submit confirm button disabled.
* Повторний submit блокується.
* Якщо submit успішний, modal закривається.
* Якщо submit failed, modal залишається відкритим.
* Якщо submit failed, statuses не змінюються.
* Користувач бачить error message.
* Bulk action supports partial success message.

### Cross-feature updates

* Books in Transit Page оновлюється після action.
* My Library оновлюється після action.
* Book Details оновлюється після action.
* Order History оновлюється після action.
* Expense Statistics оновлюється після action.
* Dashboard delivery widget оновлюється після action.

### Data safety

* Action не видаляє книгу.
* Action не видаляє delivery record.
* Action не змінює readingStatus.
* Action не змінює format.
* Action не змінює rating.
* Action не змінює notes.
* Action не змінює quotes.
* Action не змінює characters.
* Action не змінює series relation.
* Action не прибирає книгу з Reading Queue.
* Action не прибирає книгу з Custom Lists.
