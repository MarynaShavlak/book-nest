# Duplicate Prevention

## Role

Defines how the action prevents the same book from being added twice to the same list.

## Source coverage

`add-to-custom-lists.md` section 13

## Content

## 13. Duplicate prevention

Одна книга не може бути додана в один і той самий список двічі.

Rules:

* якщо книга вже є у списку, checkbox відкривається checked;
* повторний submit не створює дубль;
* якщо користувач вибирає список, де книга вже є, система не створює другий запис;
* якщо користувач знімає checked, книга прибирається з цього списку після submit.

Example:

```text
Книга вже є у списку “Улюблене фентезі”.

Користувач відкриває modal.
Список “Улюблене фентезі” уже checked.

Користувач натискає “Зберегти” без змін.
Дубль не створюється.
```

---
