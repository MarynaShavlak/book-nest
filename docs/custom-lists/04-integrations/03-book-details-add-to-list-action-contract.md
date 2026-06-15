# Book Details Add to List Action Contract

## Role

Defines the Book Details action location, label, and availability.

## Source coverage

`add-to-custom-lists.md` sections 3-4

## Content

## 3. Entry point from Book Details

Дія доступна на сторінці **Book Details**.

Recommended location:

```text
Book Details → Right sidebar → Quick actions
```

Action label:

```text
Додати до списку
```

Alternative label, якщо потрібно підкреслити можливість кількох списків:

```text
Додати до списків
```

Recommended label for UI:

```text
Додати до списку
```

Reason:

Коротший label краще виглядає в quick actions, а в modal уже можна пояснити, що користувач може вибрати кілька списків.

---

---

## 4. When action is available

Action **Додати до списку** доступна, якщо:

* книга належить поточному користувачу;
* книга не видалена;
* користувач авторизований.

Action не потрібно блокувати через:

* reading status;
* ownership status;
* format;
* favorite status;
* наявність книги в черзі читання.

Користувач може додати до списку будь-яку свою активну книгу.

---
