# Book Details Page — Page Layout

> Source: book-details-page.md lines 131-316

---

## 4. Page layout

Сторінка **Book Details** має бути побудована як сторінка перегляду однієї книги з основним контентом і правою sidebar-колонкою.

Layout має допомагати користувачу швидко побачити головну інформацію про книгу та перейти до пов’язаних дій.

---

### 4.1. Main layout zones

Сторінка складається з таких зон:

| Zone              | Purpose                               |
| ----------------- | ------------------------------------- |
| Top navigation    | Повернення назад і breadcrumbs        |
| Book hero section | Головна інформація про книгу          |
| Main content      | Детальні блоки книги                  |
| Right sidebar     | Швидка інформація, статуси та actions |

---

### 4.2. Top navigation

У верхній частині сторінки має бути breadcrumb або back action.

Recommended breadcrumb:

```text id="bd7t5k"
Моя бібліотека / Детальна сторінка книги
```

Back action:

```text id="psm77t"
← Моя бібліотека
```

Logic:

* back action повертає користувача до попереднього списку або до `/library`;
* breadcrumb показує, що користувач знаходиться на сторінці деталей книги.

---

### 4.3. Book hero section

Book hero section — це верхній основний блок сторінки.

Він має містити:

* обкладинку книги;
* назву книги;
* оригінальну назву, якщо вона є;
* автора;
* видавництво;
* рік видання;
* основні статуси;
* формат книги;
* рейтинг;
* кількість сторінок;
* прогрес читання;
* основні actions.

Hero section має бути першим великим блоком після top navigation.

---

### 4.4. Main content area

Main content area містить основні блоки, які описують книгу та пов’язані з нею дані.

Recommended blocks:

* About book;
* Reading progress;
* Notes preview;
* Quotes preview;
* Characters preview, якщо фіча увімкнена;
* Similar books або related books, якщо фіча підтримується.

Main content не має містити повний CRUD пов’язаних сутностей.
Він показує тільки preview і links до повних сторінок або модалок.

---

### 4.5. Right sidebar

Right sidebar містить коротку інформацію та швидкі дії.

Recommended blocks:

* Quick information;
* Statuses;
* Series preview, якщо книга є частиною серії;
* Quick actions.

Right sidebar не має дублювати весь main content.
Вона має давати швидкий доступ до найважливішого.

---

### 4.6. Desktop layout

На desktop сторінка може мати такий layout:

```text id="y4m7mx"
[ Global sidebar ] [ Book details content ]

Book details content:
[ Top navigation ]

[ Cover ] [ Book hero information ] [ Right sidebar ]

[ Main content blocks        ] [ Right sidebar ]
```

Recommended behavior:

* cover і hero information показуються у верхній частині;
* right sidebar фіксується праворуч у межах контенту;
* main content займає основну ширину сторінки.

---

### 4.7. Tablet and mobile layout

На tablet:

* right sidebar може переходити під hero section;
* main content і sidebar можуть іти однією колонкою.

На mobile:

* всі блоки мають показуватися в одну колонку;
* обкладинка, назва і actions мають бути зверху;
* right sidebar blocks мають іти після основної інформації;
* layout не має вимагати горизонтального скролу.

---

### 4.8. Layout order

Recommended order on desktop:

```text id="mpk1sc"
1. Top navigation
2. Book hero section
3. About book
4. Reading progress
5. Notes preview
6. Quotes preview
7. Characters preview
8. Related books
9. Right sidebar blocks
```

Recommended order on mobile:

```text id="dyylaw"
1. Top navigation
2. Cover
3. Title and main info
4. Main actions
5. Quick information
6. Statuses
7. About book
8. Reading progress
9. Notes preview
10. Quotes preview
11. Series preview
12. Other blocks
```

---

### 4.9. Acceptance Criteria

* Сторінка має top navigation або breadcrumb.
* Сторінка має hero section з основною інформацією про книгу.
* Сторінка має main content area з деталями книги.
* Сторінка має right sidebar на desktop.
* Right sidebar не дублює весь main content.
* На mobile сторінка перебудовується в одну колонку.
* Layout не має ламатися, якщо в книги немає обкладинки, серії, нотаток або цитат.
* Основні actions залишаються доступними на desktop і mobile.
