# UI Updates After Submit

## Role

Defines Book Details UI updates after adding/removing list memberships.

## Source coverage

`add-to-custom-lists.md` sections 18-19

## Content

## 18. UI updates after submit

Після успішного submit мають оновитися:

* Book Details;
* Right sidebar;
* Quick actions;
* списки, у яких книга була додана або прибрана;
* Custom Lists page, якщо там показується books count;
* Custom List Details page, якщо вона відкрита;
* My Library card, якщо там показується список/індикатор списків.

На Book Details можна показувати короткий блок:

```text
У списках:
Осіннє читання, Улюблене фентезі
```

або не показувати цей блок у MVP, якщо сторінка не має для нього місця.

Minimum required after submit:

```text
Після повторного відкриття modal мають бути вибрані актуальні списки.
```

---

---

## 19. Suggested Book Details UI after adding to lists

Якщо книга належить до списків, можна показати lightweight indicator у sidebar.

Example:

```text
У списках · 3
```

або:

```text
У списках:
Осіннє читання
Улюблене фентезі
```

Recommended for MVP:

```text
У списках · N
```

Reason:

Не перевантажує Book Details і дає зрозуміти, що книга вже організована в списки.

---
