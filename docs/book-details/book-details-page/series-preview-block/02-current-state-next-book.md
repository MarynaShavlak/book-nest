# Series Preview Block — Current State and Next Book Logic

> Source: book-details-page.md lines 1076-1139

---

#### 7.4.11. Current book state in series

Блок може показувати короткий contextual state для поточної книги.

Possible states:

| State                       | When to show                         | Label                                   |
| --------------------------- | ------------------------------------ | --------------------------------------- |
| Current book is finished    | `readingStatus = finished`           | Цю книгу вже прочитано                  |
| Current book is reading     | `readingStatus = reading`            | Ви читаєте цю книгу зараз               |
| Current book is rereading   | `readingStatus = rereading`          | Ви перечитуєте цю книгу                 |
| Current book is next        | calculated next book is current book | Це наступна книга у серії               |
| Previous books not finished | earlier books are not finished       | Перед цією книгою є непрочитані частини |
| All series finished         | all books in series are finished     | Серію прочитано                         |

Example:

```text
Це наступна книга у серії
```

або:

```text
Перед цією книгою є непрочитані частини
```

---

#### 7.4.12. Next book logic

Series preview може використовувати next book logic тільки для короткого contextual label.

Base logic:

```text
Next book = перша книга з найменшим partNumber, яка не має readingStatus = finished
```

Якщо є книга зі статусом:

```text
reading
```

або:

```text
rereading
```

вона вважається поточною / наступною.

У Series preview не потрібно показувати повний блок **Наступна книга**. Повний next book block має бути на Series Details Page.

Recommended MVP:

```text
Book Details показує тільки короткий label.
Series Details Page показує повний Next Book block.
```

---
