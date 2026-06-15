# Empty State

Empty state показується, якщо в користувача немає жодної книги в черзі.

When to show:

```text
queueCount = 0
search is empty
```

Title:

```text
Черга читання порожня
```

Description:

```text
Додайте книги, які хочете прочитати наступними, щоб завжди мати план читання.
```

Primary action:

```text
Додати книгу в чергу
```

Secondary action:

```text
Перейти до бібліотеки
```

Behavior:

* **Додати книгу в чергу** відкриває modal додавання книги;
* **Перейти до бібліотеки** веде на `/library`.

---
