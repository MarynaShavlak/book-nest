# Create / Edit Series — Validation Rules

> Source: `create-edit-series.md`

## 9. Validation rules

### 9.1. Required fields

Required поля:

```text
Назва серії
Статус серії
```

Якщо required поля не заповнені, серія не створюється і не оновлюється.

---

### 9.2. Text normalization

Перед submit потрібно нормалізувати текстові поля:

```text
title = title.trim()
author = author?.trim() || null
description = description?.trim() || null
tags = tags.map(tag => tag.trim())
```

Якщо optional поле після `trim` стало порожнім, його потрібно зберігати як empty / null.

---

### 9.3. HTML validation

HTML-теги заборонені в текстових полях:

* назва серії;
* автор;
* опис;
* custom tags.

---

### 9.4. Duplicate title check

При створенні або редагуванні потрібно перевіряти, чи вже існує серія з такою самою normalized назвою в межах користувача.

Duplicate check має бути:

* case-insensitive;
* після `trim`;
* з урахуванням зайвих пробілів.

Example duplicates:

```text
Throne of Glass
throne of glass
Throne   of   Glass
```

#### MVP behavior

У MVP краще не блокувати створення повністю, а показувати warning.

Warning:

```text
Серія з такою назвою вже існує
```

Користувач може:

* скасувати створення;
* перейти до існуючої серії;
* все одно створити нову серію, якщо це справді інша серія.

---

### 9.5. Total books count validation

Rules:

* значення має бути цілим числом;
* значення має бути більше або дорівнювати 1;
* значення не може бути меншим за кількість книг, уже доданих у серію;
* поле може бути порожнім.

Error messages:

```text
Введіть ціле число
Кількість книг має бути більшою за 0
Загальна кількість книг не може бути меншою за кількість уже доданих книг у серію
```

---
