# Borrowed Books Page: Tabs, Search, Filters and Sorting

## Tabs

Recommended tabs:

```text
Взяла у когось
Дала комусь
```

Tab logic:

| Tab | Filter |
| --- | ------ |
| Взяла у когось | `loan.type = borrowed_from_someone` |
| Дала комусь | `loan.type = lent_to_someone` |

Default tab:

```text
Взяла у когось
```

Alternative neutral labels:

```text
Взяті у когось
Видані комусь
```

---

## Search

Placeholder:

```text
Пошук по позичених книгах...
```

Search works by:

* book title;
* original title;
* author;
* personName;
* contact;
* note.

Search behavior:

* trim spaces;
* ignore case;
* search only active loans;
* empty search shows all current tab records.

---

## Filters

Recommended filters:

```text
Усі
Взяла у когось
Дала комусь
Повернути скоро
Прострочені
Без дати повернення
З нагадуванням
Без нагадування
```

Filter logic:

| Filter | Logic |
| ------ | ----- |
| Усі | all active loans |
| Взяла у когось | `type = borrowed_from_someone` |
| Дала комусь | `type = lent_to_someone` |
| Повернути скоро | `loanUiStatus = return_soon` |
| Прострочені | `loanUiStatus = overdue` |
| Без дати повернення | `loanUiStatus = no_return_date` |
| З нагадуванням | `reminderEnabled = true` |
| Без нагадування | `reminderEnabled = false` |

---

## Sorting

Options:

```text
За датою повернення
За датою позики
За назвою книги
За автором
За людиною
Спочатку прострочені
Спочатку найближчі повернення
```

Default sorting:

```text
За датою повернення
```

Rules:

* loans with expectedReturnDate go first;
* overdue loans can be pinned first if selected;
* loans without expectedReturnDate go after dated loans;
* if same date, sort by loanDate DESC.
