### 14.5. No filtered results state

No filtered results state показується, якщо активні quick filters або advanced filters, але за ними немає книг.

When to show:

```text
totalBooks > 0
filters are active
resultsCount = 0
```

Message:

```text
Немає книг за вибраними фільтрами
```

Description:

```text
Спробуй змінити фільтри або очистити їх, щоб побачити більше книг.
```

Actions:

```text
Очистити фільтри
Очистити все
```

Behavior:

* **Очистити фільтри** прибирає quick filter і advanced filters;
* search query можна залишити активним, якщо він був введений;
* **Очистити все** прибирає search, quick filter і advanced filters;
* sort і view mode не скидаються.

---
