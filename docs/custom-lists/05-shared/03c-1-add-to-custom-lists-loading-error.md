# Add to Custom Lists Loading and Error

## Role

Loading and error behavior for Add Book to Custom Lists action.

## Source coverage

`add-to-custom-lists.md` sections 20-21

## Content

## 20. Loading behavior

### Loading lists

Під час завантаження списків у modal показати:

* skeleton list;
* disabled submit button;
* disabled create new list action або local loading state.

### Submit loading

Після натискання **Зберегти**:

* submit button disabled;
* cancel button може залишатися active або теж disabled;
* повторний submit блокується;
* modal не закривається до успішного завершення.

Button text:

```text
Збереження...
```

### Create list loading

Після натискання **Створити список**:

* button disabled;
* повторний submit блокується;
* поле назви не очищається до успішного створення.

Button text:

```text
Створення...
```

---

---

## 21. Error behavior

### Lists loading error

Якщо списки не вдалося завантажити:

Title:

```text
Не вдалося завантажити списки
```

Description:

```text
Спробуйте повторити запит.
```

Action:

```text
Спробувати ще раз
```

### Submit error

Якщо не вдалося оновити списки книги:

* modal залишається відкритою;
* вибрані значення не очищуються;
* UI Book Details не оновлюється;
* користувач бачить error message.

Error message:

```text
Не вдалося оновити списки книги
```

### Create list error

Якщо не вдалося створити список:

* inline form залишається відкритою;
* введені значення не очищуються;
* користувач бачить error message.

Error message:

```text
Не вдалося створити список
```

---
