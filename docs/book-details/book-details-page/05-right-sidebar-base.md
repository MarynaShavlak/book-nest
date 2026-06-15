# Book Details Page — Right Sidebar Base

> Source: book-details-page.md lines 679-757, book-details-page.md lines 1386-1495

> Series preview and delivery block are now detailed in separate folders. Keep this file as the sidebar composition contract only.

---

## 7. Right sidebar

Right sidebar — це права колонка на сторінці **Book Details**, яка показує коротку інформацію про книгу, її статуси, серію та швидкі дії.

Sidebar не має дублювати весь основний контент сторінки.
Його задача — дати користувачу швидкий доступ до ключових даних і дій без зайвого скролу.

---

### 7.1. Sidebar structure

Right sidebar має містити такі блоки:

| Block             | Purpose                      |
| ----------------- | ---------------------------- |
| Quick information | Короткі факти про книгу      |
| Statuses          | Поточні статуси книги        |
| Series preview    | Коротка інформація про серію |
| Delivery block | Коротка інформація про доставку книги |
| Quick actions     | Основні дії з книгою         |

---

### 7.2. Quick information

Блок **Quick information** показує основні факти про книгу.

Recommended fields:

| Field                | Source            |
| -------------------- | ----------------- |
| Автор                | `author`          |
| Видавництво          | `publisher`       |
| Рік видання          | `publicationYear` |
| Мова                 | `language`        |
| Кількість сторінок   | `pagesCount`      |
| Вікова категорія     | `ageCategory`     |
| Додано до бібліотеки | `createdAt`       |

Behavior:

* показувати тільки ті поля, які мають значення;
* якщо optional поле не заповнене, його можна не показувати;
* дата додавання має бути саме в цьому блоці, а не в блоці статусів.

---

### 7.3. Statuses

Блок **Statuses** показує поточний стан книги.

Recommended fields:

| Field            | Source            |
| ---------------- | ----------------- |
| Статус читання   | `readingStatus`   |
| Статус володіння | `ownershipStatus` |
| Формат           | `formats`         |

Important:

* `ebook` і `audiobook` мають бути форматами, а не статусами володіння;
* поле **Додано** не має бути в цьому блоці;
* назва **Статус володіння** краща за **Належить мені**, бо покриває всі варіанти: `owned`, `want_to_buy`, `in_transit`, `borrowed_from_someone`, `lent_to_someone`.

Action:

```text id="0r1w6q"
Редагувати статуси
```

Behavior:

* action відкриває flow редагування статусів;
* зміна статусів має оновлювати sidebar, hero section і пов’язані сторінки;
* якщо статус потребує додаткових даних, відкривається відповідний flow.

---

---

### 7.5. Delivery block

Блок **Delivery block** показує коротку інформацію про доставку книги, якщо книга зараз знаходиться в статусі **В дорозі** або має delivery history.

Цей блок не має дублювати повну delivery-логіку. Він тільки показує delivery summary для поточної книги та запускає відповідні delivery flows.

Повна логіка блоку описана в окремому документі:

```text
book-details-delivery-block.md
```
Delivery block може показувати:

статус доставки;
магазин;
дату замовлення;
очікувану дату доставки;
службу доставки;
номер ТТН / tracking number;
ціну;
tracking URL;
коротку нотатку;
actions для активної доставки.

Основні actions:

Action	Related feature doc
Позначити як “В дорозі”	mark-book-as-in-transit.md
Редагувати доставку	edit-delivery-info.md
Позначити як отриману	mark-book-as-received.md
Скасувати замовлення	cancel-delivery-order.md
Історія замовлень	delivery-order-history.md

Recommended behavior:

якщо книга має active delivery, показати active Delivery block;
якщо активної доставки немає, але є delivery history, показати compact history preview;
якщо delivery data немає, блок не показується;
action Позначити як “В дорозі” залишається доступною через Quick actions, якщо вона релевантна.

Important:

Book Details Delivery Block є integration point.
Він не має напряму реалізовувати delivery business logic, а тільки відкриває відповідні delivery flows.

---




### 7.6. Quick actions

Блок **Quick actions** містить основні дії з книгою.

Recommended actions:

| Action                     | Behavior                                                |
|----------------------------|---------------------------------------------------------|
| Редагувати книгу           | відкриває сторінку редагування книги                    |
| Додати в чергу читання     | додає книгу в reading queue                             |
| Позначити як позичено      | відкриває flow позики книги                             |
| Позначити як вже замовлену | відкриває flow додавання інформації по замовленню книги |
| Поділитися книгою          | доступно тільки якщо share feature реалізована          |
| Видалити з бібліотеки      | відкриває confirmation modal                            |

Delete action:

* має бути внизу списку;
* має бути візуально відділена від інших дій;
* має мати destructive style;
* не має видаляти книгу без confirmation modal.

---

### 7.7. Responsive behavior

На desktop:

* right sidebar показується праворуч від основного контенту;
* sidebar має залишатися компактним;
* блоки мають іти в порядку: Quick information → Statuses → Series preview → Delivery block → Quick actions

На mobile:

* sidebar blocks переходять під основний контент;
* блоки показуються як звичайні cards;
* порядок блоків має залишатися логічним;
* layout не має вимагати горизонтального скролу.

---


---

### 7.8. Acceptance Criteria

* Right sidebar показується на сторінці Book Details.
* Sidebar містить блок Quick information.
* Quick information показує короткі факти про книгу.
* Sidebar містить блок Statuses.
* Statuses показують статус читання, статус володіння і формат.
* Дата додавання показується в Quick information, а не в Statuses.
* Sidebar містить Series preview тільки для книг із серії.
* Для solo books блок Series preview не показується.
* Sidebar містить Quick actions.
* Delete action має destructive style і відкриває confirmation modal.
* Sidebar не дублює повний main content.
* На mobile sidebar blocks перебудовуються в одну колонку.
