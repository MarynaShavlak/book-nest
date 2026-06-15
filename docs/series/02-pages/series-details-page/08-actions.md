# Series Details Page — Actions

> Source: `series-details-page.md`

## 6. Actions

### 6.1. Open series details

Користувач може відкрити сторінку конкретної серії.

Behavior:

* користувач натискає на картку серії на All Series Page;
* відкривається сторінка `/series/:seriesId`;
* користувач бачить детальну інформацію про серію.

---

### 6.2. Go back to all series

Користувач може повернутися до сторінки всіх серій.

Behavior:

* користувач натискає breadcrumb або back action;
* відкривається `/series`.

---

### 6.3. Edit series

Користувач може натиснути:

```text
Редагувати серію
```

Entry points:

* hero section;
* right sidebar actions;
* more menu, якщо він є.

Behavior:

1. Користувач натискає **Редагувати серію**.
2. Відкривається Edit Series flow.
3. Користувач редагує серію.
4. Після збереження Series Details Page оновлює дані.

Important:

```text
Series Details Page не описує поля, validation rules і submit behavior редагування.
Це описується в Feature: Create / Edit Series.
```

Expected update after edit:

* hero section оновлюється;
* series status оновлюється;
* cover оновлюється, якщо його змінили;
* right sidebar statistics можуть перерахуватися;
* список книг не змінюється, якщо редагувалися тільки поля серії.

---

### 6.4. Add book to this series

Користувач може додати книгу в поточну серію.

Behavior:

1. Користувач натискає **Додати книгу в цю серію**.
2. Відкривається Add Book to Series або Create Book flow.
3. Поточна серія вже вибрана автоматично.
4. Після submit книга додається до цієї серії.
5. Список книг і прогрес серії оновлюються.

Important:

```text
Детальна логіка вибору існуючої книги, створення нової книги, partNumber і validation описується окремо.
```

---

### 6.5. Open book details

Користувач може перейти до конкретної книги зі списку книг серії.

Behavior:

* користувач натискає **Переглянути** або клікає по книзі;
* відкривається Book Details Page;
* route:

```text
/books/:bookId
```

---

### 6.6. Add next book to reading queue

Якщо наступна книга є в бібліотеці і ще не додана в Reading Queue, користувач може натиснути:

```text
Додати в чергу читання
```

Behavior:

* книга додається в Reading Queue;
* на книзі з’являється badge **У черзі**;
* duplicate в черзі не створюється.

Якщо книга вже в черзі:

```text
Показати badge “У черзі” і не додавати дубль.
```

---

### 6.7. Add missing book

Якщо наступна книга або книга зі списку серії ще не додана в бібліотеку, користувач може натиснути:

```text
Додати книгу
```

Behavior:

* відкривається Add Book to Series / Create Book flow;
* серія вже вибрана автоматично;
* part number може бути prefilled, якщо він відомий;
* після збереження книга з’являється у списку серії.

Important:

```text
Автоматичне підтягування missing books з інтернету не входить у MVP.
```

---
