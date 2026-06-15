# Specific Position Validation

Поле **Позиція в черзі** показується тільки тоді, коли користувач обрав option **На конкретну позицію**.

Validation:

| Rule                                             | Message                                                    |
| ------------------------------------------------ | ---------------------------------------------------------- |
| position is required                             | Вкажіть позицію в черзі                                    |
| position must be number                          | Позиція має бути числом                                    |
| position must be integer                         | Позиція має бути цілим числом                              |
| position must be greater than 0                  | Позиція має бути більшою за 0                              |
| position cannot be greater than queue length + 1 | Позиція не може бути більшою за кількість книг у черзі + 1 |

Allowed range:

```text
1 ... queueLength + 1
```

Example:

```text
У черзі зараз 5 книг.
Користувач може вказати позицію від 1 до 6.
```

If user enters:

```text
position = 6
```

це означає додати книгу в кінець черги.

---
