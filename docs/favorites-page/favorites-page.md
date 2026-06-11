# Feature: Улюблені книги

## 1. Purpose

Сторінка **“Улюблені книги”** — це окремий розділ BookNest, де користувач бачить усі книги, які він позначив як улюблені.

Фіча потрібна, щоб користувач міг швидко повернутися до книг, які найбільше сподобались, мають особливе значення або які він хоче швидко знаходити серед усієї бібліотеки.

---

### 1.1. What this feature allows users to do

Користувач може:

- переглядати всі книги, позначені як улюблені;
- швидко знаходити улюблену книгу через пошук;
- фільтрувати улюблені книги за статусом читання, форматом, жанрами, тегами, автором, видавництвом та іншими параметрами;
- сортувати улюблені книги;
- перемикати вигляд між `grid` та `list`;
- переходити до детальної сторінки книги;
- прибирати книгу з улюблених без видалення її з бібліотеки;
- повертати книгу в улюблені через undo toast, якщо дія була випадковою.

---

### 1.2. Why this feature is important

**Улюблені книги** — це персональна добірка найцінніших книг користувача.

Сторінка допомагає:

- не губити книги, які користувач хоче швидко знайти;
- відокремити особливо важливі книги від усієї бібліотеки;
- швидко переглядати улюблені книги за жанрами, рейтингом або статусом читання;
- повернутися до книги без повторного пошуку в загальній бібліотеці.

---

### 1.3. Main difference from My Library

Сторінка **“Моя бібліотека”** показує всі активні книги користувача.

Сторінка **“Улюблені книги”** показує тільки книги, де:

```text
isFavorite = true
```

Important:

- улюблена книга залишається частиною загальної бібліотеки;
- прибирання книги з улюблених не видаляє книгу з BookNest;
- `isFavorite` не є reading status або ownership status.

---

## 2. Page entry point

Сторінка має бути доступна з основної навігації застосунку.

---

### 2.1. Sidebar navigation

У sidebar має бути пункт меню:

```text
Улюблені
```

Рекомендована позиція в sidebar:

```text
Головна
Моя бібліотека
Серії
Черга читання
Списки
Книги до покупки
Книги в дорозі
Позичені книги
Улюблені
Нотатки
Цитати
Статистика
Налаштування
```

Пункт **“Улюблені”** веде на сторінку улюблених книг.

---

### 2.2. Route

Рекомендований route:

```text
/favorites
```

Альтернативний варіант:

```text
/favorite-books
```

Рекомендований варіант для BookNest:

```text
/favorites
```

Причина: route короткий, зрозумілий і добре підходить для сторінки улюблених книг.

---

### 2.3. Page access rules

Сторінка доступна тільки авторизованому користувачу.

Якщо користувач не авторизований:

- він не має бачити сторінку улюблених книг;
- його потрібно перенаправити на login page;
- після успішного login можна повернути його назад на `/favorites`.

---

### 2.4. User scope

Користувач має бачити тільки свої улюблені книги.

На сторінці не мають відображатися:

- книги інших користувачів;
- видалені книги;
- книги, де `isFavorite = false`;
- чужі списки, серії, теги або custom-дані.

Базова умова для сторінки:

```text
userId = currentUser.id
isFavorite = true
deletedAt = null
```

---

### 2.5. URL behavior

Сторінка має підтримувати query params для:

- search;
- quick filters;
- advanced filters;
- sorting;
- view mode.

Приклади:

```text
/favorites?search=wing
/favorites?readingStatus=finished
/favorites?format=ebook
/favorites?sort=favoriteAddedAt_desc
/favorites?view=grid
```

Це потрібно, щоб:

- користувач міг оновити сторінку і не втратити фільтри;
- browser history працював очікувано;
- посилання на відфільтровану сторінку було стабільним.

---

### 2.6. Acceptance Criteria

- У sidebar є пункт **Улюблені**.
- Пункт **Улюблені** веде на сторінку `/favorites`.
- Сторінка доступна тільки авторизованому користувачу.
- Користувач бачить тільки свої книги.
- На сторінці показуються тільки книги з `isFavorite = true`.
- Видалені книги не відображаються.
- URL підтримує query params для search, filters, sorting і view mode.
- Після reload сторінки активні query params відновлюються.

---

## 3. What books are displayed

На сторінці **“Улюблені книги”** відображаються тільки активні книги поточного користувача, які позначені як улюблені.

Книга потрапляє на сторінку після того, як користувач натискає heart icon на:

- картці книги в **Моїй бібліотеці**;
- сторінці **Book Details**;
- іншій сторінці, де доступний favorite toggle.

---

### 3.1. Inclusion rules

Книга показується на сторінці, якщо:

```text
isFavorite = true
```

і:

```text
deletedAt = null
```

і:

```text
userId = currentUser.id
```

---

### 3.2. Exclusion rules

Книга не показується на сторінці, якщо:

- `isFavorite = false`;
- книга видалена;
- книга належить іншому користувачу;
- користувач не авторизований.

---

### 3.3. Favorite added date

Для коректного сортування улюблених книг потрібно зберігати дату додавання в улюблені:

```ts
favoriteAddedAt?: string | null;
```

Recommended logic:

```text
isFavorite: false → true
favoriteAddedAt = currentDate
```

```text
isFavorite: true → false
favoriteAddedAt = null
```

Для MVP краще очищати `favoriteAddedAt`, коли книгу прибрали з улюблених, бо сторінка показує тільки активні улюблені книги.

---

## 4. Page header

Page header сторінки **“Улюблені книги”** має показувати назву сторінки, короткий опис, кількість улюблених книг і коротку статистику.

---

### 4.1. Header content

| Element | Description |
|---|---|
| Title | Назва сторінки |
| Subtitle | Короткий опис сторінки |
| Count badge | Кількість улюблених книг |
| Summary cards | Коротка статистика по улюблених книгах |

---

### 4.2. Title

```text
Улюблені книги
```

---

### 4.3. Subtitle

```text
Книги, які ти позначила як особливо улюблені
```

---

### 4.4. Count badge

Поруч із title або під subtitle потрібно показувати кількість улюблених книг.

Example:

```text
24 книги
```

Logic:

```text
favoriteCount = count of books where isFavorite = true and deletedAt = null
```

---

### 4.5. Header actions

На сторінці **“Улюблені книги”** не потрібно робити primary action **+ Додати книгу**.

Причина: книга додається в улюблені через favorite toggle, а не створюється напряму на цій сторінці.

Recommended secondary action:

```text
Перейти до бібліотеки
```

Behavior:

- веде на `/library`;
- не створює книгу;
- не змінює favorite status.

---

### 4.6. Summary cards

Рекомендовані summary cards:

| Card | Logic |
|---|---|
| Усього улюблених | `isFavorite = true` |
| Прочитано | `isFavorite = true` + `readingStatus = finished` |
| Читаю | `isFavorite = true` + `readingStatus = reading` або `rereading` |
| Середній рейтинг | average rating серед улюблених книг з rating |

---

### 4.7. Summary cards behavior

- cards мають бути інформаційними;
- cards не мають бути клікабельними;
- cards рахують тільки активні книги поточного користувача;
- видалені книги не враховуються;
- cards оновлюються після favorite toggle, зміни reading status, rating або видалення книги.

---

## 5. Favorites toolbar

Toolbar сторінки **“Улюблені книги”** — це панель керування списком улюблених книг.

Вона розташована під page header і над списком книг.

---

### 5.1. Toolbar elements

| Element | Type | Description |
|---|---|---|
| Search | Input | Пошук серед улюблених книг |
| Filters | Button | Відкриває advanced filters |
| Sort | Dropdown | Змінює порядок книг |
| View mode | Toggle | Перемикає `grid` / `list` |
| Results count | Text | Показує кількість знайдених результатів |
| Clear all | Button / Link | Очищає search і filters |

---

### 5.2. Recommended layout

```text
[ Пошук в улюблених... ] [ Фільтри ] [ Сортувати ] [ Grid/List ]  24 книги
```

Якщо активні search або filters:

```text
[ Пошук в улюблених... ] [ Фільтри • 3 ] [ Сортувати ] [ Grid/List ]  Знайдено 8 з 24  [ Очистити все ]
```

---

### 5.3. Basic behavior

- search шукає тільки серед улюблених книг;
- filters застосовуються тільки до набору `isFavorite = true`;
- sort змінює порядок улюблених книг;
- view mode змінює тільки вигляд;
- results count оновлюється після search або filters;
- **Очистити все** показується тільки якщо є активний search або filters.

---

## 6. Search

Search на сторінці **“Улюблені книги”** потрібен, щоб користувач міг швидко знайти книгу серед улюблених.

---

### 6.1. Search input

Placeholder:

```text
Пошук в улюблених...
```

Search має працювати тільки по активних книгах поточного користувача з `isFavorite = true`.

---

### 6.2. Search fields

Пошук має працювати за такими полями:

| Field | Priority |
|---|---:|
| Назва книги | High |
| Оригінальна назва | High |
| Автор | High |
| Назва серії | High |
| Видавництво | Medium |
| Жанри | Medium |
| Теги | Medium |
| ISBN | Medium |

---

### 6.3. What search should not include

Search не має шукати по:

- нотатках;
- цитатах;
- персонажах;
- службових полях;
- опису серії;
- присвяті.

Ці дані належать до окремих фіч.

---

### 6.4. Search behavior

- пошук не чутливий до регістру;
- зайві пробіли на початку і в кінці ігноруються;
- кілька пробілів всередині запиту сприймаються як один;
- пошук працює по частковому збігу;
- search працює разом із quick filters та advanced filters;
- після зміни search query потрібно скидати loaded items на першу порцію.

Recommended debounce:

```text
300ms
```

Minimum query length:

```text
2 символи
```

---

### 6.5. URL query behavior

Search query має зберігатися в URL:

```text
/favorites?search=крило
```

Після reload сторінки search input має відновити значення з URL.

---

## 7. Quick filters

Quick filters — це короткі chips під toolbar, які дають швидкий доступ до найчастіших сценаріїв перегляду улюблених книг.

Important:

```text
isFavorite = true — це базова умова сторінки, а не quick filter.
```

---

### 7.1. Recommended quick filters for MVP

| Chip | Query logic |
|---|---|
| Усі | без quick filter |
| Читаю | `readingStatus = reading` або `rereading` |
| Хочу прочитати | `readingStatus = want_to_read` |
| Прочитано | `readingStatus = finished` |
| Не почато | `readingStatus = not_started` |
| З високим рейтингом | `rating >= 4` |

---

### 7.2. What not to include as quick filters

Не потрібно додавати як quick filters:

- жанри;
- авторів;
- видавництва;
- формати;
- ownership status;
- конкретні серії;
- чергу читання;
- власні списки.

Ці параметри мають бути в advanced filters або на окремих сторінках.

---

### 7.3. Quick filters behavior

- одночасно може бути активний тільки один quick filter;
- quick filter комбінується з search;
- quick filter комбінується з advanced filters;
- chip **Усі** прибирає тільки quick filter;
- **Очистити все** прибирає search, quick filter і advanced filters;
- активний quick filter має зберігатися в URL.

Example:

```text
/favorites?quickFilter=finished
```

---

## 8. Advanced filters

Advanced filters дозволяють точніше відфільтрувати улюблені книги.

Фільтри застосовуються тільки до книг, які вже відповідають базовій умові:

```text
isFavorite = true
```

---

### 8.1. Recommended filters

| Filter | Type | Logic |
|---|---|---|
| Статус читання | Multi-select | Фільтр за `readingStatus` |
| Статус володіння | Multi-select | Фільтр за `ownershipStatus` |
| Формат книги | Multi-select | Фільтр за `formats` |
| Жанри | Multi-select / Autocomplete | Фільтр за `genreIds` |
| Теги | Multi-select / Autocomplete | Фільтр за `tagIds` |
| Вікова категорія | Select / Multi-select | Фільтр за `ageCategory` |
| Мова книги | Select / Multi-select | Фільтр за `language` |
| Автор | Autocomplete | Фільтр за `authorId` |
| Видавництво | Autocomplete | Фільтр за `publisherId` |
| Тип книги | Select | Усі / Соло / Частина серії |
| Рейтинг | Range / Select | Фільтр за `rating` |
| Рік видання | Range | Фільтр за `publicationYear` |
| Кількість сторінок | Range | Фільтр за `pagesCount` |
| Наявність обкладинки | Select | Є обкладинка / Немає обкладинки |

---

### 8.2. Filters that should not be included

Не додавати:

| Filter | Reason |
|---|---|
| Улюблені / isFavorite | це базова умова сторінки |
| У черзі читання | для цього є сторінка **Черга читання** |
| Власні списки | для цього є сторінка **Списки** |
| Конкретна серія | для цього є сторінка **Серії** |
| Статус серії | це фільтр для сторінки серій |
| Статус доставки | це логіка сторінки **Книги в дорозі** |
| Прострочені позики | це логіка сторінки **Позичені книги** |
| Нотатки | окрема Notes feature |
| Цитати | окрема Quotes feature |
| Персонажі | окрема Characters feature |

---

### 8.3. Filter behavior

- filters працюють разом із search;
- filters працюють разом із quick filter;
- фільтри з різних груп комбінуються через `AND`;
- кілька значень всередині одного фільтра комбінуються через `OR`;
- після зміни filters loaded items скидаються на першу порцію;
- активні filters показуються в Active filters bar;
- filters зберігаються в URL query params.

---

## 9. Active filters bar

Active filters bar показує search, quick filter і advanced filters як chips.

---

### 9.1. When to show

Active filters bar показується, якщо активний хоча б один параметр:

- search query;
- quick filter;
- advanced filter.

Якщо активних параметрів немає, блок не показується.

---

### 9.2. What to show

Example:

```text
Пошук: крило ×
Прочитано ×
Fantasy ×
Паперова ×
Рейтинг від 4 ×
Очистити все
```

---

### 9.3. Remove one filter

Користувач може прибрати окремий chip через `×`.

Logic:

- прибирається тільки відповідний параметр;
- інші активні параметри залишаються;
- список оновлюється;
- URL query params оновлюються.

---

### 9.4. Clear all

Дія:

```text
Очистити все
```

Logic:

- очищає search;
- очищає quick filter;
- очищає advanced filters;
- не змінює sorting;
- не змінює view mode;
- скидає loaded items на першу порцію.

---

## 10. Sorting

Sorting керує порядком відображення улюблених книг.

Sorting не змінює набір книг, а тільки порядок після застосування search і filters.

---

### 10.1. Default sorting

Default sorting:

```text
Нещодавно додані в улюблені
```

Logic:

```text
favoriteAddedAt DESC
```

Якщо `favoriteAddedAt` відсутній, fallback:

```text
createdAt DESC
```

---

### 10.2. Recommended sorting options

| Option | Logic |
|---|---|
| Нещодавно додані в улюблені | `favoriteAddedAt DESC` |
| Давно додані в улюблені | `favoriteAddedAt ASC` |
| Найвищий рейтинг | `rating DESC` |
| Найнижчий рейтинг | `rating ASC` |
| Назва А–Я | `title ASC` |
| Назва Я–А | `title DESC` |
| Автор А–Я | `authorName ASC` |
| Автор Я–А | `authorName DESC` |
| Нещодавно додані в бібліотеку | `createdAt DESC` |
| Нещодавно оновлені | `updatedAt DESC` |
| Новіші видання | `publicationYear DESC` |
| Старіші видання | `publicationYear ASC` |
| Більше сторінок | `pagesCount DESC` |
| Менше сторінок | `pagesCount ASC` |

---

### 10.3. Sorting behavior

- sorting застосовується після search і filters;
- sorting не очищає search;
- sorting не очищає filters;
- sorting не змінює view mode;
- після зміни sorting loaded items скидаються на першу порцію;
- sorting зберігається в URL.

Example:

```text
/favorites?sort=favoriteAddedAt_desc
```

---

## 11. View modes

View mode змінює тільки те, як візуально відображаються улюблені книги.

---

### 11.1. Available view modes

| View mode | Description |
|---|---|
| `grid` | Книги показуються як картки |
| `list` | Книги показуються як компактний список |

---

### 11.2. Default view mode

Default view mode:

```text
grid
```

---

### 11.3. View mode behavior

- користувач може перемикатися між `grid` і `list`;
- view mode не очищає search;
- view mode не очищає filters;
- view mode не змінює sorting;
- view mode не скидає loaded items;
- view mode може зберігатися як user preference;
- view mode може зберігатися в URL.

Example:

```text
/favorites?view=list
```

---

## 12. Favorite book card / row

Книга на сторінці **“Улюблені книги”** може відображатися як card у grid view або як row у list view.

---

### 12.1. What to show

На card / row потрібно показувати:

- cover або placeholder;
- title;
- author;
- publisher, якщо є;
- genres або tags;
- rating, якщо є;
- reading status;
- ownership status;
- formats;
- filled heart icon;
- action to open Book Details;
- `...` menu з додатковими діями.

---

### 12.2. What not to show in MVP

Не показувати в MVP:

- позицію в списку;
- drag handle;
- рівень улюбленості;
- коментар “чому ця книга улюблена”;
- кнопку share.

Ці можливості можна додати пізніше.

---

### 12.3. Visible actions

| Action | UI | Logic |
|---|---|---|
| Open book details | click on card / title / cover | відкриває Book Details |
| Remove from favorites | filled heart icon | `isFavorite: true → false` |
| More actions | `...` menu | відкриває додаткові дії |

---

### 12.4. More actions menu

Recommended actions:

- Переглянути книгу;
- Редагувати книгу;
- Оновити прогрес;
- Додати в чергу читання;
- Додати до списку;
- Прибрати з улюблених.

Destructive delete action краще не робити основною дією на сторінці улюблених. Якщо вона є в menu, її потрібно візуально відділити й показати confirmation modal.

---

## 13. Remove from favorites logic

Користувач може прибрати книгу з улюблених зі сторінки **“Улюблені книги”**.

---

### 13.1. Trigger

Trigger:

```text
filled heart icon
```

або menu action:

```text
Прибрати з улюблених
```

---

### 13.2. Behavior

Після кліку:

```text
isFavorite: true → false
favoriteAddedAt = null
```

Result:

- книга зникає зі сторінки **Улюблені книги**;
- книга залишається в **Моїй бібліотеці**;
- книга не видаляється;
- reading status не змінюється;
- ownership status не змінюється;
- formats не змінюються.

---

### 13.3. Confirmation

Confirmation modal не потрібна для MVP.

Причина:

- дія не є destructive;
- книгу легко повернути в улюблені;
- confirmation сповільнює взаємодію.

---

### 13.4. Toast with Undo

Після remove показати toast:

```text
Книгу прибрано з улюблених
```

Toast action:

```text
Скасувати
```

Undo behavior:

```text
isFavorite: false → true
favoriteAddedAt = currentDate
```

Result:

- книга повертається на сторінку **Улюблені книги**;
- count і summary cards оновлюються;
- active filters залишаються.

---

### 13.5. Optimistic UI

Recommended behavior:

```text
Click → optimistic UI update → save in background
```

If success:

- UI залишається оновленим.

If error:

- повернути попередній стан;
- показати error message;
- книга не має зникати остаточно.

Error message:

```text
Не вдалося оновити улюблене
```

---

## 14. States

States описують, що користувач бачить у різних ситуаціях.

---

### 14.1. States overview

| State | When to show |
|---|---|
| Loading | Дані ще завантажуються |
| Empty favorites | У користувача немає жодної улюбленої книги |
| No search results | Search активний, але нічого не знайдено |
| No filtered results | Filters активні, але результатів немає |
| Error | Дані не вдалося завантажити або оновити |

---

### 14.2. Loading state

When:

```text
isLoading = true
```

UI:

- skeleton для header / summary cards;
- skeleton для toolbar;
- skeleton для cards або rows.

---

### 14.3. Empty favorites state

When:

```text
favoriteCount = 0
search is empty
filters are empty
```

Title:

```text
Улюблених книг поки немає
```

Description:

```text
Натисни серце на книзі, яка тобі особливо сподобалась, і вона з’явиться тут.
```

Action:

```text
Перейти до бібліотеки
```

Behavior:

- action веде на `/library`;
- цей state не показується, якщо улюблені є, але приховані через search або filters.

---

### 14.4. No search results state

When:

```text
favoriteCount > 0
search is active
filters are empty
resultsCount = 0
```

Title:

```text
Нічого не знайдено
```

Description:

```text
Спробуй змінити пошуковий запит або очистити пошук.
```

Action:

```text
Очистити пошук
```

---

### 14.5. No filtered results state

When:

```text
favoriteCount > 0
filters are active
resultsCount = 0
```

Title:

```text
Немає улюблених книг за вибраними фільтрами
```

Description:

```text
Спробуй змінити фільтри або очистити їх, щоб побачити більше книг.
```

Actions:

```text
Очистити фільтри
Очистити все
```

---

### 14.6. Error state

Title:

```text
Не вдалося завантажити улюблені книги
```

Description:

```text
Спробуй оновити сторінку або повторити запит трохи пізніше.
```

Action:

```text
Спробувати ще раз
```

---

### 14.7. State priority

Якщо одночасно можливі кілька states, застосовується такий порядок:

```text
1. Loading
2. Error
3. Empty favorites
4. No search results
5. No filtered results
6. Default books list
```

---

## 15. Pagination / Load more

Для сторінки **“Улюблені книги”** використовується підхід **Load more**.

---

### 15.1. Initial load

Initial load:

```text
24 books
```

Користувач бачить першу порцію улюблених книг.

---

### 15.2. Load more button

Якщо є ще книги для показу, під списком показується кнопка:

```text
Показати ще
```

Після кліку підвантажується наступна порція:

```text
+24 books
```

---

### 15.3. Results counter

Потрібно показувати:

```text
Показано 24 з 86
```

Якщо активні search або filters:

```text
Показано 24 з 38 знайдених
```

---

### 15.4. Reset behavior

Loaded items скидаються на першу порцію після зміни:

- search;
- quick filter;
- advanced filters;
- sorting.

Loaded items не скидаються після зміни:

- view mode;
- favorite toggle, якщо книга залишається в результатах;
- відкриття/закриття menu.

---

### 15.5. URL behavior

Search, filters, sorting і view mode можуть зберігатися в URL.

Loaded count / offset не потрібно зберігати в URL для MVP.

---

## 16. Data model / View model

---

### 16.1. Book model fields

```ts
type Book = {
  id: string;
  userId: string;

  title: string;
  originalTitle?: string;
  authorName: string;
  publisherName?: string;
  coverUrl?: string;

  isFavorite: boolean;
  favoriteAddedAt?: string | null;

  rating?: number;
  readingStatus: ReadingStatus;
  ownershipStatus: OwnershipStatus;
  formats: BookFormat[];

  genreIds: string[];
  tagIds: string[];
  seriesId?: string | null;

  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
};
```

---

### 16.2. Favorite book item view model

```ts
type FavoriteBookItem = {
  id: string;
  title: string;
  originalTitle?: string;
  authorName: string;
  publisherName?: string;
  coverUrl?: string;

  genres: string[];
  tags: string[];

  rating?: number;
  readingStatus: ReadingStatus;
  ownershipStatus: OwnershipStatus;
  formats: BookFormat[];

  isFavorite: true;
  favoriteAddedAt?: string | null;
};
```

---

## 17. MVP Scope

У MVP входить:

- sidebar пункт **Улюблені**;
- route `/favorites`;
- показ тільки книг з `isFavorite = true`;
- title, subtitle, count badge;
- summary cards;
- search;
- quick filters;
- advanced filters;
- sorting;
- grid / list view;
- favorite book cards / rows;
- filled heart icon;
- remove from favorites без confirmation modal;
- toast з Undo;
- empty favorites state;
- no search results state;
- no filtered results state;
- loading state;
- error state;
- Load more.

---

## 18. Future improvements

Не входить в MVP, але можна додати пізніше:

- drag-and-drop сортування улюблених книг;
- ручний порядок улюблених книг;
- позиція книги в списку;
- добірки з улюблених;
- поділитися добіркою;
- топ улюблених авторів;
- топ улюблених жанрів;
- улюблені цитати на основі улюблених книг;
- річний список “Мої улюблені книги року”;
- коментар “чому ця книга улюблена”;
- рівень улюбленості 1–5 сердець.

---

## 19. Acceptance Criteria

### General

- Користувач може відкрити сторінку **Улюблені книги**.
- Сторінка доступна тільки авторизованому користувачу.
- Користувач бачить тільки свої книги.
- На сторінці показуються тільки книги з `isFavorite = true`.
- Книги з `isFavorite = false` не показуються.
- Видалені книги не показуються.

---

### Header

- На сторінці є title **Улюблені книги**.
- На сторінці є subtitle.
- На сторінці показується count badge з кількістю улюблених книг.
- На сторінці є summary cards.
- Summary cards рахують тільки активні улюблені книги поточного користувача.
- Summary cards не є клікабельними.

---

### Search and filters

- Користувач може шукати серед улюблених книг.
- Search працює за назвою книги.
- Search працює за автором.
- Search працює за серією.
- Search працює за видавництвом, жанрами, тегами та ISBN.
- Користувач може використовувати quick filters.
- Одночасно активний тільки один quick filter.
- Користувач може відкрити advanced filters.
- Advanced filters застосовуються тільки до улюблених книг.
- Active filters bar показує активні параметри.
- Користувач може очистити один filter chip.
- Користувач може натиснути **Очистити все**.

---

### Sorting and view mode

- За замовчуванням улюблені книги сортуються за `favoriteAddedAt DESC`.
- Користувач може змінити sorting.
- Sorting працює разом із search і filters.
- Користувач може перемикати `grid` / `list`.
- View mode не очищає search, filters або sorting.

---

### Book cards

- Кожна улюблена книга має card або row.
- Користувач бачить cover, title і author.
- Користувач бачить reading status.
- Користувач бачить ownership status.
- Користувач бачить format badges, якщо вони є.
- Улюблена книга має filled heart icon.
- Користувач може перейти до Book Details.

---

### Remove from favorites

- Користувач може прибрати книгу з улюблених через heart icon.
- Confirmation modal не показується.
- Після remove книга зникає зі сторінки **Улюблені книги**.
- Після remove книга залишається в **Моїй бібліотеці**.
- Після remove `readingStatus` не змінюється.
- Після remove `ownershipStatus` не змінюється.
- Після remove `formats` не змінюються.
- Після remove показується toast **Книгу прибрано з улюблених**.
- У toast є action **Скасувати**.
- Після Undo книга повертається на сторінку **Улюблені книги**.

---

### States

- Під час завантаження користувач бачить loading state.
- Якщо улюблених книг немає, показується empty favorites state.
- Empty state має action **Перейти до бібліотеки**.
- Якщо search активний і нічого не знайдено, показується no search results state.
- Якщо filters активні і результатів немає, показується no filtered results state.
- Якщо сталася помилка, показується error state.

---

### Load more

- Сторінка показує першу порцію улюблених книг.
- Якщо є ще книги, показується button **Показати ще**.
- Після натискання завантажується наступна порція.
- На сторінці показується counter **Показано X з Y**.
- Після зміни search, filters або sorting loaded items скидаються на першу порцію.
