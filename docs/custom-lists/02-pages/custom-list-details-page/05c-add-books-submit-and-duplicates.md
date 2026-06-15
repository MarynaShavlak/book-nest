# Add Books Submit and Duplicates

## Role

Defines submit logic and duplicate prevention.

## Source coverage

`custom-list-details-page.md` sections 29-30

## Content

## 29. Add books submit logic

Після натискання **Додати до списку**:

1. перевірити, що список належить поточному користувачу;
2. перевірити, що вибрані книги належать поточному користувачу;
3. перевірити, що вибрані книги ще не додані до цього списку;
4. додати вибрані книги до списку;
5. призначити новим книгам позиції в кінці списку;
6. не створювати дублікати;
7. оновити список книг на сторінці;
8. оновити count badge;
9. оновити `updatedAt` списку;
10. закрити modal;
11. показати success message.

Success message if one book was added:

```text
Книгу додано до списку
```

Success message if several books were added:

```text
Книги додано до списку
```

Example:

```text
2 книги додано до списку
```

---

---

## 30. Duplicate prevention

Одна книга не може бути додана в один і той самий список двічі.

Behavior:

* якщо книга вже є в списку, вона показується як **Уже в списку**;
* її не можна повторно вибрати;
* submit не створює дубль;
* books count не збільшується через дубль.

Important:

```text
Одна книга може бути в кількох різних списках, але не може дублюватися в одному списку.
```

---
