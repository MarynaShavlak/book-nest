# Create / Edit Series — Create Mode

> Source: `create-edit-series.md`

## 4. Create mode

Create mode використовується, коли користувач створює нову серію.

### 4.1. Behavior

У create mode:

* форма відкривається з порожніми або default значеннями;
* користувач має заповнити required поля;
* optional поля можна залишити порожніми;
* серія може бути створена без книг;
* після створення серія з’являється на All Series Page;
* якщо серія створена без книг, вона показується як empty series card;
* користувач може пізніше додати книги до серії через Create Book / Edit Book / Add Book to Series flow.

### 4.2. Create mode default values

Recommended defaults:

| Field                   | Default value |
| ----------------------- | ------------- |
| Назва серії             | empty         |
| Автор                   | empty         |
| Статус серії            | `unknown`     |
| Загальна кількість книг | empty         |
| Опис серії              | empty         |
| Обкладинка серії        | empty         |
| Жанри                   | empty         |
| Теги                    | empty         |

### 4.3. After successful create

Після успішного створення:

* серія зберігається;
* Create Series flow закривається;
* користувач бачить success state;
* нова серія з’являється на All Series Page;
* якщо користувач створив серію зі сторінки `/series`, він залишається на `/series`;
* якщо користувач створив серію з Create Book Form, створена серія може автоматично вибратися в полі Series.

Success message:

```text
Серію створено
```

---
