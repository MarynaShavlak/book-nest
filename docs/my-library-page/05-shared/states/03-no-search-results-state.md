### 14.4. No search results state

No search results state показується, якщо користувач ввів search query, але за цим запитом нічого не знайдено.

When to show:

```text
totalBooks > 0
search is active
filters are empty
resultsCount = 0
```

Message:

```text
Нічого не знайдено
```

Description:

```text
Спробуй змінити пошуковий запит або очистити пошук.
```

Action:

```text
Очистити пошук
```

Behavior:

* очищає тільки search query;
* не змінює sort;
* не змінює view mode;
* після очищення пошуку список книг оновлюється.

---
