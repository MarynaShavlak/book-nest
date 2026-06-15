# Create List Entry and Modal

## Role

Defines create action label, create modal, and create list fields.

## Source coverage

`create-edit-delete-custom-list.md` sections 5-7

## Content

## 5. Create list action

Action label:

```text id="dd3km7"
+ Створити список
```

Behavior:

* відкриває modal створення списку;
* користувач заповнює назву;
* optional додає опис, іконку та колір;
* після збереження список з’являється на сторінці **Власні списки**.

---

---

## 6. Modal: Create List

Modal title:

```text id="0xi5ap"
Створити список
```

Subtitle:

```text id="l2utmr"
Створіть власну добірку книг за настроєм, темою або читацьким планом.
```

Fields:

| Field        | Type                  | Required | Description                            |
| ------------ | --------------------- | -------: | -------------------------------------- |
| Назва списку | Text input            |      Так | Основна назва списку                   |
| Опис         | Textarea              |       Ні | Коротке пояснення, для чого цей список |
| Іконка       | Icon picker           |       Ні | Декоративна іконка списку              |
| Колір        | Color picker / select |       Ні | Акцентний колір списку                 |

Actions:

```text id="t7c6nf"
Скасувати
Створити список
```

---

---

## 7. Create list fields

### 7.1. Назва списку

Field label:

```text id="tq12m1"
Назва списку
```

Placeholder:

```text id="n5l5ps"
Наприклад: Осіннє читання
```

Required:

```text id="u4fsb1"
Так
```

Назва має бути короткою, зрозумілою і відображати тему списку.

---

### 7.2. Опис

Field label:

```text id="ni8vsm"
Опис
```

Placeholder:

```text id="jjqp8b"
Додайте короткий опис списку...
```

Required:

```text id="om4vcu"
Ні
```

Опис допомагає користувачу згадати, для чого створений список.

Example:

```text id="u8sepe"
Книги для затишного осіннього читання.
```

---

### 7.3. Іконка

Field label:

```text id="z0zr3g"
Іконка
```

Required:

```text id="6f4jo2"
Ні
```

Іконка є декоративним елементом і не впливає на логіку списку.

Examples:

```text id="m8t7lq"
книга
зірки
серце
листок
чашка
місяць
```

Якщо користувач не вибрав іконку, використовується default icon.

---

### 7.4. Колір

Field label:

```text id="2wwe1z"
Колір
```

Required:

```text id="53pzw2"
Ні
```

Колір використовується як декоративний акцент на картці списку.

Якщо користувач не вибрав колір, використовується default accent color.

---
