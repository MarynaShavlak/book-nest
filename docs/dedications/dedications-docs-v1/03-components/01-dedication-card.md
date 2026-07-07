# Component: Dedication Card

## Purpose

Картка присвяти показує короткий preview авторської присвяти та повʼязану книгу.

---

## Card content

```txt
[Book cover]
Book title
Author name
Dedication preview

[Open book] [Copy] [Favorite]
```

---

## Fields

| Field | Required | Notes |
|---|---:|---|
| coverUrl | no | fallback placeholder if absent |
| bookTitle | yes | max 2 lines |
| authorNames | no | if empty: `Автор невідомий` |
| dedicationText | yes | preview 3–5 lines |
| isFavoriteDedication | no | controls heart icon |

---

## Text truncation

Dedication preview:

```txt
max 4 lines on desktop
max 3 lines on mobile
```

If text is longer, show ellipsis.

Full text opens in modal / drawer.

---

## Card actions

### Open book

Icon: book

Tooltip:

```txt
Перейти до книги
```

Action:

```txt
navigate(`/books/${bookId}`)
```

### Copy

Icon: copy

Tooltip:

```txt
Скопіювати присвяту
```

Action:

```txt
copy dedication text to clipboard
```

### Favorite

Icon: heart

States:

```txt
outline heart = not favorite
filled heart = favorite
```

---

## Card click behavior

Recommended:

- click on card body opens dedication preview modal;
- click on cover or title opens book details;
- action buttons do their own action and stop propagation.

---

## Visual style

- rounded card;
- cream background;
- thin beige border;
- subtle shadow;
- warm brown title;
- small decorative branch in corner only if it does not overload UI.
