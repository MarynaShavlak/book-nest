# Create / Edit Series — Edit Mode

> Source: `create-edit-series.md`

## 5. Edit mode

Edit mode використовується, коли користувач редагує вже існуючу серію.

### 5.1. Behavior

У edit mode:

* форма відкривається з поточними значеннями серії;
* користувач може змінити required і optional поля;
* користувач може очистити optional поля;
* редагування серії не видаляє книги з серії;
* редагування серії не змінює reading status книг;
* редагування серії не змінює ownership status книг;
* після збереження оновлюються All Series Page та Series Details Page.

### 5.2. What can be edited

Користувач може редагувати:

* назву серії;
* автора;
* статус серії;
* загальну кількість книг;
* опис серії;
* обкладинку серії;
* жанри;
* теги.

### 5.3. What edit mode does not change

Edit Series не має змінювати:

* список книг у серії;
* порядок книг у серії;
* part number книг;
* reading status книг;
* ownership status книг;
* progress конкретних книг;
* позицію книг у Reading Queue;
* належність книг до Custom Lists.

Ці дії мають бути описані в інших feature docs.

### 5.4. After successful edit

Після успішного редагування:

* форма закривається;
* користувач бачить success state;
* Series Details Page оновлює hero section;
* All Series Page оновлює series card;
* якщо змінено `totalBooksCount`, прогрес серії може перерахуватися;
* якщо змінено cover, оновлюється обкладинка серії;
* якщо змінено title, оновлюється breadcrumb і назва серії.

Success message:

```text
Серію оновлено
```

---
