# Page Acceptance Criteria

> Source: `favorites-page.md §19`

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
