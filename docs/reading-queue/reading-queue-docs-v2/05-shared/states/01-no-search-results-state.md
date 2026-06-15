# No Search Results State

No search results state показується, якщо черга не порожня, але search нічого не знайшов.

When to show:

```text
queueCount > 0
search is active
resultsCount = 0
```

Title:

```text
Нічого не знайдено
```

Description:

```text
Спробуйте змінити пошуковий запит або очистити пошук.
```

Action:

```text
Очистити пошук
```

Behavior:

* очищає search input;
* показує повний список черги;
* не змінює порядок книг.

---
