# Update Reading Progress — Current Progress and Calculations

> Source: update-reading-progress.md lines 81-186

---

## 6. Current progress

Перед полем введення потрібно показати останній збережений прогрес.

Example:

```text
Було: 120 з 320 стор. · 38%
```

Logic:

* значення береться з поточного `currentPage`;
* якщо прогресу ще немає, показати `0 з 320 стор. · 0%`;
* якщо `pagesCount` не вказано, показати тільки поточну сторінку або empty state.

---

## 7. Current page field

Field:

```text
Поточна сторінка
```

Example:

```text
144 / 320
```

Validation:

* required;
* тільки ціле число;
* не може бути менше `0`;
* не може бути більше `pagesCount`;
* не може бути менше попередньої збереженої сторінки в цьому flow.

Error messages:

```text
Введіть поточну сторінку
Сторінка не може бути меншою за 0
Поточна сторінка не може бути більшою за кількість сторінок
Поточна сторінка не може бути меншою за попередній прогрес
```

---

## 8. Progress percent

Progress percent рахується автоматично.

Formula:

```text
progressPercent = currentPage / pagesCount * 100
```

Rules:

* значення округлюється до цілого числа;
* не може бути менше `0`;
* не може бути більше `100`;
* якщо `currentPage = pagesCount`, progress percent має бути `100%`.

Example:

```text
currentPage = 144
pagesCount = 320
progressPercent = 45%
```

---

## 9. Read pages for this update

Поле **“Прочитано за це оновлення”** має бути автоматичним.

Formula:

```text
readPagesForUpdate = currentPage - previousPage
```

Example:

```text
Було: 120 стор.
Стало: 144 стор.

Прочитано за це оновлення: 24 стор.
```

Important:

* користувач не має вручну вводити це значення;
* значення перераховується після зміни поточної сторінки;
* якщо `currentPage = previousPage`, показати `0 стор.`;
* якщо `currentPage < previousPage`, показати validation error.

---
