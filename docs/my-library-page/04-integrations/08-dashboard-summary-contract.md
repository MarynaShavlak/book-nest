# Dashboard summary contract

## Purpose

Dashboard може показувати короткі бібліотечні підсумки, але My Library залишається основним місцем перегляду повного списку книг.

## Contract

- Summary cards на My Library можуть мати спільну логіку з Dashboard.
- Recently added books можуть використовуватися і в My Library sidebar, і на Dashboard.
- Після зміни книги обидва місця мають оновлювати counters без stale state.

## Related source sections

### 3.5. Summary cards

Під header мають відображатися інформаційні плашки з основними показниками бібліотеки.

Рекомендовані cards:

| Card        | Що показує                       | Логіка підрахунку                       |
| ----------- | -------------------------------- |-----------------------------------------|
| Усього книг | Загальна кількість активних книг | усі книги користувача без видалених     |
| Читаю       | Кількість книг у процесі читання | `readingStatus = reading` + `rereading` |
| Прочитано   | Кількість прочитаних книг        | `readingStatus = finished`              |
| Улюблених   | Кількість улюблених книг         | `isFavorite = true`                     |

---

### 13.5. Recently added books

Блок показує 3 останні додані книги.

Example:

```text
Recently added books
- Fourth Wing
- Iron Flame
- Divine Rivals
```

Logic:

* показувати максимум 3 книги;
* сортування: `createdAt DESC`;
* показувати тільки активні книги поточного користувача;
* видалені книги не показуються;
* клік по книзі відкриває сторінку деталей книги.

Empty state:

```text
Книг ще немає
```

---
