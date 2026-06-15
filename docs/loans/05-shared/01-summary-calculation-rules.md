# Summary Calculation Rules

## Borrowed from someone

```ts
count(loans where type = "borrowed_from_someone" and status = "active")
```

## Lent to someone

```ts
count(loans where type = "lent_to_someone" and status = "active")
```

## Return this week

```ts
count(active loans where expectedReturnDate is within current week)
```

## Overdue

```ts
count(active loans where expectedReturnDate < today)
```

---

## Additional optional calculations

### Return this month

```ts
count(active loans where expectedReturnDate is within current month)
```

### With reminder

```ts
count(active loans where reminderEnabled = true)
```

### Without return date

```ts
count(active loans where expectedReturnDate is null)
```

---

## Important

Summary cards use only active loans:

```ts
loan.status === "active"
```
