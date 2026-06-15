# Delivery, loan and ownership contract

## Purpose

My Library відображає й фільтрує книги за ownership-related статусами, але не має дублювати повну логіку delivery або loan modules.

## Contract

- Ownership status використовується для filters, badges і quick actions.
- Книги `want_to_buy`, `in_transit`, `borrowed`, `lent` мають залишатися у My Library.
- Детальні delivery/loan fields редагуються у відповідних сценаріях або на Book Details.
- Bulk ownership update має обережно працювати зі статусами, які потребують додаткових полів.

## Related source sections

### 7.4. Ownership status filter

Фільтр за статусом володіння.

Options:

| Value                   | Label             |
| ----------------------- | ----------------- |
| `none`                  | Немає             |
| `want_to_buy`           | Хочу купити       |
| `in_transit`            | В дорозі          |
| `owned`                 | Маю               |
| `borrowed_from_someone` | Позичена у когось |
| `lent_to_someone`       | Видана комусь     |

Important:

* `ebook` і `audiobook` не мають бути в ownership status;
* електронна й аудіокнига — це формат книги;
* детальні фільтри позики не треба додавати тут, бо для цього є окрема сторінка **Позичені книги**.

---

### 12.8. Change ownership status

Action:

```text
Змінити статус володіння
```

Користувач вибирає новий ownership status:

| Value                   | Label             |
| ----------------------- | ----------------- |
| `none`                  | Немає             |
| `want_to_buy`           | Хочу купити       |
| `in_transit`            | В дорозі          |
| `owned`                 | Маю               |
| `borrowed_from_someone` | Позичена у когось |
| `lent_to_someone`       | Видана комусь     |

Logic:

* статус змінюється для всіх вибраних книг;
* bulk action оновлює тільки `ownershipStatus`;
* індивідуальні дані доставки або позики не заповнюються масово;
* якщо для статусу потрібні деталі, їх можна додати пізніше через edit book.

---
