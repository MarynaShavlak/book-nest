# Custom Lists Page States

## Role

Empty, no-results, loading, error, and state priority for `/lists`.

## Source coverage

`custom-lists-page.md` sections 30-34

## Content

## 30. Empty state

Empty state показується, якщо користувач ще не створив жодного списку.

When to show:

```text
listsCount = 0
search is empty
```

Title:

```text
Списків поки немає
```

Description:

```text
Створіть перший список, щоб зберігати книги за настроєм, темою або власним планом читання.
```

Primary action:

```text
Створити список
```

Secondary action:

```text
Перейти до бібліотеки
```

Behavior:

* **Створити список** відкриває create list modal;
* **Перейти до бібліотеки** веде на `/library`.

---

---

## 31. No search results state

No search results state показується, якщо списки є, але search нічого не знайшов.

When to show:

```text
listsCount > 0
search is active
resultsCount = 0
```

Title:

```text
Нічого не знайдено
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
* показує всі списки;
* sorting не змінюється.

---

---

## 32. Loading state

Loading state показується, коли сторінка очікує дані.

UI:

* skeleton для page header;
* skeleton для toolbar;
* skeleton для list cards;
* skeleton для sidebar.

Behavior:

* не показувати empty state під час loading;
* actions мають бути disabled до завершення завантаження.

---

---

## 33. Error state

Error state показується, якщо списки не вдалося завантажити.

Title:

```text
Не вдалося завантажити списки
```

Description:

```text
Спробуйте оновити сторінку або повторити запит трохи пізніше.
```

Action:

```text
Спробувати ще раз
```

Якщо помилка сталася після create/edit/delete action, показати toast:

```text
Не вдалося оновити список
```

---

---

## 34. State priority

Якщо одночасно можливі кілька states, застосовується такий порядок:

```text
1. Loading
2. Error
3. Empty lists
4. No search results
5. Default lists grid
```

Important:

* loading має найвищий пріоритет;
* empty state показується тільки якщо списків немає взагалі;
* no search results показується тільки якщо списки існують, але не знайдені за search.

---
