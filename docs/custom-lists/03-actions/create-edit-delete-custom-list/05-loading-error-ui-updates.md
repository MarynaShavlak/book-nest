# Loading, Error, UI Updates

## Role

Defines loading behavior, error behavior, and UI updates after create/edit/delete.

## Source coverage

`create-edit-delete-custom-list.md` sections 19-21

## Content

## 19. Loading behavior

### Create loading

Після натискання **Створити список**:

* submit button disabled;
* повторний submit блокується;
* modal не закривається до успішного створення.

Button text:

```text id="f3w0ws"
Створення...
```

---

### Edit loading

Після натискання **Зберегти**:

* submit button disabled;
* повторний submit блокується;
* modal не закривається до успішного збереження.

Button text:

```text id="mnj30q"
Збереження...
```

---

### Delete loading

Після натискання **Видалити список**:

* destructive button disabled;
* cancel button можна disabled або залишити active;
* повторний submit блокується;
* modal не закривається до успішного видалення.

Button text:

```text id="zknnts"
Видалення...
```

---

---

## 20. Error behavior

### Create error

Якщо список не вдалося створити:

* modal залишається відкритою;
* введені дані не очищуються;
* користувач бачить error message.

Message:

```text id="zu9jce"
Не вдалося створити список
```

---

### Edit error

Якщо список не вдалося оновити:

* modal залишається відкритою;
* введені зміни не очищуються;
* картка списку не оновлюється;
* користувач бачить error message.

Message:

```text id="gscsyf"
Не вдалося оновити список
```

---

### Delete error

Якщо список не вдалося видалити:

* modal залишається відкритою;
* список не зникає зі сторінки;
* користувач бачить error message.

Message:

```text id="z2tv5k"
Не вдалося видалити список
```

---

---

## 21. UI updates after actions

### After create

Після створення списку оновлюються:

* lists grid;
* count badge у header;
* sidebar statistics;
* empty state, якщо це перший список;
* sort order.

---

### After edit

Після редагування списку оновлюються:

* назва на картці;
* опис;
* іконка;
* колір;
* дата останнього оновлення;
* sorting order, якщо активне сортування за оновленням.

---

### After delete

Після видалення списку оновлюються:

* lists grid;
* count badge;
* sidebar statistics;
* empty state, якщо списків більше немає;
* no search results state, якщо після видалення більше немає результатів за активним search.

---
