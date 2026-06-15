# Book Form Loan Section Contract

## Visibility

When user selects:

```ts
ownershipStatus = "borrowed_from_someone"
```

show borrowed-from fields.

When user selects:

```ts
ownershipStatus = "lent_to_someone"
```

show lent-to fields.

---

## Create Book Form

If user creates book with loan status:

1. validate book fields;
2. validate loan fields;
3. create book;
4. create active loan record;
5. set ownershipStatus.

---

## Edit Book Form

If book already has active loan:

* show loan section prefilled;
* allow editing loan data;
* do not allow changing loan type in MVP.

If user changes from loan status to another status:

* require confirmation;
* use Mark as Returned flow where possible.

Recommended:

```text
Do not silently remove active loan from Book Form.
```

---

## Direct status changes

Do not silently allow:

```text
borrowed_from_someone → owned
lent_to_someone → none
```

Use return flow:

```text
borrowed_from_someone → none
lent_to_someone → owned
```
