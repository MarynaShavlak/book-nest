# Loan UI Status Logic

## Loan UI Status

Loan UI status is calculated for badges.

```ts
export type LoanUiStatus =
  | "on_time"
  | "return_soon"
  | "overdue"
  | "no_return_date";
```

Labels:

| UI Status | Label |
| --------- | ----- |
| `on_time` | Вчасно |
| `return_soon` | Повернути скоро |
| `overdue` | Прострочено |
| `no_return_date` | Без дати |

---

## Calculation rules

```text
If expectedReturnDate is empty → no_return_date
If expectedReturnDate < today → overdue
If expectedReturnDate is today / tomorrow / within 7 days → return_soon
Else → on_time
```

Recommended function:

```ts
export const getLoanUiStatus = (
  expectedReturnDate?: string | null,
): LoanUiStatus => {
  if (!expectedReturnDate) {
    return "no_return_date";
  }

  const today = new Date();
  const returnDate = new Date(expectedReturnDate);

  today.setHours(0, 0, 0, 0);
  returnDate.setHours(0, 0, 0, 0);

  const diffInMs = returnDate.getTime() - today.getTime();
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays < 0) {
    return "overdue";
  }

  if (diffInDays <= 7) {
    return "return_soon";
  }

  return "on_time";
};
```

---

## Badge priority

```text
1. overdue
2. return_soon
3. no_return_date
4. on_time
```

---

## Relative date labels

Examples:

| Condition | Label |
| --------- | ----- |
| return date is today | сьогодні |
| return date is tomorrow | завтра |
| return date in 2 days | через 2 дні |
| return date was yesterday | на 1 день пізніше |
| return date was 3 days ago | на 3 дні пізніше |
| no date | без дати повернення |
