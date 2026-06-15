# Validation Rules

## Store link validation

| Field | Required | Rules |
| ----- | -------- | ----- |
| `storeName` | yes | trim, max 100 |
| `url` | yes | valid URL |
| `price` | no | number, min 0 |
| `currency` | no | default `UAH` |

## Error messages

```text
Оберіть магазин
Додайте посилання на магазин
Посилання має бути валідним URL
Ціна має бути числом
Ціна не може бути меншою за 0
```

## Duplicate links

Recommended MVP rule:

```text
Allow several links for the same store if URLs are different.
```

But prevent exact duplicate URL for the same user and book.

Error:

```text
Таке посилання вже додане для цієї книги
```

## Ownership transition validation

Mark as bought is allowed only if:

```ts
ownershipStatus === "want_to_buy"
```

Remove from shopping list is allowed only if:

```ts
ownershipStatus === "want_to_buy"
```

Mark as in transit is allowed only if Delivery module is enabled and:

```ts
ownershipStatus === "want_to_buy"
```

## Permissions validation

- User can edit only own books.
- User can edit only own store links.
- If access is denied, show safe not-found error.
