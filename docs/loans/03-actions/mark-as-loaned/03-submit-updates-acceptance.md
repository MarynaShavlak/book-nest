# Mark as Loaned: Submit, Updates and Acceptance

## Submit behavior

On submit:

1. validate fields;
2. check book belongs to current user;
3. check book has no active loan;
4. create `BookLoan`;
5. update `Book.ownershipStatus`;
6. close modal;
7. show success notification;
8. update related pages.

---

## Data changes

For `borrowed_from_someone`:

```ts
book.ownershipStatus = "borrowed_from_someone";
loan.type = "borrowed_from_someone";
loan.status = "active";
```

For `lent_to_someone`:

```ts
book.ownershipStatus = "lent_to_someone";
loan.type = "lent_to_someone";
loan.status = "active";
```

---

## Success messages

For borrowed from someone:

```text
Книгу позначено як позичену у когось
```

For lent to someone:

```text
Книгу позначено як видану комусь
```

---

## Page updates

After successful submit:

* book appears on **Позичені книги** page;
* correct tab is updated;
* Book Details shows Loan Block;
* My Library ownership badge updates;
* Dashboard widget updates if enabled.

---

## Acceptance Criteria

* Modal opens from valid entry points.
* Modal shows book preview.
* User can select loan type.
* Correct fields are shown for selected type.
* Required fields are validated.
* Return date cannot be earlier than loan date.
* Reminder requires return date.
* Active loan record is created.
* Book ownershipStatus updates correctly.
* New loan appears in correct tab.
* Modal closes after success.
* User sees success message.
* Data safety rules are respected.
