# Loading Behavior

### Add to queue loading

Після натискання **Додати в чергу**:

* submit button стає disabled;
* показується loading state;
* повторний submit блокується;
* modal не закривається до успішного збереження.

Button text:

```text
Додавання...
```

---

### Remove from queue loading

Після натискання **Прибрати з черги**:

* action тимчасово disabled;
* повторний клік блокується;
* можна показати локальний spinner або disabled state.

---

# Error Behavior

### Add error

Якщо книгу не вдалося додати в чергу:

* modal залишається відкритою;
* вибрана позиція не очищається;
* Book Details UI не оновлюється;
* користувач бачить error message.

Error message:

```text
Не вдалося додати книгу в чергу
```

---

### Remove error

Якщо книгу не вдалося прибрати з черги:

* Book Details UI повертається до попереднього стану;
* книга залишається позначеною як така, що є в черзі;
* користувач бачить error message.

Error message:

```text
Не вдалося прибрати книгу з черги
```

---
