# Delete Series — Scope and Acceptance Criteria

> Source: `delete-series.md`

## 17. What is not included

У MVP для **Delete Series** не входить:

* видалення книг із бібліотеки;
* mass delete series;
* merge duplicate series;
* restore page для видалених серій;
* trash / archive для серій;
* історія змін серії;
* автоматичне перенесення книг в іншу серію;
* вибір “видалити серію разом із книгами”;
* видалення reading progress книг;
* видалення notes / quotes / characters книг;
* видалення книг із Reading Queue;
* видалення книг із Custom Lists;
* видалення книг із Favorites;
* автоматичне створення нової серії для відв’язаних книг.

Important:

```text
У MVP Delete Series видаляє тільки серію.
Книги залишаються в бібліотеці.
```

---


## 18. Acceptance Criteria

### Entry points

* Користувач може запустити Delete Series flow зі Series Details Page.
* Delete action доступний через More menu або secondary actions.
* Delete action не показується як основна primary button у hero section.
* Delete action доступний тільки для серій поточного користувача.

### Confirmation

* Перед видаленням користувач бачить confirmation modal.
* Якщо серія має книги, modal пояснює, що книги залишаться у бібліотеці.
* Якщо серія має книги, modal показує кількість книг у серії.
* Користувач може скасувати видалення.
* Якщо користувач скасовує дію, серія не видаляється.

### Delete empty series

* Користувач може видалити серію без книг.
* Після видалення порожня серія зникає з All Series Page.
* Після видалення користувач перенаправляється на `/series`.

### Delete series with books

* Користувач може видалити серію, яка має книги.
* Після видалення серія зникає з All Series Page.
* Після видалення Series Details Page більше недоступна.
* Книги з видаленої серії залишаються в бібліотеці.
* У книг очищується зв’язок із серією.
* У книг очищується partNumber у межах цієї серії.

### Book data safety

* Reading status книг не змінюється.
* Ownership status книг не змінюється.
* Rating книг не змінюється.
* Notes книг не видаляються.
* Quotes книг не видаляються.
* Characters книг не видаляються.
* Book covers не видаляються.
* Книги залишаються в Reading Queue, якщо були там.
* Книги залишаються у Custom Lists, якщо були там.
* Книги залишаються favorite, якщо були favorite.

### Missing books

* Missing book rows видаляються разом із серією.
* Видалення missing book rows не впливає на реальні книги в бібліотеці.

### UI updates

* Після видалення оновлюється All Series Page.
* Після видалення оновлюються header summary cards.
* Після видалення оновлюється right sidebar на All Series Page.
* Якщо це була остання серія, показується empty state.
* Якщо користувач відкриває старий URL видаленої серії, показується not found state.

### States

* Під час видалення показується loading state.
* Під час loading користувач не може повторно натиснути delete.
* Після успішного видалення показується success state.
* Якщо видалення не вдалося, показується error state.
* Error state дозволяє повторити дію.

### Scope

* Delete Series видаляє тільки серію.
* Delete Series не видаляє книги з бібліотеки.
* Delete Series не змінює readingStatus книг.
* Delete Series не змінює ownershipStatus книг.
* Delete Series не видаляє notes, quotes, characters або ratings книг.
* Delete Series не видаляє книги з Reading Queue.
* Delete Series не видаляє книги з Custom Lists.
* Delete Series не підтримує mass delete у MVP.
* Delete Series не підтримує restore page у MVP.
