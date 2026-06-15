# Create / Edit Series — Extra Field Details

> Source: `create-edit-series.md`

### 8.5. Опис серії

| Parameter   | Value                                  |
| ----------- | -------------------------------------- |
| Label       | Опис серії                             |
| Placeholder | Коротко опишіть серію без спойлерів... |
| Type        | Textarea                               |
| Required    | Ні                                     |
| Max length  | 500 символів                           |
| HTML tags   | Заборонено                             |

#### Logic

* поле optional;
* опис має бути коротким і без спойлерів;
* опис показується на Series Details Page;
* у card view можна не показувати опис або показувати короткий fragment;
* якщо опис порожній, блок опису можна приховати.

#### Error message

```text
Опис серії не може бути довшим за 500 символів
```

---


### 8.6. Жанри

| Parameter        | Value        |
| ---------------- | ------------ |
| Label            | Жанри        |
| Type             | Multi-select |
| Required         | Ні           |
| Max selected     | 5            |
| Duplicate values | Заборонено   |

#### Logic

* поле optional;
* жанри допомагають категоризувати серію;
* жанри можуть показуватися на Series Details Page;
* жанри можуть використовуватися в пошуку або future filters;
* якщо жанри не вибрані, поле не показується в UI серії.

#### Error messages

```text
Можна обрати не більше 5 жанрів
Цей жанр уже додано
Обраний жанр не знайдено
```

---


### 8.7. Теги

| Parameter    | Value                    |
| ------------ | ------------------------ |
| Label        | Теги                     |
| Type         | Tag input / multi-select |
| Required     | Ні                       |
| Min length   | 2 символи                |
| Max length   | 30 символів              |
| Max selected | 12                       |
| HTML tags    | Заборонено               |

#### Logic

* теги optional;
* теги є персональними позначками користувача;
* теги можуть описувати атмосферу, тропи, теми або особисті категорії;
* теги серії не обов’язково мають збігатися з тегами окремих книг;
* якщо користувач прибирає тег із серії, це не видаляє тег із книг.

Examples:

```text
dark academia
romantasy
затишна серія
читати восени
магічна академія
```

#### Error messages

```text
Тег має містити щонайменше 2 символи
Тег не може бути довшим за 30 символів
Такий тег уже додано
Можна додати не більше 12 тегів
```

---


### 8.8. Обкладинка серії

| Parameter | Value                       |
| --------- | --------------------------- |
| Label     | Обкладинка серії            |
| Type      | Image upload / image picker |
| Required  | Ні                          |

#### Logic

* поле optional;
* якщо користувач додає custom cover, вона показується на All Series Page і Series Details Page;
* якщо custom cover немає, використовується обкладинка першої книги в серії;
* якщо в серії немає книг або обкладинки першої книги немає, показується placeholder;
* у edit mode користувач може замінити або прибрати custom cover.

#### Missing cover behavior

```text
custom cover → показати custom cover
немає custom cover → показати cover першої книги
немає cover першої книги → показати placeholder
```

---
