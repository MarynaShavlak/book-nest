# Integration: Book Details Page

## Dedication block

If book has `authorDedication`, show block on Book Details:

```txt
Присвята автора
[dedication preview]
Показати більше
```

---

## Block actions

Recommended actions:

```txt
Скопіювати
Улюблена / Прибрати з улюблених
Перейти до всіх присвят
Редагувати книгу
```

---

## Empty behavior

If book has no dedication, do not show the block by default.

Alternative for edit mode / owner:

```txt
У цієї книги ще немає присвяти автора.
[Додати присвяту]
```

This can appear only in edit context or as small optional CTA.

---

## Navigation

Click `Перейти до всіх присвят`:

```ts
navigate('/dedications')
```

Click `Редагувати книгу`:

```ts
navigate(`/books/${bookId}/edit`)
```

---

## Sync

Favorite state on Book Details and Dedications page must be synchronized.

If user favorites dedication on Book Details, card on `/dedications` must update.
