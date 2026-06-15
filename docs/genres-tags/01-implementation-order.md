# Implementation Order

Recommended order:

```text
1. Genre dictionary and genre field in Book Form
2. UserTag entity
3. Add Tag action
4. Tags field in Book Form using only current user's tags
5. Genre / Tag aggregation selectors
6. Genres / Tags Page layout
7. Genres tab
8. Tags tab
9. Edit Tag action
10. Delete Tag action
11. My Library filter integration
12. Book Details block
13. Dashboard / statistics integration
```

Reason:

```text
Спочатку треба стабілізувати дані: genres on Book і UserTag.
Після цього можна будувати сторінку, actions і інтеграції.
```
