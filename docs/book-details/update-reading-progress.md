# Feature: Update Reading Progress

## 1. Purpose

Feature **Update Reading Progress** дозволяє користувачу оновити прогрес читання конкретної книги.

Користувач може вказати нову поточну сторінку, побачити новий відсоток прогресу, кількість прочитаних сторінок за це оновлення та за потреби позначити книгу як прочитану.

---

## 2. Entry points

Flow оновлення прогресу може відкриватися з таких місць:

| Entry point                         | UI                                      |
| ----------------------------------- | --------------------------------------- |
| Book Details hero section           | кнопка **Оновити прогрес**              |
| Book Details Reading progress block | кнопка **Оновити прогрес**              |
| My Library book card actions        | action **Оновити прогрес**              |
| Dashboard                           | action біля книги, яку користувач читає |

---

## 3. UI type

Recommended UI:

```text
Modal
```

На mobile можна використовувати drawer або full-screen modal.

Modal title:

```text
Оновити прогрес
```

---

## 4. Modal content

Модалка має показувати короткий контекст книги та поля для оновлення прогресу.

### 4.1. Book preview

У верхній частині modal показати:

| Element     | Source        |
| ----------- | ------------- |
| Cover       | `coverUrl`    |
| Title       | `title`       |
| Author      | `author.name` |
| Total pages | `pagesCount`  |

Example:

```text
Атомні звички
Джеймс Клір

Загалом сторінок: 320
```

---

## 5. Fields

| Field                     | Type             | Required | Description                               |
| ------------------------- | ---------------- | -------: | ----------------------------------------- |
| Поточний прогрес          | Read-only text   |       Ні | Останній збережений прогрес               |
| Поточна сторінка          | Number input     |      Так | Нова сторінка, на якій зараз користувач   |
| Progress bar              | Read-only        |       Ні | Новий прогрес у відсотках                 |
| Прочитано за це оновлення | Read-only number |       Ні | Різниця між новою і попередньою сторінкою |
| Дата оновлення            | Date picker      |       Ні | Дата, за яку фіксується прогрес           |
| Позначити як прочитану    | Checkbox         |       Ні | Завершує книгу                            |

---

## 6. Current progress

Перед полем введення потрібно показати останній збережений прогрес.

Example:

```text
Було: 120 з 320 стор. · 38%
```

Logic:

* значення береться з поточного `currentPage`;
* якщо прогресу ще немає, показати `0 з 320 стор. · 0%`;
* якщо `pagesCount` не вказано, показати тільки поточну сторінку або empty state.

---

## 7. Current page field

Field:

```text
Поточна сторінка
```

Example:

```text
144 / 320
```

Validation:

* required;
* тільки ціле число;
* не може бути менше `0`;
* не може бути більше `pagesCount`;
* не може бути менше попередньої збереженої сторінки в цьому flow.

Error messages:

```text
Введіть поточну сторінку
Сторінка не може бути меншою за 0
Поточна сторінка не може бути більшою за кількість сторінок
Поточна сторінка не може бути меншою за попередній прогрес
```

---

## 8. Progress percent

Progress percent рахується автоматично.

Formula:

```text
progressPercent = currentPage / pagesCount * 100
```

Rules:

* значення округлюється до цілого числа;
* не може бути менше `0`;
* не може бути більше `100`;
* якщо `currentPage = pagesCount`, progress percent має бути `100%`.

Example:

```text
currentPage = 144
pagesCount = 320
progressPercent = 45%
```

---

## 9. Read pages for this update

Поле **“Прочитано за це оновлення”** має бути автоматичним.

Formula:

```text
readPagesForUpdate = currentPage - previousPage
```

Example:

```text
Було: 120 стор.
Стало: 144 стор.

Прочитано за це оновлення: 24 стор.
```

Important:

* користувач не має вручну вводити це значення;
* значення перераховується після зміни поточної сторінки;
* якщо `currentPage = previousPage`, показати `0 стор.`;
* якщо `currentPage < previousPage`, показати validation error.

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

## 14. UI updates after success

Після успішного оновлення мають оновитися:

* progress bar у modal / Book Details;
* current page;
* progress percent;
* Reading progress block;
* Book hero section;
* Right sidebar;
* reading status badge, якщо статус змінився;
* Dashboard;
* Reading Calendar;
* Reading Goals;
* Statistics.

Success message:

```text
Прогрес оновлено
```

---

## 15. Loading behavior

Після натискання **Зберегти прогрес**:

* кнопка стає disabled;
* показується loading state;
* повторний submit блокується;
* modal не закривається до успішної відповіді API.

Button text:

```text
Збереження...
```

---

## 16. Error behavior

Якщо прогрес не вдалося оновити:

* modal залишається відкритою;
* введені значення не очищаються;
* користувач бачить error message;
* можна повторити submit.

Error message:

```text
Не вдалося оновити прогрес
```

---


## 18. Permissions

Backend має перевіряти:

* книга існує;
* книга належить поточному користувачу;
* книга не видалена;
* користувач має право оновлювати прогрес цієї книги.

Якщо книга не знайдена або видалена:

```text
404 Not Found
```

Якщо книга належить іншому користувачу:

```text
403 Forbidden
```

---

## 19. Acceptance Criteria

* Користувач може відкрити modal **Оновити прогрес**.
* Modal показує обкладинку, назву книги й автора.
* Modal показує загальну кількість сторінок.
* Modal показує попередній прогрес.
* Користувач може ввести нову поточну сторінку.
* Progress percent рахується автоматично.
* Поле **Прочитано за це оновлення** рахується автоматично.
* Користувач може вибрати дату оновлення.
* Дата оновлення не може бути в майбутньому.
* Поточна сторінка не може бути більшою за загальну кількість сторінок.
* Поточна сторінка не може бути меншою за попередній прогрес.
* Якщо книга дочитана, користувач може позначити її як прочитану.
* Якщо книгу позначено як прочитану, `readingStatus` стає `finished`.
* Після submit modal закривається.
* Після submit Book Details показує оновлений прогрес.
* Якщо сталася помилка, modal залишається відкритою і показує error message.
