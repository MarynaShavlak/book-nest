# States Overview and Priority

> Source: `favorites-page.md §14.1, §14.7`

## 14. States

States описують, що користувач бачить у різних ситуаціях.

---
### 14.1. States overview

| State | When to show |
|---|---|
| Loading | Дані ще завантажуються |
| Empty favorites | У користувача немає жодної улюбленої книги |
| No search results | Search активний, але нічого не знайдено |
| No filtered results | Filters активні, але результатів немає |
| Error | Дані не вдалося завантажити або оновити |

---

### 14.7. State priority

Якщо одночасно можливі кілька states, застосовується такий порядок:

```text
1. Loading
2. Error
3. Empty favorites
4. No search results
5. No filtered results
6. Default books list
```

---
