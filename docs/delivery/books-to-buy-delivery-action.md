# Feature: Books to Buy Delivery Action

## 1. Purpose

Feature **Books to Buy Delivery Action** описує інтеграцію між сторінкою **Книги до покупки** і delivery flow.

Ця фіча потрібна, щоб користувач міг зі списку книг, які він хоче купити, швидко позначити книгу як уже замовлену та перевести її в статус **В дорозі**.

Основний сценарій:

```text
Хочу купити → В дорозі
```

Після виконання action:

* книга зникає зі сторінки **Книги до покупки**;
* книга з’являється на сторінці **Книги в дорозі**;
* у книги змінюється `ownershipStatus`;
* створюється delivery record;
* користувач може відстежувати доставку книги.

Important:

```text
Books to Buy Delivery Action не описує повну форму доставки.
Він тільки описує, як зі сторінки “Книги до покупки” запустити flow Mark Book as In Transit.
```

Повна логіка створення delivery record описана в:

```text
mark-book-as-in-transit.md
```

---

## 2. Related documentation

Related docs:

```text
books-to-buy-page.md
delivery-module-overview.md
delivery-status-logic.md
mark-book-as-in-transit.md
books-in-transit-page.md
book-details-delivery-block.md
book-details-page.md
delivery-order-history.md
delivery-expense-statistics.md
```

---

## 3. Main idea

Сторінка **Книги до покупки** показує книги, які користувач хоче купити.

Книга потрапляє на цю сторінку, якщо має:

```ts
ownershipStatus === "want_to_buy"
```

Коли користувач уже замовив цю книгу в магазині, він може натиснути:

```text
Позначити як “В дорозі”
```

Після цього відкривається flow **Mark Book as In Transit**, де користувач додає інформацію про замовлення.

---

## 4. Entry point

Action має бути доступна на сторінці **Книги до покупки**.

Recommended placement:

```text
Books to Buy Page → Book card → Actions
```

або:

```text
Books to Buy Page → Book row → Actions menu
```

Recommended label:

```text
Позначити як “В дорозі”
```

Short alternative:

```text
Замовлено
```

Recommended MVP label:

```text
Позначити як “В дорозі”
```

Reason:

```text
Назва дії прямо пояснює, що книга перейде в delivery flow.
```

---

## 5. When to show action

Action **Позначити як “В дорозі”** показується для книг, які мають:

```ts
ownershipStatus === "want_to_buy"
```

This means:

* користувач ще не має книгу;
* книга знаходиться у wishlist / books to buy;
* її можна перевести в delivery flow.

---

## 6. When not to show action

Action не показується, якщо книга має інший ownership status.

| ownershipStatus         | Show action             |
| ----------------------- | ----------------------- |
| `none`                  | no on Books to Buy Page |
| `want_to_buy`           | yes                     |
| `in_transit`            | no                      |
| `owned`                 | no                      |
| `borrowed_from_someone` | no                      |
| `lent_to_someone`       | no                      |

Important:

```text
Books to Buy Page має показувати тільки книги зі статусом want_to_buy.
Тому action “Позначити як В дорозі” на цій сторінці зазвичай доступна для всіх cards.
```

---

## 7. Action behavior

When user clicks:

```text
Позначити як “В дорозі”
```

system should open the same modal / drawer as in:

```text
mark-book-as-in-transit.md
```

The action itself should not instantly change the book status.

Correct behavior:

```text
Click action → Open Mark Book as In Transit modal → User fills delivery info → Submit → Status changes
```

Incorrect behavior:

```text
Click action → Immediately change ownershipStatus to in_transit
```

Reason:

```text
Delivery record requires at least storeName and orderDate.
```

---

## 8. Modal opened from Books to Buy Page

The modal should be prefilled with current book data.

Modal title:

```text
Позначити як “В дорозі”
```

Subtitle:

```text
Додайте інформацію про замовлення, щоб відстежувати доставку книги.
```

Primary button:

```text
Позначити як “В дорозі”
```

Secondary button:

```text
Скасувати
```

Book preview should show:

* cover;
* title;
* author;
* publisher, if exists;
* genre / tag, if exists.

Delivery fields are described in:

```text
mark-book-as-in-transit.md
```

---

## 9. Required fields

When this action opens Mark Book as In Transit flow, required fields are:

| Field           | Required |
| --------------- | -------- |
| Магазин         | yes      |
| Дата замовлення | yes      |

Optional fields:

* очікувана дата доставки;
* номер замовлення;
* tracking URL;
* ціна;
* валюта;
* служба доставки;
* номер ТТН;
* нотатка.

Important:

```text
Books to Buy Delivery Action не дублює validation rules.
Validation rules описані в mark-book-as-in-transit.md.
```

---

## 10. Data changes after submit

After successful submit:

Book update:

```ts
ownershipStatus = "in_transit";
```

Delivery record creation:

```ts
deliveryStatus = "ordered";
```

Default delivery status:

```text
Замовлено
```

Reason:

```text
Книга вже замовлена, але це ще не означає, що доставка фізично почалась.
```

---

## 11. Page updates after success

After successful submit:

* modal closes;
* book disappears from **Books to Buy Page**;
* book appears on **Books in Transit Page**;
* Book Details shows ownership status **В дорозі**;
* Book Details can show Delivery Block;
* Order History gets new active delivery record;
* Expense Statistics updates if price exists;
* Dashboard widgets update if they display delivery / wishlist data.

Success message:

```text
Книгу позначено як “В дорозі”
```

Optional notification action:

```text
Перейти до книг в дорозі
```

Example:

```text
Книгу позначено як “В дорозі”.

[Перейти до книг в дорозі]
```

---

## 12. Behavior on Books to Buy Page

### 12.1. Removing card from list

If current page filter is active and the user successfully marks book as in transit:

```ts
ownershipStatus: "want_to_buy" → "in_transit"
```

then the book should disappear from Books to Buy Page.

Reason:

```text
Books to Buy Page only shows books with ownershipStatus = want_to_buy.
```

---

### 12.2. Empty state after last book

If user marks the last book as in transit and no books remain in Books to Buy, show empty state.

Title:

```text
У списку покупок поки немає книг
```

Description:

```text
Книги, які ви хочете купити, з’являться тут.
```

Actions:

```text
Перейти до бібліотеки
Додати книгу
```

Optional action:

```text
Перейти до книг в дорозі
```

Recommended MVP:

```text
Показати “Перейти до книг в дорозі” після успішного перенесення останньої книги.
```

---

### 12.3. Filtered list behavior

If Books to Buy Page has filters/search and user marks a book as in transit:

* remove card from current list;
* keep current filters unchanged;
* show success message;
* update counters.

If there are no results after update:

```text
Нічого не знайдено
```

or empty state if the whole list is empty.

---

## 13. Summary cards update

If Books to Buy Page has summary cards, they should update after action.

Possible cards:

| Card                | Update                             |
| ------------------- | ---------------------------------- |
| Усього до покупки   | decrease by 1                      |
| Орієнтовна сума     | decrease if book had planned price |
| За магазинами       | update if store data exists        |
| Пріоритетні покупки | update if moved book was included  |

Important:

```text
Delivery price and planned purchase price can be different concepts.
```

If the app has only one price field for purchase/delivery MVP, then moving to delivery can reuse the same price.

If the app separates planned price and actual order price:

```text
plannedPrice belongs to Books to Buy.
delivery.price belongs to Delivery record.
```

Recommended MVP:

```text
Use delivery.price from Mark Book as In Transit modal for delivery statistics.
```

---

## 14. Relationship with Books in Transit Page

After successful action, the book should appear on **Books in Transit Page** if:

```ts
ownershipStatus === "in_transit" &&
(deliveryStatus === "ordered" || deliveryStatus === "in_transit")
```

Books in Transit card should show:

* book cover;
* title;
* author;
* store;
* order date;
* expected delivery date;
* delivery status badge;
* delivery service;
* tracking number;
* price, if exists.

---

## 15. Relationship with Book Details

Book Details should update after action.

Before:

```text
Статус володіння: Хочу купити
```

After:

```text
Статус володіння: В дорозі
```

If Book Details Delivery Block exists, it should show:

* active delivery status;
* store;
* order date;
* expected delivery date;
* delivery service;
* tracking number;
* price;
* delivery actions.

Related doc:

```text
book-details-delivery-block.md
```

---

## 16. Relationship with Order History

After successful action, a new delivery record appears in Order History.

Status:

```text
Замовлено
```

Stored status:

```ts
deliveryStatus = "ordered";
```

Order History should show:

* book title;
* store;
* order date;
* price, if exists;
* delivery service, if exists;
* tracking number, if exists;
* status **Замовлено**.

---

## 17. Relationship with Expense Statistics

If user adds price during Mark Book as In Transit flow:

```ts
delivery.price exists
```

then Expense Statistics should update.

Updated blocks:

* active spending;
* monthly spending;
* spending by store;
* currency breakdown;
* order count.

Important:

```text
Expense Statistics uses delivery records, not Books to Buy records.
```

---

## 18. Loading behavior

When user submits the modal:

* submit button is disabled;
* repeated submit is blocked;
* card can stay visible until success;
* modal should not close until save is complete.

Button text:

```text
Збереження...
```

Recommended page behavior:

```text
Do not remove the card optimistically unless rollback is implemented.
```

MVP recommendation:

```text
Remove card only after successful submit.
```

---

## 19. Error behavior

If submit fails:

* modal stays open;
* entered data is not cleared;
* book remains on Books to Buy Page;
* `ownershipStatus` stays `want_to_buy`;
* delivery record is not created;
* user sees error message.

General error:

```text
Не вдалося позначити книгу як “В дорозі”
```

Specific errors:

```text
Книгу не знайдено
Не вдалося створити запис доставки
Не вдалося оновити статус книги
```

---

## 20. Duplicate / stale data behavior

If book was already moved to delivery while modal was open:

```ts
ownershipStatus === "in_transit"
```

Then submit should be blocked.

Message:

```text
Ця книга вже знаходиться в дорозі
```

Recommended action:

```text
Перейти до книг в дорозі
```

or:

```text
Редагувати доставку
```

If book no longer has `ownershipStatus = want_to_buy`, refresh page state and remove it from Books to Buy list.

---

## 21. Permissions and access

Rules:

* user can mark only own books as in transit;
* user can create delivery record only for own book;
* delivery record must use current userId;
* if book does not belong to current user, show safe error;
* do not expose data from another user.

Recommended error:

```text
Книгу не знайдено
```

---

## 22. Data safety rules

Books to Buy Delivery Action must not change:

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

This action changes only:

```text
ownershipStatus
```

and creates:

```text
delivery record
```

Important:

```text
Книга не видаляється зі застосунку.
Вона тільки переходить з “Книги до покупки” в “Книги в дорозі”.
```

---

## 23. What is not included

У цьому файлі не описується:

* повна форма доставки;
* validation усіх delivery fields;
* редагування delivery info;
* позначення книги як отриманої;
* скасування замовлення;
* order history page;
* delivery expense statistics;
* автоматичний tracking;
* API інтеграції з поштовими сервісами;
* bulk move books to delivery;
* кілька книг в одному delivery record;
* автоматичний імпорт із магазинів або email.

Important:

```text
Цей файл описує тільки action зі сторінки “Книги до покупки”.
```

---

## 24. Future improvements

Future improvements:

* bulk mark selected books as in transit;
* prefill store from saved purchase link;
* prefill price from planned purchase price;
* create delivery record from store link;
* support multiple books in one order;
* import order details from email;
* store recommendations;
* reminder to order books from wishlist;
* priority-based buying plan.

Recommended MVP:

```text
Single book action only.
```

---

## 25. Acceptance Criteria

### Entry point

* User sees action **Позначити як “В дорозі”** on Books to Buy card.
* Action is available for books with `ownershipStatus = want_to_buy`.
* Action is not available for books with `ownershipStatus = in_transit`.
* Action is not available for books with `ownershipStatus = owned`.
* Action is not available for borrowed or lent books.

### Modal opening

* Clicking action opens Mark Book as In Transit modal.
* Modal shows book preview.
* Modal does not instantly change book status.
* Modal uses delivery form from `mark-book-as-in-transit.md`.

### Submit

* User fills required delivery fields.
* On submit, delivery record is created.
* On submit, book gets `ownershipStatus = in_transit`.
* New delivery record gets `deliveryStatus = ordered`.
* Book disappears from Books to Buy Page.
* Book appears on Books in Transit Page.
* Book Details updates ownership status.
* Book Details Delivery Block shows active delivery info.
* Order History receives new active order.
* Expense Statistics updates if price exists.

### Page update

* Books to Buy counters update after success.
* Current filters remain unchanged after success.
* If no books remain, empty state is shown.
* Success message is shown.
* Optional action **Перейти до книг в дорозі** is available.

### Loading and error

* Submit button is disabled while saving.
* Repeated submit is blocked.
* If submit succeeds, modal closes.
* If submit fails, modal stays open.
* If submit fails, entered data is not cleared.
* If submit fails, book remains on Books to Buy Page.
* If submit fails, delivery record is not created.

### Stale data

* If book was already moved to delivery, submit is blocked.
* User sees message that book is already in transit.
* Page state refreshes after stale data is detected.

### Data safety

* Action does not delete book.
* Action does not change readingStatus.
* Action does not change format.
* Action does not change rating.
* Action does not change notes.
* Action does not change quotes.
* Action does not change characters.
* Action does not change series relation.
* Action does not remove book from Reading Queue.
* Action does not remove book from Custom Lists.
* Action does not change favorite state.

### Scope

* Single book delivery action is included in MVP.
* Bulk move to delivery is not included in MVP.
* Delivery API integrations are not included in MVP.
* Multiple books in one delivery order are not included in MVP.
