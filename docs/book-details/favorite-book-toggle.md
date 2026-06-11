# Feature: Favorite Toggle

## 1. Purpose

Feature **Favorite Toggle** дозволяє користувачу швидко додавати книгу в улюблені або прибирати її з улюблених.

Фіча працює через boolean-поле:

```text id="n3pc5d"
isFavorite: false ↔ true
```

Це не окремий статус книги, а швидка персональна позначка користувача.

---

## 2. Main logic

Книга може бути:

```text id="aggau6"
isFavorite = true
```

або:

```text id="5df3m7"
isFavorite = false
```

Логіка перемикання:

| Current value | User action           | New value |
| ------------- | --------------------- | --------- |
| `false`       | Add to favorites      | `true`    |
| `true`        | Remove from favorites | `false`   |

---

## 3. What is not included

Ця фіча не змінює:

* `readingStatus`;
* `ownershipStatus`;
* `formats`;
* `currentPage`;
* `progressPercent`;
* series data;
* purchase / delivery / loan data.

Important:

```text id="kkclg4"
Улюблена книга ≠ прочитана книга
Улюблена книга ≠ книга, яка є у користувача
Улюблена книга ≠ книга у списку покупок
```

Користувач може додати в улюблені будь-яку книгу зі своєї бібліотеки незалежно від її статусів.

---

## 4. Entry points

Favorite action має бути доступна у кількох місцях.

| Entry point         | UI element                                                |
| ------------------- | --------------------------------------------------------- |
| Book Details        | Heart icon у hero section                                 |
| My Library          | Heart icon на book card                                   |
| Search results      | Heart icon на book card                                   |
| Favorites page      | Heart icon або action “Прибрати з улюблених”              |
| Custom list details | Heart icon на book card                                   |
| Reading Queue       | Heart icon на book card, якщо там показуються картки книг |
| Series details      | Heart icon на book card                                   |

---

## 5. UI representation

Favorite status показується через heart icon.

| State                | Icon          |
| -------------------- | ------------- |
| `isFavorite = false` | outline heart |
| `isFavorite = true`  | filled heart  |

Recommended labels:

```text id="rsb5yr"
Додати в улюблені
Прибрати з улюблених
```

Tooltip behavior:

| State   | Tooltip              |
| ------- | -------------------- |
| `false` | Додати в улюблені    |
| `true`  | Прибрати з улюблених |

---

## 6. Book Details behavior

На сторінці **Book Details** favorite action має бути в hero section біля назви книги або в зоні основних actions.

Recommended location:

```text id="xhcbnk"
Book Details → Hero section → Heart icon
```

Behavior:

* якщо книга не улюблена, показується outline heart;
* якщо книга улюблена, показується filled heart;
* при кліку значення `isFavorite` змінюється на протилежне;
* сторінка не перезавантажується;
* користувач залишається на Book Details.

---

## 7. My Library behavior

На сторінці **My Library** favorite action має бути на кожній book card.

Recommended location:

```text id="mnwdmo"
Book card → top right corner → Heart icon
```

Behavior:

* клік по heart icon не має відкривати Book Details;
* клік змінює тільки favorite status;
* card залишається на місці, якщо немає active favorite filter;
* якщо active filter = “Улюблені”, після remove from favorites card має зникнути з результатів.

---

## 8. Favorites page behavior

Сторінка **Favorites** показує тільки книги:

```text id="g8m9qm"
isFavorite = true
```

На цій сторінці користувач може прибрати книгу з улюблених.

Behavior after removing from favorites:

* книга зникає зі сторінки Favorites;
* книга не видаляється з бібліотеки;
* книга залишається доступною на My Library;
* показується success message.

Success message:

```text id="kzp7eb"
Книгу прибрано з улюблених
```

---

## 9. Toggle behavior

Favorite toggle має працювати швидко, без confirmation modal.

Recommended behavior:

```text id="jfohi5"
Click → optimistic UI update → save in background
```

Meaning:

* UI одразу змінює heart icon;
* система відправляє зміну;
* якщо запит успішний, UI залишається оновленим;
* якщо сталася помилка, UI повертається до попереднього стану.

---

## 10. Add to favorites logic

When:

```text id="k9lxgn"
isFavorite = false
```

User clicks heart icon.

System behavior:

1. змінити icon на filled heart;
2. встановити `isFavorite = true`;
3. оновити Book Details / card UI;
4. оновити Favorites count;
5. книга має з’явитися на Favorites page.

Success message, optional:

```text id="p4erhl"
Книгу додано в улюблені
```

---

## 11. Remove from favorites logic

When:

```text id="5lzxoh"
isFavorite = true
```

User clicks heart icon.

System behavior:

1. змінити icon на outline heart;
2. встановити `isFavorite = false`;
3. оновити Book Details / card UI;
4. оновити Favorites count;
5. книга має зникнути з Favorites page.

Success message, optional:

```text id="poa4z6"
Книгу прибрано з улюблених
```

---

## 12. Summary cards behavior

Якщо на сторінці є summary card **Улюблених**, вона має оновлюватися після favorite toggle.

Example:

```text id="u3qqp6"
Було: Улюблених 12
Додали книгу в улюблені
Стало: Улюблених 13
```

або:

```text id="03p278"
Було: Улюблених 12
Прибрали книгу з улюблених
Стало: Улюблених 11
```

---

## 13. Filters behavior

Favorite може використовуватись у quick filters або advanced filters.

### If favorite filter is not active

Після toggle книга залишається у списку.

### If favorite filter is active

Якщо користувач знаходиться у фільтрі:

```text id="17drr0"
Улюблені
```

і прибирає книгу з улюблених:

* книга має зникнути з поточного списку;
* result count має оновитися;
* якщо більше немає улюблених книг, показати empty state.

---

## 14. Empty state for Favorites

Якщо у користувача немає улюблених книг, показати empty state.

Title:

```text id="u6ymd4"
Улюблених книг ще немає
```

Description:

```text id="7f4ni5"
Додавайте книги в улюблені, щоб швидко знаходити їх тут.
```

Primary action:

```text id="fom9qp"
Перейти до бібліотеки
```

---

## 15. Loading behavior

Під час збереження favorite toggle:

* heart icon може мати disabled state;
* повторний клік по тому самому icon блокується до завершення запиту;
* не потрібно показувати global loader;
* можна показати маленький spinner або просто тимчасово disabled icon.

Recommended:

```text id="9cswaj"
Disable only clicked heart icon
```

---

## 16. Error behavior

Якщо favorite status не вдалося оновити:

* повернути попередній стан icon;
* показати error message;
* не змінювати counters;
* не прибирати книгу зі списку.

Error message:

```text id="yiio1q"
Не вдалося оновити улюблене
```

Example:

```text id="zuzh4f"
Було: isFavorite = false
Користувач натиснув heart
UI показав filled heart
Сталася помилка
UI повернув outline heart
```

---

## 17. Accessibility

Heart icon має бути доступним для keyboard і screen reader.

Requirements:

* button має бути focusable;
* action має працювати через Enter / Space;
* aria-label має змінюватися залежно від state.

Recommended aria labels:

```text id="xmjnat"
Додати книгу в улюблені
Прибрати книгу з улюблених
```

---

## 18. Permissions

Користувач може змінювати favorite status тільки для своїх книг.

System має перевіряти:

* книга існує;
* книга належить поточному користувачу;
* книга не видалена.

Якщо книга видалена або недоступна, favorite action не має виконуватися.

---

## 19. What should update after toggle

Після успішної зміни favorite status мають оновитися:

* Book Details hero section;
* My Library card;
* Favorites page;
* Dashboard, якщо там є favorite books block;
* summary cards;
* active filters;
* result count.

---

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
