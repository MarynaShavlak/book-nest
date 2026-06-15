# Related Book Details UI

## Role

Defines related Book Details block behavior and updates after list changes.

## Source coverage

`custom-list-details-page.md` sections 35-36

## Related files

Contract lives in `04-integrations/01-book-details-my-lists-block-contract.md`.

## Content

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
