# Add Store Link: Submit, Validation and Errors

## Submit behavior

When user clicks `Зберегти посилання`, system should:

1. validate fields;
2. check that book belongs to current user;
3. check duplicate URL for this book/user;
4. create `BookStoreLink`;
5. recalculate best offer;
6. update page, sidebar and Book Details purchase block.

## Validation

- Store is required.
- URL is required.
- URL must be valid.
- Price is optional.
- Price must be number if filled.
- Price cannot be negative.
- Currency defaults to `UAH`.

## Errors

```text
Оберіть магазин
Додайте посилання на магазин
Посилання має бути валідним URL
Ціна має бути числом
Ціна не може бути меншою за 0
Таке посилання вже додане для цієї книги
Не вдалося зберегти посилання
```

## Loading

During save:

- submit button disabled;
- repeated submit blocked;
- modal stays open;
- entered data remains visible.
