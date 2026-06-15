# Normalization before submit

### 8.12. Normalization before submit

Перед submit потрібно нормалізувати значення блоку:

```ts
readingStatus = readingStatus || 'not_started';
ownershipStatus = ownershipStatus || 'none';
formats = unique(formats);
```

Для optional текстових полів у conditional sections:

```ts
storeName = storeName?.trim() || null;
orderNumber = orderNumber?.trim() || null;
personName = personName?.trim() || null;
note = note?.trim() || null;
readingNote = readingNote?.trim() || null;
finishImpression = finishImpression?.trim() || null;
```

---
