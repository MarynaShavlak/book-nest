# All Series Page — Actions

> Source: `all-series-page.md`

## 6. Actions

### 6.1. Create series

Користувач може створити нову серію через кнопку:

```text
+ Створити серію
```

Entry points:

* header button;
* right sidebar quick action;
* empty state button.

Behavior:

1. Користувач натискає **Створити серію**.
2. Відкривається Create Series flow.
3. Користувач створює серію.
4. Після успішного створення серія з’являється на сторінці `/series`.
5. Якщо книг у серії ще немає, серія показується як empty series card.

Important:

```text
Поля форми, validation rules, duplicate check і submit behavior описуються в Feature: Create / Edit Series.
```

---

### 6.2. Search series

Користувач може шукати серії через search input.

Behavior:

* після введення тексту список серій фільтрується;
* пошук працює без перезавантаження сторінки;
* якщо результатів немає, показується empty search state;
* очищення search input повертає повний список відповідно до активної вкладки.

---

### 6.3. Filter series

Користувач може фільтрувати серії за:

* статусом серії;
* станом читання.

Фільтри застосовуються до активної вкладки.

---

### 6.4. Sort series

Користувач може змінити порядок серій через sorting dropdown.

Sorting застосовується після search і filters.

---

### 6.5. Change view

Якщо MVP підтримує grid/list view, користувач може перемикати вигляд.

Behavior:

* grid view показує серії як картки;
* list view показує серії компактніше.

Якщо list view не входить у MVP, сторінка використовує тільки grid view.

---

### 6.6. Open series details

Користувач може перейти на детальну сторінку серії.

Entry points на картці:

* клік по картці;
* кнопка **Переглянути серію**.

Expected behavior:

```text
Користувач переходить на /series/:seriesId
```

Series Details Page описується в окремій feature documentation.

---

### 6.7. Add book to empty series

Якщо серія створена вручну і ще не має книг, користувач може натиснути:

```text
Додати книгу
```

Behavior:

* відкривається Create Book flow;
* створена серія може бути одразу preselected у полі Series;
* після збереження книги вона з’являється всередині цієї серії;
* прогрес серії перераховується.

---
