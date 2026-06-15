# Edit Loan: Validation, Errors and Acceptance

## Validation

Same validation as create loan:

* personName required;
* loanDate required;
* loanDate cannot be in future;
* expectedReturnDate cannot be earlier than loanDate;
* reminder requires expectedReturnDate;
* note max 500;
* contact max 100.

---

## Errors

```text
Не вдалося оновити інформацію про позику
Позику не знайдено
Книгу не знайдено
Ця позика вже завершена
```

---

## Edge cases

If user edits return date and current filter no longer matches:

* save still succeeds;
* row can disappear from current filtered list;
* show success message.

If loan was returned while modal was open:

* block save;
* show “Ця позика вже завершена”;
* refresh page state.

---

## Acceptance Criteria

* User can edit active loan.
* Existing values are prefilled.
* Loan type is not editable in MVP.
* Validation works.
* Save updates loan record.
* UI badge recalculates.
* Summary cards update.
* Book Details Loan Block updates.
* Returned loans cannot be edited in MVP.
