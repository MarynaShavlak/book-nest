# Favorite Toggle Acceptance Criteria

> Source: `favorite-book-toggle.md §20`

## 20. Acceptance Criteria

* Користувач бачить heart icon на Book Details.
* Користувач бачить heart icon на book card у My Library.
* Якщо `isFavorite = false`, показується outline heart.
* Якщо `isFavorite = true`, показується filled heart.
* Користувач може додати книгу в улюблені одним кліком.
* Користувач може прибрати книгу з улюблених одним кліком.
* Favorite toggle не відкриває confirmation modal.
* Favorite toggle не змінює `readingStatus`.
* Favorite toggle не змінює `ownershipStatus`.
* Favorite toggle не змінює `formats`.
* Після додавання в улюблені книга з’являється на Favorites page.
* Після прибирання з улюблених книга зникає з Favorites page.
* Якщо active filter = “Улюблені”, після remove from favorites книга зникає з поточного списку.
* Summary card **Улюблених** оновлюється після toggle.
* Якщо сталася помилка, UI повертається до попереднього стану.
* Користувач не може змінити favorite status чужої або видаленої книги.
