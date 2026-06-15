# Book Form Series Section — Validation

> Source: `book-form-series-section.md`

## 11. Validation rules

### 11.1. Standalone book

Якщо книга не належить до серії:

```text
isPartOfSeries = false
```

Then:

```text
seriesId = null
partNumber = null
```

Series validation не виконується.

---

### 11.2. Existing series selected

Якщо користувач вибрав існуючу серію:

Required:

```text
seriesId
partNumber
```

Validation:

* series exists;
* series belongs to current user;
* partNumber is integer;
* partNumber >= 1;
* partNumber is unique in this series;
* partNumber <= totalBooksCount, якщо totalBooksCount існує.

---

### 11.3. New series created inline

Якщо користувач створює нову серію inline:

Required:

```text
newSeriesTitle
newSeriesStatus
partNumber
```

Validation:

* new series title required;
* new series title max 150 symbols;
* new series status required;
* partNumber required;
* partNumber integer;
* partNumber >= 1;
* якщо newSeriesTotalBooksCount вказаний, partNumber <= newSeriesTotalBooksCount.

---

### 11.4. Duplicate series title warning

Якщо користувач створює нову серію inline і така назва вже існує, показати warning.

Warning:

```text
Серія з такою назвою вже існує
```

Actions:

```text
Вибрати існуючу серію
Створити все одно
Скасувати
```

Recommended MVP:

```text
Не блокувати створення повністю, але показати warning.
```

---

### 11.5. HTML validation

HTML tags заборонені в:

* series title;
* series author;
* custom tags;
* helper note fields, якщо вони є.

---
