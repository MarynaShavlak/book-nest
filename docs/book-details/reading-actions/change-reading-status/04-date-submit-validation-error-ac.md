# Change Reading Status — Date, Submit, Validation, Error and Acceptance Criteria

> Source: change-reading-status.md lines 293-416

---

## 14. Date behavior

У modal має бути дата зміни статусу.

Field:

```text
Дата зміни статусу
```

Default value:

```text
Сьогодні
```

Logic:

* дата не може бути в майбутньому;
* для `reading` може використовуватися як `startedAt`;
* для `finished` використовується як `finishedAt`;
* для `paused` використовується як `pausedAt`;
* для `dnf` використовується як `stoppedAt`.

---

## 15. Submit behavior

Primary button:

```text
Зберегти зміни
```

Після submit система має:

1. провалідувати вибраний статус;
2. провалідувати conditional fields;
3. оновити `readingStatus`;
4. оновити пов’язані поля прогресу;
5. оновити Book Details UI;
6. закрити modal після успішного збереження;
7. показати success message.

Success message:

```text
Статус читання оновлено
```

---

---

## 17. Validation

| Case                      | Message                                                     |
| ------------------------- | ----------------------------------------------------------- |
| Status is empty           | Оберіть статус читання                                      |
| Unknown status            | Обраний статус не знайдено                                  |
| Current page < 0          | Сторінка не може бути меншою за 0                           |
| Current page > pagesCount | Поточна сторінка не може бути більшою за кількість сторінок |
| Future date               | Дата не може бути в майбутньому                             |
| Rating invalid            | Оцінка має бути від 1 до 5                                  |

---

## 18. UI updates after success

Після успішної зміни статусу мають оновитися:

* Book hero section;
* Right sidebar;
* Reading progress block;
* status badges;
* progress bar;
* Dashboard;
* My Library;
* Reading Queue;
* Statistics;
* Reading Goals;
* Reading Calendar.

---

## 19. Error behavior

Якщо статус не вдалося оновити:

* modal залишається відкритою;
* введені значення не очищаються;
* показується error message;
* користувач може повторити submit.

Error message:

```text
Не вдалося оновити статус читання
```

---

---

## 21. Acceptance Criteria

* Користувач може відкрити modal **Змінити статус читання**.
* Modal показує обкладинку, назву книги, автора і поточний статус.
* Користувач може вибрати тільки один reading status.
* Поточний статус візуально виділений.
* Для `not_started` не показуються додаткові поля.
* Для `want_to_read` не показуються додаткові поля.
* Для `reading` показується блок прогресу.
* Для `paused` показується блок паузи.
* Для `finished` показується блок завершення.
* Для `dnf` показується блок покинутої книги.
* Якщо вибрано `finished`, прогрес стає `100%`.
* Якщо вибрано `finished`, заповнюється `finishedAt`.
* Якщо вибрано `reading`, книга стає активним читанням.
* Якщо вибрано `dnf`, книга не рахується як прочитана.
* Користувач не може ввести сторінку більшу за кількість сторінок.
* Після submit статус оновлюється на Book Details.
* Після submit modal закривається.
* Якщо сталася помилка, modal залишається відкритою і показує error message.
