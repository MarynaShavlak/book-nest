# Loan Status Actions — Overview, Entry Point and Modal Base

> Source: change-loan-status.md lines 1-129

---

# Feature: Loan Status Actions from Book Details

## 1. Purpose

Feature **Loan Status Actions from Book Details** дозволяє користувачу керувати позикою книги прямо зі сторінки **Book Details**.

Фіча покриває три основні сценарії:

* користувач взяв книгу у когось;
* користувач дав свою книгу комусь;
* книга була повернута.

Ця фіча змінює `ownershipStatus` книги та впливає на сторінку **Позичені книги**.

---

## 2. Ownership status logic

У цій фічі використовуються такі ownership statuses:

| Status                  | Meaning                          |
| ----------------------- | -------------------------------- |
| `borrowed_from_someone` | користувач взяв книгу у когось   |
| `lent_to_someone`       | користувач дав свою книгу комусь |
| `owned`                 | книга є у користувача            |
| `none`                  | книги немає у користувача        |

---

## 3. Entry point from Book Details

Дії доступні на сторінці **Book Details** у правому sidebar.

Recommended location:

```text
Right sidebar → Quick actions
```

Можливі actions:

| Action                 | When to show                                                 |
| ---------------------- | ------------------------------------------------------------ |
| Позначити як позичену  | якщо книга не має активного loan status                      |
| Видати комусь          | якщо книга не має активного loan status                      |
| Позначити як повернуту | якщо книга має `borrowed_from_someone` або `lent_to_someone` |

---

## 4. Loan status scenarios

Фіча має підтримувати два напрямки позики.

| Scenario                 | Meaning                                    | Result status           |
| ------------------------ | ------------------------------------------ | ----------------------- |
| Я взяла книгу у когось   | користувач позичив книгу в іншої людини    | `borrowed_from_someone` |
| Я дала свою книгу комусь | користувач передав свою книгу іншій людині | `lent_to_someone`       |

Ці сценарії мають бути чітко розділені в UI, бо вони мають різну логіку повернення.

---

## 5. Modal: Позначити як позичену

Modal відкривається після action:

```text
Позначити як позичену
```

або

```text
Видати комусь
```

Modal title:

```text
Позначити як позичену
```

Subtitle:

```text
Збережіть інформацію про позику книги
```

---

## 6. Book preview

У верхній частині modal потрібно показати короткий preview книги.

| Element | Source        |
| ------- | ------------- |
| Cover   | `coverUrl`    |
| Title   | `title`       |
| Author  | `author.name` |

Example:

```text
Четверте крило
Ребекка Яррос
```

---

## 7. Scenario switcher

У modal має бути перемикач сценарію.

Options:

```text
Я взяла книгу у когось
Я дала свою книгу комусь
```

Behavior:

* працює як single-select segmented control;
* за замовчуванням можна вибрати перший сценарій;
* при зміні сценарію змінюються labels полів і submit button;
* введені дані можна зберігати під час перемикання, але не відправляти неактуальні поля.

---
