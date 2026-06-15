# Basic Ownership Actions — Remove Owned Status

> Source: change-ownwership-status.md lines 157-235

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
