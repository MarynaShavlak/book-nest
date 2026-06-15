# Remove / Unlink — Overview, Terminology, Entry Points

> Source: `remove-unlink-book-from-series.md`

## 1. Purpose

Feature **Remove / Unlink Book from Series** дозволяє користувачу прибрати книгу з конкретної книжкової серії в BookNest, не видаляючи саму книгу з бібліотеки.

Фіча потрібна для того, щоб користувач міг:

* виправити помилково додану книгу;
* відв’язати книгу від неправильної серії;
* прибрати книгу зі списку книг серії;
* прибрати missing book із серії;
* оновити правильний порядок книг у серії;
* перерахувати прогрес серії після зміни списку книг;
* залишити саму книгу в бібліотеці без втрати її даних.

Important:

```text
Remove / Unlink Book from Series не видаляє книгу з бібліотеки.
Книга тільки втрачає зв’язок із серією.
```

---


## 2. Main idea

У BookNest книга може бути прив’язана до серії через relation:

```text
book → series
```

Feature **Remove / Unlink Book from Series** прибирає цей зв’язок.

Після відв’язування:

* книга залишається в бібліотеці;
* readingStatus книги не змінюється;
* ownershipStatus книги не змінюється;
* rating книги не змінюється;
* notes / quotes / characters книги не видаляються;
* книга зникає зі списку книг цієї серії;
* прогрес серії перераховується;
* блок **Наступна книга** оновлюється;
* Series Details Page оновлюється;
* All Series Page card оновлюється.

---


## 3. Terminology

У документації можна використовувати два близькі терміни:

```text
Remove from series
Unlink from series
```

Recommended user-facing label:

```text
Відв’язати від серії
```

або коротше:

```text
Прибрати з серії
```

Щоб не плутати з видаленням книги з бібліотеки, краще не використовувати label:

```text
Видалити книгу
```

Recommended labels:

| Action                      | Meaning                              |
| --------------------------- | ------------------------------------ |
| Відв’язати від серії        | прибрати зв’язок книги з серією      |
| Прибрати з серії            | прибрати книгу зі списку серії       |
| Видалити книгу з бібліотеки | повністю видалити книгу з бібліотеки |

---


## 4. Entry points

Користувач може відв’язати книгу від серії з кількох місць.

| Entry point                            | Behavior                                       |
| -------------------------------------- | ---------------------------------------------- |
| Series Details Page → book row menu    | відкриває confirmation для відв’язування книги |
| Series Details Page → missing book row | дозволяє прибрати missing book із серії        |
| Book Details Page → Series block       | дозволяє відв’язати поточну книгу від серії    |
| Edit Book Form → Series field          | дозволяє очистити series relation              |
| More menu на book card у серії         | може містити action “Прибрати з серії”         |

Основний entry point для MVP:

```text
Series Details Page → Book row menu → Прибрати з серії
```

---
