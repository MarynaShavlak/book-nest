# Page Actions — Reading Queue

> Source: book-details-page.md lines 1914-1969

---

### 9.7. Add to reading queue

Action:

```text
Додати в чергу читання
```

UI location:

```text
Right sidebar → Quick actions
```

Behavior:

* якщо книги ще немає в reading queue, action додає її в чергу;
* книгу можна додати в кінець черги за замовчуванням;
* якщо потрібен вибір позиції, відкривається modal.

Default logic:

```text
Add book to the end of reading queue
```

After success:

* показати success message;
* action може змінитися на **Прибрати з черги читання**;
* книга з’являється на сторінці **Черга читання**.

---

### 9.8. Remove from reading queue

Action:

```text
Прибрати з черги читання
```

When to show:

```text
book is already in reading queue
```

Behavior:

* action прибирає книгу з reading queue;
* сама книга не видаляється з бібліотеки;
* після успіху action знову змінюється на **Додати в чергу читання**.

---
