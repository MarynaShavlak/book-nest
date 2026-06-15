# Delivery Block — Missing and Empty States

> Source: book-details-delivery-block.md lines 897-973

---

## 13. Missing active delivery record

Possible inconsistent state:

```ts
book.ownershipStatus === "in_transit"
```

but no active delivery record exists.

This can happen because of:

* old data;
* migration issue;
* failed creation;
* manual data edit;
* sync problem.

UI should show safe state:

```text
Інформацію про доставку не знайдено
```

Helper text:

```text
Книга має статус “В дорозі”, але дані доставки відсутні.
```

Actions:

```text
Додати інформацію про доставку
Редагувати статуси
```

Recommended behavior:

* do not crash Book Details;
* allow user to fix data;
* do not automatically create delivery record without user confirmation.

---

## 14. No delivery state

If book has no active delivery and no delivery history, do not show Delivery Block.

Action **Позначити як “В дорозі”** should remain available through:

```text
Right sidebar → Quick actions
```

Show when:

```ts
ownershipStatus === "none" || ownershipStatus === "want_to_buy"
```

Do not show when:

```ts
ownershipStatus === "owned"
```

unless user explicitly wants to order another copy in future flow.

Recommended MVP:

```text
For owned books, do not show “Позначити як В дорозі” as primary action.
```

---
