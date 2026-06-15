# Loading, Error and Permissions

> Source: `favorite-book-toggle.md §15-16, §18`

## 15. Loading behavior

Під час збереження favorite toggle:

* heart icon може мати disabled state;
* повторний клік по тому самому icon блокується до завершення запиту;
* не потрібно показувати global loader;
* можна показати маленький spinner або просто тимчасово disabled icon.

Recommended:

```text id="9cswaj"
Disable only clicked heart icon
```

---

## 16. Error behavior

Якщо favorite status не вдалося оновити:

* повернути попередній стан icon;
* показати error message;
* не змінювати counters;
* не прибирати книгу зі списку.

Error message:

```text id="yiio1q"
Не вдалося оновити улюблене
```

Example:

```text id="zuzh4f"
Було: isFavorite = false
Користувач натиснув heart
UI показав filled heart
Сталася помилка
UI повернув outline heart
```

---

## 18. Permissions

Користувач може змінювати favorite status тільки для своїх книг.

System має перевіряти:

* книга існує;
* книга належить поточному користувачу;
* книга не видалена.

Якщо книга видалена або недоступна, favorite action не має виконуватися.

---
