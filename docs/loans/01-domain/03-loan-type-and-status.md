# Loan Type and Status

## LoanType

```ts
export type LoanType =
  | "borrowed_from_someone"
  | "lent_to_someone";
```

Labels:

| Type | Label |
| ---- | ----- |
| `borrowed_from_someone` | Я взяла книгу у когось |
| `lent_to_someone` | Я дала свою книгу комусь |

---

## LoanStatus

```ts
export type LoanStatus =
  | "active"
  | "returned";
```

Labels:

| Status | Label |
| ------ | ----- |
| `active` | Активна |
| `returned` | Повернена |

---

## Active loan rule

A book can have:

```text
only one active loan at a time
```

But a book can have many returned loan records in history.

Example:

```text
Book A → lent to Olena → returned
Book A → lent to Maria → returned
Book A → lent to Ira → active
```

MVP rule:

```text
One book cannot have two active loans at the same time.
```

---

## Returned loan rule

Returned loans:

* are not shown on the active Borrowed Books Page;
* are preserved in data;
* can be used later for history/statistics;
* should not be editable in MVP.
