# Delivery Block — Safety, Permissions, Scope and Acceptance Criteria

> Source: book-details-delivery-block.md lines 1220-1411

---

## 22. Data safety rules

Book Details Delivery Block must not:

* delete book;
* delete delivery record;
* directly mutate delivery status without flow;
* directly mutate ownership status without flow;
* change readingStatus;
* change formats;
* change rating;
* change progress;
* change notes;
* change quotes;
* change characters;
* change series relation;
* remove book from Reading Queue;
* remove book from Custom Lists;
* remove favorite state.

Important:

```text
Delivery Block only displays data and opens existing delivery flows.
```

---

## 23. Permissions and access

Rules:

* user can see delivery data only for own books;
* user can see only own delivery records;
* if delivery record belongs to another user, do not show it;
* if delivery record is not accessible, show generic error;
* do not expose another user's store, price, tracking number or notes.

Recommended error:

```text
Інформацію про доставку не знайдено
```

---

## 24. What is not included

У Book Details Delivery Block не входить:

* повна сторінка Books in Transit;
* повна історія всіх замовлень;
* повна статистика витрат;
* редагування всіх delivery records;
* bulk mark as received;
* bulk cancel;
* автоматичний tracking через API;
* інтеграція з Новою поштою;
* інтеграція з Укрпоштою;
* push / email reminders;
* refund flow;
* payment status;
* receipt upload;
* multiple books in one delivery record.

Important:

```text
Цей файл описує тільки delivery block на Book Details.
```

---

## 25. Future improvements

Future improvements:

* detailed delivery timeline inside Book Details;
* per-book delivery history tab;
* receipt attachments;
* auto tracking status;
* delivery reminders;
* reorder same book;
* show all past orders for this book directly in Book Details;
* delivery notes timeline;
* refund / return status.

Recommended MVP:

```text
Show active delivery summary + latest history preview + link to full Order History.
```

---

## 26. Acceptance Criteria

### Visibility

* Delivery Block показується, якщо книга має active delivery.
* Active delivery means `ownershipStatus = in_transit`.
* Active delivery record має `deliveryStatus = ordered` або `deliveryStatus = in_transit`.
* Delivery Block не показується для книг без delivery data.
* Якщо активної доставки немає, але є delivery history, показується history preview.
* Якщо delivery history відсутня, action “Позначити як В дорозі” доступна через Quick actions.

### Active delivery content

* User бачить delivery status badge.
* User бачить store name.
* User бачить order date.
* User бачить expected delivery date, якщо вона є.
* User бачить order number, якщо він є.
* User бачить tracking URL action, якщо URL є.
* User бачить price, якщо price exists.
* User бачить delivery service, якщо вона є.
* User бачить tracking number / TTN, якщо він є.
* User бачить note preview, якщо note exists.

### Status badges

* Delayed badge має вищий пріоритет за stored status.
* Arriving soon badge показується, якщо доставка очікується скоро.
* No delivery date badge показується, якщо expectedDeliveryDate відсутня.
* Якщо calculated UI status відсутній, показується stored deliveryStatus.
* Stored `ordered` показується як “Замовлено”.
* Stored `in_transit` показується як “В дорозі”.

### Actions

* User може позначити активну доставку як отриману.
* User може редагувати delivery info.
* User може скасувати активне замовлення.
* User може відкрити tracking URL.
* User може перейти до історії замовлень цієї книги.
* Cancel action не є primary action.
* Delivery Block запускає existing delivery flows, а не дублює їхню логіку.

### History preview

* Якщо книга має received delivery record, history preview може показати останнє отримане замовлення.
* Якщо книга має cancelled delivery record, history preview може показати останнє скасоване замовлення.
* Якщо delivery records кілька, user бачить link to full history.
* History preview не показує active delivery actions.

### Missing data

* Якщо `ownershipStatus = in_transit`, але delivery record missing, user бачить safe state.
* Safe state не ламає Book Details.
* User може додати delivery info або редагувати статуси.
* Missing optional fields не показуються як порожні рядки.

### Cross-feature updates

* Delivery Block оновлюється після Mark Book as In Transit.
* Delivery Block оновлюється після Edit Delivery Info.
* Delivery Block оновлюється після Mark Book as Received.
* Delivery Block оновлюється після Cancel Delivery Order.
* Statuses block оновлюється разом із Delivery Block.
* Books in Transit Page, Order History і Expense Statistics використовують ті самі delivery records.

### Responsive behavior

* На desktop Delivery Block показується в right sidebar.
* На mobile Delivery Block переходить у загальний потік сторінки.
* Long tracking numbers не ламають layout.
* Tracking URL не ламає layout.
* Actions залишаються доступними на mobile.

### Data safety

* Delivery Block не видаляє книгу.
* Delivery Block не видаляє delivery record.
* Delivery Block не змінює readingStatus.
* Delivery Block не змінює formats.
* Delivery Block не змінює rating.
* Delivery Block не змінює notes.
* Delivery Block не змінює quotes.
* Delivery Block не змінює characters.
* Delivery Block не змінює series relation.
* Delivery Block не прибирає книгу з Reading Queue.
* Delivery Block не прибирає книгу з Custom Lists.
* Delivery Block не змінює favorite state.

### Scope

* Active delivery summary входить у MVP.
* Latest delivery history preview входить у MVP.
* Link to full Order History входить у MVP.
* Full delivery history inside Book Details не входить у MVP.
* Delivery timeline не входить у MVP.
* Auto tracking не входить у MVP.
