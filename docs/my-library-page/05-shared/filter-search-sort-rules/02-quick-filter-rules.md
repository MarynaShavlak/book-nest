# Quick filter rules

> Джерело: розділ `6.1–6.5` зі старого `my-library-page.md`.

### 6.1. Recommended quick filters

| Chip           | Query logic                                                 |
| -------------- |-------------------------------------------------------------|
| Усі            | без quick filter                                            |
| Читаю          | `readingStatus=reading` + `readingStatus=rereading`         |
| Хочу прочитати | `readingStatus=want_to_read`                                |
| Прочитано      | `readingStatus=finished`                                    |
| Улюблені       | `isFavorite=true`                                           |
| До покупки     | `ownershipStatus=want_to_buy`                               |
| В дорозі       | `ownershipStatus=in_transit`                                |
| Позичені       | `ownershipStatus=borrowed_from_someone` + `lent_to_someone` |
| Серії          | `seriesState=series_part`                                   |
| Соло           | `seriesState=solo`                                          |

---

### 6.2. UI behavior

* quick filters показуються як horizontal chips;
* за замовчуванням активний chip **Усі**;
* одночасно може бути активний тільки один quick filter;
* активний chip має бути візуально виділений;
* на mobile chips можуть скролитися горизонтально;
* якщо quick filters не поміщаються в один рядок, вони не мають ламати layout.

---

### 6.3. Filter behavior

* при кліку на chip список книг одразу оновлюється;
* quick filter комбінується з активним пошуком;
* quick filter може комбінуватися з advanced filters;
* якщо користувач обирає інший quick filter, попередній quick filter замінюється;
* chip **Усі** прибирає тільки quick filter;
* дія **Очистити все** очищає quick filter, search і advanced filters.

---

### 6.5. What not to include as quick filters

Не варто додавати в quick filters жанри або аудиторні категорії типу:

```text
Fantasy
Young Adult
Romance
```

Їх краще показувати в **Advanced filters** або в окремому блоці популярних жанрів.

---
