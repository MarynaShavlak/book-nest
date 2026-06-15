# Advanced Filter Rules

> Source: `favorites-page.md §8`

## 8. Advanced filters

Advanced filters дозволяють точніше відфільтрувати улюблені книги.

Фільтри застосовуються тільки до книг, які вже відповідають базовій умові:

```text
isFavorite = true
```

---

### 8.1. Recommended filters

| Filter | Type | Logic |
|---|---|---|
| Статус читання | Multi-select | Фільтр за `readingStatus` |
| Статус володіння | Multi-select | Фільтр за `ownershipStatus` |
| Формат книги | Multi-select | Фільтр за `formats` |
| Жанри | Multi-select / Autocomplete | Фільтр за `genreIds` |
| Теги | Multi-select / Autocomplete | Фільтр за `tagIds` |
| Вікова категорія | Select / Multi-select | Фільтр за `ageCategory` |
| Мова книги | Select / Multi-select | Фільтр за `language` |
| Автор | Autocomplete | Фільтр за `authorId` |
| Видавництво | Autocomplete | Фільтр за `publisherId` |
| Тип книги | Select | Усі / Соло / Частина серії |
| Рейтинг | Range / Select | Фільтр за `rating` |
| Рік видання | Range | Фільтр за `publicationYear` |
| Кількість сторінок | Range | Фільтр за `pagesCount` |
| Наявність обкладинки | Select | Є обкладинка / Немає обкладинки |

---

### 8.2. Filters that should not be included

Не додавати:

| Filter | Reason |
|---|---|
| Улюблені / isFavorite | це базова умова сторінки |
| У черзі читання | для цього є сторінка **Черга читання** |
| Власні списки | для цього є сторінка **Списки** |
| Конкретна серія | для цього є сторінка **Серії** |
| Статус серії | це фільтр для сторінки серій |
| Статус доставки | це логіка сторінки **Книги в дорозі** |
| Прострочені позики | це логіка сторінки **Позичені книги** |
| Нотатки | окрема Notes feature |
| Цитати | окрема Quotes feature |
| Персонажі | окрема Characters feature |

---

### 8.3. Filter behavior

- filters працюють разом із search;
- filters працюють разом із quick filter;
- фільтри з різних груп комбінуються через `AND`;
- кілька значень всередині одного фільтра комбінуються через `OR`;
- після зміни filters loaded items скидаються на першу порцію;
- активні filters показуються в Active filters bar;
- filters зберігаються в URL query params.

---
