# Delivery Block — Overview, Placement and Related Docs

> Source: book-details-delivery-block.md lines 1-111

---

# Feature: Book Details Delivery Block

## 1. Purpose

Feature **Book Details Delivery Block** описує компактний блок доставки на сторінці **Book Details**.

Цей блок потрібен, щоб користувач міг прямо на сторінці конкретної книги побачити, що книга зараз замовлена або була замовлена раніше.

Delivery block на Book Details дозволяє:

* побачити активну доставку книги;
* побачити магазин;
* побачити дату замовлення;
* побачити очікувану дату доставки;
* побачити статус доставки;
* побачити службу доставки;
* побачити номер ТТН / tracking number;
* відкрити tracking URL;
* редагувати delivery info;
* позначити книгу як отриману;
* скасувати замовлення;
* перейти до історії замовлень книги.

Important:

```text
Book Details Delivery Block не описує повну delivery-логіку.
Він тільки показує delivery summary для однієї конкретної книги.
```

Повна логіка доставки описується в окремих delivery docs.

---

## 2. Related documentation

Related docs:

```text
book-details-page.md
delivery-module-overview.md
delivery-status-logic.md
books-in-transit-page.md
mark-book-as-in-transit.md
edit-delivery-info.md
mark-book-as-received.md
cancel-delivery-order.md
delivery-order-history.md
delivery-expense-statistics.md
```

---

## 3. Main idea

Book Details Delivery Block показує delivery information тільки для поточної книги.

Main idea:

```text
Book Details = деталі однієї книги.
Delivery Block = короткий delivery summary цієї книги.
```

Якщо книга має активну доставку, блок показує active delivery.

Якщо активної доставки немає, але в книги є delivery history, блок може показати короткий history preview.

Якщо книга ніколи не була в delivery flow, блок не показується або показується тільки action **Позначити як “В дорозі”** у Quick actions.

---

## 4. Placement on Book Details Page

Recommended placement:

```text
Book Details → Right sidebar → Delivery block
```

Recommended order in right sidebar:

```text
1. Quick information
2. Statuses
3. Series preview
4. Delivery block
5. Loan block
6. Quick actions
```

Alternative placement:

```text
Book Details → Main content → Delivery information card
```

Recommended MVP:

```text
Show Delivery block in Right sidebar.
```

Reason:

```text
Delivery information is important, but it should stay compact and not dominate the main book details content.
```

---
