# Delivery Actions — Mark as Received

> Source: change-delivery-status.md lines 198-298

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
