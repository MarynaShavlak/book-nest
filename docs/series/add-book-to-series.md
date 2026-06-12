# Feature: Add Book to Series

## 1. Purpose

Feature **Add Book to Series** дозволяє користувачу додати книгу до конкретної книжкової серії в BookNest.

Фіча потрібна для того, щоб користувач міг:

* додати нову книгу в уже створену серію;
* прив’язати існуючу книгу з бібліотеки до серії;
* додати книгу з Series Details Page;
* додати першу книгу в порожню серію;
* додати відсутню книгу, яка вже відома як частина серії;
* вказати номер частини книги в серії;
* підтримувати правильний порядок книг у серії;
* оновити прогрес серії після додавання книги.

Ця фіча не відповідає за створення або редагування самої серії. Вона відповідає тільки за додавання книги до вже існуючої серії.

Повна логіка створення та редагування серії описується окремо:

```text
Feature: Create / Edit Series
```

---

## 2. Main idea

Книга може бути додана до серії двома основними способами:

```text
1. Додати існуючу книгу з бібліотеки до серії
2. Створити нову книгу одразу в межах цієї серії
```

У MVP основний сценарій:

```text
Користувач відкриває Series Details Page → натискає “Додати книгу в цю серію” → додає існуючу книгу або створює нову книгу з preselected series.
```

Після додавання книги:

* книга з’являється у списку книг серії;
* книга отримує `partNumber`;
* список книг сортується за `partNumber`;
* прогрес серії перераховується;
* блок **Наступна книга** оновлюється;
* статистика серії оновлюється.

Important:

```text
Add Book to Series відповідає за зв’язок “книга → серія” і partNumber.
Повна форма створення книги описується в Create / Edit Book documentation.
```

---

## 3. Entry points

Користувач може додати книгу до серії з кількох місць застосунку.

| Entry point                                         | Behavior                                                             |
| --------------------------------------------------- | -------------------------------------------------------------------- |
| Series Details Page → “Додати книгу в цю серію”     | відкриває Add Book to Series flow                                    |
| Empty Series Card → “Додати книгу”                  | відкриває Add Book to Series / Create Book flow з preselected series |
| Series Details Page → Missing book → “Додати книгу” | відкриває Create Book flow з prefilled даними                        |
| Right sidebar → “Додати книгу в серію”              | відкриває Add Book to Series flow                                    |
| Create Book Form → поле Series                      | дозволяє вибрати існуючу серію                                       |
| Edit Book Form → поле Series                        | дозволяє прив’язати книгу до серії або змінити серію                 |

Основний entry point для MVP:

```text
Series Details Page → Додати книгу в цю серію
```

---

## 4. Flow options

У MVP Add Book to Series flow має підтримувати два сценарії:

```text
1. Вибрати існуючу книгу
2. Створити нову книгу
```

Recommended UI:

```text
[Add Book to Series modal / drawer]

Tabs або segmented control:
- Існуюча книга
- Нова книга
```

Альтернативний простіший MVP:

```text
Кнопка “Додати книгу в цю серію” відкриває Create Book flow,
де поточна серія вже вибрана автоматично.
```

Рекомендований варіант для BookNest:

```text
Підтримати обидва сценарії:
- вибір існуючої книги;
- створення нової книги.
```

Бо користувач може вже мати книгу в бібліотеці, але ще не прив’язати її до серії.

---

## 5. Scenario: Add existing book to series

Цей сценарій використовується, коли книга вже є в бібліотеці користувача, але ще не прив’язана до цієї серії.

### 5.1. Behavior

1. Користувач відкриває Series Details Page.
2. Натискає **Додати книгу в цю серію**.
3. Обирає режим **Існуюча книга**.
4. Шукає книгу у своїй бібліотеці.
5. Вибирає книгу.
6. Вказує номер частини.
7. Натискає **Додати до серії**.
8. Книга додається до поточної серії.
9. Список книг серії оновлюється.

---

### 5.2. Existing book search

Користувач має мати змогу знайти книгу за:

* назвою;
* оригінальною назвою;
* автором;
* ISBN, якщо він є;
* статусом читання;
* статусом володіння.

Placeholder:

```text
Пошук книги у бібліотеці...
```

---

### 5.3. Which books can be selected

У MVP в списку для вибору потрібно показувати тільки книги, які:

* належать поточному користувачу;
* ще не додані до цієї серії;
* не є missing placeholder;
* можуть бути прив’язані до серії.

Recommended MVP rule:

```text
Одна книга може належати тільки до однієї основної серії.
```

Тому якщо книга вже прив’язана до іншої серії, її краще не дозволяти додавати напряму в цьому flow.

---

### 5.4. Existing book already has another series

Якщо користувач намагається додати книгу, яка вже належить до іншої серії, потрібно показати warning.

Content:

```text
Ця книга вже належить до іншої серії
Щоб змінити серію книги, відкрийте редагування книги.
```

Action:

```text
Перейти до редагування книги
```

MVP behavior:

```text
Не переносити книгу між серіями автоматично в Add Book to Series flow.
```

Перенесення книги з однієї серії в іншу краще описати в окремій логіці Edit Book або Manage Book Series Relation.

---

### 5.5. Existing book already in this series

Якщо книга вже є в цій серії, вона не має додаватися повторно.

Behavior:

* не створювати duplicate;
* показати disabled state або warning.

Message:

```text
Ця книга вже додана до цієї серії
```

---

## 6. Scenario: Create new book inside series

Цей сценарій використовується, коли книги ще немає в бібліотеці користувача.

### 6.1. Behavior

1. Користувач відкриває Series Details Page.
2. Натискає **Додати книгу в цю серію**.
3. Обирає режим **Нова книга**.
4. Відкривається Create Book flow.
5. Поточна серія вже вибрана автоматично.
6. Користувач заповнює дані книги.
7. Користувач вказує номер частини.
8. Після submit книга створюється і додається до серії.
9. Series Details Page оновлюється.

---

### 6.2. Preselected series

Коли Create Book flow відкривається з Series Details Page, поле Series має бути вже заповнене.

Example:

```text
Series: Тінь і кістка
```

Користувач може бачити це поле як readonly або editable.

Recommended MVP:

```text
Series preselected, але користувач може змінити серію тільки через Create Book / Edit Book flow.
```

Якщо flow відкритий саме з конкретної Series Details Page, краще не давати випадково змінити серію в modal. Це зменшує ризик помилки.

---

### 6.3. Prefilled author

Якщо у серії є автор, поле автора в новій книзі може бути prefilled.

Example:

```text
Series author: Лі Бардуго
Book author: Лі Бардуго
```

Behavior:

* автор prefilled;
* користувач може змінити автора книги;
* зміна автора книги не змінює автора серії.

---

### 6.4. Default book statuses

Для нової книги в серії можна використовувати стандартні default values.

Recommended defaults:

| Field            | Default              |
| ---------------- | -------------------- |
| readingStatus    | `not_started`        |
| ownershipStatus  | `none`               |
| format           | empty / not selected |
| isFavorite       | false                |
| isInReadingQueue | false                |

Якщо користувач додає книгу через кнопку **Наступна книга → Додати книгу**, можна залишити ті самі default values.

---

## 7. Scenario: Add missing book

Missing book — це книга, яка відома як частина серії, але ще не додана в бібліотеку користувача.

Example:

```text
Книга 1 — Прочитано
Книга 2 — Читаю
Книга 3 — Ще не додано
```

### 7.1. MVP logic

У MVP missing books показуються тільки тоді, коли вони вже відомі в межах даних користувача.

Important:

```text
Автоматичне підтягування повного списку книг серії з інтернету не входить у MVP.
```

Missing book може з’явитися, якщо:

* користувач вручну додав запис про відсутню книгу;
* система має локальні дані про книгу в межах серії;
* книга була запланована як частина серії, але ще не створена як повноцінна книга в бібліотеці.

---

### 7.2. Add missing book behavior

Якщо користувач натискає:

```text
Додати книгу
```

на missing book row, відкривається Create Book flow з prefilled даними:

| Field            | Prefilled value                 |
| ---------------- | ------------------------------- |
| Series           | поточна серія                   |
| Title            | назва missing book, якщо відома |
| Part number      | номер частини missing book      |
| Author           | автор серії, якщо доступний     |
| Reading status   | `not_started`                   |
| Ownership status | `none`                          |

Після збереження:

* missing book стає повноцінною книгою в бібліотеці;
* state **Ще не додано** зникає;
* книга показується як звичайна книга в списку серії;
* прогрес і статистика серії оновлюються.

---

## 8. Form fields

### 8.1. Add existing book fields

У режимі **Існуюча книга** форма має містити:

| Field         | Required | Description                              |
| ------------- | -------- | ---------------------------------------- |
| Книга         | Так      | книга з бібліотеки користувача           |
| Номер частини | Так      | позиція книги в серії                    |
| Примітка      | Ні       | коротка службова примітка, якщо потрібна |

---

### 8.2. Create new book fields

У режимі **Нова книга** використовується Create Book flow.

Мінімально важливі поля для цієї фічі:

| Field            | Required | Description                              |
| ---------------- | -------- | ---------------------------------------- |
| Назва книги      | Так      | назва нової книги                        |
| Автор            | Ні       | автор книги, може бути prefilled з серії |
| Серія            | Так      | поточна серія, preselected               |
| Номер частини    | Так      | позиція книги в серії                    |
| Статус читання   | Ні       | default `not_started`                    |
| Статус володіння | Ні       | default `none`                           |
| Формат           | Ні       | паперова / електронна / аудіокнига       |
| Обкладинка       | Ні       | cover книги                              |

Повна логіка Create Book Form описується в окремій feature documentation.

---

## 9. Part number logic

`partNumber` — це номер книги в межах серії.

Він потрібен для:

* правильного порядку книг;
* визначення наступної книги;
* побудови progress logic;
* коректного відображення Series Details Page;
* правильного сортування книг у серії.

---

### 9.1. Required rule

У Add Book to Series flow `partNumber` є required.

Reason:

```text
Книга в серії має мати номер частини, щоб BookNest міг правильно показати порядок читання.
```

Якщо part number не вказаний, книга не додається через цей flow.

Error message:

```text
Вкажіть номер частини книги в серії
```

---

### 9.2. Allowed values

MVP rule:

```text
partNumber має бути цілим числом від 1 і більше.
```

Validation:

```text
тільки ціле число
мінімум 1
без від’ємних значень
без дробових значень
```

Error messages:

```text
Номер частини має бути цілим числом
Номер частини має бути більшим за 0
```

---

### 9.3. Default part number

Коли користувач додає нову книгу, система може запропонувати наступний номер частини.

Logic:

```text
defaultPartNumber = max(existingPartNumbers) + 1
```

Example:

```text
У серії вже є книги 1, 2, 3.
Default part number для нової книги: 4.
```

Якщо серія порожня:

```text
Default part number: 1.
```

Якщо користувач додає missing book:

```text
partNumber prefilled з missing book row.
```

---

### 9.4. Duplicate part number

Якщо в серії вже є книга з таким самим `partNumber`, потрібно показати warning або validation error.

Recommended MVP behavior:

```text
Блокувати submit і попросити вибрати інший номер частини.
```

Error message:

```text
У цій серії вже є книга з таким номером частини
```

Reason:

```text
У MVP не підтримується складний порядок читання, спін-офи, новели або книги з однаковим номером.
```

---

### 9.5. Missing part number in old data

Якщо в існуючих даних уже є книга без `partNumber`, Series Details Page може показувати її в кінці списку з warning.

Але Add Book to Series flow не має створювати нові книги без `partNumber`.

Rule:

```text
Через Add Book to Series flow не можна додати книгу без номера частини.
```

---

## 10. Total books count interaction

Якщо в серії вказано `totalBooksCount`, додавання книги має враховувати це значення.

### 10.1. Adding book within totalBooksCount

Example:

```text
totalBooksCount = 5
Користувач додає книгу з partNumber = 4
```

Behavior:

```text
Книга додається без warning.
```

---

### 10.2. Adding book beyond totalBooksCount

Example:

```text
totalBooksCount = 3
Користувач додає книгу з partNumber = 4
```

Recommended MVP behavior:

* показати warning;
* не додавати книгу, поки користувач не оновить `totalBooksCount`.

Message:

```text
Номер частини більший за загальну кількість книг у серії
Оновіть загальну кількість книг у серії або змініть номер частини.
```

Actions:

```text
Редагувати серію
Змінити номер частини
```

Reason:

```text
Progress серії залежить від totalBooksCount, тому значення не має суперечити кількості доданих книг.
```

---

### 10.3. Series without totalBooksCount

Якщо `totalBooksCount` не вказаний, користувач може додавати книги без обмеження по верхній межі.

Behavior:

```text
Progress рахується по доданих книгах.
```

---

## 11. Reading status and ownership status

### 11.1. Existing book

Якщо користувач додає існуючу книгу до серії:

* readingStatus книги не змінюється;
* ownershipStatus книги не змінюється;
* rating книги не змінюється;
* progress книги не змінюється;
* queue state книги не змінюється.

Add Book to Series тільки додає series relation і `partNumber`.

---

### 11.2. New book

Якщо користувач створює нову книгу в межах серії, застосовуються default values або значення, які користувач обрав у Create Book flow.

Default:

```text
readingStatus = not_started
ownershipStatus = none
```

---

### 11.3. Book in Reading Queue

Якщо існуюча книга вже була в Reading Queue, після додавання до серії вона має показувати badge:

```text
У черзі
```

Duplicate в Reading Queue не створюється.

---

## 12. Actions

### 12.1. Add existing book

Button:

```text
Додати до серії
```

Behavior:

1. Користувач вибирає існуючу книгу.
2. Вказує `partNumber`.
3. Натискає **Додати до серії**.
4. Система перевіряє validation rules.
5. Якщо все валідно, книга додається до серії.
6. Series Details Page оновлюється.

---

### 12.2. Create new book

Button:

```text
Створити книгу
```

Behavior:

1. Користувач відкриває режим **Нова книга**.
2. Заповнює Create Book fields.
3. Серія вже вибрана автоматично.
4. Вказує `partNumber`.
5. Натискає **Створити книгу**.
6. Книга створюється і додається до серії.
7. Series Details Page оновлюється.

---

### 12.3. Add missing book

Button:

```text
Додати книгу
```

Behavior:

1. Користувач натискає **Додати книгу** на missing book row.
2. Відкривається Create Book flow.
3. Дані missing book prefilled.
4. Після збереження missing book стає звичайною книгою в бібліотеці.

---

### 12.4. Cancel

Button:

```text
Скасувати
```

Behavior:

* закриває modal / drawer;
* не додає книгу до серії;
* не змінює список книг;
* якщо є незбережені зміни, можна показати confirmation.

Confirmation:

```text
Закрити без збереження?
Внесені зміни буде втрачено.
```

---

## 13. States

### 13.1. Loading state

Показується, коли flow завантажує список книг або відкриває форму.

Recommended UI:

* skeleton для search input;
* skeleton для списку книг;
* disabled submit button;
* loading indicator.

---

### 13.2. Empty state: no eligible books

Показується, якщо в бібліотеці немає книг, які можна додати до цієї серії.

Content:

```text
Немає книг для додавання
Усі доступні книги вже належать до серій або ваша бібліотека порожня.
```

Actions:

```text
Створити нову книгу
```

---

### 13.3. Empty state: series has no books

Якщо користувач відкриває flow з порожньої серії, можна показати допоміжний текст.

Content:

```text
Це буде перша книга в серії
Вкажіть номер частини 1 або інший номер, якщо серія починається не з першої книги.
```

Default part number:

```text
1
```

---

### 13.4. Validation error state

Показується, якщо користувач намагається додати книгу з невалідними даними.

Possible errors:

```text
Оберіть книгу
Вкажіть номер частини книги в серії
Номер частини має бути цілим числом
Номер частини має бути більшим за 0
У цій серії вже є книга з таким номером частини
```

---

### 13.5. Book already in series state

Якщо книга вже є в цій серії:

```text
Ця книга вже додана до цієї серії
```

Submit має бути disabled.

---

### 13.6. Book belongs to another series state

Якщо книга вже належить до іншої серії:

```text
Ця книга вже належить до іншої серії
Щоб змінити серію книги, відкрийте редагування книги.
```

Action:

```text
Перейти до редагування книги
```

---

### 13.7. Duplicate part number state

Якщо номер частини вже зайнятий:

```text
У цій серії вже є книга з таким номером частини
```

Behavior:

* submit disabled;
* користувач має змінити part number.

---

### 13.8. Total books count conflict state

Якщо номер частини більший за `totalBooksCount`:

```text
Номер частини більший за загальну кількість книг у серії
Оновіть загальну кількість книг у серії або змініть номер частини.
```

Actions:

```text
Редагувати серію
Змінити номер частини
```

---

### 13.9. Success state

Existing book success:

```text
Книгу додано до серії
```

New book success:

```text
Книгу створено і додано до серії
```

Missing book success:

```text
Книгу додано до бібліотеки
```

---

### 13.10. Error state

Показується, якщо книгу не вдалося додати до серії.

Content:

```text
Не вдалося додати книгу до серії
Спробуйте ще раз.
```

Action:

```text
Спробувати ще раз
```

---

## 14. After successful add

Після успішного додавання книги до серії потрібно оновити:

* Books in Series List;
* Reading Order Block;
* Your Progress in Series;
* Next Book block;
* Series Statistics;
* All Series Page card;
* count books in series;
* progress bar;
* next book logic.

---

### 14.1. Books list update

Книга має з’явитися у списку згідно з `partNumber`.

Sorting:

```text
partNumber ASC
```

---

### 14.2. Progress update

Прогрес перераховується автоматично.

Logic:

```text
finished books count / total books count * 100
```

Якщо `totalBooksCount` не вказаний:

```text
finished books count / added books count * 100
```

---

### 14.3. Next book update

Після додавання книги система має повторно визначити наступну книгу.

Next book — це:

* книга зі статусом `reading` або `rereading`, якщо така є;
* інакше перша книга з найменшим `partNumber`, яка не має `readingStatus = finished`.

---

### 14.4. Empty state removal

Якщо серія була порожня, після додавання першої книги empty state зникає.

---

## 15. What is not included

У MVP для **Add Book to Series** не входить:

* видалення книги з серії;
* відв’язування книги від серії;
* перенесення книги з однієї серії в іншу;
* drag-and-drop порядок книг;
* ручне сортування книг;
* складний reading order для спін-офів;
* однакові partNumber для основної книги і новели;
* тип книги: основна, новела, спін-оф, бонус;
* автоматичне підтягування всіх книг серії з інтернету;
* автоматичне визначення missing books;
* масове додавання книг до серії;
* імпорт серії з файлу;
* створення нової серії;
* редагування полів серії;
* видалення серії.

Important:

```text
Add Book to Series відповідає тільки за додавання книги до вже існуючої серії.
Create / Edit Series, Delete Series і Remove / Unlink Book from Series описуються окремо.
```

---

## 16. Acceptance Criteria

### Entry points

* Користувач може запустити Add Book to Series flow зі Series Details Page.
* Користувач може запустити Add Book to Series flow з empty state порожньої серії.
* Користувач може додати missing book через кнопку **Додати книгу**.
* Поточна серія автоматично вибрана в flow.

### Add existing book

* Користувач може вибрати існуючу книгу зі своєї бібліотеки.
* Користувач може шукати існуючу книгу за назвою.
* Користувач може шукати існуючу книгу за автором.
* Користувач не може додати одну й ту саму книгу в серію повторно.
* Користувач не може напряму додати книгу, яка вже належить до іншої серії.
* Після додавання існуюча книга з’являється у списку книг серії.
* Reading status існуючої книги не змінюється.
* Ownership status існуючої книги не змінюється.

### Create new book

* Користувач може створити нову книгу в межах поточної серії.
* Поточна серія вже вибрана автоматично.
* Автор книги може бути prefilled з автора серії.
* Після створення книга додається до поточної серії.
* Після створення книга з’являється у списку книг серії.
* Нова книга отримує default readingStatus.
* Нова книга отримує default ownershipStatus.

### Missing book

* Якщо книга позначена як **Ще не додано**, користувач може натиснути **Додати книгу**.
* Create Book flow відкривається з prefilled series.
* Part number може бути prefilled з missing book row.
* Після збереження missing book стає звичайною книгою в бібліотеці.
* Missing book state зникає після успішного додавання.

### Part number

* Користувач має вказати номер частини.
* Part number є required.
* Part number має бути цілим числом.
* Part number має бути більшим за 0.
* Якщо серія порожня, default part number дорівнює 1.
* Якщо в серії вже є книги, default part number дорівнює найбільшому partNumber + 1.
* Користувач не може додати книгу з duplicate partNumber.
* Якщо part number не вказаний, submit disabled або показується validation error.

### Total books count

* Якщо `totalBooksCount` не вказаний, книга може бути додана без верхнього обмеження.
* Якщо `totalBooksCount` вказаний, part number не має суперечити цьому значенню.
* Якщо part number більший за `totalBooksCount`, користувач бачить warning.
* Користувач має змінити part number або оновити totalBooksCount.

### Updates after add

* Після додавання книги оновлюється Series Details Page.
* Після додавання книги оновлюється список книг серії.
* Після додавання книги оновлюється progress bar серії.
* Після додавання книги оновлюється блок **Наступна книга**.
* Після додавання книги оновлюється блок **Статистика серії**.
* Після додавання книги оновлюється card серії на All Series Page.
* Якщо серія була порожня, empty state зникає.

### States

* Користувач бачить loading state під час завантаження flow.
* Користувач бачить empty state, якщо немає eligible books.
* Користувач бачить validation errors для невалідних полів.
* Користувач бачить warning, якщо книга вже належить до іншої серії.
* Користувач бачить error state, якщо книгу не вдалося додати.
* Користувач бачить success state після успішного додавання.

### Scope

* Add Book to Series додає книгу до вже існуючої серії.
* Add Book to Series не створює нову серію.
* Add Book to Series не редагує поля серії.
* Add Book to Series не видаляє книгу з серії.
* Add Book to Series не змінює порядок книг через drag-and-drop.
* Add Book to Series не підтримує складний reading order у MVP.
* Add Book to Series не підтягує книги серії автоматично з інтернету.
