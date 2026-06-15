# Basic Ownership Actions — Statuses, Entry Points and Actions

> Source: change-ownwership-status.md lines 1-90

---

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
