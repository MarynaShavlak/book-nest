# Loading, Error and Empty State Priority

Use this state priority across the module:

```text
1. Loading
2. Error
3. Empty queue
4. No search results
5. Default queue list
```

## Rules

- Loading has highest priority.
- Empty queue appears only when queue count is `0`.
- No search results appears only when queue exists and search returns no results.
- Do not show empty state during loading.
- Do not allow drag-and-drop during loading or error.
