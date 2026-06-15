# Feature: Books in Transit Page

## 1. Purpose

Feature **Books in Transit Page** описує окрему сторінку BookNest для книг, які користувач уже замовив, але ще не отримав.

Сторінка потрібна для того, щоб користувач міг:

* бачити всі активні замовлені книги;
* відстежувати статус доставки;
* бачити книги, які очікуються скоро;
* бачити затримані доставки;
* швидко перейти до деталей книги;
* редагувати інформацію про доставку;
* позначити книгу як отриману;
* масово позначити книги як отримані;
* скасувати замовлення;
* повернути книгу назад у “Хочу купити”;
* переглядати коротку статистику активних доставок;
* бачити donut chart по статусах доставок;
* перейти до історії всіх замовлень;
* перейти до статистики витрат за місяцями.

Сторінка **Книги в дорозі** закриває проміжний сценарій:

```text
Хочу купити → В дорозі → Маю
```

Important:

```text
Books in Transit Page показує тільки активні доставки.
Отримані та скасовані замовлення мають переходити в Order History.
```

---

## 2. Main idea

Сторінка **Books in Transit Page** показує всі книги, які мають:

```ts
ownershipStatus === "in_transit"
```

і активний delivery record:

```ts
deliveryStatus === "ordered" || deliveryStatus === "in_transit"
```

Це означає:

* книга вже замовлена;
* книга ще не отримана;
* книга ще не скасована;
* книга має delivery information;
* користувач може керувати доставкою.

Сторінка не є wishlist і не є повною бібліотекою.

Вона показує тільки книги, які вже знаходяться в delivery flow.

---

## 3. Route and navigation

Recommended route:

```text
/in-transit
```

Alternative routes:

```text
/books/in-transit
/delivery/in-transit
```

Recommended sidebar label:

```text
В дорозі
```

Page title:

```text
Книги в дорозі
```

Subtitle:

```text
Книги, які ви вже замовили й очікуєте отримати
```

---

## 4. Access rules

Сторінка доступна тільки авторизованому користувачу.

Користувач має бачити тільки свої delivery records.

Rules:

* показувати тільки книги поточного користувача;
* показувати тільки delivery records поточного користувача;
* не показувати чужі замовлення;
* якщо delivery record не належить користувачу, не показувати його;
* якщо книга була видалена, delivery card не має показуватися як активна.

If access denied:

```text
Не вдалося завантажити книги в дорозі
```

---

## 5. Data source

Books in Transit Page використовує дані з двох джерел:

```text
Book
Delivery record
```

Book data:

* id;
* title;
* author;
* coverUrl;
* publisher;
* genres;
* tags;
* ownershipStatus;
* readingStatus;
* formats;
* isFavorite;
* series info, якщо є.

Delivery record data:

* id;
* bookId;
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
* deliveryStatus;
* createdAt;
* updatedAt.

---

## 6. Active delivery condition

Сторінка показує тільки активні доставки.

Active delivery condition:

```ts
ownershipStatus === "in_transit" &&
(deliveryStatus === "ordered" || deliveryStatus === "in_transit")
```

Active statuses:

```text
Замовлено
В дорозі
Очікується скоро
Затримується
Без дати доставки
```

Important:

```text
Очікується скоро, Затримується і Без дати доставки — це calculated UI statuses.
Вони не зберігаються як deliveryStatus.
```

---

## 7. Page layout

Recommended desktop layout:

```text
[Page header]

[Summary cards]

[Main content layout]
  Left / center:
    [Search]
    [Filters / tabs]
    [Sorting]
    [Bulk actions]
    [Delivery cards list]

  Right sidebar:
    [Donut chart]
    [Quick actions]
    [Expense summary]
    [Order history link]
    [Helper tip]
```

Recommended mobile layout:

```text
1. Page header
2. Summary cards
3. Search
4. Filters
5. Sorting
6. Donut chart
7. Bulk actions
8. Delivery cards
9. Quick actions
10. Helper tip
```

---

## 8. Page header

Header має містити:

* page title;
* subtitle;
* count badge;
* primary action, якщо потрібно;
* link to order history.

Example:

```text
Книги в дорозі 5

Книги, які ви вже замовили й очікуєте отримати.

[Історія замовлень]
```

Optional primary action:

```text
Додати книгу
```

або:

```text
Перейти до книг до покупки
```

Recommended MVP:

```text
Не робити “Додати доставку” як основну дію без вибору книги.
Delivery record має створюватися від конкретної книги.
```

---

## 9. Summary cards

Summary cards показують коротку статистику по активних доставках.

Recommended cards:

| Card                   | Source                                   |
| ---------------------- | ---------------------------------------- |
| Усього книг в дорозі   | active deliveries count                  |
| Очікуються цього тижня | expectedDeliveryDate within current week |
| Затримуються           | calculated `delayed` count               |
| Загальна сума          | sum of active deliveries with price      |
| Магазини               | unique storeName count                   |

Example:

```text
5
Усього книг в дорозі

2
Очікуються цього тижня

1
Затримується

2 450 грн
Загальна сума

3
Магазини
```

---

### 9.1. Total active deliveries

Count all records where:

```ts
ownershipStatus === "in_transit" &&
(deliveryStatus === "ordered" || deliveryStatus === "in_transit")
```

---

### 9.2. Expected this week

Count active deliveries where:

```text
expectedDeliveryDate is within current calendar week
```

If expectedDeliveryDate is empty, record is not counted here.

---

### 9.3. Delayed

Count active deliveries where:

```text
expectedDeliveryDate < today
```

and delivery is not received or cancelled.

---

### 9.4. Total price

Sum `price` for active deliveries.

Rules:

* count only delivery records where `price` exists;
* default currency is `UAH`;
* if multiple currencies exist, group totals by currency;
* do not auto-convert currencies in MVP.

Example:

```text
2 450 грн
```

If no prices exist:

```text
—
```

or hide the card.

Recommended MVP:

```text
Показувати card, але value = —
```

---

### 9.5. Stores count

Count unique `storeName` from active delivery records.

Example:

```text
Yakaboo
Vivat
Книгарня Є
```

Result:

```text
3 магазини
```

---

## 10. Search

Search placeholder:

```text
Пошук по книгах в дорозі...
```

Search should work by:

* book title;
* original title;
* author;
* publisher;
* store name;
* order number;
* tracking number / TTN;
* delivery service;
* note.

Search behavior:

* search is client-side if dataset is small;
* search can be server-side if dataset grows;
* search should ignore case;
* search should trim spaces;
* empty search shows all active deliveries.

---

## 11. Filters

Filters help user quickly narrow active deliveries.

Recommended primary filters:

```text
Усі
Замовлено
В дорозі
Очікуються скоро
Очікуються цього тижня
Затримуються
Без дати доставки
```

Additional filters:

```text
За магазином
За службою доставки
З номером ТТН
Без номера ТТН
З посиланням
Без посилання
З ціною
Без ціни
```

---

### 11.1. Filter logic

| Filter                    | Logic                                  |
| ------------------------- | -------------------------------------- |
| `all`                     | all active deliveries                  |
| `ordered`                 | `deliveryStatus = ordered`             |
| `in_transit`              | `deliveryStatus = in_transit`          |
| `arriving_soon`           | calculated UI status = `arriving_soon` |
| `this_week`               | expected date is within current week   |
| `delayed`                 | calculated UI status = `delayed`       |
| `no_delivery_date`        | expectedDeliveryDate is empty          |
| `by_store`                | selected storeName                     |
| `by_delivery_service`     | selected deliveryService               |
| `has_tracking_number`     | trackingNumber exists                  |
| `without_tracking_number` | trackingNumber is empty                |
| `has_tracking_url`        | trackingUrl exists                     |
| `without_tracking_url`    | trackingUrl is empty                   |
| `has_price`               | price exists                           |
| `without_price`           | price is empty                         |

---

### 11.2. Filters UI

Recommended UI:

```text
[Усі] [Замовлено] [В дорозі] [Очікуються скоро] [Затримуються] [Без дати]
[Фільтри]
```

Button **Фільтри** can open drawer / popover with advanced filters:

* store;
* delivery service;
* tracking number;
* price;
* date range.

---

## 12. Sorting

Recommended sorting dropdown label:

```text
Сортування
```

Sorting options:

```text
Найближча доставка
Новіші замовлення
Старіші замовлення
Спочатку затримані
За магазином
За службою доставки
За назвою книги
За автором
За ціною
```

Default sorting:

```text
Найближча доставка
```

Sorting rules:

* deliveries with expectedDeliveryDate come first;
* delayed deliveries can be pinned first if selected;
* deliveries without expectedDeliveryDate go after dated deliveries;
* if same date, sort by orderDate descending.

---

## 13. Bulk actions

Bulk actions are part of MVP.

User can:

* select multiple delivery cards;
* select all visible deliveries;
* mark selected as received;
* mark all active deliveries as received.

---

### 13.1. Selection mode

Entry points:

```text
Checkbox on delivery card
Select all checkbox
Bulk actions toolbar
```

When at least one item is selected, show bulk toolbar:

```text
Вибрано 3 книги

[Позначити як отримані]
[Скасувати вибір]
```

---

### 13.2. Bulk mark selected as received

Action:

```text
Позначити вибрані як отримані
```

Behavior:

1. User selects one or more active deliveries.
2. User clicks **Позначити як отримані**.
3. Confirmation modal opens.
4. User confirms.
5. Selected books get `ownershipStatus = owned`.
6. Selected delivery records get `deliveryStatus = received`.
7. `receivedAt` is set.
8. Books disappear from Books in Transit Page.
9. Records appear in Order History.

---

### 13.3. Bulk mark all as received

Action:

```text
Позначити всі як отримані
```

Recommended placement:

```text
Right sidebar → Quick actions
```

or:

```text
Bulk actions toolbar
```

Important:

```text
Bulk “Позначити всі як отримані” must always require confirmation.
```

Confirmation text:

```text
Позначити всі книги як отримані?

Усі активні книги в дорозі буде позначено як “Маю”.
Вони зникнуть зі сторінки “Книги в дорозі”, але залишаться у вашій бібліотеці.
```

Buttons:

```text
Скасувати
Позначити всі як отримані
```

---

### 13.4. Bulk safety rules

Bulk actions must not change:

* readingStatus;
* rating;
* progress;
* notes;
* quotes;
* characters;
* series relation;
* custom lists;
* reading queue;
* favorite state.

---

## 14. Delivery card

Each active delivery should be shown as a card or list row.

Recommended card structure:

```text
[Checkbox] [Cover] [Book info] [Delivery info] [Status badge] [Actions]
```

---

### 14.1. Book information

Show:

* cover;
* title;
* author;
* publisher;
* genre / tags, if available;
* series badge, if book belongs to series.

Example:

```text
Четверте крило
Ребекка Яррос
Vivat · Фентезі
```

---

### 14.2. Order information

Show:

* store name;
* order date;
* expected delivery date;
* order number;
* tracking URL;
* price;
* currency.

Example:

```text
Магазин: Yakaboo
Замовлено: 12.06.2026
Очікується: 16.06.2026
Номер замовлення: №482915
Ціна: 520 грн
```

---

### 14.3. Delivery information

Show:

* delivery status badge;
* delivery service;
* tracking number / TTN;
* calculated UI status;
* note preview.

Example:

```text
Служба доставки: Нова пошта
ТТН: 20450780123456
```

If note exists:

```text
Оплачено онлайн. Має прийти разом з іншими книгами.
```

If note is long:

* show first 1–2 lines;
* allow expand or show full note in edit modal / details.

---

### 14.4. Tracking URL

If `trackingUrl` exists, show action:

```text
Відкрити трекінг
```

Behavior:

* opens link in new tab;
* validate URL before saving;
* if URL missing, do not show action.

---

### 14.5. Price display

If price exists:

```text
520 грн
```

If price is missing:

```text
Ціна не вказана
```

Recommended MVP:

```text
Do not show “Ціна не вказана” on card unless space allows.
```

Use missing price mostly in filters and edit modal.

---

## 15. Delivery status badges

Delivery card should show the most important current badge.

Badge priority:

```text
1. delayed
2. arriving_soon
3. no_delivery_date
4. stored deliveryStatus
```

Examples:

| Data                               | Badge             |
| ---------------------------------- | ----------------- |
| expectedDeliveryDate was yesterday | Затримується      |
| expectedDeliveryDate is tomorrow   | Очікується скоро  |
| expectedDeliveryDate is empty      | Без дати доставки |
| deliveryStatus = ordered           | Замовлено         |
| deliveryStatus = in_transit        | В дорозі          |

Important:

```text
If delivery is delayed, show “Затримується” even if stored deliveryStatus = ordered.
```

---

## 16. Donut chart

Donut chart is part of MVP.

Purpose:

* show distribution of active deliveries;
* visually highlight delayed and soon deliveries;
* help user understand delivery state quickly.

Recommended location:

```text
Right sidebar
```

or:

```text
Below summary cards on mobile
```

---

### 16.1. Donut chart segments

Recommended segments:

| Segment           | Source                                                                |
| ----------------- | --------------------------------------------------------------------- |
| Очікуються скоро  | calculated `arriving_soon`                                            |
| Затримуються      | calculated `delayed`                                                  |
| Без дати доставки | calculated `no_delivery_date`                                         |
| В дорозі          | stored `deliveryStatus = in_transit`, if no higher priority UI status |
| Замовлено         | stored `deliveryStatus = ordered`, if no higher priority UI status    |

Important:

```text
One delivery record should belong to only one donut segment.
```

Use badge priority:

```text
delayed → arriving_soon → no_delivery_date → in_transit → ordered
```

---

### 16.2. Donut chart center label

Example:

```text
5 книг
```

or:

```text
5
у дорозі
```

---

### 16.3. Donut chart legend

Example:

```text
Очікуються скоро — 2
В дорозі — 1
Затримуються — 1
Замовлено — 1
```

If there are no deliveries:

```text
Donut chart should not be shown.
```

---

## 17. Right sidebar

Right sidebar should contain:

```text
Delivery overview
Donut chart
Quick actions
Expense summary
Order history link
Helper tip
```

---

### 17.1. Delivery overview

Show compact stats:

```text
Активні доставки: 5
Затримуються: 1
Очікуються цього тижня: 2
```

---

### 17.2. Quick actions

Recommended quick actions:

```text
Позначити всі як отримані
Перейти до історії замовлень
Перейти до статистики витрат
Перейти до книг до покупки
```

Important:

```text
Позначити всі як отримані має confirmation modal.
```

---

### 17.3. Expense summary

Show short spending summary for active deliveries.

Example:

```text
Активні замовлення
2 450 грн

Цього місяця
1 320 грн
```

If no prices:

```text
Витрати ще не вказані
```

Action:

```text
Детальна статистика
```

leads to:

```text
delivery-expense-statistics.md
```

---

### 17.4. Order history link

Show action:

```text
Історія замовлень
```

Behavior:

* opens Order History page / tab;
* includes active, received, cancelled records.

---

### 17.5. Helper tip

Text:

```text
Порада

Книги зі статусом “В дорозі” зібрані тут, щоб ви могли швидко бачити очікувані та затримані доставки.
```

---

## 18. Card actions

Each delivery card should have actions.

Primary action:

```text
Позначити як отриману
```

Secondary actions:

```text
Редагувати доставку
Перейти до книги
Скасувати замовлення
Відкрити трекінг
```

Recommended visible actions:

```text
Позначити як отриману
Редагувати
```

Other actions can be in kebab menu:

```text
Перейти до книги
Скасувати замовлення
Відкрити трекінг
```

---

### 18.1. Mark as received

Behavior:

* opens confirmation modal;
* after confirm sets `ownershipStatus = owned`;
* sets `deliveryStatus = received`;
* sets `receivedAt`;
* removes card from active page;
* shows success message.

Success message:

```text
Книгу позначено як отриману
```

---

### 18.2. Edit delivery

Behavior:

* opens Edit Delivery Info modal / drawer;
* fields are prefilled;
* after save card updates immediately.

---

### 18.3. Go to book

Action:

```text
Перейти до книги
```

Route:

```text
/books/:bookId
```

---

### 18.4. Cancel order

Behavior:

* opens Cancel Delivery Order confirmation;
* user chooses whether to return book to “Хочу купити”;
* deliveryStatus becomes `cancelled`;
* card disappears from active page.

---

## 19. Order history entry point

Books in Transit Page should have entry point to Order History.

Placement:

* page header;
* right sidebar;
* quick actions.

Action label:

```text
Історія замовлень
```

Order History includes:

```text
Активні
Отримані
Скасовані
```

Important:

```text
Books in Transit Page does not show received or cancelled records in the main active list.
```

---

## 20. Expense statistics entry point

Books in Transit Page should have entry point to Expense Statistics.

Placement:

* right sidebar expense summary;
* summary card “Загальна сума”;
* quick actions.

Action label:

```text
Статистика витрат
```

Expense Statistics should include:

* monthly spending;
* spending by stores;
* spending by status;
* average order price;
* currency breakdown.

Important:

```text
Detailed monthly statistics are described in delivery-expense-statistics.md.
Books in Transit Page only shows short summary.
```

---

## 21. Dashboard connection

Dashboard can show small delivery widget.

Example:

```text
5 книг зараз у дорозі
2 очікуються цього тижня
1 доставка затримується
Найближча доставка: “Четверте крило” — завтра
```

Action:

```text
Перейти до книг в дорозі
```

This widget should use the same active delivery logic as Books in Transit Page.

---

## 22. Books to Buy connection

Books to Buy Page should allow user to mark a wanted book as in transit.

Flow:

```text
Books to Buy → Позначити як “В дорозі” → Mark Book as In Transit modal
```

After submit:

* book disappears from Books to Buy;
* book appears on Books in Transit;
* ownershipStatus becomes `in_transit`;
* deliveryStatus becomes `ordered`.

---

## 23. Book Details connection

If book has:

```ts
ownershipStatus === "in_transit"
```

Book Details should show delivery block with:

* store name;
* order date;
* expected delivery date;
* delivery status;
* delivery service;
* tracking number;
* price;
* tracking URL;
* note;
* actions.

Actions:

```text
Позначити як отриману
Редагувати доставку
Скасувати замовлення
```

---

## 24. States

### 24.1. Loading state

Show when delivery records are loading.

Recommended UI:

* skeleton summary cards;
* skeleton delivery cards;
* skeleton right sidebar.

---

### 24.2. Empty state

Show when there are no active deliveries.

Title:

```text
У вас поки немає книг у дорозі
```

Description:

```text
Коли ви замовите книгу, позначте її як “В дорозі” — і вона з’явиться тут.
```

Actions:

```text
Перейти до книг до покупки
Додати книгу
```

---

### 24.3. Empty search state

Show when search or filters return no results.

Title:

```text
Нічого не знайдено
```

Description:

```text
Спробуйте змінити запит або очистити фільтри.
```

Action:

```text
Очистити фільтри
```

---

### 24.4. Error state

Show when page cannot load data.

Title:

```text
Не вдалося завантажити книги в дорозі
```

Description:

```text
Спробуйте оновити сторінку або повторити запит.
```

Action:

```text
Спробувати ще раз
```

---

### 24.5. No price data state

If there are active deliveries but no prices:

```text
Витрати ще не вказані
```

Show in expense summary / total amount card.

---

### 24.6. Bulk confirmation state

Show before bulk marking books as received.

Title:

```text
Позначити вибрані книги як отримані?
```

Description:

```text
Вибрані книги зникнуть зі сторінки “Книги в дорозі” і залишаться у вашій бібліотеці зі статусом “Маю”.
```

Buttons:

```text
Скасувати
Позначити як отримані
```

---

## 25. Responsive behavior

### Desktop

* main content + right sidebar;
* summary cards in one row;
* delivery cards in main column;
* donut chart in sidebar.

### Tablet

* sidebar moves below summary cards or below list;
* cards remain readable;
* filters can collapse into drawer.

### Mobile

* one-column layout;
* summary cards can become horizontal scroll or 2-column grid;
* search full width;
* filters in bottom sheet / drawer;
* delivery cards stack vertically;
* card actions can collapse into menu;
* donut chart appears before list or after summary cards.

---

## 26. What is not included

У MVP для **Books in Transit Page** не входить:

* автоматичний tracking через delivery service API;
* інтеграція з Новою поштою;
* інтеграція з Укрпоштою;
* push notifications;
* email reminders;
* автоматичний імпорт замовлень з email;
* кілька книг в одному delivery record;
* refund tracking;
* return-to-store flow;
* payment status як окрема система;
* автоматична конвертація валют;
* сканування ТТН;
* shared delivery records.

Important:

```text
MVP підтримує ручне відстеження доставки.
Автоматичні інтеграції залишаються на future.
```

---

## 27. Acceptance Criteria

### Page access

* Користувач може відкрити сторінку **Книги в дорозі**.
* Сторінка доступна тільки авторизованому користувачу.
* Користувач бачить тільки свої книги в дорозі.
* Сторінка має sidebar label **В дорозі**.
* Сторінка має title **Книги в дорозі**.
* Сторінка має subtitle.

### Active deliveries

* Сторінка показує тільки active delivery records.
* Active delivery має `ownershipStatus = in_transit`.
* Active delivery має `deliveryStatus = ordered` або `deliveryStatus = in_transit`.
* Received records не показуються в active list.
* Cancelled records не показуються в active list.

### Summary cards

* Користувач бачить card **Усього книг в дорозі**.
* Користувач бачить card **Очікуються цього тижня**.
* Користувач бачить card **Затримуються**.
* Користувач бачить card **Загальна сума**.
* Користувач бачить card **Магазини**.
* Summary cards оновлюються після зміни delivery records.

### Search

* Користувач може шукати книги в дорозі.
* Search працює по назві книги.
* Search працює по автору.
* Search працює по магазину.
* Search працює по номеру замовлення.
* Search працює по номеру ТТН.
* Search працює по службі доставки.
* Search працює по нотатці.

### Filters

* Користувач може фільтрувати всі активні доставки.
* Користувач може фільтрувати замовлені книги.
* Користувач може фільтрувати книги в дорозі.
* Користувач може фільтрувати книги, які очікуються скоро.
* Користувач може фільтрувати затримані доставки.
* Користувач може фільтрувати книги без дати доставки.
* Користувач може фільтрувати за магазином.
* Користувач може фільтрувати за службою доставки.
* Користувач може фільтрувати за наявністю ТТН.
* Користувач може фільтрувати за наявністю ціни.

### Sorting

* Користувач може сортувати доставки.
* Default sorting — найближча доставка.
* Користувач може сортувати за датою замовлення.
* Користувач може сортувати за очікуваною датою доставки.
* Користувач може сортувати за магазином.
* Користувач може сортувати за службою доставки.
* Користувач може сортувати за назвою книги.
* Користувач може сортувати за ціною.

### Delivery card

* Кожна активна доставка показується як card або row.
* Card показує обкладинку книги.
* Card показує назву книги.
* Card показує автора.
* Card показує магазин.
* Card показує дату замовлення.
* Card показує очікувану дату доставки, якщо вона є.
* Card показує номер замовлення, якщо він є.
* Card показує tracking URL, якщо він є.
* Card показує ціну, якщо вона є.
* Card показує службу доставки, якщо вона є.
* Card показує номер ТТН, якщо він є.
* Card показує delivery status badge.
* Card показує note preview, якщо нотатка є.

### Delivery badges

* Card показує `delayed`, якщо доставка прострочена.
* Card показує `arriving_soon`, якщо доставка очікується скоро.
* Card показує `no_delivery_date`, якщо дата доставки не вказана.
* Якщо calculated UI status відсутній, card показує stored deliveryStatus.
* Delayed badge має вищий пріоритет за stored status.

### Donut chart

* Сторінка має donut chart.
* Donut chart показує тільки active deliveries.
* Donut chart має segment **Очікуються скоро**.
* Donut chart має segment **Затримуються**.
* Donut chart має segment **Без дати доставки**.
* Donut chart має segment **В дорозі**.
* Donut chart має segment **Замовлено**.
* One delivery record належить тільки до одного segment.
* Donut chart не показується, якщо active deliveries немає.

### Bulk actions

* Користувач може вибрати кілька delivery cards.
* Користувач може позначити вибрані книги як отримані.
* Користувач може позначити всі активні книги як отримані.
* Bulk action має confirmation modal.
* Після bulk received книги зникають зі сторінки.
* Bulk action не змінює readingStatus, rating, notes, quotes, series relation або custom lists.

### Card actions

* Користувач може позначити книгу як отриману.
* Користувач може редагувати доставку.
* Користувач може перейти до Book Details.
* Користувач може скасувати замовлення.
* Користувач може відкрити tracking URL, якщо він є.

### Right sidebar

* Right sidebar показується на desktop.
* Right sidebar містить donut chart.
* Right sidebar містить quick actions.
* Right sidebar містить expense summary.
* Right sidebar містить link to order history.
* Right sidebar містить helper tip.
* На mobile sidebar blocks переходять у загальний потік.

### Order history and statistics

* Користувач може перейти до історії замовлень.
* Користувач може перейти до статистики витрат.
* Books in Transit Page показує short expense summary.
* Detailed order history описується окремо.
* Detailed expense statistics описується окремо.

### States

* Користувач бачить loading state.
* Користувач бачить empty state, якщо активних доставок немає.
* Користувач бачить empty search state, якщо пошук нічого не знайшов.
* Користувач бачить error state, якщо дані не завантажилися.
* Користувач бачить bulk confirmation перед bulk action.

### Data safety

* Books in Transit Page не видаляє книги.
* Mark as received не видаляє книгу.
* Cancel order не видаляє книгу.
* Delivery actions не змінюють readingStatus.
* Delivery actions не змінюють series relation.
* Delivery actions не видаляють notes, quotes, characters або rating.
* Delivery actions не прибирають книгу з Reading Queue.
* Delivery actions не прибирають книгу з Custom Lists.
