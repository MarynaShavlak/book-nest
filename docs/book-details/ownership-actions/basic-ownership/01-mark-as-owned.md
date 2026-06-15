# Basic Ownership Actions — Mark as Owned

> Source: change-ownwership-status.md lines 91-156

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
