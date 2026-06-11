# Feature: Change Reading Status

## 1. Purpose

Feature **Change Reading Status** дозволяє користувачу змінити статус читання конкретної книги.

Ця фіча відповідає тільки за `readingStatus`.

Вона не змінює:

* статус володіння;
* формат книги;
* дані доставки;
* дані позики;
* жанри;
* теги;
* серію.

---

## 2. Entry points

Flow зміни статусу читання може відкриватися з таких місць:

| Entry point                  | UI                                      |
| ---------------------------- | --------------------------------------- |
| Book Details                 | action **Редагувати статуси** у sidebar |
| My Library book card actions | action **Змінити статус читання**       |
| Reading Queue                | action біля книги в черзі               |
| Dashboard                    | action біля книги, яку користувач читає |

---

## 3. UI type

Recommended UI:

```text
Modal
```

На mobile можна використовувати drawer або full-screen modal.

Modal title:

```text
Змінити статус читання
```

---

## 4. Modal content

Модалка має показувати короткий контекст книги.

### Book preview

| Element        | Source          |
| -------------- | --------------- |
| Cover          | `coverUrl`      |
| Title          | `title`         |
| Author         | `author.name`   |
| Current status | `readingStatus` |

Example:

```text
Четверте крило
Ребекка Яррос

Поточний статус: Читаю
```

---

## 5. Reading status options

Користувач може вибрати один статус читання.

| Value          | Label          | Description                              |
| -------------- | -------------- | ---------------------------------------- |
| `not_started`  | Не почато      | Книга додана, але читання ще не почалося |
| `want_to_read` | Хочу прочитати | Користувач хоче прочитати книгу          |
| `reading`      | Читаю          | Користувач зараз читає книгу             |
| `paused`       | На паузі       | Користувач тимчасово відклав читання     |
| `finished`     | Прочитано      | Книга прочитана                          |
| `dnf`          | Покинуто       | Користувач вирішив не дочитувати книгу   |

`rereading` можна додати пізніше, якщо буде окрема логіка повторного читання.

---

## 6. Selection behavior

Статуси мають працювати як single-select radio group.

Logic:

* користувач може вибрати тільки один статус;
* поточний статус має бути виділений;
* якщо користувач вибрав той самий статус, кнопка **Зберегти зміни** може бути disabled;
* після вибору нового статусу може з’являтися conditional block.

---

## 7. Conditional blocks

Conditional block залежить від вибраного статусу.

| Selected status | Conditional block                                    |
| --------------- | ---------------------------------------------------- |
| `not_started`   | Не показувати додаткові поля                         |
| `want_to_read`  | Не показувати додаткові поля                         |
| `reading`       | Показати поле поточної сторінки                      |
| `paused`        | Показати поточну сторінку, дату паузи, optional note |
| `finished`      | Показати дату завершення і optional rating           |
| `dnf`           | Показати сторінку зупинки і optional reason          |

---

## 8. Status: not_started

Якщо користувач вибрав:

```text
Не почато
```

Logic:

* `readingStatus = not_started`;
* `currentPage` можна скинути до `0`, якщо користувач підтвердить зміну;
* `progressPercent = 0`;
* книга не враховується як активне читання;
* книга не враховується як прочитана.

Додаткові поля не показуються.

---

## 9. Status: want_to_read

Якщо користувач вибрав:

```text
Хочу прочитати
```

Logic:

* `readingStatus = want_to_read`;
* книга показується як книга, яку користувач хоче прочитати;
* книга не додається автоматично в reading queue;
* додавання в чергу має бути окремою дією.

Додаткові поля не показуються.

---

## 10. Status: reading

Якщо користувач вибрав:

```text
Читаю
```

Показати conditional block:

```text
Прогрес читання
```

Fields:

| Field                | Type         | Required |
| -------------------- | ------------ | -------: |
| Поточна сторінка     | Number input |       Ні |
| Дата початку читання | Date picker  |       Ні |

Logic:

* `readingStatus = reading`;
* якщо `startedAt` ще немає, можна встановити дату початку як поточну дату;
* якщо користувач вводить поточну сторінку, система рахує `progressPercent`;
* книга з’являється в активному читанні.

Validation:

* поточна сторінка не може бути меншою за `0`;
* поточна сторінка не може бути більшою за `pagesCount`.

---

## 11. Status: paused

Якщо користувач вибрав:

```text
На паузі
```

Показати conditional block:

```text
Пауза в читанні
```

Fields:

| Field            | Type         | Required |
| ---------------- | ------------ | -------: |
| Поточна сторінка | Number input |       Ні |
| Дата паузи       | Date picker  |       Ні |
| Нотатка          | Textarea     |       Ні |

Logic:

* `readingStatus = paused`;
* поточний прогрес зберігається;
* книга не вважається активним читанням;
* книгу можна пізніше повернути в статус `reading`.

---

## 12. Status: finished

Якщо користувач вибрав:

```text
Прочитано
```

Показати conditional block:

```text
Завершення читання
```

Fields:

| Field           | Type        | Required |
| --------------- | ----------- | -------: |
| Дата завершення | Date picker |       Ні |
| Оцінка          | Rating      |       Ні |

Logic:

* `readingStatus = finished`;
* `currentPage = pagesCount`, якщо `pagesCount` вказано;
* `progressPercent = 100`;
* `finishedAt` = дата завершення або поточна дата;
* книга враховується в статистиці, reading goals і reading calendar.

Important:

* для статусу `finished` не потрібно вручну вводити поточну сторінку;
* прогрес має стати `100%` автоматично.

---

## 13. Status: dnf

Якщо користувач вибрав:

```text
Покинуто
```

Показати conditional block:

```text
Покинуто
```

Fields:

| Field                   | Type         | Required |
| ----------------------- | ------------ | -------: |
| Сторінка, де зупинились | Number input |       Ні |
| Дата припинення         | Date picker  |       Ні |
| Причина                 | Textarea     |       Ні |

Logic:

* `readingStatus = dnf`;
* книга не рахується як прочитана;
* поточний прогрес можна зберегти;
* причина є optional.

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
