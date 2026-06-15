# Delivery Actions — Validation, Loading, Error and Acceptance Criteria

> Source: change-delivery-status.md lines 460-562

---

## 15. Validation

| Field                             | Validation                           |
| --------------------------------- | ------------------------------------ |
| Магазин                           | required                             |
| Дата замовлення                   | required, не може бути в майбутньому |
| Очікувана дата доставки           | optional, не раніше дати замовлення  |
| Номер замовлення                  | optional, max 100 символів           |
| Посилання на замовлення / трекінг | optional, valid URL                  |
| Нотатка                           | optional, max 200 символів           |

Validation messages:

```text
Оберіть магазин
Оберіть дату замовлення
Дата замовлення не може бути в майбутньому
Очікувана дата доставки не може бути раніше дати замовлення
Посилання має бути валідним URL
Номер замовлення не може бути довшим за 100 символів
Нотатка не може бути довшою за 200 символів
```

---

## 16. Loading behavior

Після натискання submit button:

* кнопка стає disabled;
* показується loading state;
* повторний submit блокується;
* modal не закривається до успішного збереження.

Button text examples:

```text
Збереження...
Скасування...
```

---

## 17. Error behavior

Якщо дію не вдалося виконати:

* modal залишається відкритою;
* введені дані не очищаються;
* Book Details UI не оновлюється;
* користувач бачить error message;
* користувач може повторити submit.

Error messages:

```text
Не вдалося оновити статус доставки
Не вдалося скасувати замовлення
```

---

## 18. UI updates after action

Після будь-якої delivery action мають оновитися:

* Book Details hero section;
* Right sidebar;
* ownership status badge;
* Quick actions;
* My Library card;
* Books in Transit page;
* Books to Buy page, якщо status став `want_to_buy`;
* summary cards, якщо вони враховують ownership statuses.

---


## 20. Acceptance Criteria

* Користувач може відкрити modal **Позначити як “В дорозі”** з Book Details.
* Modal показує обкладинку, назву книги й автора.
* Користувач має вказати магазин.
* Користувач має вказати дату замовлення.
* Користувач може optional вказати очікувану дату доставки.
* Користувач може optional вказати номер замовлення.
* Користувач може optional вказати посилання на замовлення або трекінг.
* Користувач може optional додати нотатку.
* Після submit книга отримує `ownershipStatus = in_transit`.
* Після submit книга з’являється на сторінці **Книги в дорозі**.
* Якщо книга була у **Книгах до покупки**, вона зникає з цього списку.
* Якщо книга має `ownershipStatus = in_transit`, користувач бачить action **Позначити як отриману**.
* Якщо книга має `ownershipStatus = in_transit`, користувач бачить action **Скасувати замовлення**.
* Action **Скасувати замовлення** показується в Right sidebar → Quick actions.
* Action **Скасувати замовлення** не видаляє книгу з бібліотеки.
* При скасуванні користувач може залишити книгу у списку **Книги до покупки**.
* Якщо checkbox залишити увімкненим, `ownershipStatus` стає `want_to_buy`.
* Якщо checkbox вимкнений, `ownershipStatus` стає `none`.
* Після скасування книга зникає зі сторінки **Книги в дорозі**.
* Якщо книга позначена як отримана, `ownershipStatus` стає `owned`.
* Після отримання книга зникає зі сторінки **Книги в дорозі**.
* Після будь-якої дії Book Details оновлює ownership status.
* Якщо сталася помилка, modal залишається відкритою і показує error message.
