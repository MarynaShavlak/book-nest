# Basic Ownership Actions — UI Updates, Important Behavior, Error and Acceptance Criteria

> Source: change-ownwership-status.md lines 236-317

---

## 10. UI updates after action

Після зміни ownership status мають оновитися:

* Book Details hero section;
* Right sidebar;
* ownership status badge;
* Quick actions;
* My Library card;
* summary cards, якщо вони враховують ownership statuses.

### After `none → owned`

* badge змінюється на **Маю**;
* action **Позначити як “Маю”** зникає;
* з’являється action **Прибрати статус “Маю”**.

### After `owned → none`

* badge змінюється на **Немає**;
* action **Прибрати статус “Маю”** зникає;
* з’являється action **Позначити як “Маю”**.

---

## 11. Important behavior

Basic Ownership Actions не мають змінювати:

| Field             | Behavior      |
| ----------------- | ------------- |
| `readingStatus`   | не змінюється |
| `formats`         | не змінюється |
| `currentPage`     | не змінюється |
| `progressPercent` | не змінюється |
| `isFavorite`      | не змінюється |
| `genres` / `tags` | не змінюються |
| `series`          | не змінюється |

Example:

```text
Книга може мати:
ownershipStatus = none
formats = [paper]
readingStatus = want_to_read
```

Тобто користувач може хотіти прочитати паперову книгу, але фізично ще не мати її.

---

## 12. Error behavior

Якщо дію не вдалося виконати:

* modal залишається відкритою;
* Book Details UI не оновлюється;
* користувач бачить error message;
* користувач може повторити дію.

Error message:

```text
Не вдалося оновити статус володіння
```

---

## 13. Acceptance Criteria

* Користувач може позначити книгу як **Маю**, якщо `ownershipStatus = none`.
* Після підтвердження книга отримує `ownershipStatus = owned`.
* Користувач може прибрати статус **Маю**, якщо `ownershipStatus = owned`.
* При прибиранні статусу **Маю** відкривається confirmation modal.
* Після підтвердження книга отримує `ownershipStatus = none`.
* Книга не видаляється з бібліотеки після зміни ownership status.
* Reading status не змінюється.
* Format не змінюється.
* Book Details оновлює ownership badge після зміни статусу.
* Quick actions оновлюються відповідно до нового статусу.
* Якщо сталася помилка, користувач бачить error message.
