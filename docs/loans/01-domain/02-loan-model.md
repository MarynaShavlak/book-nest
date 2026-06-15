# Loan Model

## BookLoan entity

```ts
export type LoanType =
  | "borrowed_from_someone"
  | "lent_to_someone";

export type LoanStatus =
  | "active"
  | "returned";

export type BookLoan = {
  id: string;
  userId: string;
  bookId: string;

  type: LoanType;

  personName: string;
  contact?: string | null;

  loanDate: string;
  expectedReturnDate?: string | null;

  note?: string | null;

  reminderEnabled: boolean;

  status: LoanStatus;

  createdAt: string;
  updatedAt: string;

  returnedAt?: string | null;
};
```

---

## Field meanings

| Field | Meaning |
| ----- | ------- |
| `id` | loan record id |
| `userId` | owner of this record |
| `bookId` | related book |
| `type` | borrowed from someone / lent to someone |
| `personName` | person / library / source |
| `contact` | phone, email, Instagram or any text contact |
| `loanDate` | date when loan started |
| `expectedReturnDate` | planned return date |
| `note` | loan-specific note |
| `reminderEnabled` | reminder toggle |
| `status` | active / returned |
| `returnedAt` | actual return date |

---

## Loan note vs book notes

Important:

```text
loan.note ≠ book.notes
```

`loan.note` describes loan conditions:

```text
Стан книги, кому дала, коли повернути, без суперобкладинки, не загинати сторінки.
```

`book.notes` describes reading thoughts:

```text
Враження від сюжету, цитати, аналіз персонажів.
```
