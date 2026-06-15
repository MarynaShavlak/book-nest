# Text field validation

### 4.1. Text normalization

Перед submit усі текстові значення потрібно нормалізувати:

```ts
title = title.trim();
authorName = authorName.trim();
publisherName = publisherName?.trim() || null;
description = description?.trim() || null;
tagName = tagName.trim();
```

Якщо optional поле після `trim` стало порожнім, його потрібно зберігати як `null` або не відправляти взагалі — залежно від домовленості з backend.

### 4.2. HTML validation

HTML-теги заборонені в усіх текстових полях.

Це стосується:

* назви книги;
* custom author;
* custom publisher;
* опису книги;
* custom tags.

### 4.3. Empty spaces only

Текстове поле не може складатися тільки з пробілів.

Для required полів це вважається незаповненим значенням.

Для optional полів значення після `trim` має ставати `null`.
