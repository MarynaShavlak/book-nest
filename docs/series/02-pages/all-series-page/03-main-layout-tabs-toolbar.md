# All Series Page — Main Layout, Tabs, Toolbar

> Source: `all-series-page.md`

### 4.4. Main content layout

Основна частина сторінки має містити:

* tabs;
* toolbar;
* series grid або list;
* empty states.

Recommended desktop layout:

```text
[Main content: 70–75% width] [Right sidebar: 25–30% width]
```

На mobile right sidebar має переходити під основний список.

---


### 4.5. Tabs

У MVP сторінка має дві основні вкладки:

```text
Усі серії
Недочитані
```

#### Tab: Усі серії

Показує всі серії користувача.

Сюди входять:

* серії з книгами;
* вручну створені серії без книг;
* початі серії;
* не початі серії;
* повністю прочитані серії;
* недочитані серії;
* серії, що ще виходять;
* серії з невідомим статусом.

#### Tab: Недочитані

Показує серії, які користувач уже почав, але ще не завершив.

Серія потрапляє у вкладку **Недочитані**, якщо:

* у серії є більше ніж одна книга або вказано `totalBooksCount > 1`;
* хоча б одна книга в серії має статус `finished` або `reading`;
* не всі книги серії мають статус `finished`.

Порожні серії не показуються у вкладці **Недочитані**.

---


### 4.6. Toolbar

Toolbar розміщується під tabs.

Toolbar містить:

* search input;
* filter by series status;
* filter by reading state;
* sorting;
* grid/list view switch.

Recommended order:

```text
[Search] [Series status filter] [Reading state filter] [Sorting] [Grid/List switch]
```

---


### 5.4. Tabs Block

Tabs дозволяють перемикатися між основними режимами перегляду.

Tabs у MVP:

| Tab        | Description                                             |
| ---------- | ------------------------------------------------------- |
| Усі серії  | показує всі серії користувача                           |
| Недочитані | показує серії, які користувач почав, але ще не завершив |

Для вкладки **Недочитані** можна показувати count badge.

Example:

```text
Недочитані 5
```

---
