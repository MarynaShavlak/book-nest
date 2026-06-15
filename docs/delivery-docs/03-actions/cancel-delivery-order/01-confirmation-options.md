# Cancel Delivery Order: Confirmation Options

## Required confirmation

Body should explain:

```text
Доставка буде скасована і зникне зі сторінки “Книги в дорозі”. Запис залишиться в історії замовлень.
```

## User choice

Checkbox:

```text
Залишити книгу в “Хочу купити”
```

Default:

```text
checked
```

## Optional cancel reason

Field:

```text
Причина скасування
```

Source:

```ts
cancelReason
```

Max length:

```text
500 symbols
```

## Buttons

```text
Не скасовувати
Скасувати замовлення
```
