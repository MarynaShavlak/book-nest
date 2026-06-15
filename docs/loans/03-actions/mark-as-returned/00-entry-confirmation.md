# Mark as Returned: Entry and Confirmation

## Action

This action completes an active loan.

For borrowed from someone:

```text
Позначити як повернуту
```

For lent to someone:

```text
Позначити як повернену мені
```

---

## Entry points

* Borrowed Books Page → loan row;
* Book Details → Loan Block.

Allowed only if:

```ts
loan.status === "active"
```

---

## Confirmation modal for borrowed_from_someone

Title:

```text
Позначити книгу як повернуту?
```

Description:

```text
Книга більше не буде показуватися серед активних позик. Її статус володіння стане “Немає”.
```

Transition:

```text
Позичена у когось → Немає
```

Buttons:

```text
Скасувати
Позначити як повернуту
```

---

## Confirmation modal for lent_to_someone

Title:

```text
Позначити книгу як повернену вам?
```

Description:

```text
Книга більше не буде показуватися серед активних позик. Її статус володіння стане “Маю”.
```

Transition:

```text
Видана комусь → Маю
```

Buttons:

```text
Скасувати
Позначити як повернену мені
```
