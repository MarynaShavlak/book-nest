# Loading, Error, Validation, Accessibility

## Role

Defines action loading, error, validation, and accessibility rules.

## Source coverage

`add-to-custom-lists.md` sections 20-23

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

---

## 22. Validation

### Existing lists selection

| Rule                                    | Message                    |
| --------------------------------------- | -------------------------- |
| unknown list is not allowed             | Обраний список недоступний |
| duplicate list selection is not allowed | Список уже вибраний        |
| list must belong to current user        | Обраний список недоступний |

### Create new list

| Field        | Rule            | Message                                  |
| ------------ | --------------- | ---------------------------------------- |
| Назва списку | required        | Введіть назву списку                     |
| Назва списку | min 2 symbols   | Назва має містити щонайменше 2 символи   |
| Назва списку | max 80 symbols  | Назва не може бути довшою за 80 символів |
| Назва списку | no HTML         | Назва містить недопустимі символи        |
| Опис         | max 300 symbols | Опис не може бути довшим за 300 символів |
| Опис         | no HTML         | Опис містить недопустимі символи         |

Recommended duplicate list name behavior:

* якщо список з такою назвою вже існує, показати warning;
* не створювати другий список з однаковою назвою для одного користувача.

Message:

```text
Список із такою назвою вже існує
```

---

---

## 23. Accessibility

Modal має бути доступною для keyboard і screen reader.

Requirements:

* modal має мати focus trap;
* після закриття focus повертається на кнопку **Додати до списку**;
* checkboxes мають бути focusable;
* submit має працювати через Enter, якщо форма валідна;
* create list form має мати labels для полів;
* кнопки мають мати зрозумілі aria-labels.

Recommended aria labels:

```text
Додати книгу до списків
Створити новий список
Обрати список
Прибрати книгу зі списку
```

---
