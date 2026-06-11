# Feature: Purchase Status Actions from Book Details

## 1. Purpose

Feature **Purchase Status Actions from Book Details** дозволяє користувачу змінити purchase-related ownership status книги прямо зі сторінки **Book Details**.

Фіча покриває два основні сценарії:

* позначити книгу як **Хочу купити**;
* позначити книгу як **Куплену / Маю**.

Ці дії змінюють тільки `ownershipStatus` книги.

---

## 2. Ownership statuses

У цій фічі використовуються такі статуси:

| Status        | Label       | Meaning                      |
| ------------- | ----------- | ---------------------------- |
| `none`        | Немає       | Книги немає у користувача    |
| `want_to_buy` | Хочу купити | Користувач хоче купити книгу |
| `owned`       | Маю         | Книга вже є у користувача    |

Important:

* `want_to_buy` — це не custom list;
* книга зі статусом `want_to_buy` автоматично з’являється на сторінці **Книги до покупки**;
* після зміни на `owned` книга зникає зі сторінки **Книги до покупки**, але залишається в бібліотеці.

---

## 3. Entry point from Book Details

Дії мають бути доступні на сторінці **Book Details** у правому sidebar.

Recommended location:

```text
Right sidebar → Quick actions
```

Також поточний статус має відображатися в блоці:

```text
Right sidebar → Statuses
```

---

## 4. Available actions by current status

| Current ownershipStatus | Action                                        |
| ----------------------- | --------------------------------------------- |
| `none`                  | Позначити як хочу купити                      |
| `want_to_buy`           | Позначити як куплену                          |
| `owned`                 | Не показувати purchase action                 |
| `in_transit`            | Показувати окрему дію “Позначити як отриману” |
| `borrowed_from_someone` | Не показувати purchase action                 |
| `lent_to_someone`       | Не показувати purchase action                 |

Important:

* якщо книга вже `owned`, не потрібно показувати дію **Позначити як хочу купити**;
* якщо книга `in_transit`, не потрібно показувати **Позначити як куплену**, бо для цього є окрема дія **Позначити як отриману**;
* якщо книга позичена або видана, purchase actions краще приховати, щоб не змішувати сценарії.

---

## 5. Action: Позначити як хочу купити

Action label:

```text
Позначити як хочу купити
```

When to show:

```ts
ownershipStatus === 'none'
```

Behavior:

* відкриває modal;
* користувач підтверджує, що хоче додати книгу до покупок;
* optional може додати магазин, посилання, ціну або нотатку;
* після submit книга отримує `ownershipStatus = want_to_buy`;
* користувач залишається на сторінці Book Details;
* sidebar і hero section оновлюються.

---

## 6. Modal: Позначити як хочу купити

Modal title:

```text
Додати до книг до покупки?
```

Book preview:

| Element | Source        |
| ------- | ------------- |
| Cover   | `coverUrl`    |
| Title   | `title`       |
| Author  | `author.name` |

Status transition preview:

```text
Немає → Хочу купити
```

Description:

```text
Книга буде додана до списку “Книги до покупки”.
Вона залишиться у вашій бібліотеці.
```

Optional fields:

| Field              | Type         | Required |
| ------------------ | ------------ | -------: |
| Магазин            | Text input   |       Ні |
| Посилання на книгу | URL input    |       Ні |
| Орієнтовна ціна    | Number input |       Ні |
| Валюта             | Select       |       Ні |
| Нотатка            | Textarea     |       Ні |

Actions:

```text
Скасувати
Додати до покупок
```

---

## 7. Submit logic: Позначити як хочу купити

Після натискання **Додати до покупок** система має:

1. перевірити, що книга належить поточному користувачу;
2. провалідувати optional поля;
3. змінити статус:

```ts
ownershipStatus: 'none' → 'want_to_buy'
```

4. зберегти purchase info, якщо користувач її додав;
5. оновити Book Details UI;
6. показати success message.

Success message:

```text
Книгу додано до покупок
```

UI updates:

* ownership badge змінюється на **Хочу купити**;
* у sidebar action **Позначити як хочу купити** замінюється на **Позначити як куплену**;
* книга стає доступною на сторінці **Книги до покупки**.

Redirect:

```text
Redirect не потрібен.
Користувач залишається на Book Details.
```

---

## 8. Action: Позначити як куплену

Action label:

```text
Позначити як куплену
```

When to show:

```ts
ownershipStatus === 'want_to_buy'
```

Behavior:

* відкриває confirmation modal;
* пояснює, що книга зникне зі сторінки покупок;
* після підтвердження змінює `ownershipStatus` на `owned`;
* користувач залишається на сторінці Book Details.

---

## 9. Modal: Позначити як куплену

Modal title:

```text
Позначити книгу як куплену?
```

Book preview:

| Element | Source        |
| ------- | ------------- |
| Cover   | `coverUrl`    |
| Title   | `title`       |
| Author  | `author.name` |

Status transition preview:

```text
Хочу купити → Маю
```

Description:

```text
Книга буде позначена як “Маю”.
Вона зникне зі списку покупок, але залишиться у вашій бібліотеці.
```

Info note:

```text
Якщо ви додали посилання на магазини, вони будуть збережені в інформації про книгу.
```

Actions:

```text
Скасувати
Позначити як куплену
```

---

## 10. Submit logic: Позначити як куплену

Після натискання **Позначити як куплену** система має:

1. перевірити, що книга належить поточному користувачу;
2. перевірити, що поточний статус книги `want_to_buy`;
3. змінити статус:

```ts
ownershipStatus: 'want_to_buy' → 'owned'
```

4. встановити дату покупки, якщо поле підтримується:

```ts
purchasedAt = currentDate
```

5. оновити Book Details UI;
6. показати success message.

Success message:

```text
Книгу позначено як куплену
```

UI updates:

* ownership badge змінюється на **Маю**;
* книга більше не має показуватися на сторінці **Книги до покупки**;
* action **Позначити як куплену** зникає з Quick actions;
* purchase links не видаляються.

Redirect:

```text
Redirect не потрібен.
Користувач залишається на Book Details.
```

---

## 11. Purchase links behavior

Якщо книга має магазинні посилання:

* вони зберігаються після позначення книги як купленої;
* вони не видаляються автоматично;
* користувач може редагувати їх окремою дією;
* ці посилання можуть залишатися в деталях книги як історія покупки або джерело покупки.

Important:

```text
Позначити як куплену ≠ видалити посилання на магазини
```

---

## 12. Validation

| Field              | Validation                 |
| ------------------ | -------------------------- |
| Посилання на книгу | valid URL                  |
| Орієнтовна ціна    | number, min 0              |
| Валюта             | allowed values only        |
| Нотатка            | optional, max 300 символів |

Error messages:

```text
Посилання має бути валідним URL
Ціна не може бути меншою за 0
Обрана валюта не підтримується
Нотатка не може бути довшою за 300 символів
```

---



---

## 14. Error behavior

Якщо action не вдалося виконати:

* modal залишається відкритою;
* введені дані не очищаються;
* Book Details UI не оновлюється;
* користувач бачить error message.

Error message:

```text
Не вдалося оновити статус покупки
```

---


---

## 16. Acceptance Criteria

* На Book Details користувач бачить поточний ownership status книги.
* Якщо `ownershipStatus = none`, користувач може натиснути **Позначити як хочу купити**.
* При натисканні **Позначити як хочу купити** відкривається modal.
* Після submit книга отримує `ownershipStatus = want_to_buy`.
* Після submit користувач залишається на Book Details.
* Після submit ownership badge оновлюється на **Хочу купити**.
* Книга з’являється на сторінці **Книги до покупки**.
* Якщо `ownershipStatus = want_to_buy`, користувач може натиснути **Позначити як куплену**.
* При натисканні **Позначити як куплену** відкривається confirmation modal.
* Після підтвердження книга отримує `ownershipStatus = owned`.
* Після підтвердження користувач залишається на Book Details.
* Після підтвердження ownership badge оновлюється на **Маю**.
* Книга зникає зі сторінки **Книги до покупки**.
* Посилання на магазини не видаляються автоматично.
* Користувач не може змінити статус покупки чужої або видаленої книги.
