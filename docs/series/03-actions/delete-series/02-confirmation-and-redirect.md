# Delete Series — Confirmation and Redirect

> Source: `delete-series.md`

## 7. Confirmation modal

Перед видаленням серії обов’язково показувати confirmation modal.

### 7.1. Modal for empty series

Title:

```text
Видалити серію?
```

Text:

```text
Цю серію буде видалено з вашої бібліотеки.
```

Buttons:

```text
Скасувати
Видалити серію
```

---

### 7.2. Modal for series with books

Title:

```text
Видалити серію?
```

Text:

```text
У цій серії є книги. Серію буде видалено, але книги залишаться у вашій бібліотеці без прив’язки до серії.
```

Additional info:

```text
Книг у серії: 5
```

Buttons:

```text
Скасувати
Видалити серію
```

---

### 7.3. Optional stronger confirmation

Для MVP достатньо confirmation modal.

Future improvement:

```text
Для серій з великою кількістю книг можна вимагати ввести назву серії для підтвердження.
```

У MVP це не обов’язково.

---


## 8. Redirect behavior

Після успішного видалення серії користувач не має залишатися на `/series/:seriesId`, бо ця сторінка більше не існує.

Recommended behavior:

```text
Після видалення → redirect to /series
```

Після redirect:

* серія зникає зі списку;
* показується success message;
* header stats оновлюються;
* empty state показується, якщо це була остання серія.

Success message:

```text
Серію видалено
```

---
