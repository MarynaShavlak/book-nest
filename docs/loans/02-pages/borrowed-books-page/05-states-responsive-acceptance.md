# Borrowed Books Page: States, Responsive and Acceptance

## Loading state

Show:

* skeleton summary cards;
* skeleton loan rows;
* skeleton sidebar.

Text:

```text
Завантажуємо позичені книги...
```

---

## Empty state

If no active loans:

Title:

```text
У вас поки немає позичених книг
```

Text:

```text
Позначте книгу як позичену, щоб відстежувати, кому її потрібно повернути або у кого ви її взяли.
```

Actions:

```text
Позначити книгу як позичену
Перейти до бібліотеки
```

---

## Empty filtered state

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

---

## Error state

Title:

```text
Не вдалося завантажити позичені книги
```

Text:

```text
Спробуйте оновити сторінку або повторити запит.
```

Action:

```text
Спробувати ще раз
```

---

## Responsive behavior

Desktop:

* summary cards in row;
* tabs and toolbar horizontal;
* list in main column;
* right sidebar visible.

Tablet:

* sidebar moves below content;
* filters can collapse into popover.

Mobile:

* one-column layout;
* summary cards can be 2-column grid;
* tabs horizontally scrollable;
* actions collapse into menu;
* long names and contacts wrap safely.

---

## Acceptance Criteria

* User can open Позичені книги page.
* Page shows active loans only.
* Page has summary cards.
* Page has tabs.
* User can search loans.
* User can filter loans.
* User can sort loans.
* User sees loan badges.
* User can go to Book Details.
* User can edit loan.
* User can mark loan as returned.
