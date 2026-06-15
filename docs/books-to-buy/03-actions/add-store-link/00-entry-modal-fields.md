# Add Store Link: Entry and Modal Fields

## Entry points

Action:

```text
Додати посилання
```

Available from:

- Books to Buy row;
- Book Details purchase block;
- More menu on wishlist book.

Show when:

```ts
ownershipStatus === "want_to_buy"
```

## Modal

Title:

```text
Додати посилання на магазин
```

Subtitle:

```text
Додайте посилання на сторінку книги в інтернет-магазині.
```

Buttons:

```text
Скасувати
Зберегти посилання
```

## Book preview

Show:

- cover;
- title;
- author;
- publisher if exists.

## Fields

| Field | Required | Type |
| ----- | -------- | ---- |
| Магазин | yes | select/autocomplete/custom |
| Посилання | yes | URL input |
| Ціна | no | number input |
| Валюта | no | select |

Default currency:

```text
UAH
```
