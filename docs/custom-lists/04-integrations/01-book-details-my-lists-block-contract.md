# Book Details My Lists Block Contract

## Role

Defines what Book Details should show after a book is connected to custom lists.

## Source coverage

`add-to-custom-lists.md` section 19; `custom-list-details-page.md` sections 35-36

## Content

## 19. Suggested Book Details UI after adding to lists

Якщо книга належить до списків, можна показати lightweight indicator у sidebar.

Example:

```text
У списках · 3
```

або:

```text
У списках:
Осіннє читання
Улюблене фентезі
```

Recommended for MVP:

```text
У списках · N
```

Reason:

Не перевантажує Book Details і дає зрозуміти, що книга вже організована в списки.

---

---

## 35. Related UI: Book Details block “Мої списки”

Після додавання книги до custom lists на сторінці **Book Details** можна показувати блок:

```text
Мої списки
```

У цьому блоці показати всі списки, де є ця книга.

Example:

```text
Мої списки:
Темне фентезі
Хочу перечитати
Книги на осінь
```

Behavior:

* якщо книга не додана до жодного списку, блок можна приховати;
* якщо книга є в одному або кількох списках, показати список назв;
* кожна назва може бути клікабельною й вести на `/lists/:listId`;
* поряд може бути action **Додати до списку**.

Це не є основною частиною Custom List Details Page, але важливо для зв’язку між фічами.

---

---

## 36. Related UI updates

Після дій на Custom List Details Page мають оновлюватися:

* header count badge;
* books list;
* toolbar result count;
* list updated date;
* Custom Lists Page card;
* Book Details block **Мої списки**;
* My Library card, якщо там показується індикатор списків;
* Reading Queue page, якщо книга була додана в чергу.

---
