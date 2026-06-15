# Change Reading Status — Not Started and Want To Read

> Source: change-reading-status.md lines 121-159

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
