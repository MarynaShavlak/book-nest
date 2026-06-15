# Mark as Bought: Entry and Confirmation

## Entry points

Action:

```text
Позначити як куплену
```

Available from:

- Books to Buy row;
- Book Details purchase block;
- More menu.

Show only when:

```ts
ownershipStatus === "want_to_buy"
```

## Confirmation modal

Title:

```text
Позначити книгу як куплену?
```

Description:

```text
Книга буде позначена як “Маю”. Вона зникне зі списку покупок, але залишиться у вашій бібліотеці.
```

If store links exist:

```text
Посилання на магазини залишаться в інформації про книгу.
```

Status transition:

```text
Хочу купити → Маю
```

Buttons:

```text
Скасувати
Позначити як куплену
```

## Preview

Show:

- cover;
- title;
- author;
- publisher;
- best offer if available.
