# All Series Page — Search and Filters

> Source: `all-series-page.md`

### 5.5. Search Block

Search дозволяє швидко знайти потрібну серію.

Placeholder:

```text
Пошук серії, автора...
```

Search має працювати за:

* назвою серії;
* автором;
* назвою книги в серії.

Optional для MVP:

* жанрами;
* тегами.

---


### 5.6. Filters Block

У MVP достатньо двох основних фільтрів:

```text
Статус серії
Стан читання
```

#### Series status filter

Options:

| Value     | Label       |
| --------- | ----------- |
| all       | Усі         |
| completed | Завершена   |
| ongoing   | Ще виходить |
| unknown   | Невідомо    |

Цей фільтр відповідає за статус самої серії.

#### Reading state filter

Options:

| Value             | Label              |
| ----------------- | ------------------ |
| all               | Усі                |
| not_started       | Не почато          |
| in_progress       | У процесі          |
| completed_by_user | Прочитано повністю |
| empty             | Без книг           |

Стан **Без книг** потрібен, тому що в MVP користувач може створити серію вручну без доданих книг.

---
