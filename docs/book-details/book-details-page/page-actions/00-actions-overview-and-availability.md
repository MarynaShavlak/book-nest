# Page Actions — Overview, Availability and After-Action Rules

> Source: book-details-page.md lines 1674-1715, book-details-page.md lines 2118-2190

---

## 9. Page actions logic

Page actions logic описує всі дії, які користувач може виконати з книгою на сторінці **Book Details**.

Цей розділ не є окремим UI-блоком.
Він описує, які actions доступні на сторінці, де вони показуються і як саме мають працювати.

---

### 9.1. Actions overview

| Action                        | UI location                    | Behavior                                              |
| ----------------------------- | ------------------------------ | ----------------------------------------------------- |
| Додати / прибрати з улюблених | Hero section                   | Toggle `isFavorite`                                   |
| Редагувати книгу              | Right sidebar → Quick actions  | Redirect to edit page                                 |
| Видалити книгу                | Right sidebar → Quick actions  | Open delete confirmation modal                        |
| Оновити прогрес               | Hero / Reading progress block  | Open update progress modal                            |
| Редагувати статуси            | Right sidebar → Statuses       | Open edit statuses flow                               |
| Додати в чергу читання        | Right sidebar → Quick actions  | Add book to reading queue                             |
| Прибрати з черги читання      | Right sidebar → Quick actions  | Remove book from reading queue                        |
| Додати до списку              | Right sidebar → Quick actions  | Open add to list modal                                |
| Видати комусь                 | Right sidebar → Quick actions  | Open loan modal                                       |
| Позначити як отриману         | Right sidebar → Quick actions  | Change `ownershipStatus` from `in_transit` to `owned` |
| Перейти до серії              | Right sidebar → Series preview | Redirect to series details page                       |

Delivery-related actions on Book Details are described in separate delivery feature docs.
Book Details only shows actions and opens the corresponding flows. 
It does not duplicate the full delivery business logic. 
Related docs: 
```text 
book-details-delivery-block.md 
mark-book-as-in-transit.md 
edit-delivery-info.md 
mark-book-as-received.md 
cancel-delivery-order.md 
delivery-order-history.md
```



---

---

### 9.13. Action availability rules

| Action                   | Show when                                        |
| ------------------------ | ------------------------------------------------ |
| Додати в улюблені        | `isFavorite = false`                             |
| Прибрати з улюблених     | `isFavorite = true`                              |
| Оновити прогрес          | книга має reading status, де прогрес релевантний |
| Додати в чергу читання   | книга не в reading queue                         |
| Прибрати з черги читання | книга вже в reading queue                        |
| Позначити як отриману    | `ownershipStatus = in_transit`                   |
| Видати комусь            | книга не має активного `lent_to_someone` статусу |
| Перейти до серії         | книга має `seriesId`                             |
| Видалити книгу           | книга не видалена і належить користувачу         |

---

### 9.14. Behavior after action

Після будь-якої action:

* дані Book Details мають оновитися;
* hero section має показувати актуальні дані;
* right sidebar має показувати актуальні дані;
* пов’язані сторінки мають оновитися після наступного відкриття або refetch;
* користувач має бачити success або error message.

Examples:

| Action           | UI update                              |
| ---------------- | -------------------------------------- |
| Favorite toggle  | heart icon стає filled / outline       |
| Update progress  | progress bar оновлюється               |
| Change status    | status badges оновлюються              |
| Add to queue     | action змінюється на remove from queue |
| Mark as received | ownership status стає `owned`          |
| Delete           | redirect to `/library`                 |

---

### 9.15. What is not included in this block

У цьому блоці не описуються:

* створення нотаток;
* створення цитат;
* CRUD персонажів;
* повний CRUD серій;
* повний CRUD списків;
* повна логіка доставки;
* повна логіка позик.

Тут описується тільки те, як Book Details запускає відповідні actions або flows.

---

### 9.16. Acceptance Criteria

* Користувач може додати або прибрати книгу з улюблених.
* Favorite icon змінюється на filled або outline відповідно до `isFavorite`.
* Користувач може перейти на редагування книги.
* Користувач може видалити книгу тільки після confirmation modal.
* Після видалення користувач повертається до бібліотеки.
* Користувач може оновити прогрес читання.
* Після оновлення прогресу progress bar оновлюється.
* Користувач може редагувати статуси книги.
* Після зміни статусів hero section і right sidebar оновлюються.
* Користувач може додати книгу в reading queue.
* Якщо книга вже в reading queue, користувач може прибрати її з черги.
* Користувач може додати книгу до власного списку.
* Користувач може видати книгу комусь.
* Якщо книга в дорозі, користувач може позначити її як отриману.
* Якщо книга є частиною серії, користувач може перейти до сторінки серії.
* Actions показуються тільки тоді, коли вони релевантні для поточного стану книги.
