# Loan Status Actions — Mark As Returned

> Source: change-loan-status.md lines 313-444

---

## 14. Mark as returned

Action:

```text
Позначити як повернуту
```

Ця дія доступна тільки для книг з active loan status.

When to show:

```ts
ownershipStatus === 'borrowed_from_someone'
ownershipStatus === 'lent_to_someone'
```

---

## 15. Return logic for borrowed book

Якщо поточний статус:

```ts
ownershipStatus = 'borrowed_from_someone'
```

це означає, що користувач взяв книгу у когось.

Після повернення книги власнику:

```ts
ownershipStatus = 'none'
```

Meaning:

* книга більше не є у користувача;
* вона зникає з активного списку позичених;
* вона залишається в бібліотеці як запис;
* loan record можна зберегти в історії, якщо така логіка буде підтримуватися.

Confirmation text:

```text
Позначити книгу як повернуту?

Книга більше не буде показуватися як позичена у вас.
```

---

## 16. Return logic for lent book

Якщо поточний статус:

```ts
ownershipStatus = 'lent_to_someone'
```

це означає, що користувач дав свою книгу комусь.

Після повернення книги користувачу:

```ts
ownershipStatus = 'owned'
```

Meaning:

* книга знову позначається як **Маю**;
* вона зникає з активного списку позичених;
* вона залишається в бібліотеці;
* loan record можна зберегти в історії, якщо така логіка буде підтримуватися.

Confirmation text:

```text
Позначити книгу як повернуту?

Книга буде знову позначена як “Маю”.
```

---

## 17. Modal: Позначити як повернуту

Modal title:

```text
Позначити книгу як повернуту?
```

Modal content має залежати від поточного status.

### If borrowed from someone

```text
Ви повернули книгу власнику.

Після підтвердження книга більше не буде показуватися як позичена у вас.
```

Status transition:

```text
Позичена у когось → Немає
```

### If lent to someone

```text
Вам повернули вашу книгу.

Після підтвердження книга буде знову позначена як “Маю”.
```

Status transition:

```text
Видана комусь → Маю
```

Actions:

```text
Скасувати
Позначити як повернуту
```

---
