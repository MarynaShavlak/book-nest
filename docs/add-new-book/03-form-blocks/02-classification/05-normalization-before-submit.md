# Normalization before submit

### 7.4. Normalization before submit

Перед submit потрібно нормалізувати значення блоку:

```ts
genreIds = unique(genreIds);
tagIds = unique(tagIds);
ageCategory = ageCategory || 'not_specified';
language = language || 'ukrainian';
```

Для custom tags:

```ts
tagName = tagName.trim();
```

Optional empty values не мають ламати submit.

---
