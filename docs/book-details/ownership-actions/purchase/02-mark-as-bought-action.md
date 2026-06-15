# Purchase Status Actions — Mark As Bought

> Source: change-purchase-status.md lines 181-290

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
