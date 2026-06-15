# Borrowed Books Page: Overview, Route and Data

## Page title

```text
Позичені книги
```

Subtitle:

```text
Книги, які ви взяли у когось або дали комусь
```

Recommended route:

```text
/loans
```

Alternative routes:

```text
/borrowed-books
/books/loans
```

Recommended MVP route:

```text
/loans
```

Sidebar label:

```text
Позичені книги
```

---

## Data shown

Page shows only active loans:

```ts
loan.status === "active"
```

Included loan types:

```text
borrowed_from_someone
lent_to_someone
```

Returned loans are not shown in active page.

Returned records can be stored for future history/statistics.

---

## Data source

Page uses:

```text
Book
BookLoan
```

Book fields:

* id;
* title;
* author;
* coverUrl;
* publisher;
* ownershipStatus.

Loan fields:

* id;
* type;
* personName;
* contact;
* loanDate;
* expectedReturnDate;
* note;
* reminderEnabled;
* status;
* updatedAt.
