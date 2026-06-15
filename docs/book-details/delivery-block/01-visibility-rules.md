# Delivery Block — Visibility Rules

> Source: book-details-delivery-block.md lines 112-201

---

## 5. When to show Delivery Block

### 5.1. Show active delivery block

Show Delivery Block if book has:

```ts
ownershipStatus === "in_transit"
```

and active delivery record exists:

```ts
deliveryStatus === "ordered" || deliveryStatus === "in_transit"
```

This means:

* книга замовлена;
* книга ще не отримана;
* замовлення не скасоване;
* користувач може керувати доставкою.

---

### 5.2. Show delivery history preview

If book does not have active delivery, but has delivery records:

```text
received
cancelled
```

then Book Details can show a compact **Delivery history preview**.

Recommended MVP:

```text
Show last delivery record as history preview.
```

Example:

```text
Останнє замовлення

Отримано 16.06.2026
Yakaboo · 520 грн

[Історія замовлень]
```

or:

```text
Останнє замовлення

Скасовано 16.06.2026
Yakaboo

[Історія замовлень]
```

---

### 5.3. Do not show block

Do not show Delivery Block if:

```ts
ownershipStatus !== "in_transit"
```

and there are no delivery records for this book.

Example:

```text
Book has never been ordered.
```

In this case, delivery action can still be available in Quick actions:

```text
Позначити як “В дорозі”
```

---
