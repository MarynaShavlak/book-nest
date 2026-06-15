# List Management from Details Page

## Role

Defines edit and delete list entry points from the details page.

## Source coverage

`custom-list-details-page.md` sections 33-34

## Related files

Full create/edit/delete behavior lives in `03-actions/create-edit-delete-custom-list/`.

## Content

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
