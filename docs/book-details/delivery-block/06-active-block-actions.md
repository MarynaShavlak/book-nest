# Delivery Block — Active Block Actions

> Source: book-details-delivery-block.md lines 656-805

---

## 11. Active block actions

Recommended actions:

| Action                | Behavior                                              |
| --------------------- | ----------------------------------------------------- |
| Позначити як отриману | opens Mark Book as Received flow                      |
| Редагувати доставку   | opens Edit Delivery Info flow                         |
| Скасувати замовлення  | opens Cancel Delivery Order flow                      |
| Відкрити трекінг      | opens tracking URL                                    |
| Історія замовлень     | opens Delivery Order History filtered by current book |

---

### 11.1. Primary action

Primary action:

```text
Позначити як отриману
```

Show when:

```ts
ownershipStatus === "in_transit" &&
(deliveryStatus === "ordered" || deliveryStatus === "in_transit")
```

Behavior:

* opens confirmation modal;
* after confirm sets `ownershipStatus = owned`;
* sets `deliveryStatus = received`;
* sets `receivedAt`;
* active delivery block changes to history preview or disappears depending on design.

---

### 11.2. Edit action

Action:

```text
Редагувати доставку
```

or shorter:

```text
Редагувати
```

Recommended MVP label inside block:

```text
Редагувати
```

Behavior:

* opens Edit Delivery Info modal;
* fields are prefilled;
* after save block updates immediately.

---

### 11.3. Cancel action

Action:

```text
Скасувати замовлення
```

Recommended placement:

```text
More menu
```

or lower secondary action.

Reason:

```text
Cancellation is a warning/destructive action and should not compete with primary action.
```

Behavior:

* opens confirmation modal;
* user chooses whether to return book to “Хочу купити”;
* after confirm delivery record becomes `cancelled`;
* active block changes to history preview or disappears depending on design.

---

### 11.4. Tracking action

Action:

```text
Відкрити трекінг
```

Show only if:

```ts
delivery.trackingUrl exists
```

Behavior:

* opens URL in new tab;
* does not change data.

---

### 11.5. Order history action

Action:

```text
Історія замовлень
```

Behavior:

* opens Order History filtered by current book;
* recommended route:

```text
/delivery/history?bookId=:bookId
```

Alternative:

```text
/books/:bookId/delivery-history
```

Recommended MVP:

```text
Use /delivery/history?bookId=:bookId
```

---
