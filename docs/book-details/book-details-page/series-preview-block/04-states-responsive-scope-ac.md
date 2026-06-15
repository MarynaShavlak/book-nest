# Series Preview Block — States, Responsive Behavior, Scope and Acceptance Criteria

> Source: book-details-page.md lines 1231-1385

---

#### 7.4.15. Series not found state

Якщо книга має `seriesId`, але серія не знайдена, потрібно показати safe state.

Possible reasons:

* серія була видалена;
* relation залишився некоректним;
* сталася помилка синхронізації.

UI text:

```text
Серію не знайдено
```

Helper text:

```text
Книга має зв’язок із серією, але цю серію не вдалося знайти.
```

Actions:

```text
Редагувати книгу
```

Behavior:

* не показувати назву неіснуючої серії;
* не вести на неіснуючу Series Details Page;
* дозволити користувачу виправити relation через Edit Book Form.

---

#### 7.4.16. Deleted series behavior

Якщо серія була видалена через Delete Series flow:

* книга залишається в бібліотеці;
* `seriesId` у книги має бути очищений;
* `partNumber` має бути очищений;
* Series preview більше не показується.

Expected result:

```text
Книга стає standalone book.
```

Important:

```text
Book Details не має показувати Series preview для видаленої серії.
```

---

#### 7.4.17. Loading state

Поки дані серії завантажуються, показати compact loading state.

Example:

```text
Завантажуємо серію...
```

Recommended UI:

* skeleton card;
* disabled action;
* не показувати старі або неповні дані як актуальні.

---

#### 7.4.18. Error state

Якщо дані серії не вдалося завантажити:

```text
Не вдалося завантажити інформацію про серію
```

Action:

```text
Спробувати ще раз
```

Fallback:

* Book Details має залишатися доступною;
* помилка series preview не має ламати всю сторінку книги.

---

#### 7.4.19. Responsive behavior

На desktop:

* Series preview показується в right sidebar після Statuses;
* блок має бути компактним;
* не дублює повну Series Details Page.

На mobile:

* Series preview переходить у загальний потік блоків;
* рекомендовано показувати після Statuses або після Reading progress;
* кнопка **Переглянути серію** має бути достатньо помітною.

---

#### 7.4.20. What should not be here

У Series preview не потрібно додавати:

* повний список книг серії;
* повний Reading Order Block;
* повну статистику серії;
* редагування полів серії;
* створення нової серії;
* додавання нових книг у серію;
* drag-and-drop порядок книг;
* рекомендації схожих серій;
* нотатки по серії;
* цитати по серії;
* персонажів серії.

Ці дані мають бути на Series Details Page або в окремих feature docs.

---

#### 7.4.21. Acceptance Criteria

* Series preview показується тільки якщо книга є частиною серії.
* Для solo books Series preview не показується.
* Користувач бачить назву серії.
* Користувач бачить номер частини книги в серії.
* Якщо `totalBooksCount` доступний, користувач бачить формат “Книга N з M”.
* Користувач бачить статус серії.
* Статус серії не плутається з user reading progress.
* Користувач бачить короткий прогрес по серії, якщо дані доступні.
* Користувач може перейти на Series Details Page.
* Action **Переглянути серію** веде на `/series/:seriesId`.
* Якщо `partNumber` відсутній, користувач бачить warning.
* Якщо серія не знайдена, користувач бачить safe error state.
* Якщо серія була видалена, Series preview не показується.
* Помилка завантаження серії не ламає всю Book Details Page.
* На mobile Series preview перебудовується в одну колонку.
* Series preview не дублює повну Series Details Page.

---
