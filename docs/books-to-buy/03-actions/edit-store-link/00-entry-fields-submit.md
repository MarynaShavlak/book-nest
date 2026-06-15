# Edit Store Link: Entry, Fields and Submit

## Entry point

Action:

```text
Редагувати посилання
```

Available from:

```text
Book row → Store link → More menu
```

## Modal

Title:

```text
Редагувати посилання
```

Fields are prefilled:

- storeName;
- URL;
- price;
- currency.

Buttons:

```text
Скасувати
Зберегти зміни
```

## Submit

On save:

1. validate fields;
2. check ownership of link and book;
3. update store link;
4. update `updatedAt`;
5. recalculate best offer;
6. update row/sidebar/statistics.

## Editable fields

- store name;
- URL;
- price;
- currency.
