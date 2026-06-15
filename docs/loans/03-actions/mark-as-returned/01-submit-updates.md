# Mark as Returned: Submit and Updates

## Submit behavior

For `borrowed_from_someone`:

```ts
loan.status = "returned";
loan.returnedAt = currentDate;
book.ownershipStatus = "none";
```

For `lent_to_someone`:

```ts
loan.status = "returned";
loan.returnedAt = currentDate;
book.ownershipStatus = "owned";
```

---

## After success

* loan disappears from active Borrowed Books Page;
* Book Details Loan Block changes to history preview or disappears;
* My Library ownership badge updates;
* summary cards update;
* Dashboard loan widget updates;
* returned loan remains saved for future history/statistics.

Success messages:

```text
Книгу позначено як повернуту
Книгу позначено як повернену вам
```

---

## Redirect behavior

Recommended behavior:

```text
Do not redirect automatically.
```

If action was triggered from Borrowed Books Page:

* stay on current page;
* remove row from active list.

If action was triggered from Book Details:

* stay on Book Details;
* update ownership badge;
* hide active loan actions.
