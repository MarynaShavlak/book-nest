# Remove / Unlink — Actions and States

> Source: `remove-unlink-book-from-series.md`

## 12. Actions

### 12.1. Unlink existing book

Action label:

```text
Прибрати з серії
```

Behavior:

1. Користувач натискає action.
2. Відкривається confirmation modal.
3. Користувач підтверджує дію.
4. Книга відв’язується від серії.
5. UI оновлюється.

---

### 12.2. Remove missing book

Action label:

```text
Прибрати з серії
```

Behavior:

1. Користувач натискає action на missing book row.
2. Підтверджує дію.
3. Missing book row видаляється зі структури серії.
4. UI оновлюється.

---

### 12.3. Cancel unlink

Action label:

```text
Скасувати
```

Behavior:

* confirmation modal закривається;
* книга залишається в серії;
* жодні дані не змінюються.

---

### 12.4. Undo after unlink

Recommended MVP improvement:

Після успішного відв’язування можна показати snackbar з undo.

Message:

```text
Книгу прибрано з серії
```

Action:

```text
Скасувати дію
```

Behavior:

* якщо користувач натискає undo, книга повертається в серію;
* partNumber відновлюється;
* series statistics і progress знову перераховуються.

Якщо undo не реалізується в MVP, confirmation modal є обов’язковим.

---


## 13. States

### 13.1. Loading state

Показується, коли unlink action виконується.

Recommended UI:

* disable action button;
* показати loading indicator у modal;
* не дозволяти повторний submit.

---

### 13.2. Confirmation state

Показується перед відв’язуванням.

Content:

```text
Книга залишиться у вашій бібліотеці, але більше не буде відображатися в цій серії.
```

---

### 13.3. Success state

Після успішного unlink:

```text
Книгу прибрано з серії
```

Якщо прибрана missing book:

```text
Книгу прибрано зі списку серії
```

---

### 13.4. Error state

Якщо дію не вдалося виконати:

```text
Не вдалося прибрати книгу з серії
Спробуйте ще раз.
```

Action:

```text
Спробувати ще раз
```

---

### 13.5. Empty series state

Якщо після відв’язування в серії не залишилося книг:

```text
У цій серії ще немає книг
Додайте першу книгу, щоб почати формувати серію.
```

Action:

```text
Додати книгу
```

---

### 13.6. Not found state

Якщо книга або серія більше не існує:

```text
Книгу або серію не знайдено
```

Action:

```text
Оновити сторінку
```

---
