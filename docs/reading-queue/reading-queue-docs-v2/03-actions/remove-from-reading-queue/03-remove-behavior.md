# Remove Behavior

Після натискання **Прибрати з черги** рекомендовано не показувати confirmation modal.

Reason:

```text
Це не destructive action, бо книга не видаляється з бібліотеки.
```

Recommended behavior:

```text
Click → remove from queue → show toast with Undo
```

Toast:

```text
Книгу прибрано з черги
```

Toast action:

```text
Скасувати
```

---
