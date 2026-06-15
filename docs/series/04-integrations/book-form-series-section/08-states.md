# Book Form Series Section — States

> Source: `book-form-series-section.md`

## 13. States

### 13.1. Default standalone state

Content:

```text
Це книга із серії
```

Toggle off.

Fields hidden:

```text
Series select
Part number
Create new series
```

---

### 13.2. Series selected state

Content:

```text
Серія вибрана
```

Показати:

* назву серії;
* автора серії, якщо є;
* status badge;
* partNumber input.

---

### 13.3. New series draft state

Показати inline block:

```text
Нова серія
```

Fields:

* Назва серії;
* Статус серії;
* Загальна кількість книг;
* Автор серії.

---

### 13.4. Preselected series state

Якщо форма відкрита з Series Details Page:

```text
Книга буде додана до серії “Назва серії”
```

Series field може бути readonly.

---

### 13.5. Loading state

Показується, коли завантажуються series options.

Recommended UI:

```text
Завантажуємо серії...
```

---

### 13.6. Empty series list state

Якщо користувач не має серій:

```text
У вас ще немає серій
```

Action:

```text
Створити нову серію
```

---

### 13.7. Duplicate partNumber state

Error:

```text
У цій серії вже є книга з таким номером частини
```

Submit disabled або validation error.

---

### 13.8. totalBooksCount conflict state

Error:

```text
Номер частини більший за загальну кількість книг у серії
```

Action:

```text
Редагувати серію
```

---

### 13.9. Remove series confirmation state

Confirmation:

```text
Прибрати книгу з серії?
Книга залишиться у вашій бібліотеці, але більше не буде відображатися в цій серії.
```

---

### 13.10. Error state

Якщо series section не вдалося зберегти:

```text
Не вдалося оновити дані серії для книги
Спробуйте ще раз.
```

---
