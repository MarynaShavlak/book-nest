# Create New List Inside Modal

## Role

Defines inline create-list behavior from the Add to Custom List modal.

## Source coverage

`add-to-custom-lists.md` sections 10-12

## Content

## 10. Create new list inside modal

У modal має бути action:

```text
+ Створити новий список
```

Recommended location:

```text
нижче списку існуючих списків
```

або:

```text
у верхній частині блоку списків
```

Після натискання можна:

* відкрити вкладений small modal;
* або показати inline form всередині поточної modal.

Recommended for MVP:

```text
Inline form всередині modal
```

Reason:

Флоу простіший: користувач не губиться між кількома modal.

---

---

## 11. Create new list form

Fields:

| Field        | Type       | Required | Validation       |
| ------------ | ---------- | -------: | ---------------- |
| Назва списку | Text input |      Так | 2–80 символів    |
| Опис         | Textarea   |       Ні | max 300 символів |

Field labels:

```text
Назва списку
Опис
```

Placeholder examples:

```text
Наприклад: Осіннє читання
Короткий опис списку
```

Actions:

```text
Скасувати
Створити список
```

---

---

## 12. Create new list behavior

Після створення нового списку:

* список одразу з’являється в списку доступних custom lists;
* новий список автоматично стає selected;
* книга буде додана до нього після submit основної modal;
* якщо користувач закриває основну modal без збереження, поведінка залежить від технічного рішення.

Recommended behavior for Book Details:

```text
Новий список створюється одразу, бо книга вже існує.
```

Але якщо користувач створив список і потім закрив modal без збереження книги в список:

* список залишається створеним;
* книга не додається до нього, якщо користувач не натиснув **Зберегти**.

Alternative behavior:

```text
Створювати список тільки після submit основної modal.
```

Для MVP рекомендовано простіше рішення:

```text
Створити список → список створюється одразу → він selected → після “Зберегти” книга додається до нього.
```

---
