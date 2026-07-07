# Header, Search and Filters

## Header

Header має містити:

```txt
Присвяти
Авторські присвяти з книг, які ви додали до своєї бібліотеки. Маленькі слова, з яких починається велика історія.
```

Decorative element:

- маленька гілочка поруч із title;
- не більше 60–90 px шириною;
- opacity 0.7–0.9;
- колір `#9A5D36` або світліший terracotta.

---

## Search

Placeholder:

```txt
Пошук по присвятах, книгах, авторах...
```

Search має працювати по:

- тексту присвяти;
- назві книги;
- original title;
- іменах авторів;
- жанрах;
- тегах.

---

## Main filter chips

```txt
Усі
Улюблені
Прочитані
Непрочитані
```

### Filter logic

`Усі`:

```txt
all books with dedication
```

`Улюблені`:

```txt
isFavoriteDedication === true
```

`Прочитані`:

```txt
readingStatus === finished
```

`Непрочитані`:

```txt
readingStatus !== finished
```

---

## Sort options

```txt
Найновіші додані
Нещодавно оновлені
За назвою книги
За автором
Спочатку улюблені
За роком видання
```

Default:

```txt
Найновіші додані
```

---

## Genre filter

Dropdown:

```txt
Усі жанри
```

Options мають будуватися тільки з жанрів книг, які мають присвяти.

Не потрібно показувати жанри, в яких немає жодної присвяти.
