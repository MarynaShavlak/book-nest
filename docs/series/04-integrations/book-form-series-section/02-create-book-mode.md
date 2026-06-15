# Book Form Series Section — Create Book Mode

> Source: `book-form-series-section.md`

## 6. Create Book mode

Create Book mode використовується, коли користувач створює нову книгу.

### 6.1. Default state

За замовчуванням нова книга не належить до серії.

Default values:

| Field           | Default |
| --------------- | ------- |
| isPartOfSeries  | false   |
| seriesId        | null    |
| partNumber      | null    |
| createNewSeries | false   |
| newSeriesDraft  | null    |

---

### 6.2. User selects existing series

Behavior:

1. Користувач вмикає toggle **Це книга із серії**.
2. Обирає існуючу серію.
3. Система пропонує default `partNumber`.
4. Користувач може змінити `partNumber`.
5. Користувач submit-ить форму книги.
6. Книга створюється і прив’язується до вибраної серії.
7. Series Details Page і All Series Page оновлюються.

---

### 6.3. User creates new series from book form

Користувач може створити нову серію прямо з форми книги.

Recommended UI option:

```text
+ Створити нову серію
```

Behavior:

1. Користувач вмикає toggle **Це книга із серії**.
2. Натискає **Створити нову серію**.
3. Заповнює короткі дані нової серії.
4. Продовжує заповнювати форму книги.
5. Натискає submit форми книги.
6. Система створює нову серію.
7. Система створює книгу.
8. Книга прив’язується до нової серії.

Important MVP rule:

```text
Якщо нова серія створюється всередині Create Book Form, вона не має зберігатися окремо до submit всієї форми книги.
```

Reason:

```text
Це запобігає появі випадкових порожніх серій, якщо користувач закриє форму книги або скасує створення.
```

Тобто inline-created series має бути тимчасовим draft до моменту submit.

---

### 6.4. Create Book opened from Series Details Page

Якщо Create Book Form відкривається зі сторінки конкретної серії, series field має бути preselected.

Example:

```text
Series Details Page → Додати книгу в цю серію
```

Preselected values:

| Field          | Value                      |
| -------------- | -------------------------- |
| isPartOfSeries | true                       |
| seriesId       | current series id          |
| series title   | current series title       |
| partNumber     | next available part number |

Recommended behavior:

```text
Серія вже вибрана автоматично.
Користувач бачить, до якої серії буде додана книга.
```

У цьому сценарії можна зробити series field readonly, щоб користувач випадково не додав книгу в іншу серію.

---

### 6.5. Create Book opened from Missing Book Row

Якщо форма відкривається з missing book row, потрібно prefill дані.

Prefilled values:

| Field           | Value                            |
| --------------- | -------------------------------- |
| isPartOfSeries  | true                             |
| seriesId        | current series id                |
| title           | missing book title, якщо відомий |
| author          | series author, якщо доступний    |
| partNumber      | missing book partNumber          |
| readingStatus   | `not_started`                    |
| ownershipStatus | `none`                           |

Після submit:

* missing book стає реальною книгою в бібліотеці;
* missing book row зникає;
* книга з’являється у списку серії як звичайна книга;
* progress і next book logic оновлюються.

---
