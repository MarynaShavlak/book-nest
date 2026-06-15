# Delete Series — Overview, Entry Points, Label

> Source: `delete-series.md`

## 1. Purpose

Feature **Delete Series** дозволяє користувачу видалити книжкову серію з BookNest.

Фіча потрібна для того, щоб користувач міг:

* прибрати серію, створену помилково;
* видалити дубль серії;
* очистити список серій від непотрібних записів;
* прибрати порожню серію;
* видалити серію, але не втратити книги з бібліотеки.

Important:

```text
Delete Series не видаляє книги з бібліотеки.
Delete Series видаляє тільки саму серію і зв’язок книг із цією серією.
```

---


## 2. Main idea

У BookNest серія — це окрема сутність, яка групує книги.

Коли користувач видаляє серію:

* серія зникає з All Series Page;
* Series Details Page для цієї серії більше недоступна;
* книги, які були в серії, залишаються в бібліотеці;
* книги більше не мають зв’язку з цією серією;
* partNumber книг у межах цієї серії очищується;
* readingStatus книг не змінюється;
* ownershipStatus книг не змінюється;
* notes, quotes, characters, ratings книг не видаляються;
* книги залишаються в Reading Queue, Custom Lists, Favorites, якщо вони там були.

---


## 3. Entry points

Користувач може запустити Delete Series flow з місць, де він уже працює з конкретною серією.

| Entry point                                 | Behavior                                  |
| ------------------------------------------- | ----------------------------------------- |
| Series Details Page → More menu             | відкриває Delete Series confirmation      |
| Series Details Page → Right sidebar actions | може містити secondary/destructive action |
| Edit Series flow → More menu                | може містити action “Видалити серію”      |

Основний entry point для MVP:

```text
Series Details Page → More menu → Видалити серію
```

Delete action не потрібно показувати як основну кнопку в hero section.

Recommended placement:

```text
More menu / secondary actions / danger zone
```

---


## 4. User-facing action label

Recommended label:

```text
Видалити серію
```

Не використовувати label:

```text
Видалити книги
```

Бо книги не видаляються з бібліотеки.

У confirmation modal треба явно пояснити:

```text
Книги залишаться у вашій бібліотеці.
```

---
