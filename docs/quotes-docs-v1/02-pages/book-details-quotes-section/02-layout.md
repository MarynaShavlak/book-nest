# Book Details Quotes Section Layout

## Recommended placement

Place `Цитати з книги` after:

- `Про книгу`; or
- notes block if notes already exist.

Recommended order:

```text
Main book hero
Про книгу
Цитати з книги
Нотатки
Персонажі
```

Alternative:

```text
Main book hero
Про книгу
Нотатки
Цитати з книги
```

## Block layout

```text
Card wrapper
├── Header
│   ├── title + count
│   └── + Додати цитату
├── Filter chips (optional)
│   ├── Усі
│   ├── Улюблені
│   └── Зі спойлерами
├── Quote preview cards
└── Footer action: Переглянути всі цитати книги
```

## MVP display

For MVP, show:

- latest 2–3 quotes; or
- favorite quotes first;
- button `Переглянути всі цитати книги` if more exist.

## Header example

```text
Цитати з книги                    [+ Додати цитату]
4 цитати · 1 улюблена · 1 зі спойлером
```

## Optional filters inside Book Details

```text
Усі
Улюблені
Без спойлерів
Зі спойлерами
```

For MVP, these filters can be skipped if there are only a few quotes.
