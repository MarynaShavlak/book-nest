# States, Responsive Behavior and Acceptance Criteria

## Loading state

Show while books and links are loading:

- toolbar skeleton;
- row skeletons;
- sidebar skeleton.

## Empty state

Title:

```text
Список покупок порожній
```

Text:

```text
Додайте книгу зі статусом “Хочу купити”, і вона з’явиться тут.
```

Actions:

```text
Додати книгу
Перейти до бібліотеки
```

## Empty search state

Title:

```text
Нічого не знайдено
```

Text:

```text
Спробуйте змінити запит або очистити фільтри.
```

Action:

```text
Очистити фільтри
```

## Error state

Title:

```text
Не вдалося завантажити книги до покупки
```

Action:

```text
Спробувати ще раз
```

## Responsive behavior

Desktop:

- list + right sidebar;
- toolbar in one row;
- store links visible inside rows.

Mobile:

- one-column layout;
- filters in drawer/bottom sheet;
- actions collapse into menu;
- long URLs and prices do not break layout.

## Acceptance Criteria

- Page shows only books with `ownershipStatus = want_to_buy`.
- Page has title, subtitle and count badge.
- User can search, filter and sort books.
- User can add, edit and delete store links.
- User can mark a book as bought.
- User can remove a book from shopping list.
- User can open Book Details.
- Empty, loading and error states exist.
- Mobile layout does not require horizontal scroll.
