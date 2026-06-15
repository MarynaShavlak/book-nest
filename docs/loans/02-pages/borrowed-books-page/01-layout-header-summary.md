# Borrowed Books Page: Layout, Header and Summary

## Layout

Desktop layout:

```text
[Page header]

[Summary cards]

[Tabs]
[Search + Filters + Sorting]

[Loan list]

[Right sidebar]
  [Tips]
  [Return calendar]
  [Recent activity]
  [CTA]
```

Mobile layout:

```text
1. Page header
2. Summary cards
3. Tabs
4. Search
5. Filters
6. Sorting
7. Loan list
8. Right sidebar blocks
```

---

## Header

Title:

```text
Позичені книги
```

Subtitle:

```text
Книги, які ви взяли у когось або дали комусь
```

---

## Summary cards

Cards:

| Card | Meaning |
| ---- | ------- |
| Взяла у когось | count active borrowed_from_someone |
| Дала комусь | count active lent_to_someone |
| Повернути цього тижня | count active loans due this week |
| Прострочено | count active overdue loans |

Example:

```text
Взяла у когось
7 книг
5 повернути цього місяця

Дала комусь
4 книги
2 очікують повернення

Повернути цього тижня
2 книги

Прострочено
1 книга
на 3 дні
```

---

## Summary card rules

Summary cards use only active loans:

```ts
loan.status === "active"
```

If there are no active loans, values should be `0`.
