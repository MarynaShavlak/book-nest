# Filter and Sort Rules

## Filters

Filters use active loans only.

Core filters:

```text
all
borrowed_from_someone
lent_to_someone
return_soon
overdue
no_return_date
has_reminder
without_reminder
```

---

## Filter logic

| Filter | Logic |
| ------ | ----- |
| `all` | all active loans |
| `borrowed_from_someone` | `type = borrowed_from_someone` |
| `lent_to_someone` | `type = lent_to_someone` |
| `return_soon` | `loanUiStatus = return_soon` |
| `overdue` | `loanUiStatus = overdue` |
| `no_return_date` | `loanUiStatus = no_return_date` |
| `has_reminder` | `reminderEnabled = true` |
| `without_reminder` | `reminderEnabled = false` |

---

## Sorting

Default:

```text
expectedReturnDate ASC
```

Rules:

* overdue first if selected;
* no return date last;
* if same return date, sort by loanDate DESC.

---

## Search fields

Search by:

* book title;
* original title;
* author;
* person name;
* contact;
* note.
