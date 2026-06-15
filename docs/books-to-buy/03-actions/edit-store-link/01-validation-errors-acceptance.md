# Edit Store Link: Validation, Errors and Acceptance Criteria

## Validation

Same as Add Store Link:

- store required;
- URL required;
- URL valid;
- price optional but numeric;
- price cannot be negative.

## Errors

```text
Посилання не знайдено
Оберіть магазин
Додайте посилання на магазин
Посилання має бути валідним URL
Ціна має бути числом
Ціна не може бути меншою за 0
Не вдалося оновити посилання
```

## Success

```text
Посилання оновлено
```

## Acceptance Criteria

- User can edit own store link.
- Existing values are prefilled.
- User can update store, URL, price and currency.
- Best offer recalculates after save.
- Sidebar statistics update after save.
- User cannot edit another user's link.
- Book status does not change.
