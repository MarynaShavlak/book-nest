# Book Count and Cover Preview Rules

## Role

Defines how list card counts, badges, and cover previews should work.

## Source coverage

`custom-lists-page.md` sections 13-15; `custom-list-details-page.md` section 9

## Content

## 13. List card structure

Картка списку має показувати ключову інформацію про список.

Required elements:

| Element          | Required | Description                      |
| ---------------- | -------: | -------------------------------- |
| Title            |      Так | Назва списку                     |
| Description      |       Ні | Короткий опис списку             |
| Books count      |      Так | Кількість книг у списку          |
| Cover preview    |      Так | Превʼю обкладинок книг           |
| Updated date     |      Так | Коли список востаннє оновлювався |
| Open list button |      Так | Перехід у деталі списку          |
| Edit action      |      Так | Редагування списку               |
| More actions     |      Так | Додаткове меню                   |

Optional elements:

| Element                 |      MVP |
| ----------------------- | -------: |
| Icon                    | Optional |
| Color accent            | Optional |
| Access badge            |       Ні |
| Public / private status |       Ні |

---

---

## 14. Cover preview

Картка списку має показувати кілька обкладинок книг зі списку.

Recommended behavior:

* показувати до 4 обкладинок;
* якщо книг менше, показати стільки, скільки є;
* якщо список порожній, показати placeholder;
* якщо в книги немає обкладинки, показати book placeholder.

Example:

```text
[cover] [cover] [cover] [cover]
```

Cover preview допомагає швидко зрозуміти, які книги всередині списку.

---

---

## 15. Empty list card behavior

Якщо список не містить книг:

* картка все одно показується;
* books count = `0 книг`;
* замість обкладинок показується placeholder;
* кнопка **Відкрити список** залишається доступною.

Empty preview text:

```text
У списку ще немає книг
```

---

---

## 9. Count badge

Count badge показує кількість книг у списку.

Example:

```text
15 книг
```

Count має оновлюватися після:

* додавання книг;
* прибирання книги зі списку;
* undo після прибирання книги;
* видалення книги з бібліотеки, якщо вона була в цьому списку.

---
