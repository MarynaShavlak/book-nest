# Delivery Block — Data Update Rules

> Source: book-details-delivery-block.md lines 1132-1219

---

## 21. Data update rules

Delivery Block should update after:

* marking book as in transit;
* editing delivery info;
* marking book as received;
* cancelling delivery order;
* changing ownership status;
* deleting delivery record through future admin/system action;
* refreshing Book Details.

---

### 21.1. After Mark as In Transit

After successful flow:

```ts
ownershipStatus = "in_transit"
deliveryStatus = "ordered"
```

Delivery Block appears with active delivery information.

---

### 21.2. After Edit Delivery Info

Delivery Block updates changed fields:

* store;
* order date;
* expected delivery date;
* status badge;
* price;
* delivery service;
* tracking number;
* note.

---

### 21.3. After Mark as Received

After successful flow:

```ts
ownershipStatus = "owned"
deliveryStatus = "received"
```

Active Delivery Block should no longer be shown.

Recommended MVP behavior:

```text
Replace active Delivery Block with compact history preview.
```

Alternative:

```text
Hide Delivery Block and show delivery history only in Order History.
```

Recommended final rule:

```text
If delivery history exists, show compact history preview.
```

---

### 21.4. After Cancel Order

After successful flow:

```ts
deliveryStatus = "cancelled"
ownershipStatus = "want_to_buy" | "none"
```

Active Delivery Block should no longer be shown.

If history preview is enabled, show cancelled history preview.

---
