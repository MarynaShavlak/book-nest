# Feature: Cancel Delivery Order

## 1. Purpose

Feature **Cancel Delivery Order** описує flow, який дозволяє користувачу скасувати активне замовлення книги, яка зараз знаходиться в доставці.

Ця дія потрібна, якщо:

* користувач передумав купувати книгу;
* магазин скасував замовлення;
* книга стала недоступною;
* користувач хоче повернути книгу назад у **Книги до покупки**;
* користувач хоче прибрати книгу з активних доставок.

Основний перехід:

```text
В дорозі → Хочу купити
```

або:

```text
В дорозі → Немає
```

Після скасування:

* delivery record отримує `deliveryStatus = cancelled`;
* встановлюється `cancelledAt`;
* книга зникає зі сторінки **Книги в дорозі**;
* книга може повернутися в **Книги до покупки**;
* delivery record переходить в **Історію замовлень**;
* книга залишається в бібліотеці.

Important:

```text
Скасувати замовлення ≠ видалити книгу.
```

---

## 2. Main idea

Користувач може скасувати активну доставку, якщо книга ще не була отримана.

Allowed active statuses:

```ts
deliveryStatus === "ordered" || deliveryStatus === "in_transit"
```

Book should have:

```ts
ownershipStatus === "in_transit"
```

Після скасування користувач має вибрати, що зробити з книгою далі:

```text
1. Повернути книгу в “Хочу купити”
2. Прибрати зі списку покупок і встановити “Немає”
```

Recommended default:

```text
Повернути книгу в “Хочу купити”
```

Reason:

```text
Найчастіше скасування замовлення не означає, що користувач більше не хоче книгу.
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
mark-book-as-received.md
delivery-order-history.md
delivery-expense-statistics.md
book-details-page.md
books-to-buy-page.md
my-library-page.md
```

---

## 4. Entry points

Action **Скасувати замовлення** може бути доступна з кількох місць.

---

### 4.1. Books in Transit Page

Recommended location:

```text
Books in Transit Page → Delivery card → More menu → Скасувати замовлення
```

Recommended behavior:

* не робити цю дію primary button;
* не ставити поруч із **Позначити як отриману** як основну кнопку;
* показувати в kebab menu або secondary actions.

Reason:

```text
Скасування — destructive / warning action, але не видалення книги.
```

---

### 4.2. Book Details Page

Recommended location:

```text
Book Details → Delivery block → Скасувати замовлення
```

or:

```text
Book Details → Right sidebar → Quick actions
```

Recommended order:

```text
Позначити як отриману
Редагувати доставку
Скасувати замовлення
```

---

### 4.3. Order History

Optional behavior:

```text
Order History → Active order → Скасувати замовлення
```

Allowed only for active orders:

```ts
deliveryStatus === "ordered" || deliveryStatus === "in_transit"
```

Received and cancelled records are read-only.

---

## 5. When to show action

Action **Скасувати замовлення** показується тільки для активних доставок.

Allowed condition:

```ts
ownershipStatus === "in_transit" &&
(deliveryStatus === "ordered" || deliveryStatus === "in_transit")
```

Allowed statuses:

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
deliveryStatus === "received"
```

Reason:

```text
Отримане замовлення вже завершене.
```

Action не показується, якщо:

```ts
deliveryStatus === "cancelled"
```

Reason:

```text
Замовлення вже скасоване.
```

Action не показується, якщо:

```ts
ownershipStatus !== "in_transit"
```

Action також не показується, якщо:

* delivery record не знайдено;
* книга не належить поточному користувачу;
* delivery record не належить поточному користувачу;
* книга була видалена.

---

## 7. Confirmation modal

Перед скасуванням потрібно показати confirmation modal.

Modal title:

```text
Скасувати замовлення?
```

Description:

```text
Книга більше не буде показуватися на сторінці “Книги в дорозі”.
Вона залишиться у вашій бібліотеці.
```

Status transition:

```text
В дорозі → Хочу купити / Немає
```

Buttons:

```text
Не скасовувати
Скасувати замовлення
```

Primary destructive / warning button:

```text
Скасувати замовлення
```

Important:

```text
Не використовувати trash icon, бо ця дія не видаляє книгу.
```

---

## 8. Modal content

Modal має показувати короткий preview книги й інформацію про замовлення.

Show:

| Element          | Source                                 |
| ---------------- | -------------------------------------- |
| Cover            | `book.coverUrl`                        |
| Title            | `book.title`                           |
| Author           | `book.author`                          |
| Store            | `delivery.storeName`                   |
| Order date       | `delivery.orderDate`                   |
| Expected date    | `delivery.expectedDeliveryDate`        |
| Delivery service | `delivery.deliveryService`             |
| Tracking number  | `delivery.trackingNumber`              |
| Price            | `delivery.price` + `delivery.currency` |

Example:

```text
Четверте крило
Ребекка Яррос

Магазин: Yakaboo
Дата замовлення: 12.06.2026
Очікувалась: 16.06.2026
Служба доставки: Нова пошта
ТТН: 20450780123456
```

If optional fields are empty, do not show empty rows.

---

## 9. User choice after cancel

У confirmation modal має бути опція, що зробити з книгою після скасування.

Recommended field:

```text
Повернути книгу в “Хочу купити”
```

Type:

```text
Checkbox
```

Default:

```text
checked = true
```

---

### 9.1. If checkbox is checked

Result:

```ts
ownershipStatus = "want_to_buy";
deliveryStatus = "cancelled";
cancelledAt = currentDate;
```

User-facing result:

* книга зникає зі сторінки **Книги в дорозі**;
* книга з’являється на сторінці **Книги до покупки**;
* Book Details показує ownership badge **Хочу купити**;
* delivery record переходить в **Історію замовлень** як cancelled.

---

### 9.2. If checkbox is unchecked

Result:

```ts
ownershipStatus = "none";
deliveryStatus = "cancelled";
cancelledAt = currentDate;
```

User-facing result:

* книга зникає зі сторінки **Книги в дорозі**;
* книга не з’являється на сторінці **Книги до покупки**;
* книга залишається в **Моїй бібліотеці**;
* Book Details показує ownership badge **Немає**;
* delivery record переходить в **Історію замовлень** як cancelled.

---

## 10. Optional cancel reason

Cancel reason can be optional.

Recommended MVP:

```text
Причина скасування
```

Type:

```text
Select + optional note
```

Options:

```text
Передумала купувати
Магазин скасував замовлення
Книга недоступна
Знайшла в іншому магазині
Помилка в замовленні
Інше
```

Recommended rule:

```text
Cancel reason is optional in MVP.
```

Reason:

```text
Фіча має залишатися швидкою. Не потрібно змушувати користувача пояснювати кожне скасування.
```

If reason is added, save it in delivery record:

```ts
cancelReason?: string | null;
cancelNote?: string | null;
```

---

## 11. Submit behavior

When user clicks:

```text
Скасувати замовлення
```

system should:

1. check that delivery record exists;
2. check that delivery record belongs to current user;
3. check that related book belongs to current user;
4. check that delivery record is active;
5. set delivery status to `cancelled`;
6. set `cancelledAt`;
7. update book `ownershipStatus`;
8. save optional cancel reason / note;
9. update related pages;
10. show success notification;
11. close modal.

---

## 12. Data changes after submit

### 12.1. Delivery record update

Delivery record should be updated:

```ts
deliveryStatus = "cancelled";
cancelledAt = currentDate;
updatedAt = currentDate;
```

Optional fields:

```ts
cancelReason?: string | null;
cancelNote?: string | null;
```

---

### 12.2. Book ownership update

If user keeps book in wishlist:

```ts
ownershipStatus = "want_to_buy";
```

If user does not keep book in wishlist:

```ts
ownershipStatus = "none";
```

---

### 12.3. What does not change

Cancel Delivery Order must not change:

```text
book.title
book.author
book.cover
book.description
book.readingStatus
book.formats
book.rating
book.progress
book.notes
book.quotes
book.characters
book.series relation
book.reading queue state
book.custom lists
book.favorite state
book.loan data
```

---

## 13. Success behavior

Success message:

```text
Замовлення скасовано
```

If returned to wishlist:

```text
Замовлення скасовано. Книгу повернуто в “Хочу купити”.
```

If not returned to wishlist:

```text
Замовлення скасовано. Книга залишилась у бібліотеці зі статусом “Немає”.
```

After success:

* modal closes;
* card disappears from **Books in Transit Page**;
* Book Details ownership badge updates;
* active delivery actions disappear;
* delivery record appears in **Order History** as cancelled;
* summary cards update;
* donut chart updates;
* expense statistics update;
* Dashboard delivery widget updates.

---

## 14. Redirect behavior

Recommended behavior:

```text
Do not redirect automatically.
```

If action was triggered from Books in Transit Page:

```text
Stay on Books in Transit Page.
Remove card from active list.
```

If action was triggered from Book Details:

```text
Stay on Book Details.
Update ownership badge and delivery section.
```

Optional notification action:

```text
Перейти до історії замовлень
```

or, if returned to wishlist:

```text
Перейти до книг до покупки
```

---

## 15. Delivery information after cancel

Delivery information should not be deleted automatically.

Keep:

* storeName;
* orderDate;
* expectedDeliveryDate;
* orderNumber;
* trackingUrl;
* price;
* currency;
* deliveryService;
* trackingNumber;
* note;
* cancel reason, if added;
* cancelledAt.

Important:

```text
Скасування замовлення не очищає історію доставки.
```

Reason:

```text
Користувач може захотіти потім переглянути, де саме було замовлення, скільки воно коштувало і чому було скасоване.
```

---

## 16. Order History behavior

Cancelled delivery record should appear in **Order History**.

Show:

* book title;
* store;
* order date;
* cancelled date;
* price;
* currency;
* delivery service;
* tracking number;
* cancel reason, if exists;
* status **Скасовано**.

Order History status:

```ts
deliveryStatus = "cancelled";
```

---

## 17. Expense Statistics behavior

Cancelled records can have price, but they should be handled carefully.

Recommended MVP rule:

```text
Cancelled orders are visible in statistics, but not included in main total by default.
```

Expense Statistics can show:

* active spending;
* received spending;
* cancelled orders value;
* monthly breakdown;
* store breakdown.

Main total should include:

```text
active + received
```

Main total should not include:

```text
cancelled
```

unless user enables filter:

```text
Включити скасовані замовлення
```

Reason:

```text
Скасоване замовлення не завжди означає реальну витрату.
```

---

## 18. Dashboard behavior

After cancel:

Dashboard delivery widget should update:

* active delivery count decreases;
* delayed count may decrease;
* expected this week count may decrease;
* active spending may decrease;
* nearest delivery may change.

If there are no active deliveries:

```text
У вас немає книг у дорозі
```

---

## 19. Loading behavior

When confirming cancel:

* confirm button disabled;
* cancel button can be disabled;
* repeated submit blocked;
* modal stays open until save is successful.

Button text:

```text
Скасування...
```

---

## 20. Error behavior

If cancel fails:

* modal stays open;
* book ownershipStatus does not change;
* deliveryStatus does not change;
* cancelledAt is not set;
* user sees error message;
* user can retry.

General error:

```text
Не вдалося скасувати замовлення
```

Specific errors:

```text
Книгу не знайдено
Замовлення не знайдено
Це замовлення вже отримане
Це замовлення вже скасоване
```

---

## 21. Edge cases

### 21.1. Delivery already received

If user tries to cancel already received delivery:

```text
Це замовлення вже отримане
```

Behavior:

* block cancel;
* refresh UI;
* do not change ownershipStatus.

---

### 21.2. Delivery already cancelled

If user tries to cancel already cancelled delivery:

```text
Це замовлення вже скасоване
```

Behavior:

* block cancel;
* refresh UI.

---

### 21.3. Delivery record not found

If delivery record no longer exists:

```text
Замовлення не знайдено
```

Behavior:

* block cancel;
* remove broken card from active list if needed.

---

### 21.4. Book not found

If related book no longer exists:

```text
Книгу не знайдено
```

Behavior:

* block cancel;
* do not update delivery record from normal UI.

---

### 21.5. Book ownership already changed

If book no longer has:

```ts
ownershipStatus === "in_transit"
```

show:

```text
Книга більше не знаходиться в доставці
```

Behavior:

* block cancel;
* refresh page state.

---

### 21.6. Modal opened from filtered list

If current filter is:

```text
Затримуються
```

and user cancels order, card disappears from the list.

Show success message anyway.

---

## 22. Cross-feature updates

### 22.1. Books in Transit Page

After cancel:

* card disappears from active list;
* total active count decreases;
* delayed count may decrease;
* expected this week count may decrease;
* stores count may decrease;
* total active price recalculates;
* donut chart updates;
* empty state appears if no active deliveries remain.

---

### 22.2. Books to Buy Page

If user chose to return book to wishlist:

```ts
ownershipStatus = "want_to_buy";
```

then:

* book appears on Books to Buy Page;
* action **Позначити як “В дорозі”** becomes available again.

If user did not return book to wishlist:

```ts
ownershipStatus = "none";
```

then:

* book does not appear on Books to Buy Page.

---

### 22.3. Book Details Page

Book Details should update:

If returned to wishlist:

```text
В дорозі → Хочу купити
```

If not returned to wishlist:

```text
В дорозі → Немає
```

Active delivery block should disappear or move to delivery history section.

Actions **Позначити як отриману**, **Редагувати доставку**, **Скасувати замовлення** disappear.

---

### 22.4. My Library Page

Book remains in My Library.

Ownership badge updates to:

```text
Хочу купити
```

or:

```text
Немає
```

depending on user choice.

---

### 22.5. Order History

Cancelled delivery record appears in Order History.

Status:

```text
Скасовано
```

---

### 22.6. Expense Statistics

Expense statistics updates:

* active order total decreases;
* cancelled orders count may increase;
* cancelled order value can be shown separately;
* monthly stats update if showing cancelled records.

---

### 22.7. Dashboard

Dashboard delivery widget updates after cancel.

---

## 23. Permissions and access

Rules:

* user can cancel only own delivery records;
* user can cancel only delivery records connected to own books;
* delivery record must belong to current user;
* related book must belong to current user;
* if access denied, show generic not found message;
* do not expose another user's delivery data.

Recommended error:

```text
Замовлення не знайдено
```

---

## 24. Data safety rules

Cancel Delivery Order must not:

* delete the book;
* delete delivery record;
* clear delivery history;
* change readingStatus;
* change format;
* change rating;
* change notes;
* change quotes;
* change characters;
* change series relation;
* remove book from Reading Queue;
* remove book from Custom Lists;
* remove favorite state.

Important:

```text
Cancel Delivery Order only changes ownershipStatus and deliveryStatus.
```

---

## 25. What is not included

У цьому flow не входить:

* видалення книги;
* видалення delivery record;
* позначення книги як отриманої;
* редагування delivery info;
* автоматичне скасування через API магазину;
* refund tracking;
* return-to-store flow;
* payment status;
* автоматичне повернення грошей;
* push / email notification;
* bulk cancel orders.

Important:

```text
Bulk cancel не входить у MVP.
```

Reason:

```text
Масове скасування замовлень є ризикованою destructive action.
Для MVP достатньо single cancel flow.
```

---

## 26. Acceptance Criteria

### Entry points

* Користувач може скасувати замовлення з Books in Transit Page.
* Користувач може скасувати замовлення з Book Details Page.
* Action доступна тільки для active delivery records.
* Action доступна для `deliveryStatus = ordered`.
* Action доступна для `deliveryStatus = in_transit`.
* Action недоступна для `deliveryStatus = received`.
* Action недоступна для `deliveryStatus = cancelled`.

### Confirmation modal

* Після натискання **Скасувати замовлення** відкривається confirmation modal.
* Modal має title **Скасувати замовлення?**
* Modal пояснює, що книга зникне зі сторінки **Книги в дорозі**.
* Modal пояснює, що книга залишиться в бібліотеці.
* Modal показує preview книги.
* Modal показує коротку інформацію про замовлення.
* Modal має option **Повернути книгу в “Хочу купити”**.
* Option **Повернути книгу в “Хочу купити”** checked by default.
* User can cancel modal without changes.
* User can confirm cancellation.

### Submit with return to wishlist

* Якщо option checked, book отримує `ownershipStatus = want_to_buy`.
* Delivery record отримує `deliveryStatus = cancelled`.
* Delivery record отримує `cancelledAt`.
* Book disappears from Books in Transit Page.
* Book appears on Books to Buy Page.
* Book Details shows **Хочу купити**.
* Delivery record appears in Order History as cancelled.

### Submit without return to wishlist

* Якщо option unchecked, book отримує `ownershipStatus = none`.
* Delivery record отримує `deliveryStatus = cancelled`.
* Delivery record отримує `cancelledAt`.
* Book disappears from Books in Transit Page.
* Book does not appear on Books to Buy Page.
* Book remains in My Library.
* Book Details shows **Немає**.
* Delivery record appears in Order History as cancelled.

### Optional cancel reason

* User can optionally select cancel reason.
* User can optionally add cancel note.
* Cancel reason is not required.
* Cancel note is not required.
* Cancel reason is saved to delivery record if provided.
* Cancel note is saved to delivery record if provided.

### UI updates

* Books in Transit Page updates after cancel.
* Summary cards update after cancel.
* Donut chart updates after cancel.
* Book Details updates after cancel.
* My Library updates after cancel.
* Books to Buy updates if book returns to wishlist.
* Order History updates after cancel.
* Expense Statistics updates after cancel.
* Dashboard delivery widget updates after cancel.

### Loading and error

* During submit confirm button is disabled.
* Repeated submit is blocked.
* If cancel succeeds, modal closes.
* If cancel fails, modal stays open.
* If cancel fails, statuses do not change.
* If cancel fails, user sees error message.

### Edge cases

* Already received order cannot be cancelled.
* Already cancelled order cannot be cancelled again.
* Missing delivery record blocks action.
* Missing book blocks action.
* If book is no longer `in_transit`, action is blocked.
* User sees safe error message.

### Data safety

* Cancel order does not delete book.
* Cancel order does not delete delivery record.
* Cancel order does not clear delivery history.
* Cancel order does not change readingStatus.
* Cancel order does not change format.
* Cancel order does not change rating.
* Cancel order does not change notes.
* Cancel order does not change quotes.
* Cancel order does not change characters.
* Cancel order does not change series relation.
* Cancel order does not remove book from Reading Queue.
* Cancel order does not remove book from Custom Lists.

### Scope

* Single cancel flow is included in MVP.
* Bulk cancel is not included in MVP.
* Refund tracking is not included in MVP.
* Automatic store/API cancellation is not included in MVP.
