# Delivery Actions — Status Logic, Entry Point and Available Actions

> Source: change-delivery-status.md lines 1-84

---

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
