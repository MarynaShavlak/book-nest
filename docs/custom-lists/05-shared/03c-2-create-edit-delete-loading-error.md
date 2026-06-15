# Create/Edit/Delete Loading and Error

## Role

Loading and error behavior for create/edit/delete list actions.

## Source coverage

`create-edit-delete-custom-list.md` sections 19-20

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
