# Displayed Books Rules

## Role

Defines which books should appear inside a custom list.

## Source coverage

`custom-list-details-page.md` section 5

## Content

## 5. What books are displayed

На сторінці показуються тільки книги, які додані до цього конкретного списку.

Книга має показуватися, якщо:

```text
book belongs to current user
book is active
book is added to current custom list
```

Книга не має показуватися, якщо:

* книга видалена;
* книга належить іншому користувачу;
* книга не додана до цього списку;
* список видалений.

---
