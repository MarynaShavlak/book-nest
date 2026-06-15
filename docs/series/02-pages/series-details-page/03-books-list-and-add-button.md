# Series Details Page — Books List and Add Button

> Source: `series-details-page.md`

### 5.6. Books in Series List

Books in Series List — головний блок сторінки.

Книги мають бути відсортовані за номером частини:

```text
partNumber ASC
```

Для кожної книги потрібно показати:

| Element          | Description                                 |
| ---------------- | ------------------------------------------- |
| Part number      | номер книги в серії                         |
| Cover            | обкладинка книги або placeholder            |
| Title            | назва книги                                 |
| Original title   | оригінальна назва, якщо є                   |
| Author           | автор книги                                 |
| Publication date | дата або рік публікації, якщо є             |
| Reading status   | статус читання                              |
| Ownership status | статус володіння                            |
| Queue badge      | badge “У черзі”, якщо книга в reading queue |
| Progress         | прогрес, якщо книга читається               |
| Rating           | оцінка, якщо є                              |
| Actions          | переглянути книгу, menu actions             |

---


### 5.8. Add Book to This Series Button

На сторінці має бути кнопка:

```text
+ Додати книгу в цю серію
```

Placement:

* під списком книг;
* або в hero / right sidebar як secondary action.

MVP behavior:

```text
Кнопка відкриває Add Book to Series flow або Create Book flow, де ця серія вже вибрана автоматично.
```

Після збереження книги:

* книга додається до цієї серії;
* отримує номер частини;
* з’являється у списку книг серії;
* прогрес серії перераховується.

Important:

```text
Series Details Page тільки запускає Add Book to Series flow.
Повна логіка вибору існуючої книги, створення нової книги, part number і validation описується окремо.
```

---
