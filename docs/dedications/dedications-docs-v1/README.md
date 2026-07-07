# BookNest — Dedications / Присвяти Documentation v1

## Мета архіву

Цей архів описує повну версію функціоналу сторінки **“Присвяти”** для BookNest.

Фіча призначена для збереження, перегляду, пошуку, фільтрації та організації **авторських присвят**, які користувач додає в картку книги.

Сторінка має працювати як окрема емоційна колекція маленьких книжкових текстів: присвята не є цитатою, нотаткою або рецензією, а є частиною самої книги.

---

## Основна ідея

Якщо в книзі заповнено поле **“Присвята автора”**, ця книга автоматично зʼявляється на сторінці **“Присвяти”**.

Користувач може:

- переглядати всі присвяти з доданих книг;
- шукати по тексту присвяти, книзі або автору;
- фільтрувати присвяти за станом читання, улюбленістю, жанрами;
- відкривати книгу, до якої належить присвята;
- копіювати текст присвяти;
- позначати присвяту улюбленою;
- відкривати присвяту в окремому reading mode / modal;
- бачити статистику по присвятах.

---

## Рекомендований route

```txt
/dedications
```

---

## Структура архіву

```txt
dedications-docs-v1/
├── README.md
├── 00-overview/
├── 01-domain/
├── 02-page/
├── 03-components/
├── 04-actions/
├── 05-integrations/
├── 06-states/
├── 07-ux-ui/
├── 08-technical/
├── 09-test-cases/
└── assets/
```

---

## MVP scope

Для першої реалізації достатньо:

1. Поле `authorDedication` у книзі.
2. Сторінка `/dedications`.
3. Список / grid присвят.
4. Пошук.
5. Фільтр `Усі / Улюблені / Прочитані / Непрочитані`.
6. Сортування.
7. Картка присвяти.
8. Дії: `До книги`, `Скопіювати`, `Улюблена`.
9. Empty state.
10. Інтеграція з формою створення / редагування книги.

---

## Full scope

Повна версія додатково включає:

- right sidebar зі статистикою;
- швидкі фільтри;
- modal / drawer для читання повної присвяти;
- favorite dedications;
- genre filter;
- копіювання тексту;
- deep link на конкретну присвяту;
- export selected dedications;
- decorative UI у стилі BookNest;
- адаптивну мобільну версію.


## Critical favorite-state rule

The feature has a separate favorite state for dedications. `book.isFavorite` and `book.isFavoriteDedication` are independent:

- favorite book does not automatically mean favorite dedication;
- favorite dedication does not automatically mean favorite book;
- the “Улюблені” filter on `/dedications` must use only `isFavoriteDedication`.
