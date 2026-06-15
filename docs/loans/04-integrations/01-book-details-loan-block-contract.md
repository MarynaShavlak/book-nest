# Book Details Loan Block Contract

## Visibility

Book Details should show Loan Block if book has active loan.

Show for:

```ts
ownershipStatus === "borrowed_from_someone" ||
ownershipStatus === "lent_to_someone"
```

and:

```ts
loan.status === "active"
```

---

## Block content

Show:

* loan type;
* personName;
* contact;
* loanDate;
* expectedReturnDate;
* loan UI status;
* note;
* reminder indicator;
* actions.

---

## Actions

For borrowed_from_someone:

```text
Позначити як повернуту
Редагувати позику
```

For lent_to_someone:

```text
Позначити як повернену мені
Редагувати позику
```

Also show:

```text
Перейти до позичених книг
```

---

## Missing loan state

If book has loan ownershipStatus but active loan record missing:

```text
Інформацію про позику не знайдено
```

Actions:

```text
Додати інформацію про позику
Редагувати статуси
```

Important:

```text
Book Details should not crash if loan record is missing.
```
