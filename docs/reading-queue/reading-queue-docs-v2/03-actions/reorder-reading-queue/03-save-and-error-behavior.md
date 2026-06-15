# Save and Error Behavior

## Save behavior

After drag ends:

1. update local UI order;
2. send new order to persistence layer;
3. keep actions disabled while saving if needed;
4. show final order after save.

## Error behavior

If save fails:

- rollback to previous order;
- show toast:

```text
Не вдалося оновити чергу читання
```

- keep queue positions consistent.
