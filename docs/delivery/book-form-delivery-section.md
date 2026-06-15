# Feature: Book Form Delivery Section

## 1. Purpose

Feature **Book Form Delivery Section** описує, як delivery-логіка інтегрується у форму створення та редагування книги.

Цей документ відповідає на питання:

* що відбувається, якщо у формі книги користувач вибирає статус **В дорозі**;
* які delivery fields потрібно показати;
* коли створюється delivery record;
* коли оновлюється existing delivery record;
* що робити, якщо книга вже має активну доставку;
* які статуси можна змінювати прямо у Book Form;
* які delivery actions мають відкриватися окремими flows.

Important:

```text id="we759t"
Book Form Delivery Section не замінює повні delivery flows.
Він тільки описує, як форма книги інтегрується з delivery-модулем.
```

---

## 2. Related documentation

Related docs:

```text id="ixx67r"
create-edit-book.md
book-details-page.md
book-details-delivery-block.md
delivery-module-overview.md
delivery-status-logic.md
mark-book-as-in-transit.md
edit-delivery-info.md
mark-book-as-received.md
cancel-delivery-order.md
books-in-transit-page.md
delivery-order-history.md
delivery-expense-statistics.md
```

---

## 3. Main idea

У Book Form користувач може вибрати `ownershipStatus`.

Якщо користувач вибирає:

```ts id="b5djxs"
ownershipStatus = "in_transit"
```

система має запросити delivery information.

Reason:

```text id="q3ki3q"
Книга не може бути “В дорозі” без delivery record.
```

Delivery record має містити мінімум:

```text id="zt494k"
storeName
orderDate
```

Тому простого вибору статусу **В дорозі** недостатньо.

---

## 4. Ownership statuses in Book Form

Book Form може містити поле:

```text id="pwbqel"
Статус володіння
```

Options:

```ts id="g8p3yy"
export type OwnershipStatus =
  | "none"
  | "want_to_buy"
  | "in_transit"
  | "owned"
  | "borrowed_from_someone"
  | "lent_to_someone";
```

Labels:

| Value                   | Label             |
| ----------------------- | ----------------- |
| `none`                  | Немає             |
| `want_to_buy`           | Хочу купити       |
| `in_transit`            | В дорозі          |
| `owned`                 | Маю               |
| `borrowed_from_someone` | Позичена у когось |
| `lent_to_someone`       | Видана комусь     |

Important:

```text id="yuxhsm"
ebook і audiobook не є ownership statuses.
Вони мають бути в полі formats.
```

---

## 5. Placement in Book Form

Recommended placement:

```text id="rx8wk3"
Create / Edit Book Form
  Basic information
  Reading information
  Ownership information
    Ownership status
    Format
    Delivery section, if needed
  Series section
  Additional information
```

Delivery Section має з’являтися поруч із ownership information, бо вона напряму залежить від статусу володіння.

---

## 6. When to show Delivery Section

### 6.1. Show when selected status is in_transit

Delivery Section показується, якщо у формі вибрано:

```ts id="abbj7y"
ownershipStatus === "in_transit"
```

This applies to:

* Create Book Form;
* Edit Book Form;
* quick status edit flow, якщо він використовує ту саму форму.

---

### 6.2. Do not show when status is not delivery-related

Delivery Section не показується, якщо selected ownership status:

```ts id="yc5ywq"
"none"
"want_to_buy"
"owned"
"borrowed_from_someone"
"lent_to_someone"
```

For these statuses, related flows are different:

| ownershipStatus         | Related flow                     |
| ----------------------- | -------------------------------- |
| `want_to_buy`           | Books to Buy / purchase wishlist |
| `owned`                 | no delivery data required        |
| `borrowed_from_someone` | Borrowed book flow               |
| `lent_to_someone`       | Loan / lent book flow            |
| `none`                  | no ownership data required       |

---

## 7. Recommended UX behavior

There are two possible UX approaches.

---

### 7.1. Option A: Inline Delivery Section

When user selects **В дорозі**, delivery fields appear inside Book Form.

Example:

```text id="cueh7l"
Статус володіння: В дорозі

[Delivery Section]
  Магазин *
  Дата замовлення *
  Очікувана дата доставки
  Номер замовлення
  Посилання на замовлення / трекінг
  Ціна
  Валюта
  Служба доставки
  Номер ТТН
  Нотатка
```

Pros:

* user stays in one form;
* good for Create Book Form;
* all data saved together.

Cons:

* Book Form becomes longer;
* delivery validation becomes part of book validation;
* more complex edit logic.

---

### 7.2. Option B: Open Mark Book as In Transit modal

When user selects **В дорозі**, system opens existing delivery modal.

Flow:

```text id="rvsew4"
Select ownershipStatus = В дорозі
→ Open Mark Book as In Transit modal
→ User fills delivery info
→ Save
```

Pros:

* delivery logic stays isolated;
* Book Form stays simpler;
* same UX as Books to Buy / Book Details.

Cons:

* harder during Create Book Form, because book may not exist yet;
* needs temporary form state.

---

### 7.3. Recommended MVP approach

Recommended MVP:

```text id="t9j4qk"
Use inline Delivery Section inside Book Form.
```

Reason:

```text id="v91l1g"
During Create Book Form, the book does not exist yet, so opening a separate modal for delivery can complicate save logic.
```

But:

```text id="0w5l2e"
For Book Details and Books to Buy, use Mark Book as In Transit modal.
```

Final rule:

| Context           | Recommended behavior                                  |
| ----------------- | ----------------------------------------------------- |
| Create Book Form  | Inline Delivery Section                               |
| Edit Book Form    | Inline Delivery Section or link to Edit Delivery Info |
| Book Details      | Separate delivery flows                               |
| Books to Buy Page | Separate Mark Book as In Transit modal                |

---

## 8. Delivery Section UI

Section title:

```text id="hwh40l"
Доставка
```

Helper text:

```text id="4la6yf"
Додайте інформацію про замовлення, щоб відстежувати книгу на сторінці “Книги в дорозі”.
```

Recommended layout:

```text id="xjsrft"
[Доставка]
[Helper text]

[Магазин *]
[Дата замовлення *]
[Очікувана дата доставки]
[Номер замовлення]
[Посилання на замовлення / трекінг]
[Ціна] [Валюта]
[Служба доставки]
[Номер ТТН]
[Нотатка]
```

---

## 9. Delivery fields

### 9.1. Store

Field label:

```text id="1ftfmx"
Магазин *
```

Source:

```ts id="hi8hs1"
delivery.storeName
```

Required:

```text id="ij50s0"
Yes, if ownershipStatus = in_transit
```

Type:

```text id="xbbplw"
Select / Autocomplete / Text input
```

Placeholder:

```text id="jqmx4j"
Оберіть магазин
```

Validation:

* required;
* trim spaces;
* max 100 symbols.

Error:

```text id="ugbv4x"
Оберіть магазин
```

---

### 9.2. Order date

Field label:

```text id="cfzv1v"
Дата замовлення *
```

Source:

```ts id="uw9wro"
delivery.orderDate
```

Required:

```text id="lv8scw"
Yes, if ownershipStatus = in_transit
```

Type:

```text id="u8pxnk"
Date picker
```

Default:

```text id="x7u3c1"
Current date
```

Validation:

* required;
* cannot be in the future.

Errors:

```text id="gtkhvy"
Оберіть дату замовлення
Дата замовлення не може бути в майбутньому
```

---

### 9.3. Expected delivery date

Field label:

```text id="dtbjkc"
Очікувана дата доставки
```

Source:

```ts id="2b6wgq"
delivery.expectedDeliveryDate
```

Required:

```text id="f5mesn"
No
```

Type:

```text id="xy26r5"
Date picker
```

Validation:

* optional;
* cannot be earlier than `orderDate`.

Error:

```text id="j2j17b"
Очікувана дата доставки не може бути раніше дати замовлення
```

Used for:

* `arriving_soon`;
* `delayed`;
* `no_delivery_date`;
* Books in Transit filters;
* summary cards;
* donut chart.

---

### 9.4. Order number

Field label:

```text id="pbmozi"
Номер замовлення
```

Source:

```ts id="vhrp6z"
delivery.orderNumber
```

Required:

```text id="tbq7xk"
No
```

Type:

```text id="00y6fz"
Text input
```

Placeholder:

```text id="r89jlg"
Наприклад: №482915
```

Validation:

* optional;
* max 100 symbols.

Error:

```text id="p35ov4"
Номер замовлення не може бути довшим за 100 символів
```

Important:

```text id="v0h56t"
Номер замовлення не замінює номер ТТН.
```

---

### 9.5. Tracking URL

Field label:

```text id="4uczx2"
Посилання на замовлення / трекінг
```

Source:

```ts id="no0hn6"
delivery.trackingUrl
```

Required:

```text id="j1gcsq"
No
```

Type:

```text id="60o84y"
URL input
```

Placeholder:

```text id="b6krjr"
https://
```

Validation:

* optional;
* must be valid URL if filled.

Error:

```text id="3j03kn"
Посилання має бути валідним URL
```

---

### 9.6. Price

Field label:

```text id="qxi54l"
Ціна
```

Source:

```ts id="diqx4v"
delivery.price
```

Required:

```text id="uqrftf"
No
```

Type:

```text id="fw93uh"
Number input
```

Validation:

* optional;
* must be a number;
* cannot be negative.

Errors:

```text id="evmw93"
Ціна має бути числом
Ціна не може бути меншою за 0
```

Used for:

* Books in Transit summary;
* Order History;
* Expense Statistics.

---

### 9.7. Currency

Field label:

```text id="07zbnj"
Валюта
```

Source:

```ts id="jdz7ho"
delivery.currency
```

Required:

```text id="ozfn0x"
No
```

Type:

```text id="heoo14"
Select
```

Default:

```text id="5ke1ke"
UAH
```

Options:

```ts id="zbjhri"
export const currencies = [
  { value: "UAH", label: "грн" },
  { value: "USD", label: "$" },
  { value: "EUR", label: "€" },
] as const;
```

Rule:

```text id="31zxnj"
If price exists and currency is empty, use UAH.
```

---

### 9.8. Delivery service

Field label:

```text id="yzowdh"
Служба доставки
```

Source:

```ts id="4d6dnj"
delivery.deliveryService
```

Required:

```text id="xg351a"
No
```

Type:

```text id="180dhh"
Select / Autocomplete
```

Options:

```ts id="77s23c"
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
* if selected `other`, allow custom value;
* used in search, filters, cards and history.

---

### 9.9. Tracking number / TTN

Field label:

```text id="xprbgn"
Номер ТТН / tracking number
```

Source:

```ts id="akywm5"
delivery.trackingNumber
```

Required:

```text id="4gemxl"
No
```

Type:

```text id="d49a7n"
Text input
```

Placeholder:

```text id="43w5k8"
Наприклад: 20450780123456
```

Validation:

* optional;
* max 100 symbols;
* allow letters, numbers, spaces and hyphens.

Error:

```text id="v3rd7x"
Номер ТТН не може бути довшим за 100 символів
```

Important:

```text id="ypvgvu"
trackingNumber is separate from orderNumber.
```

---

### 9.10. Note

Field label:

```text id="jtk0mm"
Нотатка
```

Source:

```ts id="d33pai"
delivery.note
```

Required:

```text id="k6jf0u"
No
```

Type:

```text id="456ok6"
Textarea
```

Validation:

* optional;
* max 500 symbols.

Error:

```text id="6gq5js"
Нотатка не може бути довшою за 500 символів
```

---

## 10. Create Book Form behavior

### 10.1. User creates book with ownershipStatus = in_transit

Flow:

```text id="xokxbz"
Create Book Form
→ User selects ownershipStatus = in_transit
→ Delivery Section appears
→ User fills required delivery fields
→ User submits whole Book Form
```

After successful submit:

1. create book;
2. create delivery record connected to created book;
3. set book `ownershipStatus = in_transit`;
4. set delivery `deliveryStatus = ordered`;
5. redirect to Book Details or stay on form depending on app behavior.

Recommended redirect:

```text id="n4i10s"
/books/:bookId
```

Success message:

```text id="twsdw0"
Книгу додано і позначено як “В дорозі”
```

---

### 10.2. Create order of operations

Recommended backend / service logic:

```text id="hccth1"
1. Validate book fields.
2. Validate delivery fields.
3. Create book.
4. Create delivery record with created bookId.
5. Return created book with delivery summary.
```

Important:

```text id="3lik4e"
If delivery record creation fails, the whole operation should fail or be rolled back.
```

Recommended MVP:

```text id="2132ml"
Use transactional behavior if backend supports it.
If not, handle cleanup or show safe error.
```

---

### 10.3. If delivery validation fails

If user selected `in_transit`, but required delivery fields are empty:

```text id="7u835d"
Do not create book.
Show validation errors inside Delivery Section.
```

Errors:

```text id="0qii01"
Оберіть магазин
Оберіть дату замовлення
```

---

## 11. Edit Book Form behavior

### 11.1. Book already has active delivery

If existing book has:

```ts id="bnrfea"
ownershipStatus === "in_transit"
```

and active delivery record exists:

```ts id="h23o7y"
deliveryStatus === "ordered" || deliveryStatus === "in_transit"
```

then Delivery Section should be visible and prefilled.

User can edit:

* storeName;
* orderDate;
* expectedDeliveryDate;
* orderNumber;
* trackingUrl;
* price;
* currency;
* deliveryService;
* trackingNumber;
* note.

Recommended behavior:

```text id="fljsng"
Editing delivery fields inside Edit Book Form updates existing active delivery record.
```

Alternative:

```text id="s36uvq"
Show delivery summary and action “Редагувати доставку”, which opens Edit Delivery Info flow.
```

Recommended MVP:

```text id="w5obc9"
Allow inline editing if Delivery Section is already part of Book Form.
```

---

### 11.2. User changes ownershipStatus from want_to_buy to in_transit

Flow:

```text id="qmdjsk"
Edit Book Form
→ ownershipStatus: want_to_buy → in_transit
→ Delivery Section appears
→ User fills delivery fields
→ Submit
```

After submit:

* book ownershipStatus becomes `in_transit`;
* new delivery record is created;
* deliveryStatus is `ordered`;
* book disappears from Books to Buy;
* book appears in Books in Transit.

---

### 11.3. User changes ownershipStatus from none to in_transit

Same behavior as `want_to_buy → in_transit`.

After submit:

* book ownershipStatus becomes `in_transit`;
* delivery record is created;
* book appears in Books in Transit.

---

### 11.4. User changes ownershipStatus from in_transit to owned

This is a delivery completion action.

Recommended behavior:

```text id="dqsznh"
Do not silently change in_transit → owned inside Book Form.
```

Instead:

* show confirmation;
* or redirect/open `mark-book-as-received.md` flow.

Recommended MVP rule:

```text id="fcbxcs"
If user changes ownershipStatus from in_transit to owned in Book Form, show confirmation and apply Mark Book as Received logic.
```

Confirmation text:

```text id="0kl87w"
Позначити книгу як отриману?

Активна доставка буде завершена, а книга отримає статус “Маю”.
```

After confirm:

```ts id="v1f9ro"
ownershipStatus = "owned";
deliveryStatus = "received";
receivedAt = currentDate;
```

---

### 11.5. User changes ownershipStatus from in_transit to want_to_buy

This is a delivery cancellation-like action.

Recommended behavior:

```text id="dyde1x"
Do not silently change in_transit → want_to_buy inside Book Form.
```

Instead:

* show confirmation;
* use Cancel Delivery Order logic.

Confirmation text:

```text id="79wzlo"
Скасувати активне замовлення?

Книга повернеться в “Хочу купити”, а активна доставка буде скасована.
```

After confirm:

```ts id="qvwmje"
ownershipStatus = "want_to_buy";
deliveryStatus = "cancelled";
cancelledAt = currentDate;
```

---

### 11.6. User changes ownershipStatus from in_transit to none

This is also a delivery cancellation-like action.

Recommended behavior:

```text id="ds55q0"
Show confirmation and use Cancel Delivery Order logic.
```

Confirmation text:

```text id="j46bjf"
Скасувати активне замовлення?

Книга більше не буде показуватися у “Книги в дорозі”.
```

After confirm:

```ts id="gk0aqb"
ownershipStatus = "none";
deliveryStatus = "cancelled";
cancelledAt = currentDate;
```

---

### 11.7. User changes ownershipStatus from in_transit to borrowed/lent

This should be blocked in MVP.

Reason:

```text id="4i4ghn"
Книга не має одночасно бути в активній доставці та в loan flow.
```

Recommended error:

```text id="3l9lf0"
Спочатку завершіть або скасуйте активну доставку.
```

User should first:

* mark as received;
* or cancel delivery order.

Then user can use loan flow.

---

## 12. Existing delivery history in Edit Book Form

If book has delivery history but no active delivery:

```text id="quskyn"
received
cancelled
```

Edit Book Form should not show full delivery history.

Recommended behavior:

```text id="ed0d6c"
Show link to Delivery Order History if needed.
```

Example:

```text id="776at4"
Ця книга має історію замовлень.

[Переглянути історію]
```

Do not allow editing received / cancelled records in Book Form MVP.

---

## 13. Delivery status inside Book Form

Book Form should not expose full deliveryStatus management.

Recommended:

```text id="epfhhq"
Do not show deliveryStatus select in Create Book Form.
```

For Create Book Form:

```ts id="ev72np"
deliveryStatus = "ordered"
```

by default.

For Edit Book Form with active delivery:

Option A:

```text id="dxkj7m"
Show deliveryStatus select with ordered / in_transit only.
```

Option B:

```text id="sc8e2e"
Do not show deliveryStatus select, manage it in Edit Delivery Info flow.
```

Recommended MVP:

```text id="mw2l6s"
Do not show deliveryStatus select in Book Form.
Use Edit Delivery Info for changing ordered ↔ in_transit.
```

Reason:

```text id="gij6wv"
Book Form should focus on book data.
DeliveryStatus transitions belong to delivery flows.
```

---

## 14. Submit behavior

When user submits Book Form, system should:

1. validate book fields;
2. check selected ownershipStatus;
3. if ownershipStatus is `in_transit`, validate delivery fields;
4. create or update book;
5. create or update delivery record if needed;
6. handle delivery status transitions safely;
7. update related pages;
8. show success message.

---

## 15. Data changes by scenario

### 15.1. Create book as in transit

```ts id="l1f0so"
book.ownershipStatus = "in_transit";
delivery.status = "ordered";
```

Creates:

```text id="ksvka2"
Book
Delivery record
```

---

### 15.2. Edit existing book, still in transit

Updates:

```text id="rpzhq7"
Book fields
Active delivery record fields
```

Keeps:

```ts id="fk4yao"
book.ownershipStatus = "in_transit";
delivery.status = "ordered" | "in_transit";
```

---

### 15.3. Edit existing book from want_to_buy to in_transit

Creates new active delivery record:

```ts id="sygd8v"
book.ownershipStatus = "in_transit";
delivery.status = "ordered";
```

---

### 15.4. Edit existing book from in_transit to owned

Uses received flow:

```ts id="e11yh3"
book.ownershipStatus = "owned";
delivery.status = "received";
delivery.receivedAt = currentDate;
```

---

### 15.5. Edit existing book from in_transit to want_to_buy

Uses cancel flow:

```ts id="wbx73n"
book.ownershipStatus = "want_to_buy";
delivery.status = "cancelled";
delivery.cancelledAt = currentDate;
```

---

### 15.6. Edit existing book from in_transit to none

Uses cancel flow:

```ts id="8a9ot4"
book.ownershipStatus = "none";
delivery.status = "cancelled";
delivery.cancelledAt = currentDate;
```

---

## 16. Cross-page updates

### 16.1. Books to Buy Page

If book changes:

```text id="2jq53r"
want_to_buy → in_transit
```

then:

* book disappears from Books to Buy;
* book appears in Books in Transit.

If book changes:

```text id="c9yy0d"
in_transit → want_to_buy
```

then:

* active delivery becomes cancelled;
* book disappears from Books in Transit;
* book appears in Books to Buy.

---

### 16.2. Books in Transit Page

Book appears if:

```ts id="0a16dm"
ownershipStatus === "in_transit" &&
deliveryStatus === "ordered" | "in_transit"
```

Book disappears if delivery becomes:

```text id="2h279r"
received
cancelled
```

---

### 16.3. Book Details Page

After save, Book Details should show updated:

* ownership status;
* delivery block;
* quick actions;
* order history preview.

---

### 16.4. Order History

Order History should receive:

* new active delivery record when book becomes in_transit;
* received record when book becomes owned through received flow;
* cancelled record when delivery is cancelled.

---

### 16.5. Expense Statistics

Expense Statistics should update if:

* delivery price exists;
* delivery price changed;
* orderDate changed;
* storeName changed;
* delivery status changed to received or cancelled.

---

## 17. Validation summary

| Field                  | Required            | Validation                       |
| ---------------------- | ------------------- | -------------------------------- |
| `storeName`            | yes if `in_transit` | max 100, trim                    |
| `orderDate`            | yes if `in_transit` | cannot be in future              |
| `expectedDeliveryDate` | no                  | cannot be earlier than orderDate |
| `orderNumber`          | no                  | max 100                          |
| `trackingUrl`          | no                  | valid URL                        |
| `price`                | no                  | number, min 0                    |
| `currency`             | no                  | default UAH                      |
| `deliveryService`      | no                  | predefined or custom             |
| `trackingNumber`       | no                  | max 100                          |
| `note`                 | no                  | max 500                          |

---

## 18. Loading behavior

During submit:

* submit button is disabled;
* repeated submit is blocked;
* user sees loading state;
* form values are not cleared;
* page does not redirect until save is successful.

Button text:

```text id="hl3yw3"
Збереження...
```

---

## 19. Error behavior

If save fails:

* form stays open;
* entered values are preserved;
* book is not updated;
* delivery record is not created or updated;
* user sees error message.

General error:

```text id="6yzkmt"
Не вдалося зберегти книгу
```

Delivery-specific error:

```text id="j3y5ke"
Не вдалося зберегти інформацію про доставку
```

---

## 20. Edge cases

### 20.1. User selects in_transit but leaves required delivery fields empty

Behavior:

* block submit;
* show errors in Delivery Section.

---

### 20.2. Active delivery record missing

If book has:

```ts id="2gzlr1"
ownershipStatus === "in_transit"
```

but active delivery record missing:

* show Delivery Section empty;
* require store and orderDate before saving;
* allow user to repair data.

Helper text:

```text id="xswf04"
Книга має статус “В дорозі”, але інформація про доставку відсутня.
Додайте дані доставки, щоб зберегти зміни.
```

---

### 20.3. Duplicate active delivery

If book already has active delivery record, do not create another one.

Rule:

```text id="nq88u7"
One book can have only one active delivery record.
```

If editing active delivery:

```text id="5jfhfu"
Update existing active delivery record.
```

---

### 20.4. Book has old received/cancelled delivery records

If user changes book to `in_transit` again:

```text id="yd99hu"
Create new delivery record.
Do not reuse received/cancelled record.
```

---

### 20.5. User tries to switch from in_transit to loan status

Block in MVP:

```text id="6z2fvi"
Спочатку завершіть або скасуйте активну доставку.
```

---

## 21. Data safety rules

Book Form Delivery Section must not change:

```text id="3qojhl"
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

unless user explicitly edits those fields in their own sections of Book Form.

Important:

```text id="rffw74"
Delivery Section should only affect delivery-related data and ownershipStatus.
```

---

## 22. What is not included

У Book Form Delivery Section не входить:

* full Books in Transit Page;
* full Order History;
* full Expense Statistics;
* bulk delivery actions;
* automatic tracking;
* API integrations with delivery services;
* multiple books in one delivery record;
* receipt upload;
* refund flow;
* payment status;
* editing received / cancelled delivery records;
* delivery timeline.

Important:

```text id="p2ghyy"
Book Form Delivery Section is only an integration section inside Create / Edit Book Form.
```

---

## 23. Future improvements

Future improvements:

* open delivery modal instead of inline section;
* support multiple copies / multiple orders;
* support attaching receipt;
* prefill store and price from wishlist;
* create delivery from store link;
* allow manual received date;
* allow “order again” from old cancelled delivery;
* support multiple books in one order.

---

## 24. Acceptance Criteria

### Visibility

* Delivery Section appears when user selects `ownershipStatus = in_transit`.
* Delivery Section is hidden for `ownershipStatus = none`.
* Delivery Section is hidden for `ownershipStatus = want_to_buy`.
* Delivery Section is hidden for `ownershipStatus = owned`.
* Delivery Section is hidden for borrowed / lent statuses.
* If book already has active delivery, Delivery Section is prefilled.

### Create Book Form

* User can create book with `ownershipStatus = in_transit`.
* If user selects `in_transit`, delivery fields appear.
* User must fill storeName.
* User must fill orderDate.
* After submit, book is created.
* After submit, delivery record is created.
* New delivery record has `deliveryStatus = ordered`.
* New book appears on Books in Transit Page.
* Book Details shows Delivery Block.

### Edit Book Form

* User can edit existing active delivery information.
* Existing delivery fields are prefilled.
* Saving updates existing active delivery record.
* Saving does not create duplicate active delivery record.
* If user changes `want_to_buy → in_transit`, new delivery record is created.
* If user changes `none → in_transit`, new delivery record is created.
* If user changes `in_transit → owned`, received flow is used.
* If user changes `in_transit → want_to_buy`, cancel flow is used.
* If user changes `in_transit → none`, cancel flow is used.

### Validation

* Store is required if status is `in_transit`.
* Order date is required if status is `in_transit`.
* Order date cannot be in the future.
* Expected delivery date cannot be earlier than order date.
* Tracking URL must be valid if filled.
* Price must be number if filled.
* Price cannot be negative.
* Order number has max length.
* Tracking number has max length.
* Note has max length.

### Status rules

* Book Form does not show full deliveryStatus management in Create mode.
* New delivery record uses `deliveryStatus = ordered`.
* Book Form does not silently complete active delivery.
* Book Form does not silently cancel active delivery.
* Received and cancelled transitions require confirmation or related delivery flow.

### Cross-page updates

* Books to Buy updates after status changes.
* Books in Transit updates after status changes.
* Book Details updates after save.
* Delivery Block updates after save.
* Order History updates after delivery changes.
* Expense Statistics updates if delivery price/date/store changed.

### Loading and error

* Submit button is disabled while saving.
* Repeated submit is blocked.
* If save fails, entered values stay in form.
* If save fails, book is not updated.
* If save fails, delivery record is not created or updated.
* User sees delivery-specific error if delivery save failed.

### Data safety

* Delivery Section does not delete book.
* Delivery Section does not delete delivery history.
* Delivery Section does not change readingStatus unless user edits it separately.
* Delivery Section does not change formats unless user edits them separately.
* Delivery Section does not change rating.
* Delivery Section does not change notes.
* Delivery Section does not change quotes.
* Delivery Section does not change characters.
* Delivery Section does not change series relation.
* Delivery Section does not remove book from Reading Queue.
* Delivery Section does not remove book from Custom Lists.

### Scope

* Inline Delivery Section is included in MVP.
* One active delivery record per book is included in MVP.
* Multiple books in one delivery record are not included in MVP.
* Automatic tracking is not included in MVP.
* Receipt upload is not included in MVP.
