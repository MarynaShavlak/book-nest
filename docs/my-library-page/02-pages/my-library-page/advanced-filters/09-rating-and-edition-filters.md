### 7.9. Rating and edition filters

Фільтри за читацькою оцінкою та деталями видання.

| Filter               | Type           | Logic                                       |
| -------------------- | -------------- | ------------------------------------------- |
| Рейтинг              | Range / Select | `ratingFrom` / `ratingTo`                   |
| Рік видання          | Range          | `publicationYearFrom` / `publicationYearTo` |
| Кількість сторінок   | Range          | `pagesCountFrom` / `pagesCountTo`           |
| Наявність обкладинки | Select         | Усі / Є обкладинка / Немає обкладинки       |

Recommended options for cover filter:

| Value           | Label            |
| --------------- | ---------------- |
| `all`           | Усі              |
| `with_cover`    | Є обкладинка     |
| `without_cover` | Немає обкладинки |

Important:

* ISBN краще шукати через search input;
* перекладача й ілюстратора краще залишити для search або future advanced mode;
* присвяту не потрібно додавати як filter.

---
