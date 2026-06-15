# States, Responsive Behavior and Acceptance

## Loading state

Show:

- skeleton search;
- skeleton genre cards;
- skeleton tag chips/cards.

## Empty state

If no genres and no tags:

```text
Жанрів і тегів поки немає
Додайте першу книгу та виберіть жанри або створіть теги, щоб вони з'явилися тут.
```

Actions:

```text
Додати книгу
Додати тег
```

## Empty tags state

```text
Тегів поки немає
Теги створюються вручну. Створіть перший тег, щоб використовувати його у книгах.
```

## Empty filtered state

```text
Нічого не знайдено
Спробуйте змінити запит або очистити фільтри.
```

## Error state

```text
Не вдалося завантажити жанри й теги
Спробуйте оновити сторінку або повторити запит.
```

## Responsive rules

Desktop:

- genre cards in grid;
- tags as chips/cards;
- toolbar horizontal.

Mobile:

- tabs horizontally scrollable;
- filters in bottom sheet;
- cards one column;
- tag chips wrap safely.

## Acceptance Criteria

- Page loads for authorized user.
- Page has title and tabs.
- Genres tab shows used predefined genres.
- Tags tab shows current user's created tags only.
- Search works.
- Filters work.
- Sorting works.
- Click on genre/tag opens My Library filter.
- Empty states are shown correctly.
