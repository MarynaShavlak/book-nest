# Normalization before submit

### 10.10. Normalization before submit

Перед submit потрібно нормалізувати значення блоку:

```ts
pagesCount = pagesCount || null;
publicationYear = publicationYear || null;
isbn = isbn?.trim() || null;
originalTitle = originalTitle?.trim() || null;
translator = translator?.trim() || null;
illustrator = illustrator?.trim() || null;
dedication = dedication?.trim() || null;
```

Для ISBN додатково можна створити normalized value для перевірки:

```ts
normalizedIsbn = isbn
  ?.replaceAll('-', '')
  .replaceAll(' ', '')
  .toUpperCase();
```

---
