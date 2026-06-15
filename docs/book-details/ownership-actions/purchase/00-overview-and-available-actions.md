# Purchase Status Actions — Overview and Available Actions

> Source: change-purchase-status.md lines 1-70

---

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
