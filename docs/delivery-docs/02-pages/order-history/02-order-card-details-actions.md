# Order History: Card, Details, Actions

## Order card content

Show:

- book cover/title/author;
- store name;
- order date;
- expected delivery date, if exists;
- received/cancelled date, if exists;
- status badge;
- price/currency, if exists;
- order number;
- tracking number;
- delivery service;
- cancel reason, if cancelled;
- note, if exists.

## Details modal

Optional MVP, but useful.

It can show the full delivery record in read-only format.

## Common actions

For all records:

```text
Перейти до книги
Переглянути деталі
```

If tracking URL exists:

```text
Відкрити трекінг
```

## Active record actions

For `ordered` and `in_transit` records, optionally show:

```text
Редагувати доставку
Позначити як отриману
Скасувати замовлення
```

## Inactive record actions

For `received` and `cancelled` records:

```text
Перейти до книги
Переглянути деталі
```

Do not show edit/receive/cancel for inactive records.
