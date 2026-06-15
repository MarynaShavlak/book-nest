# Edit Loan: Entry, Fields and Submit

## Action

Action label:

```text
Редагувати позику
```

Entry points:

* Borrowed Books Page → loan row;
* Book Details → Loan Block.

Allowed only for:

```ts
loan.status === "active"
```

---

## Modal title

```text
Редагувати позику
```

Subtitle:

```text
Оновіть інформацію про позику книги.
```

---

## Editable fields

User can edit:

* personName;
* contact;
* loanDate;
* expectedReturnDate;
* note;
* reminderEnabled.

Recommended MVP:

```text
Do not allow changing loan type after creation.
```

Reason:

```text
Зміна типу позики змінює фізичний сенс статусу книги.
Якщо тип вибраний неправильно, краще завершити/скасувати запис і створити новий.
```

---

## Submit behavior

On save:

1. validate fields;
2. update loan record;
3. recalculate loan UI status;
4. update page row;
5. update Book Details Loan Block;
6. update summary cards;
7. show success notification.

Success message:

```text
Інформацію про позику оновлено
```
