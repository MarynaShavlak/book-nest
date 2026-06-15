# Book Form Series Section — UI Structure

> Source: `book-form-series-section.md`

## 5. UI structure

### 5.1. Section title

```text
Серія
```

Optional helper text:

```text
Додайте книгу до книжкового циклу, якщо вона є частиною серії.
```

---

### 5.2. Main toggle / checkbox

Recommended label:

```text
Це книга із серії
```

Alternative label:

```text
Книга належить до серії
```

Behavior:

* якщо toggle off — книга standalone;
* якщо toggle on — показуються поля вибору серії та номера частини;
* якщо toggle вимикається в Edit Book Form, потрібно підтвердити відв’язування книги від серії.

---

### 5.3. Expanded section when toggle is on

Коли користувач вмикає toggle, показати:

```text
[Series select]
[Create new series option]
[Part number input]
[Series helper / validation messages]
```

Recommended UI:

```text
Серія
[Виберіть серію або створіть нову]

Номер частини
[1]
```

---
