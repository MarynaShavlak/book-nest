# Feature: Delivery Order History

## 1. Purpose

Feature **Delivery Order History** описує сторінку або окремий розділ, де користувач може переглядати історію всіх книжкових замовлень.

Ця фіча потрібна для того, щоб користувач міг бачити не тільки активні книги в дорозі, а й завершені або скасовані замовлення.

Order History має показувати:

* активні замовлення;
* отримані замовлення;
* скасовані замовлення;
* магазин;
* дату замовлення;
* дату отримання;
* дату скасування;
* ціну;
* валюту;
* службу доставки;
* номер ТТН;
* номер замовлення;
* посилання на замовлення / трекінг;
* нотатку;
* причину скасування, якщо вона була додана.

Important:

```text
Order History не є сторінкою активних доставок.
Активні доставки показуються на Books in Transit Page.
Order History показує всі delivery records.
```

---

## 2. Main idea

Кожен раз, коли користувач позначає книгу як **В дорозі**, створюється delivery record.

Цей record не має зникати після отримання або скасування.

Він змінює свій статус:

```text
ordered / in_transit → received
```

або:

```text
ordered / in_transit → cancelled
```

і потім залишається в **Order History**.

Main idea:

```text
Books in Transit Page = активні доставки.
Order History = всі замовлення за весь час.
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
cancel-delivery-order.md
delivery-expense-statistics.md
book-details-page.md
```

---

## 4. Route and navigation

Recommended route:

```text
/delivery/history
```

Alternative routes:

```text
/orders/history
/delivery/orders
```

Recommended MVP route:

```text
/delivery/history
```

Page title:

```text
Історія замовлень
```

Subtitle:

```text
Усі ваші книжкові замовлення: активні, отримані та скасовані
```

Entry points:

```text
Books in Transit Page → Right sidebar → Історія замовлень
Books in Transit Page → Header action → Історія замовлень
Book Details → Delivery history block → Переглянути історію
Dashboard delivery widget → Історія замовлень
```

---

## 5. Access rules

Order History доступна тільки авторизованому користувачу.

Rules:

* користувач бачить тільки свої delivery records;
* користувач не бачить чужі замовлення;
* користувач не може відкрити delivery record іншого користувача;
* якщо record не належить користувачу, показується safe not found state;
* якщо related book видалена, record може показуватися з fallback-даними або safe placeholder.

Recommended error:

```text
Замовлення не знайдено
```

---

## 6. Data source

Order History використовує delivery records.

Delivery record fields:

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

  receivedAt?: string | null;
  cancelledAt?: string | null;

  cancelReason?: string | null;
  cancelNote?: string | null;

  createdAt: string;
  updatedAt: string;
};
```

Book data used for display:

* title;
* author;
* cover;
* publisher;
* genres;
* series info, if exists;
* current ownershipStatus.

---

## 7. Which records are shown

Order History має показувати всі delivery records користувача.

Included statuses:

```text
ordered
in_transit
received
cancelled
```

Status groups:

| Group     | deliveryStatus          |
| --------- | ----------------------- |
| Активні   | `ordered`, `in_transit` |
| Отримані  | `received`              |
| Скасовані | `cancelled`             |

Important:

```text
Order History показує active records теж, але не замінює Books in Transit Page.
Для активних records основні дії доступні на Books in Transit Page.
```

---

## 8. Page layout

Recommended desktop layout:

```text
[Page header]

[Summary cards]

[Tabs / filters]
[Search]
[Sorting]

[Main content]
  [Order history list]

[Right sidebar]
  [Short statistics]
  [Expense summary]
  [Quick links]
```

Recommended mobile layout:

```text
1. Page header
2. Summary cards
3. Tabs
4. Search
5. Filters
6. Sorting
7. Order cards
8. Statistics / quick links
```

---

## 9. Page header

Header should include:

* title;
* subtitle;
* total orders count;
* link back to Books in Transit;
* link to Expense Statistics.

Example:

```text
Історія замовлень

Усі ваші книжкові замовлення: активні, отримані та скасовані.

24 замовлення

[Книги в дорозі]
[Статистика витрат]
```

---

## 10. Summary cards

Order History should have summary cards.

Recommended cards:

| Card             | Description                           |
| ---------------- | ------------------------------------- |
| Усього замовлень | all delivery records count            |
| Активні          | `ordered` + `in_transit`              |
| Отримані         | `received`                            |
| Скасовані        | `cancelled`                           |
| Загальна сума    | total price by selected status/filter |

Example:

```text
24
Усього замовлень

5
Активні

16
Отримані

3
Скасовані

8 450 грн
Загальна сума
```

---

### 10.1. Total orders

Count all delivery records:

```text
ordered + in_transit + received + cancelled
```

---

### 10.2. Active orders

Count records where:

```ts
deliveryStatus === "ordered" || deliveryStatus === "in_transit"
```

---

### 10.3. Received orders

Count records where:

```ts
deliveryStatus === "received"
```

---

### 10.4. Cancelled orders

Count records where:

```ts
deliveryStatus === "cancelled"
```

---

### 10.5. Total amount

Recommended MVP behavior:

```text
By default, total amount includes active + received orders.
Cancelled orders are not included in the main total unless user enables filter.
```

Reason:

```text
Скасовані замовлення не завжди означають реальну витрату.
```

If multiple currencies exist:

```text
Group totals by currency.
Do not auto-convert currencies in MVP.
```

Example:

```text
8 450 грн
120 $
```

---

## 11. Tabs

Recommended tabs:

```text
Усі
Активні
Отримані
Скасовані
```

Tab logic:

| Tab       | Records                 |
| --------- | ----------------------- |
| Усі       | all delivery records    |
| Активні   | `ordered`, `in_transit` |
| Отримані  | `received`              |
| Скасовані | `cancelled`             |

Default tab:

```text
Усі
```

Alternative default:

```text
Активні
```

Recommended MVP:

```text
Усі
```

Reason:

```text
User opened history, so they expect full order history, not only active records.
```

---

## 12. Search

Search placeholder:

```text
Пошук в історії замовлень...
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
* note;
* cancel reason;
* cancel note.

Search behavior:

* trim spaces;
* ignore case;
* search within selected tab / filters;
* empty search shows all records for current tab.

---

## 13. Filters

Recommended filters:

```text
За статусом
За магазином
За службою доставки
За датою замовлення
За датою отримання
За датою скасування
За місяцем
За роком
З ціною
Без ціни
З номером ТТН
Без номера ТТН
З посиланням
Без посилання
```

---

### 13.1. Status filter

Options:

```text
Усі
Замовлено
В дорозі
Отримано
Скасовано
```

Logic:

| Filter    | deliveryStatus |
| --------- | -------------- |
| Замовлено | `ordered`      |
| В дорозі  | `in_transit`   |
| Отримано  | `received`     |
| Скасовано | `cancelled`    |

---

### 13.2. Store filter

User can filter by `storeName`.

Example:

```text
Yakaboo
Vivat
Книгарня Є
Amazon
```

Store list should be generated from existing records.

---

### 13.3. Delivery service filter

User can filter by `deliveryService`.

Example:

```text
Нова пошта
Укрпошта
Meest
DHL
Amazon Delivery
Інше
```

---

### 13.4. Date filters

Recommended date filters:

```text
Цей місяць
Минувший місяць
Останні 3 місяці
Цей рік
Custom date range
```

Date source options:

* orderDate;
* receivedAt;
* cancelledAt.

Recommended MVP behavior:

```text
Default date filtering uses orderDate.
```

---

### 13.5. Price filters

Options:

```text
З ціною
Без ціни
```

Price filters are useful because expense statistics relies on records with price.

---

## 14. Sorting

Recommended sorting options:

```text
Новіші замовлення
Старіші замовлення
За датою замовлення
За датою отримання
За датою скасування
За магазином
За назвою книги
За автором
За ціною
```

Default sorting:

```text
Новіші замовлення
```

Default logic:

```text
orderDate DESC
```

If two records have same orderDate:

```text
updatedAt DESC
```

---

## 15. Order history card

Each delivery record should be shown as an order history card or row.

Recommended card structure:

```text
[Cover] [Book info] [Order info] [Status badge] [Actions]
```

---

### 15.1. Book info

Show:

* cover;
* title;
* author;
* publisher;
* genre / tags;
* series badge, if exists.

Example:

```text
Четверте крило
Ребекка Яррос
Vivat · Фентезі
```

If book was deleted:

```text
Книга недоступна
```

or:

```text
Книга була видалена
```

Recommended MVP:

```text
Show safe placeholder and keep order record visible.
```

---

### 15.2. Order info

Show:

* store name;
* order date;
* expected delivery date, if exists;
* received date, if status is received;
* cancelled date, if status is cancelled;
* order number, if exists;
* tracking URL, if exists;
* delivery service, if exists;
* tracking number, if exists;
* price and currency, if exists.

Example:

```text
Магазин: Yakaboo
Дата замовлення: 12.06.2026
Отримано: 16.06.2026
Служба доставки: Нова пошта
ТТН: 20450780123456
Ціна: 520 грн
```

---

### 15.3. Status badge

Status badge should show stored delivery status.

Badges:

| deliveryStatus | Label     |
| -------------- | --------- |
| `ordered`      | Замовлено |
| `in_transit`   | В дорозі  |
| `received`     | Отримано  |
| `cancelled`    | Скасовано |

Important:

```text
Order History should show stored status, not only calculated UI status.
```

For active records, optional additional UI badge can be shown:

```text
Очікується скоро
Затримується
Без дати доставки
```

But main status in history should remain:

```text
Замовлено / В дорозі / Отримано / Скасовано
```

---

### 15.4. Cancel reason

If order is cancelled and `cancelReason` exists, show it.

Example:

```text
Причина скасування: Магазин скасував замовлення
```

If `cancelNote` exists:

```text
Коментар: Книга була недоступна після оформлення.
```

---

### 15.5. Note

If delivery note exists, show short preview.

Example:

```text
Оплачено онлайн. Має прийти разом з іншими книгами.
```

If note is long:

* show 1–2 lines;
* allow expand;
* full note can be visible in details modal.

---

## 16. Actions

Order History actions depend on record status.

---

### 16.1. Common actions

For all records:

```text
Перейти до книги
```

If `trackingUrl` exists:

```text
Відкрити трекінг
```

Optional:

```text
Переглянути деталі замовлення
```

---

### 16.2. Actions for active records

For `ordered` and `in_transit` records:

```text
Редагувати доставку
Позначити як отриману
Скасувати замовлення
```

Recommended MVP:

```text
Active records in Order History can show actions, but primary active management remains on Books in Transit Page.
```

---

### 16.3. Actions for received records

For `received` records:

```text
Перейти до книги
Відкрити трекінг
Переглянути деталі
```

Do not show:

```text
Позначити як отриману
Скасувати замовлення
Редагувати доставку
```

Recommended MVP:

```text
Received records are read-only in Order History.
```

---

### 16.4. Actions for cancelled records

For `cancelled` records:

```text
Перейти до книги
Переглянути деталі
```

Optional action:

```text
Знову замовити
```

Recommended MVP:

```text
Do not include “Знову замовити” in MVP.
```

Reason:

```text
This can be handled by changing book ownershipStatus manually or using Mark Book as In Transit again from Book Details / Books to Buy.
```

---

## 17. Order details modal

Optional MVP but useful if cards should stay compact.

Action:

```text
Переглянути деталі
```

Modal title:

```text
Деталі замовлення
```

Modal should show:

* book preview;
* delivery status;
* store;
* order date;
* expected delivery date;
* received date;
* cancelled date;
* order number;
* tracking URL;
* delivery service;
* tracking number;
* price;
* currency;
* note;
* cancel reason;
* cancel note.

Recommended MVP:

```text
If card already shows enough information, details modal can be skipped.
```

---

## 18. Right sidebar

Order History can have right sidebar.

Recommended blocks:

```text
Order statistics
Expense summary
Top stores
Quick links
```

---

### 18.1. Order statistics

Example:

```text
Усього замовлень: 24
Активні: 5
Отримані: 16
Скасовані: 3
```

---

### 18.2. Expense summary

Example:

```text
Витрати за весь час
8 450 грн

Цього місяця
1 320 грн
```

Action:

```text
Детальна статистика витрат
```

leads to:

```text
delivery-expense-statistics.md
```

---

### 18.3. Top stores

Show top stores by order count.

Example:

```text
Yakaboo — 8
Vivat — 5
Книгарня Є — 4
```

---

### 18.4. Quick links

Recommended quick links:

```text
Книги в дорозі
Статистика витрат
Книги до покупки
```

---

## 19. Relationship with Books in Transit Page

Books in Transit Page shows:

```text
only active delivery records
```

Order History shows:

```text
all delivery records
```

If user marks book as received:

* record disappears from Books in Transit;
* record appears in Order History under **Отримані**.

If user cancels order:

* record disappears from Books in Transit;
* record appears in Order History under **Скасовані**.

If user edits active delivery:

* record remains active;
* updated data appears both in Books in Transit and Order History.

---

## 20. Relationship with Expense Statistics

Order History is one of the data sources for Expense Statistics.

Expense Statistics should use records with:

```text
price exists
```

Recommended default for main spending total:

```text
received + active orders
```

Cancelled records:

```text
shown separately
not included in main total by default
```

Reason:

```text
Скасовані замовлення не завжди є реальними витратами.
```

---

## 21. Relationship with Book Details

Book Details can show a delivery history block if book has delivery records.

Book Details delivery history can include:

* last active order;
* last received order;
* last cancelled order;
* link to full Order History filtered by this book.

Action:

```text
Переглянути історію замовлень книги
```

Filter:

```text
bookId = currentBookId
```

---

## 22. States

### 22.1. Loading state

Show while order history is loading.

Recommended UI:

* skeleton summary cards;
* skeleton order cards;
* skeleton sidebar.

---

### 22.2. Empty state

Show when user has no delivery records at all.

Title:

```text
Історія замовлень порожня
```

Description:

```text
Коли ви позначите книгу як “В дорозі”, її замовлення з’явиться тут.
```

Actions:

```text
Перейти до книг до покупки
Перейти до бібліотеки
```

---

### 22.3. Empty filtered state

Show when filters or search return no results.

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

### 22.4. Error state

Show when history cannot be loaded.

Title:

```text
Не вдалося завантажити історію замовлень
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

### 22.5. Deleted book state

If related book was deleted but order record remains:

```text
Книга була видалена
```

Show safe placeholder instead of broken card.

---

## 23. Responsive behavior

### Desktop

* summary cards in row;
* order list in main column;
* statistics / quick links in right sidebar;
* filters can be horizontal or drawer.

### Tablet

* sidebar moves below content;
* filters can collapse into popover;
* cards remain readable.

### Mobile

* one-column layout;
* summary cards can be 2-column grid or horizontal scroll;
* tabs are horizontally scrollable;
* filters open in bottom sheet;
* order cards stack vertically;
* actions collapse into kebab menu.

---

## 24. Data safety rules

Order History must not:

* delete books;
* delete delivery records;
* change ownershipStatus without explicit action;
* change deliveryStatus without explicit action;
* change readingStatus;
* change format;
* change rating;
* change notes;
* change quotes;
* change characters;
* change series relation;
* remove book from Reading Queue;
* remove book from Custom Lists.

Important:

```text
Order History is mostly read-only.
Actions inside history must use existing delivery flows.
```

---

## 25. Permissions and access

Rules:

* user can view only own order history;
* user can access only own delivery records;
* user can use actions only on own delivery records;
* if record does not belong to user, show generic not found state;
* do not expose another user's delivery data.

Recommended error:

```text
Замовлення не знайдено
```

---

## 26. What is not included

У MVP Order History не входить:

* редагування received records;
* редагування cancelled records;
* видалення delivery records;
* restore cancelled order;
* duplicate order from history;
* “Знову замовити” як окремий flow;
* export order history;
* invoice / receipt upload;
* payment status;
* refund tracking;
* return-to-store flow;
* автоматичний імпорт замовлень з email;
* інтеграція з магазинами;
* автоматичний tracking через delivery API.

Important:

```text
Order History MVP показує історію і дає доступ до активних delivery actions.
Складні post-order flows залишаються на future.
```

---

## 27. Future improvements

Future improvements можуть включати:

* export history to CSV / Excel;
* upload receipt / invoice;
* restore cancelled order;
* reorder / order again;
* attach screenshots of order;
* payment status;
* refund status;
* return status;
* delivery timeline;
* automatic tracking updates;
* email import;
* store integrations;
* advanced analytics by year.

---

## 28. Acceptance Criteria

### Page access

* Користувач може відкрити сторінку **Історія замовлень**.
* Сторінка доступна тільки авторизованому користувачу.
* Користувач бачить тільки свої delivery records.
* Сторінка має title **Історія замовлень**.
* Сторінка має subtitle.
* Сторінка має link back to Books in Transit Page.
* Сторінка має link to Expense Statistics.

### Records

* Order History показує delivery records зі статусом `ordered`.
* Order History показує delivery records зі статусом `in_transit`.
* Order History показує delivery records зі статусом `received`.
* Order History показує delivery records зі статусом `cancelled`.
* Order History не видаляє records після отримання.
* Order History не видаляє records після скасування.

### Tabs

* Користувач бачить tab **Усі**.
* Користувач бачить tab **Активні**.
* Користувач бачить tab **Отримані**.
* Користувач бачить tab **Скасовані**.
* Tab **Активні** показує `ordered` і `in_transit`.
* Tab **Отримані** показує `received`.
* Tab **Скасовані** показує `cancelled`.

### Summary cards

* Користувач бачить card **Усього замовлень**.
* Користувач бачить card **Активні**.
* Користувач бачить card **Отримані**.
* Користувач бачить card **Скасовані**.
* Користувач бачить card **Загальна сума**.
* Summary cards оновлюються після зміни delivery records.

### Search

* Search працює по назві книги.
* Search працює по автору.
* Search працює по магазину.
* Search працює по номеру замовлення.
* Search працює по номеру ТТН.
* Search працює по службі доставки.
* Search працює по нотатці.
* Search працює по причині скасування.

### Filters

* Користувач може фільтрувати за статусом.
* Користувач може фільтрувати за магазином.
* Користувач може фільтрувати за службою доставки.
* Користувач може фільтрувати за датою замовлення.
* Користувач може фільтрувати за датою отримання.
* Користувач може фільтрувати за датою скасування.
* Користувач може фільтрувати за наявністю ціни.
* Користувач може фільтрувати за наявністю ТТН.

### Sorting

* Користувач може сортувати історію замовлень.
* Default sorting — новіші замовлення.
* Користувач може сортувати за датою замовлення.
* Користувач може сортувати за датою отримання.
* Користувач може сортувати за датою скасування.
* Користувач може сортувати за магазином.
* Користувач може сортувати за назвою книги.
* Користувач може сортувати за ціною.

### Order card

* Card показує обкладинку книги або placeholder.
* Card показує назву книги.
* Card показує автора.
* Card показує магазин.
* Card показує дату замовлення.
* Card показує статус замовлення.
* Card показує дату отримання для received records.
* Card показує дату скасування для cancelled records.
* Card показує номер замовлення, якщо він є.
* Card показує номер ТТН, якщо він є.
* Card показує службу доставки, якщо вона є.
* Card показує ціну, якщо вона є.
* Card показує причину скасування, якщо вона є.
* Card не ламається, якщо related book була видалена.

### Actions

* Користувач може перейти до Book Details з order card.
* Користувач може відкрити tracking URL, якщо він є.
* Для active records користувач може редагувати доставку.
* Для active records користувач може позначити книгу як отриману.
* Для active records користувач може скасувати замовлення.
* Received records read-only у MVP.
* Cancelled records read-only у MVP.

### Relationship with other pages

* Якщо книга позначена як отримана, record з’являється в Order History.
* Якщо замовлення скасоване, record з’являється в Order History.
* Books in Transit Page показує тільки active records.
* Order History показує всі records.
* Expense Statistics може використовувати records з Order History.
* Book Details може показувати delivery history по конкретній книзі.

### States

* Користувач бачить loading state.
* Користувач бачить empty state, якщо історія порожня.
* Користувач бачить empty filtered state.
* Користувач бачить error state.
* Deleted book record показується safe placeholder.

### Data safety

* Order History не видаляє книги.
* Order History не видаляє delivery records.
* Order History не змінює readingStatus.
* Order History не змінює format.
* Order History не змінює rating.
* Order History не змінює notes.
* Order History не змінює quotes.
* Order History не змінює characters.
* Order History не змінює series relation.
* Order History не прибирає книгу з Reading Queue.
* Order History не прибирає книгу з Custom Lists.

### Scope

* Order History входить у MVP.
* Active, received і cancelled records входять у MVP.
* Export не входить у MVP.
* Restore cancelled order не входить у MVP.
* Payment / refund flows не входять у MVP.
