# Page: Присвяти

## Route

```txt
/dedications
```

## Page title

```txt
Присвяти
```

## Subtitle

```txt
Авторські присвяти з книг, які ви додали до своєї бібліотеки. Маленькі слова, з яких починається велика історія.
```

---

## Page layout

Повна сторінка складається з 3 зон:

```txt
┌──────────────┬──────────────────────────────┬─────────────────────┐
│ Sidebar      │ Main content                 │ Right sidebar       │
│ navigation   │ Header + filters + grid      │ Stats + quick       │
│              │                              │ filters + quote     │
└──────────────┴──────────────────────────────┴─────────────────────┘
```

---

## Main content structure

```txt
1. Page header
2. Search input
3. Sort select
4. Genre filter
5. Main filter chips
6. Dedication cards grid
7. Pagination / Load more
```

---

## Right sidebar structure

```txt
1. Statistics card
2. Quick filters card
3. Decorative quote card
4. Helper CTA card
```

---

## Default state

При відкритті сторінки:

```txt
filter = all
sort = newest
search = empty
genre = all
view = grid
page = 1
```

---

## Recommended desktop grid

```txt
3 columns
card min width: 260px
card max width: 320px
gap: 16-20px
```

---

## Recommended responsive layout

| Width | Layout |
|---|---|
| Desktop ≥ 1200px | sidebar + 3-column grid + right sidebar |
| Tablet 768–1199px | sidebar + 2-column grid, right sidebar moves below |
| Mobile < 768px | no sidebars, 1-column list/grid |
