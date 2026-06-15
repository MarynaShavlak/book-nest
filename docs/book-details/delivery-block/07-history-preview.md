# Delivery Block — History Preview

> Source: book-details-delivery-block.md lines 806-896

---

## 12. Delivery history preview

If book has no active delivery but has previous delivery records, show compact history preview.

Show latest record by:

```text
updatedAt DESC
```

or by relevant date:

```text
receivedAt DESC / cancelledAt DESC / orderDate DESC
```

Recommended MVP:

```text
Show latest delivery record.
```

---

### 12.1. Received history preview

If latest record is received:

```text
Останнє замовлення

Отримано 16.06.2026
Yakaboo · 520 грн

[Історія замовлень]
```

Show fields:

* status `Отримано`;
* receivedAt;
* storeName;
* price if exists;
* orderDate if useful;
* action to order history.

---

### 12.2. Cancelled history preview

If latest record is cancelled:

```text
Останнє замовлення

Скасовано 16.06.2026
Yakaboo

[Історія замовлень]
```

Show fields:

* status `Скасовано`;
* cancelledAt;
* storeName;
* cancel reason if exists;
* action to order history.

---

### 12.3. Multiple delivery records

If book has more than one delivery record, show count.

Example:

```text
3 замовлення в історії
```

Action:

```text
Переглянути історію
```

This opens Order History filtered by current book.

---
