# Mark Book as Received: Bulk All Action

## Recommended MVP scope

```text
all visible / filtered active deliveries
```

Do not silently update hidden records outside current filter unless UI clearly says `all active deliveries`.

## Confirmation required

Title:

```text
Позначити всі книги як отримані?
```

Body:

```text
Усі вибрані активні доставки буде завершено. Книги стануть “Маю”.
```

## Safety

Skip records that are:

- no longer active;
- already received;
- cancelled;
- owned by another user;
- missing book relation.

Show result summary after completion.
