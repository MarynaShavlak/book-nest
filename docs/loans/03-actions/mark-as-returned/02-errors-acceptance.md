# Mark as Returned: Errors and Acceptance

## Errors

```text
Не вдалося завершити позику
Позику не знайдено
Книгу не знайдено
Ця позика вже завершена
```

---

## Edge cases

If loan already returned:

* block action;
* refresh page state;
* remove row from active list.

If book no longer exists:

* block action;
* show safe error.

If ownershipStatus no longer matches loan type:

* block action;
* ask user to refresh.

---

## Acceptance Criteria

* User can complete active borrowed_from_someone loan.
* After return, book ownershipStatus becomes `none`.
* User can complete active lent_to_someone loan.
* After return, book ownershipStatus becomes `owned`.
* Loan status becomes `returned`.
* `returnedAt` is set.
* Completed loan disappears from active list.
* Returned loan data is not deleted.
* User sees success or error message.
