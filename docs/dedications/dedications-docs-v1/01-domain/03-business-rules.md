# Business Rules

## Основне правило показу

На сторінці **“Присвяти”** показуються тільки книги поточного користувача, у яких заповнене поле присвяти.

```txt
show book if:
- book.userId === currentUser.id
- book.authorDedication is not empty
- book is not deleted
```

---

## Що не показувати

Не показувати:

- книги інших користувачів;
- видалені книги;
- книги без присвяти;
- книги, де поле присвяти містить тільки пробіли;
- системні демо-книги, якщо вони не належать користувачу.

---

## Favorite dedication

`isFavoriteDedication` стосується саме присвяти, а не книги.

Книга може бути не улюбленою, але її присвята може бути улюбленою.

```ts
book.isFavorite === false
book.isFavoriteDedication === true
```

Це валідний стан.

---

## Critical rule: book favorite !== dedication favorite

This is a strict product rule. **Favorite book** and **favorite dedication** are two independent states.

```ts
type Book = {
  isFavorite?: boolean;             // улюблена книга
  isFavoriteDedication?: boolean;   // улюблена присвята автора
};
```

Changing one field must never implicitly change the other field.

```txt
When user favorites dedication:
- update only book.isFavoriteDedication
- do not update book.isFavorite

When user favorites book:
- update only book.isFavorite
- do not update book.isFavoriteDedication
```

Valid combinations:

| book.isFavorite | book.isFavoriteDedication | Meaning |
|---|---|---|
| false | false | книга і присвята не в улюблених |
| true | false | книга улюблена, але присвята ні |
| false | true | присвята улюблена, але книга ні |
| true | true | і книга, і присвята улюблені |

UI must use different labels and tooltips:

```txt
Для книги: "Додати книгу в улюблені" / "Прибрати книгу з улюблених"
Для присвяти: "Додати присвяту в улюблені" / "Прибрати присвяту з улюблених"
```

---

## Видалення присвяти

Якщо користувач у формі редагування книги видаляє текст присвяти:

- книга зникає зі сторінки “Присвяти”;
- `isFavoriteDedication` можна автоматично скидати в `false`;
- не потрібно видаляти саму книгу.

---

## Видалення книги

Якщо книга видалена:

- її присвята також більше не показується;
- окремого confirmation для присвяти не потрібно.

---

## Права доступу

Користувач бачить тільки свої присвяти.

Навіть якщо присвята має deep link, потрібно перевіряти `userId` книги.
