# Purchase Status Actions — Want To Buy

> Source: change-purchase-status.md lines 71-180

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
