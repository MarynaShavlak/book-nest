# Page Actions — Delivery and Series Entry Points

> Source: book-details-page.md lines 2040-2117

---

### 9.11. Mark as received

Action:

```text
Позначити як отриману
```

When to show:

```text
ownershipStatus = in_transit
```

Behavior:

* action може виконуватися через confirmation modal або одразу з optimistic update;
* для безпечнішого UX рекомендовано confirmation modal.

Modal:

```text
Позначити книгу як отриману?

Після цього книга зникне зі списку “Книги в дорозі” і залишиться у бібліотеці.
```

After confirm:

```ts
ownershipStatus: 'in_transit' → 'owned'
```

Result:

* книга зникає зі сторінки **Книги в дорозі**;
* книга залишається в **Моїй бібліотеці**;
* статус у sidebar оновлюється на **Маю**.

---

### 9.12. Go to series

Action:

```text
Перейти до серії
```

When to show:

```text
bookType = series_part
seriesId exists
```

UI location:

```text
Right sidebar → Series preview
```

Behavior:

* action виконує redirect на сторінку деталей серії;
* рекомендований route:

```text
/series/:seriesId
```

Logic:

* якщо книга не належить до серії, action не показується;
* якщо series preview не показується, action теж не показується.

---
