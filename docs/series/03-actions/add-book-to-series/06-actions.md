# Add Book to Series — Actions

> Source: `add-book-to-series.md`

## 12. Actions

### 12.1. Add existing book

Button:

```text
Додати до серії
```

Behavior:

1. Користувач вибирає існуючу книгу.
2. Вказує `partNumber`.
3. Натискає **Додати до серії**.
4. Система перевіряє validation rules.
5. Якщо все валідно, книга додається до серії.
6. Series Details Page оновлюється.

---

### 12.2. Create new book

Button:

```text
Створити книгу
```

Behavior:

1. Користувач відкриває режим **Нова книга**.
2. Заповнює Create Book fields.
3. Серія вже вибрана автоматично.
4. Вказує `partNumber`.
5. Натискає **Створити книгу**.
6. Книга створюється і додається до серії.
7. Series Details Page оновлюється.

---

### 12.3. Add missing book

Button:

```text
Додати книгу
```

Behavior:

1. Користувач натискає **Додати книгу** на missing book row.
2. Відкривається Create Book flow.
3. Дані missing book prefilled.
4. Після збереження missing book стає звичайною книгою в бібліотеці.

---

### 12.4. Cancel

Button:

```text
Скасувати
```

Behavior:

* закриває modal / drawer;
* не додає книгу до серії;
* не змінює список книг;
* якщо є незбережені зміни, можна показати confirmation.

Confirmation:

```text
Закрити без збереження?
Внесені зміни буде втрачено.
```

---
