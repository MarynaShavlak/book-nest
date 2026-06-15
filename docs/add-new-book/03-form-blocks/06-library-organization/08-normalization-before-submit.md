# Normalization before submit

### 11.11. Normalization before submit

Перед submit потрібно нормалізувати значення блоку:

```ts id="vr5o78"
isFavorite = Boolean(isFavorite);

addToReadingQueue = Boolean(addToReadingQueue);

queuePriority = addToReadingQueue
  ? queuePriority || 'normal'
  : null;

selectedListIds = unique(selectedListIds);

draftLists = draftLists.map((list) => ({
  title: list.title.trim(),
  description: list.description?.trim() || null,
}));
```

---
