# Series, authors, genres and statistics contract

## Purpose

My Library використовує author, publisher, genre, tag, series-related дані для пошуку, фільтрації, sidebar summaries і переходів.

## Contract

- Author/publisher/genre/tag filters читають нормалізовані дані книги.
- Top genres і top tags у sidebar рахуються з поточного user scope.
- Series progress не має повністю розраховуватися тут, якщо для цього є окремий Series module.
- Statistics/Dashboard можуть використовувати ті самі summary calculation rules.

## Related source sections

### 7.6. Classification filters

Фільтри з блоку **Класифікація**.

| Filter           | Type                        | Logic                                        |
| ---------------- | --------------------------- | -------------------------------------------- |
| Жанри            | Multi-select / Autocomplete | Показати книги з вибраними жанрами           |
| Теги             | Multi-select / Autocomplete | Показати книги з вибраними тегами            |
| Вікова категорія | Select / Multi-select       | Показати книги з вибраною віковою категорією |
| Мова книги       | Select / Multi-select       | Показати книги вибраною мовою                |

Age category options:

| Value             | Label        |
| ----------------- | ------------ |
| `not_specified`   | Не вказано   |
| `no_restrictions` | Без обмежень |
| `6_plus`          | 6+           |
| `12_plus`         | 12+          |
| `14_plus`         | 14+          |
| `16_plus`         | 16+          |
| `18_plus`         | 18+          |

Important:

* `Young Adult`, `New Adult`, `Adult` не мають бути віковими категоріями;
* такі значення краще використовувати як теги або окрему audience-фічу.

---

### 7.7. Author and publisher filters

| Filter      | Type         | Logic                                |
| ----------- | ------------ | ------------------------------------ |
| Автор       | Autocomplete | Показати книги вибраного автора      |
| Видавництво | Autocomplete | Показати книги вибраного видавництва |

Logic:

* фільтри мають працювати по ID, якщо сутність уже існує;
* custom author і custom publisher також мають бути доступні у фільтрах;
* автор і видавництво мають бути обмежені поточним користувачем та predefined даними.

---

### 13.3. Top genres

Блок показує найпопулярніші жанри серед книг користувача.

Example:

```text
Top genres
- Fantasy
- Romance
- Mystery
```

Logic:

* показувати до 3 найчастіших жанрів;
* рахувати тільки активні книги поточного користувача;
* видалені книги не враховуються;
* якщо жанрів ще немає, блок можна приховати або показати empty state.

Empty state:

```text
Жанри ще не додані
```

---

### 13.4. Top tags

Блок показує найчастіші теги, які користувач додавав до книг.

Example:

```text
Top tags
- slow burn
- dark academia
- dragons
```

Logic:

* показувати до 3 найчастіших тегів;
* рахувати тільки теги з активних книг поточного користувача;
* видалені книги не враховуються;
* якщо тегів ще немає, блок можна приховати або показати empty state.

Empty state:

```text
Теги ще не додані
```

---
