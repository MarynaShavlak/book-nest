### 14.2. Loading state

Loading state показується, коли сторінка очікує дані з API або локального сховища.

When to show:

```text
isLoading = true
```

UI:

* skeleton для summary cards;
* skeleton для toolbar;
* skeleton для book cards або list rows;
* sidebar skeleton, якщо sidebar показується.

Behavior:

* не показувати empty state під час loading;
* не показувати no results state під час loading;
* actions мають бути disabled або недоступні до завершення завантаження.

---
