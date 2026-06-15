# Borrowed Books Page: Right Sidebar

## Right sidebar

Right sidebar contains:

```text
Tips
Nearest returns
Recent activity
CTA block
```

---

## Tips block

Title:

```text
Поради для позичених книг
```

Content:

```text
Додавайте нотатки, щоб не забути важливе.
Ставте нагадування, щоб повертати вчасно.
Дбайте про книги, наче про свої власні.

Кожна книга — довіра між читачами.
```

---

## Nearest returns

Can be shown as:

* compact calendar;
* list of nearest return dates.

Show:

* current month;
* days with returns;
* overdue dates;
* upcoming dates.

MVP:

```text
Show compact list if calendar is too expensive.
```

Example:

```text
24.05 — Четверте крило
28.05 — Дім солі й туги
```

---

## Recent activity

Show last loan actions:

```text
Ви позичили книгу “Четверте крило” у Олени К.
Ви дали книгу “Дім солі й туги” Марії Ш.
Вам повернули книгу “Там, де співають раки”.
```

MVP:

```text
Can be built from latest loan updates if no activity system exists yet.
```

---

## CTA block

Text:

```text
Відстежуйте, у кого ваші книги і хто має повернути вам ваші історії.
```

Button:

```text
Додати книгу, яку дали комусь
```

Behavior:

* opens Mark as Loaned modal;
* preselects loan type `lent_to_someone`;
* user selects or creates a book depending on entry flow.
