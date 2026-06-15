# Overview and fields

### 6.1. Purpose

Блок **“Основна інформація”** містить базові дані про книгу.

Цей блок має бути першим у формі, тому що саме він формує основну ідентичність книги:

* назва книги;
* автор;
* видавництво;
* короткий опис без спойлерів.

---

### 6.2. Fields overview

| Поле                            | Type                  | Required | Source              | Validation                                      | Preview        |
| ------------------------------- | --------------------- | -------: | ------------------- | ----------------------------------------------- | -------------- |
| Назва книги                     | Text input            |      Так | Manual input        | 1–150 символів                                  | Оновлює title  |
| Автор                           | Autocomplete / Select |      Так | Predefined + custom | existing або custom author 2–100 символів       | Оновлює author |
| Видавництво                     | Autocomplete / Select |       Ні | Predefined + custom | custom publisher 2–100 символів, якщо заповнене | Optional       |
| Коротко про книгу без спойлерів | Textarea              |       Ні | Manual input        | max 500 символів                                | Optional       |

---
