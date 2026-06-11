# Feature: Basic Ownership Actions

## 1. Purpose

Feature **Basic Ownership Actions** дозволяє користувачу швидко змінити базовий статус володіння книгою:

* позначити книгу як **Маю**;
* прибрати статус **Маю**.

Ця фіча відповідає тільки за простий перехід між:

```text
none ↔ owned
```

Вона не покриває сценарії покупки, доставки або позики.

---

## 2. Ownership statuses

У цій фічі використовуються тільки два статуси:

| Status  | Label | Meaning                   |
| ------- | ----- | ------------------------- |
| `none`  | Немає | Книги немає у користувача |
| `owned` | Маю   | Книга є у користувача     |

---

## 3. What is not included

Ця фіча не відповідає за:

* `want_to_buy`;
* `in_transit`;
* `borrowed_from_someone`;
* `lent_to_someone`;
* формат книги;
* статус читання;
* видалення книги.

Для цих сценаріїв використовуються окремі фічі:

| Scenario                                   | Feature                 |
| ------------------------------------------ | ----------------------- |
| Хочу купити / Куплену                      | Purchase Status Actions |
| В дорозі / Отриману / Скасувати замовлення | Delivery Status Actions |
| Позичена / Видана / Повернута              | Loan Status Actions     |
| Паперова / Електронна / Аудіокнига         | Change Book Format      |

---

## 4. Entry points

Дії можуть бути доступні на сторінці **Book Details**.

Recommended location:

```text
Right sidebar → Quick actions
```

Поточний ownership status має показуватися в:

```text
Right sidebar → Statuses
```

---

## 5. Available actions by current status

| Current ownershipStatus | Action                     |
| ----------------------- | -------------------------- |
| `none`                  | Позначити як “Маю”         |
| `owned`                 | Прибрати статус “Маю”      |
| `want_to_buy`           | Не використовувати цю фічу |
| `in_transit`            | Не використовувати цю фічу |
| `borrowed_from_someone` | Не використовувати цю фічу |
| `lent_to_someone`       | Не використовувати цю фічу |

Important:

* для `want_to_buy → owned` використовується дія **Позначити як куплену**;
* для `in_transit → owned` використовується дія **Позначити як отриману**;
* для `lent_to_someone → owned` використовується дія **Позначити як повернуту**.

---

## 6. Action: Позначити як “Маю”

Action label:

```text
Позначити як “Маю”
```

When to show:

```ts
ownershipStatus === 'none'
```

Behavior:

* дія може виконуватися одразу або через коротке confirmation modal;
* після підтвердження книга отримує `ownershipStatus = owned`;
* користувач залишається на сторінці Book Details;
* Book Details оновлює ownership badge.

Status transition:

```text
Немає → Маю
```

---

## 7. Modal: Позначити як “Маю”

Modal можна показувати, якщо потрібно уникнути випадкової зміни статусу.

Modal title:

```text
Позначити книгу як “Маю”?
```

Description:

```text
Книга буде позначена як така, що є у вашій бібліотеці.
```

Actions:

```text
Скасувати
Позначити як “Маю”
```

Submit logic:

* встановити `ownershipStatus = owned`;
* оновити Book Details;
* показати success message.

Success message:

```text
Книгу позначено як “Маю”
```

---

## 8. Action: Прибрати статус “Маю”

Action label:

```text
Прибрати статус “Маю”
```

Alternative label:

```text
Позначити як “Немає”
```

When to show:

```ts
ownershipStatus === 'owned'
```

Behavior:

* дія має відкривати confirmation modal;
* книга не видаляється з бібліотеки;
* змінюється тільки ownership status;
* після підтвердження книга отримує `ownershipStatus = none`.

Status transition:

```text
Маю → Немає
```

---

## 9. Modal: Прибрати статус “Маю”

Modal title:

```text
Прибрати статус “Маю”?
```

Description:

```text
Книга залишиться у вашій бібліотеці, але більше не буде позначена як така, що є у вас.
```

Important note:

```text
Це не видалить книгу з бібліотеки.
```

Actions:

```text
Скасувати
Прибрати статус
```

Submit logic:

* встановити `ownershipStatus = none`;
* не змінювати reading status;
* не змінювати formats;
* не видаляти книгу;
* оновити Book Details;
* показати success message.

Success message:

```text
Статус володіння оновлено
```

---

## 10. UI updates after action

Після зміни ownership status мають оновитися:

* Book Details hero section;
* Right sidebar;
* ownership status badge;
* Quick actions;
* My Library card;
* summary cards, якщо вони враховують ownership statuses.

### After `none → owned`

* badge змінюється на **Маю**;
* action **Позначити як “Маю”** зникає;
* з’являється action **Прибрати статус “Маю”**.

### After `owned → none`

* badge змінюється на **Немає**;
* action **Прибрати статус “Маю”** зникає;
* з’являється action **Позначити як “Маю”**.

---

## 11. Important behavior

Basic Ownership Actions не мають змінювати:

| Field             | Behavior      |
| ----------------- | ------------- |
| `readingStatus`   | не змінюється |
| `formats`         | не змінюється |
| `currentPage`     | не змінюється |
| `progressPercent` | не змінюється |
| `isFavorite`      | не змінюється |
| `genres` / `tags` | не змінюються |
| `series`          | не змінюється |

Example:

```text
Книга може мати:
ownershipStatus = none
formats = [paper]
readingStatus = want_to_read
```

Тобто користувач може хотіти прочитати паперову книгу, але фізично ще не мати її.

---

## 12. Error behavior

Якщо дію не вдалося виконати:

* modal залишається відкритою;
* Book Details UI не оновлюється;
* користувач бачить error message;
* користувач може повторити дію.

Error message:

```text
Не вдалося оновити статус володіння
```

---

## 13. Acceptance Criteria

* Користувач може позначити книгу як **Маю**, якщо `ownershipStatus = none`.
* Після підтвердження книга отримує `ownershipStatus = owned`.
* Користувач може прибрати статус **Маю**, якщо `ownershipStatus = owned`.
* При прибиранні статусу **Маю** відкривається confirmation modal.
* Після підтвердження книга отримує `ownershipStatus = none`.
* Книга не видаляється з бібліотеки після зміни ownership status.
* Reading status не змінюється.
* Format не змінюється.
* Book Details оновлює ownership badge після зміни статусу.
* Quick actions оновлюються відповідно до нового статусу.
* Якщо сталася помилка, користувач бачить error message.
