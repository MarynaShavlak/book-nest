# Layout, Header and Tabs

## Desktop layout

```text
[Sidebar]
[Page header + quote/card]
[Tabs: Genres / Tags]
[Search + Sorting + Filters]
[Main grid/list]
[Popular tags block]
```

## Header

Header contains:

- title;
- subtitle;
- decorative quote or helper card;
- optional + Add Tag button.

Example:

```text
Жанри / Теги
Керуйте жанрами, тегами й атмосферою вашої бібліотеки
```

## Tabs

Tabs:

```text
Жанри
Теги
```

Tab rules:

- Genres tab shows genre cards for used genres;
- Tags tab shows user-created tags only;
- tab state should persist in URL query if needed.

Example URL:

```text
/genres-tags?tab=tags
```

## Summary cards

Optional top summary cards:

```text
Жанрів у бібліотеці
Тегів у бібліотеці
Книг з жанрами
Книг з тегами
```

Recommended MVP:

```text
Use compact stats in page blocks or cards, but do not overbuild analytics.
```
