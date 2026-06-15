# Feature: Delivery Expense Statistics

## 1. Purpose

Feature **Delivery Expense Statistics** описує логіку статистики витрат на книжкові замовлення в BookNest.

Ця фіча потрібна, щоб користувач міг бачити:

* скільки грошей витрачено на книги;
* скільки грошей зараз у активних замовленнях;
* скільки витрачено по місяцях;
* які магазини використовуються найчастіше;
* у яких магазинах користувач витрачає найбільше;
* середню вартість замовлення;
* кількість замовлень за місяцями;
* окрему статистику для активних, отриманих і скасованих замовлень;
* витрати по валютах.

Important:

```text
Delivery Expense Statistics рахується на основі delivery records, а не на основі всіх книг у бібліотеці.
```

---

## 2. Main idea

Коли користувач позначає книгу як **В дорозі**, створюється delivery record.

Якщо в цьому delivery record вказана ціна, цей запис може брати участь у статистиці витрат.

Example:

```text
Книга: Четверте крило
Магазин: Yakaboo
Дата замовлення: 12.06.2026
Ціна: 520 грн
Статус: Отримано
```

Цей record може бути використаний для:

* total spending;
* monthly spending;
* spending by store;
* average order price;
* order history statistics.

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
delivery-order-history.md
book-details-page.md
```

---

## 4. Route and navigation

Recommended route:

```text
/delivery/statistics
```

Alternative routes:

```text
/delivery/expenses
/statistics/delivery
```

Recommended MVP route:

```text
/delivery/statistics
```

Page title:

```text
Статистика витрат
```

Subtitle:

```text
Витрати на книжкові замовлення за місяцями, магазинами та статусами
```

Entry points:

```text
Books in Transit Page → Right sidebar → Статистика витрат
Books in Transit Page → Summary card “Загальна сума”
Order History → Right sidebar → Детальна статистика витрат
Dashboard → Delivery widget → Статистика витрат
```

---

## 5. Access rules

Сторінка доступна тільки авторизованому користувачу.

Rules:

* користувач бачить тільки свою статистику;
* статистика рахується тільки по delivery records поточного користувача;
* чужі delivery records не враховуються;
* якщо delivery records відсутні, показується empty state;
* якщо records є, але ціна ніде не вказана, показується no price data state.

Recommended error:

```text
Не вдалося завантажити статистику витрат
```

---

## 6. Data source

Delivery Expense Statistics використовує delivery records.

Required fields for calculations:

```ts
type BookDelivery = {
  id: string;
  userId: string;
  bookId: string;

  storeName: string;
  orderDate: string;

  price?: number | null;
  currency?: "UAH" | "USD" | "EUR" | null;

  status: "ordered" | "in_transit" | "received" | "cancelled";

  receivedAt?: string | null;
  cancelledAt?: string | null;

  createdAt: string;
  updatedAt: string;
};
```

Optional book fields for display:

* title;
* author;
* cover;
* publisher;
* genres;
* series info.

---

## 7. Which records are included

Expense Statistics should use delivery records where:

```text
price exists
```

and:

```text
price >= 0
```

Records without price should not be included in money totals, but they can still be counted separately as orders without price.

---

### 7.1. Included delivery statuses

Expense Statistics can work with all delivery statuses:

```text
ordered
in_transit
received
cancelled
```

But they should be grouped carefully.

| Status       | Include in statistics | Include in main total by default |
| ------------ | --------------------- | -------------------------------- |
| `ordered`    | yes                   | yes                              |
| `in_transit` | yes                   | yes                              |
| `received`   | yes                   | yes                              |
| `cancelled`  | yes                   | no                               |

Important:

```text
Cancelled orders are visible in statistics, but they are not included in the main total by default.
```

Reason:

```text
Скасоване замовлення не завжди означає реальну витрату.
```

---

## 8. Main spending rule

Recommended MVP rule:

```text
Main total = active orders + received orders
```

Where active orders are:

```text
deliveryStatus = ordered / in_transit
```

Completed orders are:

```text
deliveryStatus = received
```

Excluded from main total by default:

```text
deliveryStatus = cancelled
```

User can optionally enable:

```text
Включити скасовані замовлення
```

---

## 9. Currency logic

Default currency:

```text
UAH
```

If price is filled and currency is empty:

```text
currency = UAH
```

Supported MVP currencies:

```ts
export const currencies = [
  { value: "UAH", label: "грн" },
  { value: "USD", label: "$" },
  { value: "EUR", label: "€" },
] as const;
```

Important:

```text
У MVP не потрібно робити автоматичну конвертацію валют.
```

If multiple currencies exist:

```text
Show totals grouped by currency.
```

Example:

```text
8 450 грн
120 $
45 €
```

---

## 10. Date logic

Recommended MVP rule:

```text
Monthly expense statistics uses orderDate.
```

Reason:

```text
Витрата зазвичай прив’язана до моменту замовлення, а не до моменту отримання.
```

Example:

```text
orderDate = 12.06.2026
receivedAt = 02.07.2026

Expense month = June 2026
```

Alternative date modes can be added later:

```text
By order date
By received date
```

Recommended MVP:

```text
Only by orderDate.
```

---

## 11. Page layout

Recommended desktop layout:

```text
[Page header]

[Summary cards]

[Filters / date range / currency view]

[Main content]
  [Monthly spending chart]
  [Orders count chart]
  [Spending by store]
  [Status breakdown]
  [Top expensive orders]

[Right sidebar]
  [Quick summary]
  [Top stores]
  [Links]
```

Recommended mobile layout:

```text
1. Page header
2. Summary cards
3. Filters
4. Monthly spending chart
5. Spending by store
6. Status breakdown
7. Top expensive orders
8. Quick links
```

---

## 12. Page header

Header should include:

* title;
* subtitle;
* selected period;
* quick link back to Order History;
* quick link back to Books in Transit.

Example:

```text
Статистика витрат

Витрати на книжкові замовлення за місяцями, магазинами та статусами.

Період: 2026

[Історія замовлень]
[Книги в дорозі]
```

---

## 13. Summary cards

Recommended summary cards:

| Card                 | Description                                              |
| -------------------- | -------------------------------------------------------- |
| Загальна сума        | active + received orders, excluding cancelled by default |
| Активні замовлення   | sum of `ordered` + `in_transit`                          |
| Отримані замовлення  | sum of `received`                                        |
| Скасовані замовлення | sum of `cancelled`, shown separately                     |
| Середня ціна         | average price of included records                        |
| Замовлень з ціною    | count of records where price exists                      |

Example:

```text
8 450 грн
Загальна сума

1 320 грн
Активні замовлення

7 130 грн
Отримані

640 грн
Скасовані

528 грн
Середня ціна

16
Замовлень з ціною
```

---

### 13.1. Total spending

Default calculation:

```text
sum(price) where deliveryStatus = ordered / in_transit / received
```

Exclude by default:

```text
deliveryStatus = cancelled
```

If user enables cancelled:

```text
sum(price) where deliveryStatus = ordered / in_transit / received / cancelled
```

---

### 13.2. Active spending

Calculation:

```text
sum(price) where deliveryStatus = ordered / in_transit
```

This shows how much money is currently in active orders.

---

### 13.3. Received spending

Calculation:

```text
sum(price) where deliveryStatus = received
```

This shows completed book purchases.

---

### 13.4. Cancelled orders value

Calculation:

```text
sum(price) where deliveryStatus = cancelled
```

Important:

```text
Cancelled value should be shown separately.
Do not mix it into main total by default.
```

---

### 13.5. Average order price

Calculation:

```text
total included spending / count of included records with price
```

If there are multiple currencies:

```text
Show average separately by currency.
```

Example:

```text
528 грн
34 $
```

---

## 14. Filters

Recommended filters:

```text
Період
Статус
Магазин
Валюта
Служба доставки
Включити скасовані
```

---

### 14.1. Period filter

Options:

```text
Цей місяць
Минувший місяць
Останні 3 місяці
Останні 6 місяців
Цей рік
Увесь час
Custom range
```

Recommended default:

```text
Цей рік
```

---

### 14.2. Status filter

Options:

```text
Усі включені
Активні
Отримані
Скасовані
```

Status logic:

| Filter    | deliveryStatus          |
| --------- | ----------------------- |
| Активні   | `ordered`, `in_transit` |
| Отримані  | `received`              |
| Скасовані | `cancelled`             |

---

### 14.3. Store filter

User can filter statistics by `storeName`.

Example:

```text
Yakaboo
Vivat
Книгарня Є
Amazon
```

---

### 14.4. Currency filter

Options are generated from existing records.

Example:

```text
UAH
USD
EUR
```

If only one currency exists:

```text
Currency filter can be hidden.
```

---

### 14.5. Include cancelled toggle

Label:

```text
Включити скасовані замовлення
```

Default:

```text
off
```

When enabled:

* cancelled records are included in main total;
* cancelled records are included in monthly chart;
* cancelled records are included in average price.

---

## 15. Monthly spending chart

Monthly spending chart is the main visualization on the page.

Purpose:

* show how book spending changes over time;
* help user understand reading / buying activity;
* show months with highest book expenses.

Recommended chart type:

```text
Bar chart
```

or:

```text
Line chart
```

Recommended MVP:

```text
Bar chart
```

Reason:

```text
Monthly totals are easier to compare as bars.
```

---

### 15.1. Chart data

Group records by:

```text
month(orderDate)
```

Calculation:

```text
sum(price) by month
```

Example:

```text
January 2026 — 1 200 грн
February 2026 — 850 грн
March 2026 — 2 100 грн
```

If multiple currencies exist:

```text
Show separate chart per currency or grouped totals by currency.
```

Recommended MVP:

```text
Show selected currency only if multiple currencies exist.
```

---

### 15.2. Empty chart state

If no price data exists:

```text
Витрати ще не вказані
```

Description:

```text
Додайте ціну до замовлень, щоб побачити статистику витрат.
```

---

## 16. Orders count by month

This block shows how many orders were made each month.

Calculation:

```text
count(delivery records) by month(orderDate)
```

Recommended chart type:

```text
Bar chart
```

Example:

```text
January 2026 — 3 замовлення
February 2026 — 1 замовлення
March 2026 — 5 замовлень
```

Important:

```text
Orders count can include records without price.
```

Reason:

```text
Навіть якщо ціна не вказана, замовлення все одно існує.
```

---

## 17. Spending by store

This block shows stores where the user spends money.

Calculation:

```text
sum(price) by storeName
```

Recommended UI:

* horizontal bars;
* list with store name, amount and order count;
* sorted by amount descending.

Example:

```text
Yakaboo — 3 200 грн · 6 замовлень
Vivat — 2 100 грн · 4 замовлення
Книгарня Є — 1 450 грн · 3 замовлення
```

---

### 17.1. Store order count

Show count near spending.

Calculation:

```text
count(delivery records) by storeName
```

Important:

```text
A store can have many orders, but not necessarily the highest spending.
```

---

## 18. Status breakdown

This block shows spending and order count by delivery status.

Groups:

```text
Активні
Отримані
Скасовані
```

Recommended UI:

* cards;
* small donut chart;
* stacked bar;
* simple table.

Recommended MVP:

```text
Cards or simple table.
```

Example:

```text
Активні — 1 320 грн · 3 замовлення
Отримані — 7 130 грн · 13 замовлень
Скасовані — 640 грн · 2 замовлення
```

Important:

```text
Cancelled group should be visually separate.
```

---

## 19. Top expensive orders

This block shows the most expensive book orders.

Recommended count:

```text
Top 5
```

Show:

* book title;
* author;
* store;
* order date;
* price;
* currency;
* status;
* action to open Book Details or Order History record.

Example:

```text
1. Четверте крило — 780 грн · Yakaboo · Отримано
2. Залізне полум’я — 690 грн · Vivat · В дорозі
3. Дюна — 640 грн · Книгарня Є · Скасовано
```

Default behavior:

```text
Do not include cancelled records in Top expensive orders unless cancelled toggle is enabled.
```

---

## 20. Right sidebar

Recommended right sidebar blocks:

```text
Quick summary
Top stores
Currency breakdown
Quick links
```

---

### 20.1. Quick summary

Example:

```text
Цього року
8 450 грн

Цього місяця
1 320 грн

Середня ціна
528 грн
```

---

### 20.2. Top stores

Show top 3 stores by spending.

Example:

```text
Yakaboo — 3 200 грн
Vivat — 2 100 грн
Книгарня Є — 1 450 грн
```

---

### 20.3. Currency breakdown

If multiple currencies exist:

```text
UAH — 8 450 грн
USD — 120 $
EUR — 45 €
```

If only one currency exists:

```text
Currency breakdown can be hidden.
```

---

### 20.4. Quick links

Recommended links:

```text
Історія замовлень
Книги в дорозі
Книги до покупки
```

---

## 21. Relationship with Books in Transit Page

Books in Transit Page uses a short expense summary:

```text
Активні замовлення
2 450 грн
```

Delivery Expense Statistics shows detailed breakdown:

* by month;
* by store;
* by status;
* by currency;
* by top expensive orders.

Important:

```text
Books in Transit Page shows only a short summary.
Delivery Expense Statistics shows full analytics.
```

---

## 22. Relationship with Order History

Order History is the main source for Expense Statistics.

Order History shows records.

Expense Statistics aggregates those records.

Example:

```text
Order History:
- Yakaboo, 520 грн, 12.06.2026
- Vivat, 690 грн, 18.06.2026

Expense Statistics:
June 2026 = 1 210 грн
```

---

## 23. Relationship with Book Details

Book Details can show delivery history for one book.

Expense Statistics can use the same delivery records globally.

Optional future action:

```text
View spending for this book
```

Recommended MVP:

```text
No separate per-book spending analytics.
```

---

## 24. States

### 24.1. Loading state

Show while statistics are loading.

Recommended UI:

* skeleton summary cards;
* skeleton chart;
* skeleton store list;
* skeleton sidebar.

---

### 24.2. Empty state

Show if user has no delivery records.

Title:

```text
Статистика витрат порожня
```

Description:

```text
Коли ви позначите книгу як “В дорозі” і додасте ціну, статистика з’явиться тут.
```

Actions:

```text
Перейти до книг до покупки
Перейти до книг в дорозі
```

---

### 24.3. No price data state

Show if user has delivery records, but no records with price.

Title:

```text
Витрати ще не вказані
```

Description:

```text
Додайте ціну до замовлень, щоб побачити витрати за місяцями та магазинами.
```

Action:

```text
Перейти до книг в дорозі
```

---

### 24.4. Empty filtered state

Show if filters return no statistics.

Title:

```text
Немає даних за вибраними фільтрами
```

Description:

```text
Спробуйте змінити період, магазин або статус.
```

Action:

```text
Очистити фільтри
```

---

### 24.5. Error state

Show if statistics cannot be loaded.

Title:

```text
Не вдалося завантажити статистику витрат
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

## 25. Responsive behavior

### Desktop

* summary cards in row;
* monthly chart full width;
* store breakdown in main content;
* sidebar with quick summary and links.

### Tablet

* sidebar moves below charts;
* charts remain readable;
* filters collapse into drawer or popover.

### Mobile

* one-column layout;
* summary cards in 2-column grid or horizontal scroll;
* charts become horizontally scrollable if needed;
* filters open in bottom sheet;
* top expensive orders become compact cards.

---

## 26. Data update rules

Expense Statistics should update after:

* marking book as in transit with price;
* editing delivery price;
* editing delivery currency;
* editing store;
* editing order date;
* marking book as received;
* cancelling order;
* changing cancelled toggle;
* changing filters.

---

### 26.1. After Mark Book as In Transit

If price exists:

* active spending increases;
* monthly chart updates;
* store spending updates;
* order count updates.

---

### 26.2. After Edit Delivery Info

If user changes price:

* totals recalculate.

If user changes currency:

* currency breakdown updates.

If user changes store:

* spending by store updates.

If user changes orderDate:

* monthly chart can move record to another month.

---

### 26.3. After Mark as Received

* active spending decreases;
* received spending increases;
* main total usually stays the same;
* status breakdown updates.

---

### 26.4. After Cancel Delivery Order

* active spending decreases;
* cancelled value increases;
* main total decreases if cancelled orders are excluded;
* if cancelled toggle is enabled, cancelled record can still appear in totals.

---

## 27. Data safety rules

Delivery Expense Statistics must not:

* edit delivery records;
* delete delivery records;
* delete books;
* change ownershipStatus;
* change deliveryStatus;
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
Expense Statistics is read-only.
It only aggregates existing delivery records.
```

---

## 28. Permissions and access

Rules:

* user can see only own expense statistics;
* statistics are calculated only from current user’s delivery records;
* if record does not belong to user, it is not included;
* if book was deleted, delivery record can still be included if price exists;
* do not expose another user’s stores, orders or prices.

Recommended error:

```text
Не вдалося завантажити статистику витрат
```

---

## 29. What is not included

У MVP Expense Statistics не входить:

* автоматична конвертація валют;
* прогноз майбутніх витрат;
* бюджет на місяць;
* ліміти витрат;
* export to CSV / Excel;
* receipt / invoice upload;
* payment status;
* refund tracking;
* return-to-store statistics;
* automatic import from email;
* integration with bank transactions;
* integration with bookstores;
* tax / accounting reports.

Important:

```text
MVP показує аналітику по вручну доданих delivery records.
```

---

## 30. Future improvements

Future improvements можуть включати:

* currency conversion;
* monthly budget;
* yearly spending analytics;
* export to CSV / Excel;
* receipt uploads;
* payment status;
* refund status;
* store recommendations;
* spending by genre;
* spending by author;
* spending by publisher;
* spending by format;
* average price by genre;
* integration with bank / email / bookstores.

---

## 31. Acceptance Criteria

### Page access

* Користувач може відкрити сторінку **Статистика витрат**.
* Сторінка доступна тільки авторизованому користувачу.
* Користувач бачить тільки свою статистику.
* Сторінка має title **Статистика витрат**.
* Сторінка має subtitle.
* Сторінка має link to Order History.
* Сторінка має link to Books in Transit.

### Data source

* Statistics uses delivery records.
* Records without price are not included in money totals.
* Records without price can be counted in order count.
* `orderDate` is used for monthly statistics.
* `currency` is used for grouping totals.
* If currency is missing, default is `UAH`.

### Main totals

* Main total includes active orders.
* Main total includes received orders.
* Main total excludes cancelled orders by default.
* User can enable cancelled orders if needed.
* Cancelled order value is shown separately.
* Multiple currencies are grouped separately.
* MVP does not auto-convert currencies.

### Summary cards

* User sees **Загальна сума**.
* User sees **Активні замовлення**.
* User sees **Отримані замовлення**.
* User sees **Скасовані замовлення**.
* User sees **Середня ціна**.
* User sees **Замовлень з ціною**.
* Summary cards update after delivery records change.

### Filters

* User can filter by period.
* User can filter by delivery status.
* User can filter by store.
* User can filter by currency.
* User can filter by delivery service.
* User can include or exclude cancelled orders.
* Default period is current year.
* Default cancelled toggle is off.

### Monthly chart

* User sees monthly spending chart.
* Monthly chart groups records by `orderDate`.
* Monthly chart sums prices by month.
* Monthly chart supports selected currency.
* If no price data exists, empty state is shown.

### Orders count chart

* User sees order count by month.
* Orders count can include records without price.
* Order count is grouped by `orderDate`.

### Spending by store

* User sees spending by store.
* Store list is sorted by amount descending.
* Store item shows total amount.
* Store item shows order count.

### Status breakdown

* User sees active spending.
* User sees received spending.
* User sees cancelled order value.
* Cancelled value is visually separate.
* Cancelled value is not included in main total by default.

### Top expensive orders

* User sees top expensive orders.
* Each item shows book title.
* Each item shows store.
* Each item shows order date.
* Each item shows price.
* Each item shows status.
* Cancelled orders are excluded unless cancelled toggle is enabled.

### States

* User sees loading state.
* User sees empty state if there are no delivery records.
* User sees no price data state if prices are missing.
* User sees empty filtered state.
* User sees error state if statistics cannot be loaded.

### Cross-feature updates

* Statistics update after marking book as in transit.
* Statistics update after editing delivery info.
* Statistics update after marking book as received.
* Statistics update after cancelling order.
* Statistics update after changing filters.

### Data safety

* Expense Statistics is read-only.
* Expense Statistics does not delete books.
* Expense Statistics does not delete delivery records.
* Expense Statistics does not change ownershipStatus.
* Expense Statistics does not change deliveryStatus.
* Expense Statistics does not change readingStatus.
* Expense Statistics does not change series relation.
* Expense Statistics does not remove books from Reading Queue.
* Expense Statistics does not remove books from Custom Lists.

### Scope

* Monthly expense statistics is included in MVP.
* Spending by store is included in MVP.
* Status breakdown is included in MVP.
* Currency grouping is included in MVP.
* Automatic currency conversion is not included in MVP.
* Export is not included in MVP.
* Budgeting is not included in MVP.
