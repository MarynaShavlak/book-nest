# Delivery Block — Relations with Other Blocks and Flows

> Source: book-details-delivery-block.md lines 974-1054

---

## 15. Relationship with Quick Actions

Book Details Quick Actions can include delivery-related actions.

Recommended logic:

| Book state                      | Quick action              |
| ------------------------------- | ------------------------- |
| `ownershipStatus = none`        | Позначити як “В дорозі”   |
| `ownershipStatus = want_to_buy` | Позначити як “В дорозі”   |
| `ownershipStatus = in_transit`  | Позначити як отриману     |
| `ownershipStatus = in_transit`  | Редагувати доставку       |
| `ownershipStatus = in_transit`  | Скасувати замовлення      |
| `ownershipStatus = owned`       | no active delivery action |
| has delivery history            | Історія замовлень         |

Important:

```text
Quick Actions запускають delivery flows.
Delivery Block показує delivery summary and contextual actions.
```

---

## 16. Relationship with Statuses block

Book Details has a Statuses block that shows:

```text
readingStatus
ownershipStatus
formats
```

When `ownershipStatus = in_transit`, Statuses block shows:

```text
Статус володіння: В дорозі
```

Delivery Block then shows details:

```text
Магазин
Дата замовлення
Очікувана дата доставки
ТТН
```

Important:

```text
Statuses block shows the high-level ownership status.
Delivery Block shows detailed order and delivery information.
```

---

## 17. Relationship with delivery flows

Delivery Block must not implement the full logic directly.

It should call existing flows:

| Delivery Block action   | Feature doc                  |
| ----------------------- | ---------------------------- |
| Позначити як “В дорозі” | `mark-book-as-in-transit.md` |
| Редагувати доставку     | `edit-delivery-info.md`      |
| Позначити як отриману   | `mark-book-as-received.md`   |
| Скасувати замовлення    | `cancel-delivery-order.md`   |
| Історія замовлень       | `delivery-order-history.md`  |

Important:

```text
Book Details Delivery Block is an integration point, not a source of duplicated delivery business logic.
```

---
