# Remove from Shopping List: Entry and Confirmation

## Entry points

Action:

```text
Прибрати зі списку покупок
```

Available from:

- Books to Buy row More menu;
- Book Details purchase block.

Show only when:

```ts
ownershipStatus === "want_to_buy"
```

## Confirmation modal

Title:

```text
Прибрати книгу зі списку покупок?
```

Description:

```text
Книга зникне зі сторінки “Книги до покупки”, але залишиться у вашій бібліотеці.
```

Status transition:

```text
Хочу купити → Немає
```

Buttons:

```text
Скасувати
Прибрати зі списку
```

Important:

```text
This is not Delete Book.
```
