# All Series Page — Page Header and Primary Action

> Source: `all-series-page.md`

### 4.1. Header

Header має бути візуально схожий на header сторінок **My Library** та **Favorites**.

Header містить:

* ілюстрацію або icon-block;
* title;
* count badge;
* subtitle;
* summary cards;
* primary action **Створити серію**.

Example:

```text
Серії 9 серій
Книжкові цикли твоєї колекції — стеж за прогресом і не пропусти жодного тому.

[9] Усього серій
[3] Прочитано
[5] Недочитані
[48] Книг у серіях

[+ Створити серію]
```

---


### 4.3. Header primary action

У header має бути primary button:

```text
+ Створити серію
```

Behavior:

* відкриває Create Series flow;
* після успішного створення серія з’являється на сторінці `/series`;
* якщо серія створена без книг, вона показується як empty series card;
* користувач може пізніше додати книги до серії через Create Book / Edit Book flow.

Important:

```text
All Series Page не описує поля, validation rules і submit behavior створення серії.
Це описується в Feature: Create / Edit Series.
```

---


### 5.1. Page Header

Page Header показує основну інформацію про сторінку.

Content:

| Element             | Description                  |
| ------------------- | ---------------------------- |
| Illustration / icon | декоративний cozy icon-block |
| Title               | назва сторінки               |
| Count badge         | кількість серій              |
| Subtitle            | коротке пояснення сторінки   |
| Summary cards       | коротка статистика           |
| Create button       | запуск Create Series flow    |

Example:

```text
Серії 9 серій
Книжкові цикли твоєї колекції — стеж за прогресом і не пропусти жодного тому.
```

---


### 5.2. Create Series Button

Primary button:

```text
+ Створити серію
```

Placement:

* у header справа;
* у right sidebar в блоці Quick actions;
* в empty state, якщо серій ще немає;
* на mobile може переходити під subtitle або під summary cards.

Behavior:

* відкриває Create Series flow;
* після створення серія додається до списку;
* якщо серія створена без книг, вона показується як серія без доданих книг.

Повна логіка створення серії описується окремо:

```text
Feature: Create / Edit Series
```

---
