# Remove Book From List Safety

## Role

Defines list-details removal behavior and safety expectations.

## Source coverage

`custom-list-details-page.md` sections 31-34

## Content

## 31. Remove book from list

Користувач може прибрати книгу зі списку.

Action label:

```text
Прибрати зі списку
```

Recommended location:

```text
Book card → More actions → Прибрати зі списку
```

Behavior:

* книга зникає тільки з поточного списку;
* книга залишається в бібліотеці;
* книга може залишатися в інших списках;
* reading status не змінюється;
* ownership status не змінюється;
* favorite status не змінюється;
* position інших книг перераховується без пропусків.

---

---

## 32. Remove book confirmation / undo

Для MVP confirmation modal не потрібна.

Reason:

```text
Це не destructive action, бо книга не видаляється з бібліотеки.
```

Recommended behavior:

```text
Click → remove from list → show toast with Undo
```

Toast:

```text
Книгу прибрано зі списку
```

Toast action:

```text
Скасувати
```

Якщо користувач натискає **Скасувати**:

* книга повертається в цей список;
* бажано повернути її на попередню позицію;
* список книг оновлюється;
* count badge повертається до попереднього значення.

---

---

## 33. Edit list from details page

На сторінці деталей списку має бути action:

```text
Редагувати список
```

Recommended location:

```text
Header → More actions
Header → Edit icon
```

Behavior:

* відкриває modal редагування списку;
* користувач може змінити назву, опис, іконку або колір;
* після збереження header сторінки оновлюється.

Ця дія використовує логіку фічі **Create / Edit / Delete Custom List**.

---

---

## 34. Delete list from details page

На сторінці деталей списку має бути action:

```text
Видалити список
```

Recommended location:

```text
Header → More actions → Видалити список
```

Після натискання відкривається confirmation modal.

Modal title:

```text
Видалити список?
```

Modal text:

```text
Список буде видалено, але книги залишаться у вашій бібліотеці.
```

Після підтвердження:

* список видаляється;
* користувач повертається на сторінку `/lists`;
* книги залишаються в бібліотеці;
* показується success message.

Success message:

```text
Список видалено
```

---
