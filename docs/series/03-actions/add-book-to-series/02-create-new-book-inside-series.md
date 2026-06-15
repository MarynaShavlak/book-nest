# Add Book to Series — Create New Book Inside Series

> Source: `add-book-to-series.md`

## 6. Scenario: Create new book inside series

Цей сценарій використовується, коли книги ще немає в бібліотеці користувача.

### 6.1. Behavior

1. Користувач відкриває Series Details Page.
2. Натискає **Додати книгу в цю серію**.
3. Обирає режим **Нова книга**.
4. Відкривається Create Book flow.
5. Поточна серія вже вибрана автоматично.
6. Користувач заповнює дані книги.
7. Користувач вказує номер частини.
8. Після submit книга створюється і додається до серії.
9. Series Details Page оновлюється.

---

### 6.2. Preselected series

Коли Create Book flow відкривається з Series Details Page, поле Series має бути вже заповнене.

Example:

```text
Series: Тінь і кістка
```

Користувач може бачити це поле як readonly або editable.

Recommended MVP:

```text
Series preselected, але користувач може змінити серію тільки через Create Book / Edit Book flow.
```

Якщо flow відкритий саме з конкретної Series Details Page, краще не давати випадково змінити серію в modal. Це зменшує ризик помилки.

---

### 6.3. Prefilled author

Якщо у серії є автор, поле автора в новій книзі може бути prefilled.

Example:

```text
Series author: Лі Бардуго
Book author: Лі Бардуго
```

Behavior:

* автор prefilled;
* користувач може змінити автора книги;
* зміна автора книги не змінює автора серії.

---

### 6.4. Default book statuses

Для нової книги в серії можна використовувати стандартні default values.

Recommended defaults:

| Field            | Default              |
| ---------------- | -------------------- |
| readingStatus    | `not_started`        |
| ownershipStatus  | `none`               |
| format           | empty / not selected |
| isFavorite       | false                |
| isInReadingQueue | false                |

Якщо користувач додає книгу через кнопку **Наступна книга → Додати книгу**, можна залишити ті самі default values.

---
