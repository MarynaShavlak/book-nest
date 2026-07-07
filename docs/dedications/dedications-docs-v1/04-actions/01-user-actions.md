# User Actions

## 1. Search dedication

User enters text into search input.

System filters by:

- dedication text;
- book title;
- original title;
- author names;
- genre names;
- tag names.

---

## 2. Filter dedications

Available filters:

```txt
Усі
Улюблені
Прочитані
Непрочитані
```

---

## 3. Sort dedications

Available sorting:

```txt
Найновіші додані
Нещодавно оновлені
За назвою книги
За автором
Спочатку улюблені
За роком видання
```

---

## 4. Open book

From card action:

```txt
До книги
```

Navigate:

```ts
navigate(`/books/${bookId}`)
```

---

## 5. Copy dedication

Click `copy` icon.

Success toast:

```txt
Присвяту скопійовано
```

Error toast:

```txt
Не вдалося скопіювати присвяту
```

---

## 6. Toggle favorite dedication

Click heart.


Important: this action changes only `isFavoriteDedication`. It must not change `book.isFavorite`.

```ts
updateBook(bookId, {
  isFavoriteDedication: true,
});

// do not send/change isFavorite here
```

If not favorite:

```txt
isFavoriteDedication = true
```

Toast:

```txt
Додано в улюблені присвяти
```

If favorite:

```txt
isFavoriteDedication = false
```

Toast:

```txt
Прибрано з улюблених присвят
```

---

## 7. Open dedication modal

Click card body.

System opens modal with full text.

---

## 8. Clear filters

When no results after filter/search, show action:

```txt
Очистити фільтри
```

Resets:

```ts
search = ''
filter = 'all'
genreId = undefined
sort = 'newest'
```
