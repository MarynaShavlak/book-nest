# Page Actions — Update Progress and Edit Statuses

> Source: book-details-page.md lines 1831-1913

---

### 9.5. Update reading progress

Action:

```text
Оновити прогрес
```

UI locations:

* Hero section;
* Reading progress block.

Behavior:

* action відкриває modal або drawer оновлення прогресу;
* дані не змінюються без підтвердження користувача.

Modal fields:

| Field                  | Description                                                 |
| ---------------------- | ----------------------------------------------------------- |
| Поточна сторінка       | Нова поточна сторінка                                       |
| Дата оновлення         | Коли прогрес оновлено                                       |
| Позначити як прочитану | Optional checkbox, якщо поточна сторінка дорівнює загальній |

Logic:

* після збереження оновлюється `currentPage`;
* автоматично перераховується `progressPercent`;
* оновлюється `lastProgressUpdateAt`;
* якщо `currentPage = pagesCount`, можна запропонувати змінити статус на `finished`;
* hero section, Reading progress block і sidebar мають оновитися.

---

### 9.6. Edit statuses

Action:

```text
Редагувати статуси
```

UI location:

```text
Right sidebar → Statuses
```

Behavior:

* відкриває flow редагування статусів книги;
* це може бути modal, drawer або перехід у edit book form;
* для швидкого UX рекомендовано modal / drawer.

Editable fields:

| Field            | Options                                                                                  |
| ---------------- | ---------------------------------------------------------------------------------------- |
| Reading status   | `not_started`, `want_to_read`, `reading`, `paused`, `finished`, `dnf`, `rereading`       |
| Ownership status | `none`, `want_to_buy`, `in_transit`, `owned`, `borrowed_from_someone`, `lent_to_someone` |
| Formats          | `paper`, `ebook`, `audiobook`                                                            |

Logic:

* після зміни статусів оновлюється Book Details;
* якщо новий статус потребує додаткових даних, відкривається відповідний conditional flow;
* `ebook` і `audiobook` не мають бути ownership status, вони належать до `formats`.

Examples:

| Selected status         | Behavior                                           |
| ----------------------- | -------------------------------------------------- |
| `reading`               | книга з’являється як активне читання               |
| `finished`              | прогрес може стати `100%`                          |
| `want_to_buy`           | книга з’являється на сторінці **Книги до покупки** |
| `in_transit`            | відкривається flow інформації про доставку         |
| `borrowed_from_someone` | відкривається flow позики у когось                 |
| `lent_to_someone`       | відкривається flow видачі книги комусь             |

---
