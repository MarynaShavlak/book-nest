# Delivery Actions — Cancel Delivery Order

> Source: change-delivery-status.md lines 299-459

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
