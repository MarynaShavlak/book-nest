# Feature: Delivery Status Actions from Book Details

## 1. Purpose

Feature **Delivery Status Actions from Book Details** дозволяє користувачу керувати статусом книги, яка була замовлена і ще не отримана.

Фіча покриває три основні сценарії:

* позначити книгу як **В дорозі**;
* позначити книгу як **Отриману**;
* скасувати замовлення.

Ця фіча змінює `ownershipStatus` книги та впливає на сторінку **Книги в дорозі**.

---

## 2. Ownership status logic

У цій фічі використовуються такі ownership statuses:

| Status        | Meaning                               |
| ------------- | ------------------------------------- |
| `none`        | книги немає у користувача             |
| `want_to_buy` | користувач хоче купити книгу          |
| `in_transit`  | книга замовлена і очікується доставка |
| `owned`       | книга вже є у користувача             |

Основні переходи:

```text
none / want_to_buy → in_transit → owned
```

Для скасування:

```text
in_transit → want_to_buy
```

або

```text
in_transit → none
```

---

## 3. Entry point from Book Details

Дії доступні на сторінці **Book Details** у правому sidebar.

Recommended location:

```text
Right sidebar → Quick actions
```

Поточний статус має відображатися в:

```text
Right sidebar → Statuses
```

---

## 4. Available actions by current status

| Current ownershipStatus | Show action                                 |
| ----------------------- | ------------------------------------------- |
| `none`                  | Позначити як “В дорозі”                     |
| `want_to_buy`           | Позначити як “В дорозі”                     |
| `in_transit`            | Позначити як отриману, Скасувати замовлення |
| `owned`                 | не показувати delivery actions              |
| `borrowed_from_someone` | не показувати delivery actions              |
| `lent_to_someone`       | не показувати delivery actions              |

Important:

* якщо книга вже `owned`, action **Позначити як “В дорозі”** не показується;
* якщо книга `in_transit`, action **Позначити як “В дорозі”** не показується;
* якщо книга позичена або видана комусь, delivery actions не показуються.

---

## 5. Action: Позначити як “В дорозі”

Action label:

```text
Позначити як “В дорозі”
```

When to show:

```ts
ownershipStatus === 'none' || ownershipStatus === 'want_to_buy'
```

Behavior:

* відкриває modal;
* користувач додає інформацію про замовлення;
* після submit книга отримує `ownershipStatus = in_transit`;
* книга з’являється на сторінці **Книги в дорозі**;
* користувач залишається на Book Details.

---

## 6. Modal: Позначити як “В дорозі”

Modal title:

```text
Позначити як “В дорозі”
```

Subtitle:

```text
Додайте інформацію про замовлення, щоб відстежувати доставку.
```

Book preview:

| Element               | Source              |
| --------------------- | ------------------- |
| Cover                 | `coverUrl`          |
| Title                 | `title`             |
| Author                | `author.name`       |
| Publisher             | `publisher.name`    |
| Genre / main category | `genres[0]`, якщо є |

Fields:

| Field                             | Type                  | Required | Description                                  |
| --------------------------------- | --------------------- | -------: | -------------------------------------------- |
| Магазин                           | Select / Autocomplete |      Так | Де замовлена книга                           |
| Дата замовлення                   | Date picker           |      Так | Коли книгу замовили                          |
| Очікувана дата доставки           | Date picker           |       Ні | Коли очікується доставка                     |
| Номер замовлення                  | Text input            |       Ні | Номер замовлення або ТТН                     |
| Посилання на замовлення / трекінг | URL input             |       Ні | Посилання на сторінку замовлення або трекінг |
| Нотатка                           | Textarea              |       Ні | Додаткова інформація                         |

Actions:

```text
Скасувати
Позначити як “В дорозі”
```

---

## 7. Submit logic: Позначити як “В дорозі”

Після натискання **Позначити як “В дорозі”** система має:

1. перевірити, що книга належить поточному користувачу;
2. провалідувати required поля;
3. зберегти delivery information;
4. змінити статус:

```ts
ownershipStatus = 'in_transit'
```

5. встановити початковий delivery status:

```ts
deliveryStatus = 'ordered'
```

6. оновити Book Details UI;
7. показати success message.

Success message:

```text
Книгу позначено як “В дорозі”
```

UI updates:

* ownership badge змінюється на **В дорозі**;
* книга з’являється на сторінці **Книги в дорозі**;
* якщо книга була в **Книгах до покупки**, вона зникає з цього списку;
* action **Позначити як “В дорозі”** зникає;
* з’являються actions **Позначити як отриману** і **Скасувати замовлення**.

Redirect:

```text
Redirect не потрібен.
Користувач залишається на Book Details.
```

---

## 8. Action: Позначити як отриману

Action label:

```text
Позначити як отриману
```

When to show:

```ts
ownershipStatus === 'in_transit'
```

Recommended location:

```text
Right sidebar → Quick actions
```

Behavior:

* відкриває confirmation modal;
* після підтвердження книга отримує `ownershipStatus = owned`;
* книга зникає зі сторінки **Книги в дорозі**;
* книга залишається в **Моїй бібліотеці**.

---

## 9. Modal: Позначити як отриману

Modal title:

```text
Позначити книгу як отриману?
```

Description:

```text
Книга буде позначена як “Маю”.
Вона зникне зі сторінки “Книги в дорозі”, але залишиться у вашій бібліотеці.
```

Status transition:

```text
В дорозі → Маю
```

Actions:

```text
Скасувати
Позначити як отриману
```

---

## 10. Submit logic: Позначити як отриману

Після підтвердження система має:

1. перевірити, що поточний статус книги `in_transit`;
2. змінити статус:

```ts
ownershipStatus: 'in_transit' → 'owned'
```

3. встановити дату отримання:

```ts
receivedAt = currentDate
```

4. оновити delivery status:

```ts
deliveryStatus = 'received'
```

5. оновити Book Details UI;
6. показати success message.

Success message:

```text
Книгу позначено як отриману
```

UI updates:

* ownership badge змінюється на **Маю**;
* книга зникає зі сторінки **Книги в дорозі**;
* action **Позначити як отриману** зникає;
* action **Скасувати замовлення** зникає;
* інформація про замовлення може залишатися в деталях книги як історія.

---

## 11. Action: Скасувати замовлення

Action label:

```text
Скасувати замовлення
```

When to show:

```ts
ownershipStatus === 'in_transit'
```

Recommended location:

```text
Right sidebar → Quick actions
```

Position in UI:

* показувати нижче action **Позначити як отриману**;
* не робити основною primary action;
* можна показувати як secondary / warning action;
* не змішувати з **Видалити з бібліотеки**;
* не використовувати trash icon, бо це не видалення книги.

Recommended order in Quick actions when book is `in_transit`:

```text
Редагувати книгу
Позначити як отриману
Скасувати замовлення
Видалити з бібліотеки
```

Important:

* **Скасувати замовлення** не видаляє книгу з бібліотеки;
* ця дія тільки прибирає активний статус доставки.

---

## 12. Modal: Скасувати замовлення

Modal title:

```text
Скасувати замовлення?
```

Description:

```text
Книга більше не буде показуватися на сторінці “Книги в дорозі”.
Вона залишиться у вашій бібліотеці.
```

Status transition:

```text
В дорозі → Хочу купити
```

Optional setting:

```text
Залишити книгу у списку “Книги до покупки”
```

Default:

```text
checked = true
```

Actions:

```text
Скасувати
Скасувати замовлення
```

---

## 13. Cancel order logic

Після підтвердження скасування система має:

1. перевірити, що поточний статус книги `in_transit`;
2. змінити delivery status:

```ts
deliveryStatus = 'cancelled'
```

3. встановити дату скасування:

```ts
cancelledAt = currentDate
```

4. змінити `ownershipStatus` залежно від вибору користувача.

### If “Залишити книгу у списку Книги до покупки” is checked

```ts
ownershipStatus: 'in_transit' → 'want_to_buy'
```

Result:

* книга зникає зі сторінки **Книги в дорозі**;
* книга з’являється на сторінці **Книги до покупки**;
* у Book Details badge змінюється на **Хочу купити**;
* action **Позначити як “В дорозі”** знову стає доступною.

### If checkbox is unchecked

```ts
ownershipStatus: 'in_transit' → 'none'
```

Result:

* книга зникає зі сторінки **Книги в дорозі**;
* книга не з’являється на сторінці **Книги до покупки**;
* книга залишається в **Моїй бібліотеці**;
* у Book Details badge змінюється на **Немає**.

Success message:

```text
Замовлення скасовано
```

---

## 14. Delivery information behavior after cancel

Після скасування замовлення delivery information не має видалятися автоматично.

Recommended behavior:

* зберегти магазин;
* зберегти номер замовлення;
* зберегти трекінг / посилання;
* зберегти нотатку;
* позначити delivery record як `cancelled`.

Important:

```text
Скасувати замовлення ≠ видалити інформацію про замовлення
```

Якщо історія доставок ще не підтримується, ці дані можна приховати з активного UI, але не потрібно видаляти без явного рішення користувача.

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
