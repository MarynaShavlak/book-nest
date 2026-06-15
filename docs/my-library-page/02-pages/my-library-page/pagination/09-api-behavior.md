### 15.9. API behavior

Backend має підтримувати limit / offset або cursor pagination.

Recommended request:

```text
GET /books?limit=24&offset=0
GET /books?limit=24&offset=24
GET /books?limit=24&offset=48
```

Recommended response:

```ts
{
  items: Book[];
  total: number;
  limit: number;
  offset: number;
  hasMore: boolean;
}
```

---
