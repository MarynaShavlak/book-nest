# Feature: Book Details

## 1. Purpose

Feature **Book Details** дозволяє користувачу переглянути повну інформацію про конкретну книгу та виконати основні дії з нею.

Сторінка деталей книги є центральним місцем для роботи з однією книгою.

На цій сторінці користувач може:

* переглянути основну інформацію про книгу;
* побачити статус читання;
* побачити статус володіння;
* переглянути формат книги;
* переглянути прогрес читання;
* побачити жанри, теги, мову та вікову категорію;
* переглянути інформацію про серію, якщо книга є частиною серії;
* переглянути preview нотаток і цитат;
* виконати основні actions: редагувати, видалити, оновити прогрес, додати нотатку, додати цитату.

Book Details не має дублювати повну логіку окремих фіч.
Повний CRUD нотаток, цитат, персонажів, серій, списків, черги, доставки або позики описується в окремих feature docs.

---

## 2. Entry points

Користувач може відкрити сторінку деталей книги з різних частин застосунку.

Основні entry points:

| Entry point      | Behavior                                                  |
| ---------------- | --------------------------------------------------------- |
| Моя бібліотека   | клік по картці або назві книги                            |
| Dashboard        | клік по книзі в блоках активного читання або рекомендацій |
| Серії            | клік по книзі зі сторінки серії                           |
| Черга читання    | клік по книзі з черги                                     |
| Власні списки    | клік по книзі зі списку                                   |
| Улюблені книги   | клік по улюбленій книзі                                   |
| Книги до покупки | клік по книзі зі списку покупок                           |
| Книги в дорозі   | клік по книзі в доставці                                  |
| Позичені книги   | клік по позиченій або виданій книзі                       |
| Нотатки          | перехід до книги, до якої належить нотатка                |
| Цитати           | перехід до книги, до якої належить цитата                 |

Після переходу користувач має побачити одну й ту саму сторінку деталей книги незалежно від того, звідки він її відкрив.

---

## 3. Route and access

Recommended route:

```text
/books/:bookId
```

Example:

```text
/books/book_123
```

### Access rules

Сторінка доступна тільки авторизованому користувачу.

Користувач може відкрити тільки ті книги, які належать йому.

Backend має перевіряти:

* чи існує книга;
* чи книга належить поточному користувачу;
* чи книга не видалена;
* чи користувач має доступ до цієї книги.

### Deleted book behavior

Якщо книга має `deletedAt`, вона не має відкриватися як активна сторінка деталей.

Recommended behavior:

```text
404 Not Found
```

### Not found behavior

Якщо книга не існує або була видалена, показати state:

```text
Книгу не знайдено
```

Action:

```text
Повернутися до бібліотеки
```

### Forbidden behavior

Якщо книга існує, але не належить поточному користувачу, backend має повернути:

```text
403 Forbidden
```

У UI показати generic error state без деталей чужої книги.

### API endpoint

Recommended endpoint:

```http
GET /books/:bookId
```

Endpoint має повертати повну інформацію про книгу, потрібну для першого рендеру сторінки деталей.

Повні списки нотаток, цитат, персонажів або історії прогресу можуть завантажуватися окремими endpoint-ами.

## 4. Page layout

Сторінка **Book Details** має бути побудована як сторінка перегляду однієї книги з основним контентом і правою sidebar-колонкою.

Layout має допомагати користувачу швидко побачити головну інформацію про книгу та перейти до пов’язаних дій.

---

### 4.1. Main layout zones

Сторінка складається з таких зон:

| Zone              | Purpose                               |
| ----------------- | ------------------------------------- |
| Top navigation    | Повернення назад і breadcrumbs        |
| Book hero section | Головна інформація про книгу          |
| Main content      | Детальні блоки книги                  |
| Right sidebar     | Швидка інформація, статуси та actions |

---

### 4.2. Top navigation

У верхній частині сторінки має бути breadcrumb або back action.

Recommended breadcrumb:

```text id="bd7t5k"
Моя бібліотека / Детальна сторінка книги
```

Back action:

```text id="psm77t"
← Моя бібліотека
```

Logic:

* back action повертає користувача до попереднього списку або до `/library`;
* breadcrumb показує, що користувач знаходиться на сторінці деталей книги.

---

### 4.3. Book hero section

Book hero section — це верхній основний блок сторінки.

Він має містити:

* обкладинку книги;
* назву книги;
* оригінальну назву, якщо вона є;
* автора;
* видавництво;
* рік видання;
* основні статуси;
* формат книги;
* рейтинг;
* кількість сторінок;
* прогрес читання;
* основні actions.

Hero section має бути першим великим блоком після top navigation.

---

### 4.4. Main content area

Main content area містить основні блоки, які описують книгу та пов’язані з нею дані.

Recommended blocks:

* About book;
* Reading progress;
* Notes preview;
* Quotes preview;
* Characters preview, якщо фіча увімкнена;
* Similar books або related books, якщо фіча підтримується.

Main content не має містити повний CRUD пов’язаних сутностей.
Він показує тільки preview і links до повних сторінок або модалок.

---

### 4.5. Right sidebar

Right sidebar містить коротку інформацію та швидкі дії.

Recommended blocks:

* Quick information;
* Statuses;
* Series preview, якщо книга є частиною серії;
* Quick actions.

Right sidebar не має дублювати весь main content.
Вона має давати швидкий доступ до найважливішого.

---

### 4.6. Desktop layout

На desktop сторінка може мати такий layout:

```text id="y4m7mx"
[ Global sidebar ] [ Book details content ]

Book details content:
[ Top navigation ]

[ Cover ] [ Book hero information ] [ Right sidebar ]

[ Main content blocks        ] [ Right sidebar ]
```

Recommended behavior:

* cover і hero information показуються у верхній частині;
* right sidebar фіксується праворуч у межах контенту;
* main content займає основну ширину сторінки.

---

### 4.7. Tablet and mobile layout

На tablet:

* right sidebar може переходити під hero section;
* main content і sidebar можуть іти однією колонкою.

На mobile:

* всі блоки мають показуватися в одну колонку;
* обкладинка, назва і actions мають бути зверху;
* right sidebar blocks мають іти після основної інформації;
* layout не має вимагати горизонтального скролу.

---

### 4.8. Layout order

Recommended order on desktop:

```text id="mpk1sc"
1. Top navigation
2. Book hero section
3. About book
4. Reading progress
5. Notes preview
6. Quotes preview
7. Characters preview
8. Related books
9. Right sidebar blocks
```

Recommended order on mobile:

```text id="dyylaw"
1. Top navigation
2. Cover
3. Title and main info
4. Main actions
5. Quick information
6. Statuses
7. About book
8. Reading progress
9. Notes preview
10. Quotes preview
11. Series preview
12. Other blocks
```

---

### 4.9. Acceptance Criteria

* Сторінка має top navigation або breadcrumb.
* Сторінка має hero section з основною інформацією про книгу.
* Сторінка має main content area з деталями книги.
* Сторінка має right sidebar на desktop.
* Right sidebar не дублює весь main content.
* На mobile сторінка перебудовується в одну колонку.
* Layout не має ламатися, якщо в книги немає обкладинки, серії, нотаток або цитат.
* Основні actions залишаються доступними на desktop і mobile.

## 5. Book hero section

Book hero section — це головний верхній блок сторінки **Book Details**.

Він має швидко показати користувачу основну інформацію про книгу та дати доступ до головних дій.

---

### 5.1. Purpose

Book hero section потрібен, щоб користувач одразу бачив:

* яку книгу він відкрив;
* хто автор;
* який поточний статус книги;
* який формат книги;
* який прогрес читання;
* які основні дії доступні.

---

### 5.2. Content

Book hero section має містити:

| Element          | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| Cover            | Велика обкладинка книги                                      |
| Title            | Назва книги                                                  |
| Original title   | Оригінальна назва, якщо є                                    |
| Author           | Автор книги                                                  |
| Publisher        | Видавництво, якщо вказане                                    |
| Publication year | Рік видання, якщо вказаний                                   |
| Status badges    | Статус читання, статус володіння, формат                     |
| Rating           | Особиста оцінка користувача, якщо є                          |
| Pages count      | Кількість сторінок                                           |
| Reading progress | Поточний прогрес читання                                     |
| Favorite action  | Додати / прибрати з улюблених                                |
| Main actions     | Оновити прогрес, додати нотатку, додати цитату, menu actions |

---

### 5.3. Cover

Обкладинка має бути великим візуальним елементом hero section.

Logic:

* якщо `coverUrl` є, показати обкладинку;
* якщо `coverUrl` немає, показати placeholder;
* обкладинка не має ламати layout;
* alt text має містити назву книги.

Example:

```text
Обкладинка книги “Атомні звички”
```

---

### 5.4. Title and main meta

Поруч з обкладинкою показується основна інформація про книгу.

Required:

* title;
* author.

Optional:

* original title;
* publisher;
* publication year.

Example:

```text
Атомні звички
Незначні зміни, значні результати

Джеймс Клір
Видавництво “Наш формат” · 2018
```

Якщо optional поле не заповнене, його не потрібно показувати.

---

### 5.5. Status badges

У hero section потрібно показувати короткі badges:

| Badge            | Source                                  |
| ---------------- | --------------------------------------- |
| Статус читання   | `readingStatus`                         |
| Статус володіння | `ownershipStatus`                       |
| Формат книги     | `formats`                               |
| Тип книги        | `solo` або `series_part`, якщо потрібно |

Important:

* `ebook` і `audiobook` показуються як format;
* вони не мають бути ownership status;
* якщо формат не вибраний, format badge можна не показувати.

---

### 5.6. Reading summary

Hero section може показувати короткий reading summary.

Recommended fields:

| Field            | Source            |
| ---------------- | ----------------- |
| Сторінок         | `pagesCount`      |
| Поточна сторінка | `currentPage`     |
| Прогрес          | `progressPercent` |
| Оцінка           | `rating`          |
| Дата додавання   | `createdAt`       |

Example:

```text
Сторінок: 320
Оцінка: 4.7
Додано: 12 бер. 2024
Прогрес: 100%
```

Якщо книга ще не читається і прогресу немає, progress block можна не показувати або показати `0%`.

---

### 5.7. Main actions

У hero section мають бути основні actions:

| Action          | Behavior                               |
| --------------- | -------------------------------------- |
| Оновити прогрес | відкриває Update Reading Progress flow |
| Додати нотатку  | відкриває Add Note flow                |
| Додати цитату   | відкриває Add Quote flow               |
| Favorite toggle | змінює `isFavorite`                    |
| More actions    | відкриває menu з додатковими діями     |

More actions може містити:

* редагувати книгу;
* додати до списку;
* додати в чергу читання;
* змінити статус володіння;
* видалити книгу.

---

### 5.8. Missing data behavior

Якщо частина даних відсутня:

| Missing data           | Behavior                                       |
| ---------------------- | ---------------------------------------------- |
| Немає обкладинки       | показати cover placeholder                     |
| Немає original title   | не показувати рядок                            |
| Немає publisher        | не показувати publisher                        |
| Немає publication year | не показувати рік                              |
| Немає rating           | не показувати rating або показати “Без оцінки” |
| Немає progress         | показати `0%` або приховати progress block     |
| Немає format           | не показувати format badge                     |

---

### 5.9. Acceptance Criteria

* Hero section показується у верхній частині Book Details.
* Користувач бачить обкладинку або placeholder.
* Користувач бачить назву книги.
* Користувач бачить автора книги.
* Користувач бачить статус читання.
* Користувач бачить статус володіння.
* Користувач бачить формат книги, якщо він вказаний.
* Користувач бачить прогрес читання, якщо він доступний.
* Користувач може додати або прибрати книгу з улюблених.
* Користувач може відкрити основні actions з hero section.
* Відсутні optional дані не ламають layout.


## 6. Main book information

Main book information — це основний інформаційний блок сторінки **Book Details**, який показує повні дані про книгу після hero section.

Цей блок не дублює всю hero section, а розкриває додаткову інформацію про книгу більш детально.

---

### 6.1. Purpose

Main book information потрібен, щоб користувач міг переглянути основні дані книги в структурованому вигляді:

* опис книги;
* жанри;
* теги;
* мову;
* вікову категорію;
* формат;
* видавництво;
* рік видання;
* кількість сторінок;
* ISBN, якщо є;
* додаткові деталі видання.

---

### 6.2. Recommended sections

Main book information може складатися з таких підблоків:

| Section         | Description                                              |
| --------------- | -------------------------------------------------------- |
| About book      | Короткий опис книги без спойлерів                        |
| Classification  | Жанри, теги, вікова категорія, мова                      |
| Edition details | Видавництво, рік, сторінки, ISBN, перекладач, ілюстратор |
| Formats         | Формати книги: паперова, електронна, аудіокнига          |

---

### 6.3. About book

Блок **About book** показує короткий опис книги без спойлерів.

Source:

```ts
description
```

Behavior:

* якщо опис є, показати текст;
* якщо опис довгий, можна показати скорочену версію з дією **Показати більше**;
* якщо опису немає, блок можна приховати або показати empty state.

Empty state:

```text
Опис книги ще не доданий
```

---

### 6.4. Classification

Блок **Classification** показує категоризацію книги.

| Field            | Source        | Behavior                   |
| ---------------- | ------------- | -------------------------- |
| Жанри            | `genres`      | показати як chips          |
| Теги             | `tags`        | показати як chips          |
| Вікова категорія | `ageCategory` | показати як badge          |
| Мова книги       | `language`    | показати як text або badge |

Logic:

* якщо жанрів немає, не показувати порожній список;
* якщо тегів немає, не показувати порожній список;
* якщо `ageCategory = not_specified`, можна показати **Не вказано** або приховати поле;
* мова книги показується, якщо вона збережена для книги.

---

### 6.5. Edition details

Блок **Edition details** показує технічну інформацію про конкретне видання книги.

| Field              | Source            |
| ------------------ | ----------------- |
| Видавництво        | `publisher`       |
| Рік видання        | `publicationYear` |
| Кількість сторінок | `pagesCount`      |
| ISBN               | `isbn`            |
| Перекладач         | `translator`      |
| Ілюстратор         | `illustrator`     |
| Присвята           | `dedication`      |

Behavior:

* показувати тільки ті поля, які мають значення;
* optional поля без значення не мають займати місце в UI;
* якщо немає жодного поля з edition details, блок можна приховати.

---

### 6.6. Formats

Формати показують, у якому вигляді користувач має або читає книгу.

Options:

| Value       | Label      |
| ----------- | ---------- |
| `paper`     | Паперова   |
| `ebook`     | Електронна |
| `audiobook` | Аудіокнига |

Important:

* формат не є ownership status;
* книга може мати один або кілька форматів;
* якщо формат не вказаний, можна показати **Формат не вказано** або приховати блок.

---

### 6.7. What should not be here

У Main book information не потрібно додавати:

* повний прогрес читання;
* історію читання;
* нотатки;
* цитати;
* персонажів;
* quick actions;
* статуси як окреме керування;
* інформацію про доставку;
* інформацію про позику;
* повну інформацію про серію.

Ці дані мають бути в окремих блоках сторінки або в окремих feature docs.

---

### 6.8. Missing data behavior

| Missing data      | Behavior                                |
| ----------------- | --------------------------------------- |
| Немає опису       | приховати блок або показати empty state |
| Немає жанрів      | не показувати genre chips               |
| Немає тегів       | не показувати tag chips                 |
| Немає видавництва | не показувати поле                      |
| Немає ISBN        | не показувати поле                      |
| Немає перекладача | не показувати поле                      |
| Немає ілюстратора | не показувати поле                      |
| Немає присвяти    | не показувати поле                      |

---

### 6.9. Acceptance Criteria

* Користувач бачить основну інформацію про книгу.
* Користувач бачить опис книги, якщо він доданий.
* Користувач бачить жанри книги, якщо вони додані.
* Користувач бачить теги книги, якщо вони додані.
* Користувач бачить вікову категорію книги.
* Користувач бачить мову книги.
* Користувач бачить формат книги, якщо він вказаний.
* Користувач бачить деталі видання, якщо вони додані.
* Optional поля без значення не ламають layout.
* Main book information не дублює повну логіку notes, quotes, progress, series або actions.


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

### 7.4. Series preview

Блок **Series preview** показується тільки якщо книга є частиною серії.

When to show:

```text id="ip73o6"
bookType = series_part
seriesId exists
```

Recommended fields:

| Field        | Source                                    |
| ------------ | ----------------------------------------- |
| Назва серії  | `series.title`                            |
| Частина      | `series.partNumber` / `series.totalBooks` |
| Статус серії | `series.status`                           |

Action:

```text id="hqe9nj"
Переглянути серію
```

Behavior:

* action веде на сторінку деталей серії;
* якщо книга є solo book, блок не показується;
* якщо серія має значення типу `1 з 1`, блок краще не показувати, щоб не створювати відчуття фейкової серії.

---

### 7.5. Quick actions

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

### 7.6. Responsive behavior

На desktop:

* right sidebar показується праворуч від основного контенту;
* sidebar має залишатися компактним;
* блоки мають іти в порядку: Quick information → Statuses → Series preview → Quick actions.

На mobile:

* sidebar blocks переходять під основний контент;
* блоки показуються як звичайні cards;
* порядок блоків має залишатися логічним;
* layout не має вимагати горизонтального скролу.

---


---

### 7.7. Acceptance Criteria

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


## 8. Reading progress block

Reading progress block — це центральний блок на сторінці **Book Details**, який показує поточний прогрес читання конкретної книги.

Цей блок не має жити тільки в hero section або right sidebar, бо прогрес читання є однією з ключових частин сторінки деталей книги.

---

### 8.1. Purpose

Reading progress block потрібен, щоб користувач міг швидко побачити:

* скільки книги вже прочитано;
* на якій сторінці він зупинився;
* який відсоток книги завершено;
* коли читання було почато;
* коли книгу було завершено;
* коли прогрес востаннє оновлювався;
* перейти до дії **Оновити прогрес**.

---

### 8.2. Content

Блок має містити такі елементи:

| Element              | Source                 | Description                 |
| -------------------- | ---------------------- | --------------------------- |
| Progress bar         | `progressPercent`      | Візуальний прогрес читання  |
| Current page         | `currentPage`          | Поточна сторінка            |
| Total pages          | `pagesCount`           | Загальна кількість сторінок |
| Progress percent     | `progressPercent`      | Відсоток прочитаного        |
| Date started         | `startedAt`            | Дата початку читання        |
| Date finished        | `finishedAt`           | Дата завершення читання     |
| Last progress update | `lastProgressUpdateAt` | Останнє оновлення прогресу  |
| Action               | —                      | Кнопка **Оновити прогрес**  |

---

### 8.3. Progress calculation

Якщо в книги є `pagesCount` і `currentPage`, прогрес рахується автоматично:

```text
progressPercent = currentPage / pagesCount * 100
```

Rules:

* progress percent не може бути менше `0`;
* progress percent не може бути більше `100`;
* якщо `currentPage = pagesCount`, прогрес має бути `100%`;
* якщо `pagesCount` не вказано, progress percent можна не показувати.

---

### 8.4. UI example

```text
Прогрес читання

████████████████░░░░ 80%

Поточна сторінка: 256 з 320
Почала читати: 5 бер. 2024
Завершила: —
Останнє оновлення: 12 бер. 2024

[Оновити прогрес]
```

Для завершеної книги:

```text
Прогрес читання

████████████████████ 100%

Поточна сторінка: 320 з 320
Почала читати: 5 бер. 2024
Завершила: 18 бер. 2024
Останнє оновлення: 18 бер. 2024
```

---

### 8.5. Action: Оновити прогрес

У блоці має бути кнопка:

```text
Оновити прогрес
```

Behavior:

* відкриває flow оновлення прогресу;
* не змінює дані без підтвердження користувача;
* після успішного оновлення блок має одразу показати нові дані;
* hero section і right sidebar також мають оновитися;
* якщо прогрес став `100%`, книга може бути позначена як прочитана через відповідний flow.

---

### 8.6. Behavior by reading status

| Reading status | Behavior                                        |
| -------------- | ----------------------------------------------- |
| `not_started`  | показати `0%` або empty state                   |
| `want_to_read` | показати empty state, бо читання ще не почалося |
| `reading`      | показати активний прогрес                       |
| `paused`       | показати останній збережений прогрес            |
| `finished`     | показати `100%`                                 |
| `dnf`          | показати прогрес на момент припинення читання   |
| `rereading`    | показати прогрес повторного читання             |

---

### 8.7. Empty state

Якщо книга ще не має прогресу читання, показати empty state.

```text
Прогрес ще не доданий

Онови прогрес, коли почнеш читати книгу.
```

Action:

```text
Оновити прогрес
```

---

### 8.8. Missing data behavior

| Missing data                 | Behavior                                                         |
| ---------------------------- | ---------------------------------------------------------------- |
| Немає `pagesCount`           | не показувати `currentPage / totalPages`, показати тільки статус |
| Немає `currentPage`          | показати `0%` або empty state                                    |
| Немає `startedAt`            | не показувати дату початку                                       |
| Немає `finishedAt`           | не показувати дату завершення                                    |
| Немає `lastProgressUpdateAt` | не показувати поле або показати `—`                              |

---

### 8.9. What should not be here

У Reading progress block не потрібно додавати:

* повну історію всіх оновлень прогресу;
* reading calendar;
* reading goals;
* графік читання;
* нотатки до прогресу;
* повну статистику читання.

Ці дані мають бути в окремих фічах або окремих блоках.

---

### 8.10. Acceptance Criteria

* Користувач бачить Reading progress block на сторінці Book Details.
* Блок показує progress bar, якщо доступні дані для прогресу.
* Блок показує поточну сторінку і загальну кількість сторінок, якщо вони вказані.
* Блок показує progress percent.
* Блок показує дату початку читання, якщо вона є.
* Блок показує дату завершення, якщо книга прочитана.
* Блок показує дату останнього оновлення прогресу, якщо вона є.
* Користувач може натиснути **Оновити прогрес**.
* Після оновлення прогресу блок оновлює дані.
* Якщо прогресу ще немає, користувач бачить empty state.
* Відсутні optional дані не ламають layout.


## 9. Page actions logic

Page actions logic описує всі дії, які користувач може виконати з книгою на сторінці **Book Details**.

Цей розділ не є окремим UI-блоком.
Він описує, які actions доступні на сторінці, де вони показуються і як саме мають працювати.

---

### 9.1. Actions overview

| Action                        | UI location                    | Behavior                                              |
| ----------------------------- | ------------------------------ | ----------------------------------------------------- |
| Додати / прибрати з улюблених | Hero section                   | Toggle `isFavorite`                                   |
| Редагувати книгу              | Right sidebar → Quick actions  | Redirect to edit page                                 |
| Видалити книгу                | Right sidebar → Quick actions  | Open delete confirmation modal                        |
| Оновити прогрес               | Hero / Reading progress block  | Open update progress modal                            |
| Редагувати статуси            | Right sidebar → Statuses       | Open edit statuses flow                               |
| Додати в чергу читання        | Right sidebar → Quick actions  | Add book to reading queue                             |
| Прибрати з черги читання      | Right sidebar → Quick actions  | Remove book from reading queue                        |
| Додати до списку              | Right sidebar → Quick actions  | Open add to list modal                                |
| Видати комусь                 | Right sidebar → Quick actions  | Open loan modal                                       |
| Позначити як отриману         | Right sidebar → Quick actions  | Change `ownershipStatus` from `in_transit` to `owned` |
| Перейти до серії              | Right sidebar → Series preview | Redirect to series details page                       |

---

### 9.2. Favorite toggle

Action:

```text
Додати в улюблені / Прибрати з улюблених
```

UI:

* heart icon у hero section;
* якщо `isFavorite = false`, показати outline heart;
* якщо `isFavorite = true`, показати filled heart.

Logic:

* при кліку значення `isFavorite` перемикається;
* якщо книга додана в улюблені, вона з’являється на сторінці **Улюблені книги**;
* якщо книга прибрана з улюблених, вона зникає зі сторінки **Улюблені книги**;
* книга залишається в бібліотеці в обох випадках.

State update:

```ts
isFavorite: false → true
isFavorite: true → false
```

---

### 9.3. Edit book

Action:

```text
Редагувати книгу
```

UI location:

```text
Right sidebar → Quick actions
```

Behavior:

* action виконує redirect на сторінку редагування книги;
* рекомендований route:

```text
/books/:bookId/edit
```

Logic:

* форма редагування відкривається з поточними даними книги;
* після збереження користувач може повернутися на Book Details;
* після оновлення дані на Book Details мають бути актуальними.

---

### 9.4. Delete book

Action:

```text
Видалити з бібліотеки
```

UI location:

```text
Right sidebar → Quick actions
```

Behavior:

* action не видаляє книгу одразу;
* відкривається confirmation modal.

Modal:

```text
Видалити книгу?

Книга зникне з бібліотеки та пов’язаних розділів.
```

Actions:

```text
Скасувати
Видалити
```

Logic:

* **Скасувати** закриває modal без змін;
* **Видалити** виконує soft delete;
* після успішного видалення користувача потрібно повернути до бібліотеки.

Recommended redirect after delete:

```text
/library
```

Backend state:

```ts
deletedAt: Date
```

---

### 9.5. Update reading progress

Action:

```text
Оновити прогрес
```

UI locations:

* Hero section;
* Reading progress block.

Behavior:

* action відкриває modal або drawer оновлення прогресу;
* дані не змінюються без підтвердження користувача.

Modal fields:

| Field                  | Description                                                 |
| ---------------------- | ----------------------------------------------------------- |
| Поточна сторінка       | Нова поточна сторінка                                       |
| Дата оновлення         | Коли прогрес оновлено                                       |
| Позначити як прочитану | Optional checkbox, якщо поточна сторінка дорівнює загальній |

Logic:

* після збереження оновлюється `currentPage`;
* автоматично перераховується `progressPercent`;
* оновлюється `lastProgressUpdateAt`;
* якщо `currentPage = pagesCount`, можна запропонувати змінити статус на `finished`;
* hero section, Reading progress block і sidebar мають оновитися.

---

### 9.6. Edit statuses

Action:

```text
Редагувати статуси
```

UI location:

```text
Right sidebar → Statuses
```

Behavior:

* відкриває flow редагування статусів книги;
* це може бути modal, drawer або перехід у edit book form;
* для швидкого UX рекомендовано modal / drawer.

Editable fields:

| Field            | Options                                                                                  |
| ---------------- | ---------------------------------------------------------------------------------------- |
| Reading status   | `not_started`, `want_to_read`, `reading`, `paused`, `finished`, `dnf`, `rereading`       |
| Ownership status | `none`, `want_to_buy`, `in_transit`, `owned`, `borrowed_from_someone`, `lent_to_someone` |
| Formats          | `paper`, `ebook`, `audiobook`                                                            |

Logic:

* після зміни статусів оновлюється Book Details;
* якщо новий статус потребує додаткових даних, відкривається відповідний conditional flow;
* `ebook` і `audiobook` не мають бути ownership status, вони належать до `formats`.

Examples:

| Selected status         | Behavior                                           |
| ----------------------- | -------------------------------------------------- |
| `reading`               | книга з’являється як активне читання               |
| `finished`              | прогрес може стати `100%`                          |
| `want_to_buy`           | книга з’являється на сторінці **Книги до покупки** |
| `in_transit`            | відкривається flow інформації про доставку         |
| `borrowed_from_someone` | відкривається flow позики у когось                 |
| `lent_to_someone`       | відкривається flow видачі книги комусь             |

---

### 9.7. Add to reading queue

Action:

```text
Додати в чергу читання
```

UI location:

```text
Right sidebar → Quick actions
```

Behavior:

* якщо книги ще немає в reading queue, action додає її в чергу;
* книгу можна додати в кінець черги за замовчуванням;
* якщо потрібен вибір позиції, відкривається modal.

Default logic:

```text
Add book to the end of reading queue
```

After success:

* показати success message;
* action може змінитися на **Прибрати з черги читання**;
* книга з’являється на сторінці **Черга читання**.

---

### 9.8. Remove from reading queue

Action:

```text
Прибрати з черги читання
```

When to show:

```text
book is already in reading queue
```

Behavior:

* action прибирає книгу з reading queue;
* сама книга не видаляється з бібліотеки;
* після успіху action знову змінюється на **Додати в чергу читання**.

---

### 9.9. Add to custom list

Action:

```text
Додати до списку
```

UI location:

```text
Right sidebar → Quick actions
```

Behavior:

* відкриває modal вибору власного списку;
* користувач може вибрати один або кілька списків;
* якщо потрібно, користувач може створити новий список у цьому flow.

Logic:

* після підтвердження книга додається до вибраних списків;
* якщо книга вже є в списку, дубль не створюється;
* книга залишається на сторінці Book Details.

---

### 9.10. Lend book to someone

Action:

```text
Видати комусь
```

UI location:

```text
Right sidebar → Quick actions
```

Behavior:

* відкриває modal / drawer позики;
* використовується, коли користувач дає свою книгу іншій людині.

Fields:

| Field                     | Required |
| ------------------------- | -------- |
| Кому видана               | Так      |
| Дата передачі             | Ні       |
| Очікувана дата повернення | Ні       |
| Нотатка                   | Ні       |

After submit:

```ts
ownershipStatus = 'lent_to_someone'
```

Result:

* книга з’являється на сторінці **Позичені книги**;
* у sidebar оновлюється ownership status;
* якщо формат або інші поля не змінювались, вони залишаються без змін.

---

### 9.11. Mark as received

Action:

```text
Позначити як отриману
```

When to show:

```text
ownershipStatus = in_transit
```

Behavior:

* action може виконуватися через confirmation modal або одразу з optimistic update;
* для безпечнішого UX рекомендовано confirmation modal.

Modal:

```text
Позначити книгу як отриману?

Після цього книга зникне зі списку “Книги в дорозі” і залишиться у бібліотеці.
```

After confirm:

```ts
ownershipStatus: 'in_transit' → 'owned'
```

Result:

* книга зникає зі сторінки **Книги в дорозі**;
* книга залишається в **Моїй бібліотеці**;
* статус у sidebar оновлюється на **Маю**.

---

### 9.12. Go to series

Action:

```text
Перейти до серії
```

When to show:

```text
bookType = series_part
seriesId exists
```

UI location:

```text
Right sidebar → Series preview
```

Behavior:

* action виконує redirect на сторінку деталей серії;
* рекомендований route:

```text
/series/:seriesId
```

Logic:

* якщо книга не належить до серії, action не показується;
* якщо series preview не показується, action теж не показується.

---

### 9.13. Action availability rules

| Action                   | Show when                                        |
| ------------------------ | ------------------------------------------------ |
| Додати в улюблені        | `isFavorite = false`                             |
| Прибрати з улюблених     | `isFavorite = true`                              |
| Оновити прогрес          | книга має reading status, де прогрес релевантний |
| Додати в чергу читання   | книга не в reading queue                         |
| Прибрати з черги читання | книга вже в reading queue                        |
| Позначити як отриману    | `ownershipStatus = in_transit`                   |
| Видати комусь            | книга не має активного `lent_to_someone` статусу |
| Перейти до серії         | книга має `seriesId`                             |
| Видалити книгу           | книга не видалена і належить користувачу         |

---

### 9.14. Behavior after action

Після будь-якої action:

* дані Book Details мають оновитися;
* hero section має показувати актуальні дані;
* right sidebar має показувати актуальні дані;
* пов’язані сторінки мають оновитися після наступного відкриття або refetch;
* користувач має бачити success або error message.

Examples:

| Action           | UI update                              |
| ---------------- | -------------------------------------- |
| Favorite toggle  | heart icon стає filled / outline       |
| Update progress  | progress bar оновлюється               |
| Change status    | status badges оновлюються              |
| Add to queue     | action змінюється на remove from queue |
| Mark as received | ownership status стає `owned`          |
| Delete           | redirect to `/library`                 |

---

### 9.15. What is not included in this block

У цьому блоці не описуються:

* створення нотаток;
* створення цитат;
* CRUD персонажів;
* повний CRUD серій;
* повний CRUD списків;
* повна логіка доставки;
* повна логіка позик.

Тут описується тільки те, як Book Details запускає відповідні actions або flows.

---

### 9.16. Acceptance Criteria

* Користувач може додати або прибрати книгу з улюблених.
* Favorite icon змінюється на filled або outline відповідно до `isFavorite`.
* Користувач може перейти на редагування книги.
* Користувач може видалити книгу тільки після confirmation modal.
* Після видалення користувач повертається до бібліотеки.
* Користувач може оновити прогрес читання.
* Після оновлення прогресу progress bar оновлюється.
* Користувач може редагувати статуси книги.
* Після зміни статусів hero section і right sidebar оновлюються.
* Користувач може додати книгу в reading queue.
* Якщо книга вже в reading queue, користувач може прибрати її з черги.
* Користувач може додати книгу до власного списку.
* Користувач може видати книгу комусь.
* Якщо книга в дорозі, користувач може позначити її як отриману.
* Якщо книга є частиною серії, користувач може перейти до сторінки серії.
* Actions показуються тільки тоді, коли вони релевантні для поточного стану книги.
