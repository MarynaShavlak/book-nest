# Change Reading Status — Finished and DNF

> Source: change-reading-status.md lines 226-292

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
