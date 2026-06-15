# Validation Rules

## Role

Collects validation rules for creating/editing lists and adding books to lists.

## Source coverage

`create-edit-delete-custom-list.md` sections 8 and 14; `add-to-custom-lists.md` section 22; `custom-lists-page.md` section 19

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

## 14. Edit list validation

Для edit list використовуються ті самі правила, що і для create list.

Important:

* якщо користувач не змінив назву, duplicate title validation не має блокувати збереження;
* якщо користувач змінив назву на назву іншого існуючого списку, показати validation error.

Message:

```text id="is7bad"
Список із такою назвою вже існує
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

## 19. Create list validation

### Назва списку

Rules:

| Rule            | Message                                  |
| --------------- | ---------------------------------------- |
| required        | Введіть назву списку                     |
| min 2 symbols   | Назва має містити щонайменше 2 символи   |
| max 80 symbols  | Назва не може бути довшою за 80 символів |
| no HTML         | Назва містить недопустимі символи        |
| duplicate title | Список із такою назвою вже існує         |

### Опис

Rules:

| Rule            | Message                                  |
| --------------- | ---------------------------------------- |
| max 300 symbols | Опис не може бути довшим за 300 символів |
| no HTML         | Опис містить недопустимі символи         |

---
