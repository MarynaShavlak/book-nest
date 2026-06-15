# Genres Tab

## Purpose

Genres tab shows genre cards based on user's books.

A genre appears if at least one user book has that genre.

## Genre card content

Show:

- genre icon;
- genre label;
- total books count;
- read books count;
- books in reading queue count;
- want to buy count;
- cover previews;
- optional average rating;
- action to view books.

Example:

```text
Фентезі
128 книг
82 прочитано · 46 у черзі
[cover] [cover] [cover] +25
```

## Click behavior

Clicking genre opens My Library with genre filter:

```text
/my-library?genre=fantasy
```

Alternative:

```text
Apply global library filter state and navigate to My Library.
```

## Empty genre tab

If user has no books with genres:

```text
Жанрів поки немає
Додайте жанр у формі книги, і він з'явиться тут.
```

Action:

```text
Додати книгу
```

## Not included in MVP

- detailed genre page;
- editing genre;
- deleting genre;
- custom genre creation;
- genre merge.
