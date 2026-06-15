# Feature: Edit Delivery Info

## 1. Purpose

Feature **Edit Delivery Info** описує flow, який дозволяє користувачу редагувати інформацію про доставку книги, що вже знаходиться в статусі **В дорозі**.

Ця фіча потрібна, щоб користувач міг оновити:

* магазин;
* дату замовлення;
* очікувану дату доставки;
* номер замовлення;
* посилання на замовлення / трекінг;
* ціну;
* валюту;
* службу доставки;
* номер ТТН;
* нотатку;
* stored delivery status.

Important:

```text
Edit Delivery Info не змінює саму книгу.
Фіча змінює тільки delivery record.
```

---

## 2. Main idea

Коли книга вже має:

```ts
ownershipStatus === "in_transit"
```

і активний delivery record:

```ts
deliveryStatus === "ordered" || deliveryStatus === "in_transit"
```

користувач може відкрити форму редагування доставки та змінити інформацію про замовлення.

Example:

```text
Користувач замовив книгу, але спочатку не знав номер ТТН.
Пізніше магазин надіслав ТТН.
Користувач відкриває “Редагувати доставку” і додає tracking number.
```

---

## 3. Related documentation

Related docs:

```text
delivery-module-overview.md
delivery-status-logic.md
books-in-transit-page.md
mark-book-as-in-transit.md
mark-book-as-received.md
cancel-delivery-order.md
delivery-order-history.md
delivery-expense-statistics.md
book-details-page.md
```

---

## 4. Entry points

Action **Редагувати доставку** може бути доступна з кількох місць.

### 4.1. Books in Transit Page

Recommended location:

```text
Books in Transit Page → Delivery card → Редагувати
```

Visible action:

```text
Редагувати
```

or full label:

```text
Редагувати доставку
```

Recommended MVP:

```text
Редагувати
```

because card already belongs to delivery context.

---

### 4.2. Book Details Page

Recommended location:

```text
Book Details → Delivery block → Редагувати доставку
```

Show when:

```ts
ownershipStatus === "in_transit"
```

and active delivery record exists.

---

### 4.3. Order History

Optional MVP behavior:

```text
Order History → Active order → Редагувати
```

Recommended rule:

* active orders can be edited;
* received / cancelled orders should be read-only or have very limited editing.

---

## 5. When to show action

Action **Редагувати доставку** показується, якщо delivery record active.

Allowed:

```ts
deliveryStatus === "ordered" || deliveryStatus === "in_transit"
```

and:

```ts
ownershipStatus === "in_transit"
```

---

## 6. When not to show action

Action не показується або disabled, якщо:

```ts
deliveryStatus === "received"
```

Reason:

```text
Отримане замовлення вже завершене.
```

Action не показується або disabled, якщо:

```ts
deliveryStatus === "cancelled"
```

Reason:

```text
Скасоване замовлення не є активною доставкою.
```

Recommended MVP:

```text
Редагування received / cancelled records не входить у цей flow.
Вони показуються в Order History як read-only.
```

---

## 7. UI pattern

Edit Delivery Info може відкриватися як:

```text
Modal
```

або:

```text
Drawer
```

Recommended MVP:

```text
Modal
```

Reason:

* flow короткий;
* полів небагато;
* можна використати той самий UI, що і для “Позначити як В дорозі”;
* користувач не покидає поточну сторінку.

---

## 8. Modal title and actions

Modal title:

```text
Редагувати доставку
```

Subtitle:

```text
Оновіть інформацію про замовлення та доставку книги.
```

Primary button:

```text
Зберегти зміни
```

Secondary button:

```text
Скасувати
```

Loading button text:

```text
Збереження...
```

---

## 9. Modal layout

Recommended layout:

```text
[Modal title]
[Subtitle]

[Book preview]

[Delivery form]
  [Статус доставки]
  [Магазин *]
  [Дата замовлення *]
  [Очікувана дата доставки]
  [Номер замовлення]
  [Посилання на замовлення / трекінг]
  [Ціна] [Валюта]
  [Служба доставки]
  [Номер ТТН]
  [Нотатка]

[Cancel] [Save changes]
```

Desktop:

```text
Left side: Book preview
Right side: Delivery form
```

Mobile:

```text
Single column layout
Book preview above form
```

---

## 10. Book preview

Modal має показувати preview книги, щоб користувач розумів, яку доставку редагує.

Show:

| Element     | Source                              |
| ----------- | ----------------------------------- |
| Cover       | `book.coverUrl`                     |
| Title       | `book.title`                        |
| Author      | `book.author`                       |
| Publisher   | `book.publisher`                    |
| Genre / tag | `book.genres[0]` або `book.tags[0]` |

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

## 11. Editable fields

Edit Delivery Info має використовувати ті самі поля, що й Mark Book as In Transit flow, але з уже заповненими значеннями.

---

### 11.1. Delivery status

Field label:

```text
Статус доставки
```

Source:

```ts
deliveryStatus
```

Type:

```text
Select
```

Editable values for active delivery:

```ts
"ordered" | "in_transit"
```

Options:

```ts
export const editableActiveDeliveryStatuses = [
  {
    value: "ordered",
    label: "Замовлено",
  },
  {
    value: "in_transit",
    label: "В дорозі",
  },
] as const;
```

Important:

```text
received і cancelled не потрібно вибирати в Edit Delivery Info.
Для них є окремі flows:
- mark-book-as-received.md
- cancel-delivery-order.md
```

Reason:

```text
Позначення як отримано або скасування замовлення мають мати confirmation modal.
```

---

### 11.2. Store

Field label:

```text
Магазин *
```

Source:

```ts
storeName
```

Required:

```text
Yes
```

Type:

```text
Select / Autocomplete / Text input
```

Behavior:

* value is prefilled;
* user can change store;
* user can select predefined store;
* user can enter custom store;
* if selected `other`, show custom input.

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

### 11.3. Order date

Field label:

```text
Дата замовлення *
```

Source:

```ts
orderDate
```

Required:

```text
Yes
```

Type:

```text
Date picker
```

Behavior:

* value is prefilled;
* user can change date;
* date cannot be in the future.

Errors:

```text
Оберіть дату замовлення
Дата замовлення не може бути в майбутньому
```

---

### 11.4. Expected delivery date

Field label:

```text
Очікувана дата доставки
```

Source:

```ts
expectedDeliveryDate
```

Required:

```text
No
```

Type:

```text
Date picker
```

Behavior:

* value is prefilled if exists;
* user can add date;
* user can change date;
* user can clear date.

Validation:

```text
Cannot be earlier than orderDate
```

Error:

```text
Очікувана дата доставки не може бути раніше дати замовлення
```

Used for:

* **Очікується скоро** badge;
* **Затримується** badge;
* **Без дати доставки** badge;
* filters;
* summary cards;
* donut chart;
* sorting by nearest delivery.

---

### 11.5. Order number

Field label:

```text
Номер замовлення
```

Source:

```ts
orderNumber
```

Required:

```text
No
```

Type:

```text
Text input
```

Behavior:

* value is prefilled if exists;
* user can add / edit / clear value.

Validation:

```text
Max 100 symbols
```

Error:

```text
Номер замовлення не може бути довшим за 100 символів
```

---

### 11.6. Tracking URL

Field label:

```text
Посилання на замовлення / трекінг
```

Source:

```ts
trackingUrl
```

Required:

```text
No
```

Type:

```text
URL input
```

Behavior:

* value is prefilled if exists;
* user can add / edit / clear URL.

Validation:

```text
Must be valid URL if filled
```

Error:

```text
Посилання має бути валідним URL
```

---

### 11.7. Price

Field label:

```text
Ціна
```

Source:

```ts
price
```

Required:

```text
No
```

Type:

```text
Number input
```

Behavior:

* value is prefilled if exists;
* user can add / edit / clear price;
* price affects expense statistics.

Validation:

```text
Must be a number
Cannot be negative
```

Errors:

```text
Ціна має бути числом
Ціна не може бути меншою за 0
```

---

### 11.8. Currency

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

Options:

```ts
export const currencies = [
  { value: "UAH", label: "грн" },
  { value: "USD", label: "$" },
  { value: "EUR", label: "€" },
] as const;
```

Behavior:

* if price exists and currency is empty, use `UAH`;
* if price is cleared, currency can remain saved or reset to default;
* do not auto-convert currencies in MVP.

Recommended MVP:

```text
Keep currency value even if price is cleared.
```

---

### 11.9. Delivery service

Field label:

```text
Служба доставки
```

Source:

```ts
deliveryService
```

Required:

```text
No
```

Type:

```text
Select / Autocomplete
```

Options:

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

* value is prefilled if exists;
* user can add / edit / clear delivery service;
* if selected `other`, allow custom value;
* used in filters, search, cards and order history.

---

### 11.10. Tracking number / TTN

Field label:

```text
Номер ТТН / tracking number
```

Source:

```ts
trackingNumber
```

Required:

```text
No
```

Type:

```text
Text input
```

Behavior:

* value is prefilled if exists;
* user can add / edit / clear tracking number;
* used in search, filters, cards and order history.

Validation:

```text
Max 100 symbols
Allow letters, numbers, spaces and hyphens
```

Error:

```text
Номер ТТН не може бути довшим за 100 символів
```

Important:

```text
trackingNumber is separate from orderNumber.
```

---

### 11.11. Note

Field label:

```text
Нотатка
```

Source:

```ts
note
```

Required:

```text
No
```

Type:

```text
Textarea
```

Behavior:

* value is prefilled if exists;
* user can add / edit / clear note.

Validation:

```text
Max 500 symbols
```

Error:

```text
Нотатка не може бути довшою за 500 символів
```

---

## 12. Submit behavior

When user clicks:

```text
Зберегти зміни
```

system should:

1. validate fields;
2. check that delivery record exists;
3. check that delivery record belongs to current user;
4. check that related book belongs to current user;
5. check that delivery record is active;
6. update delivery record;
7. recalculate UI statuses;
8. update related pages;
9. show success notification;
10. close modal.

---

## 13. Data changes after submit

Editable delivery record fields:

```ts
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
status
updatedAt
```

Allowed status update inside this flow:

```ts
status: "ordered" → "in_transit"
status: "in_transit" → "ordered"
```

Not allowed inside this flow:

```ts
status: "ordered" → "received"
status: "in_transit" → "received"
status: "ordered" → "cancelled"
status: "in_transit" → "cancelled"
```

Reason:

```text
received і cancelled мають окремі confirmation flows.
```

---

## 14. What does not change

Edit Delivery Info must not change:

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

Also, by default, it does not change:

```text
ownershipStatus
```

Exception:

```text
If the deliveryStatus remains ordered / in_transit, ownershipStatus stays in_transit.
```

---

## 15. Success behavior

Success message:

```text
Інформацію про доставку оновлено
```

After success:

* modal closes;
* delivery card updates;
* Book Details delivery block updates;
* Order History active record updates;
* summary cards recalculate;
* donut chart recalculates;
* expense statistics update if price or currency changed;
* filters/search results update if related fields changed.

---

## 16. Loading behavior

During submit:

* primary button is disabled;
* secondary button can stay enabled or disabled depending on implementation;
* repeated submit is blocked;
* fields stay visible;
* modal does not close until save is successful.

Button text:

```text
Збереження...
```

---

## 17. Error behavior

If save fails:

* modal stays open;
* entered data is not cleared;
* delivery record is not updated;
* related UI does not change;
* user sees error message;
* user can retry.

Error message:

```text
Не вдалося оновити інформацію про доставку
```

Specific errors:

```text
Замовлення не знайдено
Книгу не знайдено
Неможливо редагувати завершене замовлення
Неможливо редагувати скасоване замовлення
```

---

## 18. Recalculation rules

After editing delivery information, UI must recalculate:

* calculated delivery UI status;
* active delivery filters;
* summary cards;
* donut chart segment;
* sorting position;
* expense summary;
* monthly expense statistics;
* search index / searchable fields.

---

### 18.1. Expected delivery date changed

If user changes `expectedDeliveryDate`, recalculate:

```text
arriving_soon
delayed
no_delivery_date
this_week
nearest delivery sorting
```

Example:

```text
Before:
expectedDeliveryDate = empty
badge = Без дати доставки

After:
expectedDeliveryDate = tomorrow
badge = Очікується скоро
```

---

### 18.2. Price changed

If user changes `price` or `currency`, update:

* summary card **Загальна сума**;
* right sidebar expense summary;
* monthly expense statistics;
* spending by store;
* order history value.

---

### 18.3. Store changed

If user changes `storeName`, update:

* delivery card;
* store filter options;
* unique stores count;
* spending by store;
* order history.

---

### 18.4. Delivery service changed

If user changes `deliveryService`, update:

* delivery card;
* delivery service filter;
* search results;
* order history.

---

### 18.5. Tracking number changed

If user changes `trackingNumber`, update:

* delivery card;
* search results;
* filters:

    * З номером ТТН;
    * Без номера ТТН;
* order history.

---

## 19. Status change inside edit flow

Edit Delivery Info allows changing stored delivery status only between:

```text
Замовлено
В дорозі
```

Allowed transitions:

```text
ordered → in_transit
in_transit → ordered
```

Use cases:

```text
Користувач створив delivery record як “Замовлено”.
Пізніше магазин передав книгу службі доставки.
Користувач змінює статус на “В дорозі”.
```

Do not allow:

```text
ordered → received
in_transit → received
ordered → cancelled
in_transit → cancelled
```

Those actions should use:

```text
mark-book-as-received.md
cancel-delivery-order.md
```

---

## 20. Cross-feature updates

### 20.1. Books in Transit Page

After save:

* card updates immediately;
* card can move position if sorting changed;
* card can disappear from current filter if fields changed;
* summary cards update;
* donut chart updates.

Example:

```text
User changes expected delivery date from tomorrow to empty.
Card disappears from “Очікуються скоро” filter and appears in “Без дати доставки”.
```

---

### 20.2. Book Details Page

Book Details delivery block updates with new:

* store;
* order date;
* expected delivery date;
* delivery status;
* delivery service;
* tracking number;
* price;
* note.

---

### 20.3. Order History

Active order record updates.

If order history shows active records, changes should be visible there too.

---

### 20.4. Expense Statistics

If price, currency, date or store changed, statistics should update.

Impacted data:

* monthly spending;
* spending by store;
* active orders total;
* currency breakdown;
* average order value.

---

### 20.5. Dashboard

Dashboard delivery widget updates if changed fields affect:

* delayed count;
* expected this week count;
* nearest delivery;
* active delivery total;
* active spending summary.

---

## 21. Permissions and access

Rules:

* user can edit only own delivery records;
* user can edit delivery info only for own books;
* delivery record must belong to current user;
* related book must belong to current user;
* if access denied, show generic not found state;
* do not expose details of another user's delivery record.

Recommended error:

```text
Замовлення не знайдено
```

---

## 22. Edge cases

### 22.1. Delivery record does not exist

If user tries to edit delivery info but record does not exist:

```text
Інформацію про доставку не знайдено
```

Action:

```text
Додати інформацію про доставку
```

---

### 22.2. Book was deleted

If book was deleted:

```text
Книгу не знайдено
```

Behavior:

* do not show edit modal;
* remove broken active delivery from active list if needed;
* keep technical cleanup separate.

---

### 22.3. Delivery was received while modal is open

If another action marks delivery as received while edit modal is open:

```text
Це замовлення вже завершене
```

Behavior:

* block save;
* close modal or ask user to refresh;
* update current page state.

---

### 22.4. Delivery was cancelled while modal is open

If delivery was cancelled while modal is open:

```text
Це замовлення вже скасоване
```

Behavior:

* block save;
* update page state.

---

### 22.5. Current filter no longer matches

If user edits data and card no longer matches active filter:

Example:

```text
Current filter: Без номера ТТН
User adds trackingNumber.
```

Result:

```text
Card disappears from current filtered list.
```

Show success message anyway.

---

## 23. What is not included

У цьому flow не входить:

* позначити книгу як отриману;
* скасувати замовлення;
* видалити delivery record;
* видалити книгу;
* повернути книгу в “Хочу купити”;
* створити нову delivery record;
* автоматичний tracking через поштові API;
* автоматичне оновлення статусу по ТТН;
* push / email reminders;
* автоматична конвертація валют;
* refund tracking;
* return-to-store flow.

Important:

```text
Edit Delivery Info is only for editing active delivery data.
```

---

## 24. Acceptance Criteria

### Entry points

* Користувач може відкрити **Редагувати доставку** з Books in Transit Page.
* Користувач може відкрити **Редагувати доставку** з Book Details Page.
* Action доступна тільки для active delivery records.
* Action недоступна для received records.
* Action недоступна для cancelled records.

### Modal

* Після натискання action відкривається modal.
* Modal має title **Редагувати доставку**.
* Modal має subtitle.
* Modal показує preview книги.
* Modal показує delivery form.
* Delivery form prefilled existing values.
* Modal має кнопку **Зберегти зміни**.
* Modal має кнопку **Скасувати**.

### Editable fields

* Користувач може змінити delivery status між `ordered` і `in_transit`.
* Користувач може змінити магазин.
* Користувач може змінити дату замовлення.
* Користувач може змінити очікувану дату доставки.
* Користувач може змінити номер замовлення.
* Користувач може змінити tracking URL.
* Користувач може змінити ціну.
* Користувач може змінити валюту.
* Користувач може змінити службу доставки.
* Користувач може змінити номер ТТН.
* Користувач може змінити нотатку.

### Validation

* Магазин required.
* Дата замовлення required.
* Дата замовлення не може бути в майбутньому.
* Очікувана дата доставки не може бути раніше дати замовлення.
* Tracking URL має бути валідним URL, якщо заповнений.
* Ціна має бути числом, якщо заповнена.
* Ціна не може бути меншою за 0.
* Номер замовлення має max length.
* Номер ТТН має max length.
* Нотатка має max length.

### Submit

* Після save delivery record оновлюється.
* `updatedAt` оновлюється.
* Book ownershipStatus залишається `in_transit`.
* Book readingStatus не змінюється.
* Book format не змінюється.
* Book rating не змінюється.
* Book series relation не змінюється.
* Book notes / quotes / characters не змінюються.

### Status rules

* Edit flow дозволяє `ordered → in_transit`.
* Edit flow дозволяє `in_transit → ordered`.
* Edit flow не дозволяє `ordered → received`.
* Edit flow не дозволяє `in_transit → received`.
* Edit flow не дозволяє `ordered → cancelled`.
* Edit flow не дозволяє `in_transit → cancelled`.
* Received status обробляється в `mark-book-as-received.md`.
* Cancelled status обробляється в `cancel-delivery-order.md`.

### UI updates

* Books in Transit card оновлюється після save.
* Book Details delivery block оновлюється після save.
* Summary cards оновлюються після save.
* Donut chart оновлюється після save.
* Order History оновлюється після save.
* Expense Statistics оновлюється, якщо price / currency / store / date changed.
* Dashboard delivery widget оновлюється, якщо зміни впливають на його дані.

### Loading and error

* Під час save кнопка disabled.
* Повторний submit блокується.
* Якщо save успішний, modal закривається.
* Якщо save failed, modal залишається відкритою.
* Якщо save failed, введені дані не очищуються.
* Якщо save failed, delivery record не змінюється.
* Користувач бачить error message.

### Permissions

* Користувач може редагувати тільки свої delivery records.
* Користувач може редагувати delivery info тільки для своїх книг.
* Якщо record не належить користувачу, показується generic not found error.

### Data safety

* Edit Delivery Info не видаляє книгу.
* Edit Delivery Info не створює нову книгу.
* Edit Delivery Info не створює новий delivery record.
* Edit Delivery Info не прибирає книгу з Reading Queue.
* Edit Delivery Info не прибирає книгу з Custom Lists.
* Edit Delivery Info не змінює favorite state.
