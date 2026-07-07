# Loading, Empty and Error States

## Loading state

Show skeletons for:

- page header controls;
- cards grid;
- right sidebar stats.

Recommended:

```txt
9 card skeletons on desktop
4 card skeletons on tablet
3 card skeletons on mobile
```

---

## Empty state: no dedications yet

Title:

```txt
У вас ще немає присвят
```

Text:

```txt
Додайте присвяту автора на сторінці створення або редагування книги — і вона зʼявиться тут.
```

CTA:

```txt
Додати книгу
```

Secondary CTA:

```txt
Перейти до всіх книг
```

Decor:

- відкрита книга;
- листочок;
- маленька ручка / перо.

---

## Empty state: no results after search

Title:

```txt
Нічого не знайдено
```

Text:

```txt
Спробуйте змінити запит або очистити фільтри.
```

CTA:

```txt
Очистити фільтри
```

---

## Error state

Title:

```txt
Не вдалося завантажити присвяти
```

Text:

```txt
Спробуйте оновити сторінку або повторити пізніше.
```

CTA:

```txt
Спробувати ще раз
```

---

## Permission error

If user is not authenticated:

```txt
redirect to login
```

If deep link points to another userʼs dedication:

```txt
show not found
```
