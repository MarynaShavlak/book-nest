# Delivery Actions — Mark as In Transit

> Source: change-delivery-status.md lines 85-197

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
