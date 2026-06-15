# Delete Series — Undo, States, Validation

> Source: `delete-series.md`

## 14. Undo behavior

### 14.1. MVP recommendation

Для MVP можна зробити без undo, якщо є confirmation modal.

Minimum MVP:

```text
confirmation modal required
undo optional
```

### 14.2. Optional undo

Після видалення можна показати snackbar:

```text
Серію видалено
```

Action:

```text
Скасувати дію
```

Якщо користувач натискає undo:

* серія відновлюється;
* книги знову прив’язуються до серії;
* partNumber книг відновлюється;
* All Series Page оновлюється.

Якщо undo не реалізовано, це не блокує MVP.

---


## 15. States

### 15.1. Loading state

Показується під час виконання delete action.

Recommended UI:

* disable delete button;
* show loading indicator;
* prevent double submit;
* modal не закривається до завершення дії.

---

### 15.2. Confirmation state

Показується перед видаленням.

Content має залежати від того, чи є книги в серії.

Empty series:

```text
Цю серію буде видалено з вашої бібліотеки.
```

Series with books:

```text
Книги залишаться у вашій бібліотеці, але більше не будуть прив’язані до цієї серії.
```

---

### 15.3. Success state

Після успішного видалення:

```text
Серію видалено
```

Behavior:

```text
redirect to /series
```

---

### 15.4. Error state

Якщо серію не вдалося видалити:

```text
Не вдалося видалити серію
Спробуйте ще раз.
```

Action:

```text
Спробувати ще раз
```

---

### 15.5. Not found state

Якщо користувач відкриває вже видалену серію:

```text
Серію не знайдено
```

Action:

```text
Повернутися до серій
```

---

### 15.6. Last series deleted state

Якщо користувач видалив останню серію, на All Series Page показується empty state:

```text
У вас ще немає серій
Створіть першу серію або додайте книгу як частину книжкового циклу.
```

Actions:

```text
Створити серію
Додати книгу
```

---


## 16. Validation and permissions

Delete Series доступний тільки для серій поточного користувача.

Rules:

* користувач може видаляти тільки свої серії;
* якщо серія не належить користувачу, action недоступний;
* якщо серія не знайдена, показується not found state;
* повторне видалення однієї й тієї самої серії не має ламати UI.

---
