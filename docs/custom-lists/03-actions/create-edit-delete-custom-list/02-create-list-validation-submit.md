# Create List Validation and Submit

## Role

Defines validation, submit behavior, and create-list-from-add-book modal behavior.

## Source coverage

`create-edit-delete-custom-list.md` sections 8-10

## Content

## 8. Create list validation

### Назва списку

| Rule            | Message                                  |
| --------------- | ---------------------------------------- |
| Required        | Введіть назву списку                     |
| Min 2 symbols   | Назва має містити щонайменше 2 символи   |
| Max 80 symbols  | Назва не може бути довшою за 80 символів |
| No HTML         | Назва містить недопустимі символи        |
| Duplicate title | Список із такою назвою вже існує         |

### Опис

| Rule            | Message                                  |
| --------------- | ---------------------------------------- |
| Max 300 symbols | Опис не може бути довшим за 300 символів |
| No HTML         | Опис містить недопустимі символи         |

### Іконка / Колір

| Rule              | Message                        |
| ----------------- | ------------------------------ |
| Unsupported icon  | Обрана іконка не підтримується |
| Unsupported color | Обраний колір не підтримується |

---

---

## 9. Create list submit behavior

Після натискання **Створити список** система має:

1. перевірити форму;
2. створити новий список;
3. закрити modal;
4. додати новий список на сторінку **Власні списки**;
5. оновити count badge у header;
6. оновити sidebar statistics;
7. показати success message.

Success message:

```text id="pjxc2i"
Список створено
```

Якщо active sorting = **Останнє оновлення**, новий список має з’явитися на початку списку.

---

---

## 10. Create list from Add Book to List modal

Якщо користувач створює список із modal **Додати до списку**, поведінка має бути такою:

1. користувач натискає **+ Створити новий список**;
2. заповнює назву й optional опис;
3. список створюється;
4. новий список одразу з’являється в переліку доступних списків;
5. новий список автоматично стає selected.

Important:

```text id="em1qed"
Створення списку не означає автоматичне додавання книги до нього, якщо користувач не зберіг основну modal.
```

Recommended MVP behavior:

```text id="y2f5e2"
Створити список → список створюється одразу → стає selected → після “Зберегти” книга додається до нього.
```

---
