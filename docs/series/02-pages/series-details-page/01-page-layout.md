# Series Details Page — Page Layout

> Source: `series-details-page.md`

## 4. Page layout

Сторінка має бути побудована як детальна сторінка однієї сутності з основним контентом і правою sidebar-колонкою.

Recommended layout:

```text
[Top navigation / breadcrumb]

[Series hero section]

[Main content layout]
  Left / center:
    [Tabs]
    [Books in series list]
    [Reading order block]
    [About series tab content]

  Right sidebar:
    [Your progress in series]
    [Next book]
    [Series statistics]
    [Actions]
```

---

### 4.1. Top navigation

У верхній частині сторінки потрібно показати breadcrumb або back action.

Recommended breadcrumb:

```text
Серії / Назва серії
```

Example:

```text
Серії / Тінь і кістка
```

Back action:

```text
← Серії
```

Behavior:

* back action повертає користувача на `/series`;
* breadcrumb показує, що користувач знаходиться всередині конкретної серії.

---

### 4.2. Series hero section

Hero section — це головний верхній блок сторінки.

Він має містити:

* cover / placeholder;
* назву серії;
* автора;
* короткий опис;
* жанри / теги;
* series status;
* кількість книг;
* роки виходу, якщо є;
* основні actions.

Example:

```text
Тінь і кістка
Лі Бардуго

Фентезі · Young Adult · Пригоди

Серія завершена · 3 книги · 2012–2014
```

---

### 4.3. Main content area

Main content area містить основну робочу частину сторінки.

У MVP тут мають бути:

* tabs;
* список книг серії;
* кнопка “Додати книгу в цю серію”;
* блок “Порядок читання”, якщо він потрібен.

Main content не має містити повну форму редагування серії або повну форму створення книги. Такі дії відкривають окремі flows.

---

### 4.4. Right sidebar

Right sidebar показує коротку, але важливу інформацію про стан серії.

У MVP right sidebar має містити:

```text
Ваш прогрес у серії
Наступна книга
Статистика серії
Дії
```

Right sidebar не має дублювати весь список книг. Його задача — швидко показати користувачу, що відбувається з серією і що можна зробити далі.

---

### 4.5. Mobile layout

На mobile сторінка має перебудовуватися в одну колонку.

Recommended mobile order:

```text
1. Top navigation
2. Series cover
3. Series title and main info
4. Main actions
5. Your progress in series
6. Next book
7. Tabs
8. Books in series
9. Series statistics
10. Other actions
```

Right sidebar blocks на mobile переходять під hero або під основний контент.

---
