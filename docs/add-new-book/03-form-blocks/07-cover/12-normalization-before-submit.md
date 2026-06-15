# Normalization before submit

### 12.16. Normalization before submit

Перед submit потрібно підготувати дані обкладинки:

```ts id="9z3zsj"
coverFile = selectedCoverFile || null;
coverUrl = uploadedCoverUrl || null;
removeCover = Boolean(removeCover);
```

Для create mode:

```ts id="ql7fuc"
if (!selectedCoverFile) {
  coverUrl = null;
}
```

Для edit mode:

```ts id="o2pmur"
if (removeCover) {
  coverUrl = null;
}
```

---
