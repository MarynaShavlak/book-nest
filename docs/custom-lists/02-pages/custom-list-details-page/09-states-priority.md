# States and State Priority

## Role

Defines empty, no-results, loading, error, not-found/access, and state priority for `/lists/:listId`.

## Source coverage

`custom-list-details-page.md` sections 37-42

## Content

## 37. Empty list state

Empty state показується, якщо список існує, але в ньому ще немає книг.

Title:

```text
У цьому списку ще немає книг
```

Description:

```text
Додайте книги зі своєї бібліотеки, щоб наповнити цей список.
```

Primary action:

```text
Додати книги
```

Secondary action:

```text
Повернутися до списків
```

Behavior:

* **Додати книги** відкриває modal додавання книг;
* **Повернутися до списків** веде на `/lists`.

---

---

## 38. No search results state

No search results state показується, якщо в списку є книги, але search нічого не знайшов.

When to show:

```text
booksCount > 0
search is active
resultsCount = 0
```

Title:

```text
Книг не знайдено
```

Description:

```text
Спробуйте змінити пошуковий запит або очистити пошук.
```

Action:

```text
Очистити пошук
```

Behavior:

* очищає search input;
* показує всі книги списку;
* sorting не змінюється.

---

---

## 39. Loading state

Loading state показується, коли сторінка очікує дані.

UI:

* skeleton для header;
* skeleton для toolbar;
* skeleton для book cards;
* skeleton для sidebar / info block, якщо є.

Behavior:

* не показувати empty state під час loading;
* actions disabled до завершення завантаження.

---

---

## 40. Error state

Error state показується, якщо список не вдалося завантажити.

Title:

```text
Не вдалося завантажити список
```

Description:

```text
Спробуйте оновити сторінку або повторити запит трохи пізніше.
```

Action:

```text
Спробувати ще раз
```

---

---

## 41. Not found / access error state

Якщо список не знайдено або він недоступний користувачу, показати окремий state.

Title:

```text
Список не знайдено
```

Description:

```text
Можливо, список був видалений або він вам недоступний.
```

Action:

```text
Повернутися до списків
```

---

---

## 42. State priority

Якщо одночасно можливі кілька states, застосовується такий порядок:

```text
1. Loading
2. Not found / access error
3. Error
4. Empty list
5. No search results
6. Default books list
```

---
