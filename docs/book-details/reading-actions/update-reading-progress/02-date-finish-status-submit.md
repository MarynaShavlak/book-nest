# Update Reading Progress — Date, Finish Behavior, Status and Submit

> Source: update-reading-progress.md lines 187-284

---

## 10. Update date

Field:

```text
Дата оновлення
```

Default value:

```text
Сьогодні
```

Logic:

* поле optional;
* якщо користувач нічого не змінює, використовується поточна дата;
* дата не може бути в майбутньому;
* ця дата використовується для Reading Calendar, Statistics і Reading Goals.

Error message:

```text
Дата оновлення не може бути в майбутньому
```

---

## 11. Mark as finished

Checkbox:

```text
Позначити як прочитану
```

Behavior:

* якщо `currentPage = pagesCount`, checkbox стає доступним;
* якщо користувач ставить checkbox вручну, `currentPage` автоматично стає рівним `pagesCount`;
* progress percent стає `100%`;
* після submit книга отримує `readingStatus = finished`;
* `finishedAt` заповнюється датою оновлення.

State update:

```ts
readingStatus = 'finished'
currentPage = pagesCount
progressPercent = 100
finishedAt = updateDate
```

---

## 12. Reading status behavior

| Current reading status | Behavior                                                     |
| ---------------------- | ------------------------------------------------------------ |
| `not_started`          | якщо `currentPage > 0`, змінити на `reading`                 |
| `want_to_read`         | якщо `currentPage > 0`, змінити на `reading`                 |
| `reading`              | оновити прогрес                                              |
| `paused`               | оновити прогрес і запропонувати повернути статус у `reading` |
| `finished`             | не змінювати статус через цей flow, якщо книга вже завершена |
| `dnf`                  | не змінювати автоматично                                     |
| `rereading`            | оновити прогрес повторного читання                           |

Important:

* Update Reading Progress не замінює повне редагування статусів;
* ручна зміна статусів має виконуватися через окремий **Edit statuses flow**.

---

## 13. Submit behavior

Primary button:

```text
Зберегти прогрес
```

Після submit система має:

1. провалідувати поля;
2. оновити `currentPage`;
3. перерахувати `progressPercent`;
4. порахувати `readPagesForUpdate`;
5. зберегти `lastProgressUpdateAt`;
6. за потреби встановити `startedAt`;
7. за потреби змінити `readingStatus`;
8. за потреби встановити `finishedAt`;
9. оновити Book Details UI;
10. закрити modal після успіху.

---
