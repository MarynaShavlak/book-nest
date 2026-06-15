# Delete Series — UI Updates and Integrations

> Source: `delete-series.md`

## 9. All Series Page updates

Після видалення серії на All Series Page потрібно оновити:

* total series count;
* header summary cards;
* tabs count, якщо є;
* series grid;
* right sidebar blocks;
* empty state, якщо серій більше немає.

Якщо видалена серія була у блоці:

```text
Продовжити серію
```

або:

```text
Найближчі до завершення
```

потрібно переобрати іншу серію або показати empty state для блоку.

---


## 10. Series Details Page updates

Після видалення:

* поточна Series Details Page закривається через redirect;
* якщо користувач відкриє старий URL `/series/:seriesId`, потрібно показати not found state;
* breadcrumbs більше не повинні вести на видалену серію.

Not found text:

```text
Серію не знайдено
```

Action:

```text
Повернутися до серій
```

---


## 11. Book Details Page updates

Якщо користувач відкриє Book Details Page для книги, яка раніше була у видаленій серії:

* блок серії більше не показується;
* книга виглядає як standalone book;
* readingStatus, ownershipStatus, notes і rating книги залишаються без змін.

---


## 12. Reading Queue and Custom Lists

Delete Series не впливає на інші user collections.

### Reading Queue

Якщо книга з видаленої серії була в Reading Queue:

* вона залишається в Reading Queue;
* badge **У черзі** не зникає;
* книга просто більше не має series meta.

### Custom Lists

Якщо книга з видаленої серії була у Custom List:

* вона залишається у Custom List;
* порядок у Custom List не змінюється;
* custom list relation не видаляється.

### Favorites

Якщо книга була favorite:

* вона залишається favorite;
* Favorites Page не змінює книгу, окрім відсутності series meta.

---


## 13. Cover and media behavior

Якщо серія має custom cover, після видалення серії ця cover більше не використовується.

MVP behavior:

```text
Custom cover серії видаляється разом із серією.
```

Book covers не змінюються.

Important:

```text
Видалення series cover не видаляє обкладинки книг.
```

---
