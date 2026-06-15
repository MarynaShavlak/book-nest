# Ownership Status Rules

## Ownership statuses

Correct ownership statuses:

```ts
export type OwnershipStatus =
  | "none"
  | "want_to_buy"
  | "in_transit"
  | "owned"
  | "borrowed_from_someone"
  | "lent_to_someone";
```

Labels:

| Value | Label |
| ----- | ----- |
| `none` | Немає |
| `want_to_buy` | Хочу купити |
| `in_transit` | В дорозі |
| `owned` | Маю |
| `borrowed_from_someone` | Позичена у когось |
| `lent_to_someone` | Видана комусь |

Important:

```text
ebook і audiobook не є ownership statuses.
Вони мають бути окремими formats.
```

Correct formats:

```ts
export type BookFormat =
  | "paper"
  | "ebook"
  | "audiobook";
```

---

## Borrowed from someone

When user borrowed a book from someone:

```ts
ownershipStatus = "borrowed_from_someone";
```

Meaning:

```text
Книга фізично у користувача, але не належить йому.
```

After return:

```ts
ownershipStatus = "none";
```

Reason:

```text
Користувач повернув чужу книгу, тому більше її не має.
```

---

## Lent to someone

When user lent own book to someone:

```ts
ownershipStatus = "lent_to_someone";
```

Meaning:

```text
Книга належить користувачу, але фізично зараз у іншої людини.
```

After return:

```ts
ownershipStatus = "owned";
```

Reason:

```text
Книга повернулась до користувача і знову фізично у нього.
```

---

## Invalid direct transitions

MVP should not silently allow:

```text
borrowed_from_someone → lent_to_someone
lent_to_someone → borrowed_from_someone
borrowed_from_someone → owned
lent_to_someone → none
```

These changes have different physical meaning and should go through return/cancel/edit flows.
