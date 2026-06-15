# Mark as Loaned: Entry and Type Selection

## Action

Action label:

```text
Позначити як позичену
```

This opens universal modal.

Modal title:

```text
Позначити як позичену
```

Subtitle:

```text
Збережіть інформацію про позику книги
```

---

## Entry points

Possible entry points:

* Book Details → Quick actions;
* Book Details → Loan block;
* My Library → Book card menu;
* Borrowed Books Page → CTA;
* Book Form → ownership status conditional section.

---

## Book preview

Modal shows:

* cover;
* title;
* author.

Example:

```text
Четверте крило
Ребекка Яррос
```

---

## Type selection

Segmented control:

```text
Я взяла книгу у когось
Я дала свою книгу комусь
```

Mapped values:

| UI label | Value |
| -------- | ----- |
| Я взяла книгу у когось | `borrowed_from_someone` |
| Я дала свою книгу комусь | `lent_to_someone` |

---

## When allowed

For `borrowed_from_someone`, allowed if:

```ts
ownershipStatus === "none" || ownershipStatus === "want_to_buy"
```

For `lent_to_someone`, recommended allowed if:

```ts
ownershipStatus === "owned"
```

If user tries to lend a book that is not owned:

```text
Спочатку позначте книгу як “Маю”, щоб видати її комусь.
```

If book already has active loan:

```text
Ця книга вже має активну позику.
```
