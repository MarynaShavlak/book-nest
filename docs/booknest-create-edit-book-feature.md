# Feature: Створення / редагування книги

## 1. Мета фічі

Додати в **Book Nest** сторінку **“Додати книгу”** та режим **“Редагувати книгу”**, щоб користувач міг створювати й оновлювати запис книги у своїй бібліотеці.

Це одна з ключових фіч MVP, бо від неї залежать: **Моя бібліотека**, **Серії**, **Черга читання**, **Книги до покупки**, **Книги в дорозі**, **Позичені книги**, **Улюблені книги**, **Нотатки**, **Цитати**, **Персонажі**, **Статистика**, **Цілі читання** та **Календар читання**.

---

## 2. Режими сторінки

| Режим | URL приклад | Призначення |
|---|---|---|
| Create | `/books/new` | Створення нової книги |
| Edit | `/books/:bookId/edit` | Редагування існуючої книги |

### 2.1. Create mode

У режимі створення:

- форма відкривається з дефолтними значеннями;
- кнопка submit має текст **“Зберегти книгу”**;
- після успішного submit створюється новий запис книги;
- після створення рекомендовано переходити на детальну сторінку книги.

### 2.2. Edit mode

У режимі редагування:

- форма завантажує існуючу книгу;
- усі поля заповнюються поточними значеннями;
- кнопка submit має текст **“Зберегти зміни”**;
- після submit оновлюється існуюча книга;
- якщо книга не знайдена — показати error state або redirect у бібліотеку.

---

## 3. Layout сторінки

Сторінка використовує **FormPageLayout**.

### 3.1. Header

Create mode:

```text
Title: Додати книгу
Subtitle: Створіть новий запис у своїй бібліотеці
```

Edit mode:

```text
Title: Редагувати книгу
Subtitle: Оновіть інформацію про книгу
```

### 3.2. Навігація

У верхній частині має бути дія:

```text
← Назад до бібліотеки
```

Логіка:

- повертає користувача на сторінку **Моя бібліотека**;
- якщо у формі є незбережені зміни, потрібно показати confirmation modal;
- якщо змін немає — повернути без confirmation modal.

### 3.3. Основна структура

Сторінка поділена на дві частини:

```text
Main form area + Right assistant panel
```

Основна форма містить секції:

1. Основна інформація
2. Класифікація
3. Статус
4. Серія
5. Додатково
6. Розширена додаткова інформація

Права допоміжна панель містить:

1. Обкладинка книги
2. Обрані жанри й теги
3. Preview картки книги
4. Підказка / інформаційний блок

---

## 4. Data model

### 4.1. Рекомендована структура книги

```ts
export type Book = {
  id: string;
  userId: string;

  title: string;
  authorId: string;
  authorName: string;

  publisherId?: string | null;
  publisherName?: string | null;

  description?: string | null;

  genreIds: string[];
  tagIds: string[];

  ageCategory?: AgeCategory | null;
  language?: BookLanguage | null;

  readingStatus: ReadingStatus;
  ownershipStatus: OwnershipStatus;
  formats: BookFormat[];

  isSeriesPart: boolean;
  seriesId?: string | null;
  seriesName?: string | null;
  seriesPartNumber?: number | null;
  seriesStatus?: SeriesStatus | null;
  seriesTotalBooks?: number | null;

  pagesCount?: number | null;
  currentPage?: number | null;
  rating?: number | null;

  addToReadingQueue?: boolean;
  readingQueuePosition?: number | null;

  listIds: string[];

  coverUrl?: string | null;
  coverPath?: string | null;

  publicationYear?: number | null;
  isbn?: string | null;
  translator?: string | null;
  illustrator?: string | null;

  firstNote?: string | null;
  firstQuote?: string | null;

  recommendationSource?: RecommendationSource | null;
  recommenderName?: string | null;
  recommendationUrl?: string | null;

  purchaseInfo?: PurchaseInfo | null;
  deliveryInfo?: DeliveryInfo | null;
  loanInfo?: LoanInfo | null;

  isFavorite: boolean;

  createdAt: string;
  updatedAt: string;
};
```

---

## 5. Predefined configs

Усі predefined списки краще тримати окремо від бізнес-логіки.

Рекомендована структура:

```text
src/config/book-statuses.json
src/config/book-formats.json
src/config/age-categories.json
src/config/languages.json
src/config/genres.json
src/config/tags.json
src/config/authors.json
src/config/publishers.json
src/config/recommendation-sources.json
```

---

## 6. Секція “Основна інформація”

### 6.1. Назва книги

```text
Label: Назва книги *
Placeholder: Введіть назву книги
Type: text input
Required: yes
Field: title
```

Validation:

| Правило | Значення |
|---|---|
| Required | Так |
| Min length | 1 символ |
| Max length | 150 символів |
| Trim | Так |
| Empty spaces only | Заборонено |

Error messages:

```text
Введіть назву книги
Назва книги не може бути довшою за 150 символів
```

Logic:

- при введенні оновлюється preview картки книги;
- якщо назва порожня, у preview показується placeholder **“Приклад назви книги”**;
- при збереженні значення треба trim-ити.

---

### 6.2. Автор

```text
Label: Автор *
Placeholder: Знайдіть автора або додайте свого
Type: autocomplete / select
Required: yes
Fields: authorId, authorName
```

Джерела даних:

1. predefined authors;
2. custom authors поточного користувача.

Logic:

- користувач починає вводити імʼя автора;
- бачить підказки з predefined і custom списків;
- може вибрати автора;
- якщо автора немає — бачить дію `+ Додати автора “{searchValue}”`;
- новий автор зберігається для цього користувача;
- після створення custom author автоматично вибирається у формі.

Validation:

| Правило | Значення |
|---|---|
| Required | Так |
| Custom author min length | 2 символи |
| Custom author max length | 100 символів |
| Duplicate check | Так, case-insensitive |

Error messages:

```text
Оберіть автора
Імʼя автора має містити щонайменше 2 символи
Такий автор уже існує
```

---

### 6.3. Видавництво

```text
Label: Видавництво
Placeholder: Знайдіть видавництво
Type: autocomplete / select
Required: no
Fields: publisherId, publisherName
```

Джерела даних:

1. predefined publishers;
2. custom publishers поточного користувача.

Logic:

- користувач може вибрати видавництво зі списку;
- якщо видавництва немає — може додати власне;
- нове видавництво зберігається для цього користувача;
- поле можна залишити порожнім.

Validation:

| Правило | Значення |
|---|---|
| Required | Ні |
| Custom publisher min length | 2 символи |
| Custom publisher max length | 100 символів |
| Duplicate check | Так, case-insensitive |

Error messages:

```text
Назва видавництва має містити щонайменше 2 символи
Таке видавництво вже існує
```

---

### 6.4. Коротко про книгу без спойлерів

```text
Label: Коротко про книгу без спойлерів
Placeholder: Опишіть сюжет, атмосферу або головну ідею книги...
Type: textarea
Required: no
Counter: 0 / 500
Field: description
```

Validation:

| Правило | Значення |
|---|---|
| Required | Ні |
| Max length | 500 символів |
| Trim | Так |

Error message:

```text
Опис не може бути довшим за 500 символів
```

Logic:

- може показуватися на картці книги або детальній сторінці;
- якщо поле порожнє — блок опису можна не показувати.

---

## 7. Секція “Класифікація”

### 7.1. Жанри

```text
Label: Жанри
Placeholder: Оберіть жанри
Type: autocomplete / multi-select
Required: no, але рекомендовано
Field: genreIds
```

Джерело даних:

- predefined genres config;
- у MVP користувач не створює власні жанри.

Logic:

- користувач може вибрати один або кілька жанрів;
- вибрані жанри показуються як chips;
- жанри показуються у preview;


Validation:

| Правило | Значення |
|---|---|
| Required | Ні |
| Max selected | 5 |
| Duplicate values | Заборонено |
| Unknown genreId | Заборонено |

Error messages:

```text
Можна обрати не більше 5 жанрів
Обраний жанр не знайдено
```

---

### 7.2. Теги

```text
Label: Теги
Placeholder: Оберіть або створіть тег
Type: autocomplete / multi-select / tag input
Required: no
Field: tagIds
```

Джерела даних:

1. predefined tags;
2. custom tags поточного користувача.

Logic:

- користувач може вибрати існуючий тег;
- може створити новий тег через Enter;
- новий тег зберігається для користувача;
- тег можна видалити через chip.

Validation:

| Правило | Значення |
|---|---|
| Required | Ні |
| Tag min length | 2 символи |
| Tag max length | 30 символів |
| Max selected | 12 |
| Duplicate check | Так, case-insensitive |
| Allowed symbols | Літери, цифри, пробіли, дефіс |

Error messages:

```text
Тег має містити щонайменше 2 символи
Тег не може бути довшим за 30 символів
Такий тег уже додано
Можна додати не більше 12 тегів
```

---

### 7.3. Вікова категорія

```text
Label: Вікова категорія
Placeholder: Оберіть вікову категорію
Type: select
Required: no
Field: ageCategory
```

Predefined values:

```json
[
  { "value": "no_restrictions", "label": "Без обмежень" },
  { "value": "not_specified", "label": "Не вказано" },
  { "value": "6_plus", "label": "6+" },
  { "value": "12_plus", "label": "12+" },
  { "value": "14_plus", "label": "14+" },
  { "value": "16_plus", "label": "16+" },
  { "value": "18_plus", "label": "18+" },

]
```

Validation:

| Правило | Значення |
|---|---|
| Required | Ні |
| Unknown value | Заборонено |

---

### 7.4. Мова

```text
Label: Мова
Placeholder: Оберіть мову
Type: select / autocomplete
Required: no
Field: language
```

Predefined values:

```json
[
  { "value": "ukrainian", "label": "Українська" },
  { "value": "english", "label": "Англійська" },
  { "value": "polish", "label": "Польська" },
  { "value": "german", "label": "Німецька" },
  { "value": "french", "label": "Французька" },
  { "value": "spanish", "label": "Іспанська" },
  { "value": "other", "label": "Інше" }
]
```

Recommended default:

```ts
language = "ukrainian"
```

---

## 8. Секція “Статус”

### 8.1. Статус читання

```text
Label: Статус читання
Type: segmented control / select
Required: yes
Field: readingStatus
```

Predefined values:

```json
[
  { "value": "not_started", "label": "Не почато", "isDefault": true },
  { "value": "want_to_read", "label": "Хочу прочитати" },
  { "value": "reading", "label": "Читаю" },
  { "value": "paused", "label": "На паузі" },
  { "value": "finished", "label": "Прочитано" },
  { "value": "dnf", "label": "Покинуто" },
  { "value": "rereading", "label": "Перечитую" }
]
```

Default:

```ts
readingStatus = "not_started"
```

Business logic:

| Статус | Вплив |
|---|---|
| `reading` | книга зʼявляється на Dashboard у блоці “Читаю зараз” |
| `finished` | книга враховується у статистиці, цілях читання, календарі |
| `paused` | книга може показуватися у фільтрі “На паузі” |
| `dnf` | книга не враховується як прочитана |
| `rereading` | може показуватися як активне читання |

Validation:

- required;
- unknown value заборонено.

---

### 8.2. Статус володіння

```text
Label: Статус володіння
Type: segmented control / select
Required: yes
Field: ownershipStatus
```

Predefined values:

```json
[
  { "value": "none", "label": "Немає", "isDefault": true },
  { "value": "want_to_buy", "label": "Хочу купити" },
  { "value": "ordered", "label": "В дорозі" },
  { "value": "owned", "label": "Маю" },
  { "value": "borrowed_from_someone", "label": "Позичена у когось" },
  { "value": "lent_to_someone", "label": "Видана комусь" }
]
```

Default:

```ts
ownershipStatus = "none"
```

Important:

- **Електронна** і **Аудіокнига** не є статусами володіння;
- вони належать до поля `formats`.

Business logic:

| Статус | Вплив |
|---|---|
| `want_to_buy` | книга зʼявляється на сторінці “Книги до покупки” |
| `ordered` | книга зʼявляється на сторінці “Книги в дорозі” |
| `owned` | книга показується як книга, що є у користувача |
| `borrowed_from_someone` | книга зʼявляється на сторінці “Позичені книги” |
| `lent_to_someone` | книга зʼявляється на сторінці “Позичені книги” |

Conditional logic:

- якщо `ownershipStatus = "ordered"`, показати delivery fields;
- якщо `ownershipStatus = "borrowed_from_someone"` або `"lent_to_someone"`, показати loan fields.

---

### 8.3. Формат книги

```text
Label: Формат книги
Type: multi-select chips
Required: no
Field: formats
```

Predefined values:

```json
[
  { "value": "paper", "label": "Паперова" },
  { "value": "ebook", "label": "Електронна" },
  { "value": "audiobook", "label": "Аудіокнига" }
]
```

Default:

```ts
formats = []
```

Logic:

- книга може мати кілька форматів одночасно;
- формати показуються на картці книги;
- формати використовуються у фільтрах бібліотеки.

Validation:

- unknown value заборонено;
- duplicate values заборонені.

---

## 9. Секція “Серія”

### 9.1. Тип книги

```text
Label: Тип книги
Type: segmented control
Options:
- Соло книга
- Частина серії
Field: isSeriesPart
```

Default:

```ts
isSeriesPart = false
```

Logic:

Якщо вибрано **Соло книга**:

- поля серії приховані або disabled;
- `seriesId = null`;
- `seriesName = null`;
- `seriesPartNumber = null`;
- `seriesStatus = null`;
- `seriesTotalBooks = null`.

Якщо вибрано **Частина серії**:

- показати поля серії;
- `seriesName` стає required;
- `seriesPartNumber` стає required.

---

### 9.2. Назва серії

```text
Label: Назва серії *
Placeholder: Оберіть або створіть серію
Type: autocomplete / select
Required: only if isSeriesPart = true
Fields: seriesId, seriesName
```

Logic:

- користувач може вибрати існуючу серію;
- може створити нову серію;
- при створенні нової серії можна одразу задати `seriesStatus`.

Validation:

| Правило | Значення |
|---|---|
| Required | Так, якщо `isSeriesPart = true` |
| Min length | 2 символи |
| Max length | 120 символів |
| Duplicate check | Так, case-insensitive |

---

### 9.3. Номер частини

```text
Label: Номер частини *
Placeholder: Наприклад: 1
Type: number input
Required: only if isSeriesPart = true
Field: seriesPartNumber
```

Validation:

| Правило | Значення |
|---|---|
| Required | Так, якщо `isSeriesPart = true` |
| Min | 1 |
| Max | 999 |
| Integer only | Так |

---

### 9.4. Статус серії

```text
Label: Статус серії
Type: select / segmented control
Required: no
Field: seriesStatus
```

Predefined values:

```json
[
  { "value": "completed", "label": "Серія завершена" },
  { "value": "ongoing", "label": "Серія ще виходить" },
  { "value": "unknown", "label": "Невідомо", "isDefault": true }
]
```

Default:

```ts
seriesStatus = "unknown"
```

---

### 9.5. Загальна кількість книг у серії

```text
Label: Загальна кількість книг у серії
Placeholder: Наприклад: 5
Type: number input
Required: no
Field: seriesTotalBooks
```

Validation:

| Правило | Значення |
|---|---|
| Required | Ні |
| Min | 1 |
| Max | 999 |
| Integer only | Так |
| Must be >= seriesPartNumber | Так, якщо вказано `seriesPartNumber` |

Business logic:

Після збереження книга має:

- зʼявитися на детальній сторінці серії;
- бути відсортована за `seriesPartNumber`;
- впливати на прогрес серії;
- зʼявитися у блоці серій на Dashboard, якщо серія незавершена.

---

## 10. Секція “Додатково”

### 10.1. Кількість сторінок

```text
Label: Кількість сторінок
Placeholder: Наприклад: 432
Type: number input
Required: no
Field: pagesCount
```

Validation:

| Правило | Значення |
|---|---|
| Required | Ні |
| Min | 1 |
| Max | 10000 |
| Integer only | Так |

---

### 10.2. Поточна сторінка

```text
Label: Поточна сторінка
Placeholder: Наприклад: 120
Type: number input
Required: no
Field: currentPage
```

Validation:

| Правило | Значення |
|---|---|
| Required | Ні |
| Min | 0 |
| Integer only | Так |
| Must be <= pagesCount | Так, якщо вказано `pagesCount` |

Logic:

Якщо `currentPage === pagesCount`, можна запропонувати користувачу змінити `readingStatus` на `finished`.

---

### 10.3. Рейтинг

```text
Label: Рейтинг
Type: rating stars / select
Required: no
Field: rating
```

Validation:

| Правило | Значення |
|---|---|
| Required | Ні |
| Min | 1 |
| Max | 5 |
| Step | 0.5 або 1 |

---

### 10.4. Додати в чергу читання

```text
Label: Додати в чергу читання
Type: checkbox
Default: false
Field: addToReadingQueue
```

Business logic:

Якщо checkbox увімкнений:

- після створення книга додається в Reading Queue;
- `readingQueuePosition` встановлюється в кінець черги;
- книга зʼявляється на сторінці **Черга читання**.

Validation:

- додавати в чергу можна тільки один раз;
- якщо книга вже в черзі в edit mode — checkbox має бути checked або показувати badge **“Вже в черзі”**.

---

### 10.5. Додати до списку

```text
Label: Додати до списку
Type: checkbox + select
Required: no
Field: listIds
```

Logic:

- якщо checkbox вимкнений — select прихований або disabled;
- якщо checkbox увімкнений — користувач може вибрати один або кілька власних списків;
- після збереження книга додається до вибраних списків.

Validation:

- unknown listId заборонено;
- duplicate values заборонені.

---

## 11. Розширена “Додаткова інформація”

Секція прихована під toggle:

```text
Додаткова інформація
```

### 11.1. Рік видання

```ts
publicationYear?: number | null
```

Validation:

- optional;
- integer;
- min: 1000;
- max: поточний рік + 1.

### 11.2. ISBN

```ts
isbn?: string | null
```

Validation:

- optional;
- ISBN-10 або ISBN-13;
- дозволити дефіси й пробіли;
- перед збереженням нормалізувати.

### 11.3. Перекладач

```ts
translator?: string | null
```

Validation:

- optional;
- max: 100 символів.

### 11.4. Ілюстратор

```ts
illustrator?: string | null
```

Validation:

- optional;
- max: 100 символів.

### 11.5. Перша нотатка

```ts
firstNote?: string | null
```

Validation:

- optional;
- max: 1000 символів.

Logic:

- після створення книги можна автоматично створити note entity;
- якщо поле порожнє — нічого не створювати.

### 11.6. Перша цитата

```ts
firstQuote?: string | null
```

Validation:

- optional;
- max: 1000 символів.

Logic:

- після створення книги можна автоматично створити quote entity;
- якщо поле порожнє — нічого не створювати.

---

### 11.7. Джерело рекомендації

```ts
recommendationSource?: RecommendationSource | null;
recommenderName?: string | null;
recommendationUrl?: string | null;
```

Predefined values:

```json
[
  { "value": "instagram", "label": "Instagram" },
  { "value": "tiktok", "label": "TikTok" },
  { "value": "youtube", "label": "YouTube" },
  { "value": "goodreads", "label": "Goodreads" },
  { "value": "friend", "label": "Подруга / друг" },
  { "value": "bookstore", "label": "Книгарня" },
  { "value": "chatgpt", "label": "ChatGPT" },
  { "value": "other", "label": "Інше" }
]
```

Logic:

- якщо source = Instagram / TikTok / YouTube, показати поле `recommenderName`;
- якщо є URL, валідувати як посилання.

---

### 11.8. Інформація про купівлю

Показувати, якщо:

```ts
ownershipStatus === "want_to_buy"
```

Fields:

```ts
purchaseInfo?: {
  storeName?: string;
  storeUrl?: string;
  expectedPrice?: number;
  currency?: "UAH" | "EUR" | "USD";
  note?: string;
}
```

Validation:

- `storeUrl` має бути valid URL;
- `expectedPrice` має бути >= 0;
- `note` max 300 символів.

---

### 11.9. Інформація про доставку

Показувати, якщо:

```ts
ownershipStatus === "ordered"
```

Fields:

```ts
deliveryInfo?: {
  storeName?: string;
  orderNumber?: string;
  orderDate?: string;
  expectedDeliveryDate?: string;
  deliveryStatus: DeliveryStatus;
  note?: string;
}
```

Default:

```ts
deliveryStatus = "ordered"
```

Validation:

- `orderDate` не може бути в майбутньому;
- `expectedDeliveryDate` не може бути раніше `orderDate`;
- `orderNumber` max 100 символів;
- `note` max 300 символів.

---

### 11.10. Інформація про позику

Показувати, якщо:

```ts
ownershipStatus === "borrowed_from_someone"
ownershipStatus === "lent_to_someone"
```

Fields:

```ts
loanInfo?: {
  personName: string;
  loanDate?: string;
  dueDate?: string;
  loanDueStatus: LoanDueStatus;
  note?: string;
}
```

Validation:

- `personName` required;
- `personName` min 2;
- `personName` max 100;
- `dueDate` не може бути раніше `loanDate`;
- `note` max 300 символів.

---

## 12. Права панель

### 12.1. Обкладинка книги

```text
Block title: Обкладинка книги
Actions:
- Завантажити обкладинку
- Перетягнути зображення
- Замінити
- Видалити
```

Supported formats:

```text
JPG
JPEG
PNG
WEBP
```

Validation:

| Правило | Значення |
|---|---|
| Max size | 5 MB |
| Recommended size | 1200 × 1600 |
| Allowed MIME | image/jpeg, image/png, image/webp |

Error messages:

```text
Файл має бути у форматі JPG, PNG або WEBP
Розмір файлу не може перевищувати 5 MB
```

Logic:

- у create mode файл завантажується при submit або одразу після вибору — залежно від архітектури;
- у edit mode при заміні старий файл бажано видалити зі storage;
- якщо обкладинка не завантажена — показати placeholder;
- preview картки оновлюється одразу після вибору локального файлу.

---

### 12.2. Обрані теги

```text
Block title: Обрані теги
Sections:
- Жанри
- Теги
Actions:
- видалити chip
- очистити всі
```

Logic:

- показує вибрані `genres` і `tags`;
- якщо нічого не вибрано — показати текст **“Жанри й теги ще не обрані”**;
- видалення chip синхронно оновлює форму.

---

### 12.3. Preview картки книги

```text
Block title: Попередній перегляд
```

Preview показує:

- обкладинку або placeholder;
- назву;
- автора;
- статус читання;
- статус володіння;
- формати;
- жанри;
- теги;
- кількість сторінок;
- серію і номер частини, якщо книга частина серії.

Logic:

- preview оновлюється при кожній зміні полів;
- якщо поле порожнє, показати placeholder;
- preview не має блокувати submit.

---

### 12.4. Підказка

```text
Block title: Підказка
Text: Заповніть тільки основне зараз — розширені поля можна додати пізніше.
```

---

## 13. Submit / Cancel logic

### 13.1. Кнопки

```text
Скасувати
Зберегти книгу / Зберегти зміни
```

### 13.2. Скасувати

Logic:

- якщо форма clean — перейти назад;
- якщо форма dirty — показати confirmation modal.

Confirmation modal:

```text
Title: Є незбережені зміни
Description: Якщо вийти зараз, зміни буде втрачено.
Actions:
- Залишитися
- Вийти без збереження
```

### 13.3. Submit create flow

1. Validate form.
2. Normalize data.
3. Create custom author / publisher / tags / series if needed.
4. Upload cover if selected.
5. Create book.
6. Create related entities if needed:
   - reading queue item;
   - list relations;
   - first note;
   - first quote;
   - purchase info;
   - delivery info;
   - loan info.
7. Show success toast.
8. Redirect.

### 13.4. Submit edit flow

1. Validate form.
2. Normalize data.
3. Create new custom entities if needed.
4. Upload / replace / delete cover if changed.
5. Update book.
6. Update related relations.
7. Show success toast.
8. Redirect or stay on page.

Success toast create:

```text
Книгу додано до бібліотеки
Action: Переглянути книгу
```

Success toast edit:

```text
Зміни збережено
Action: Переглянути книгу
```

---

## 14. Normalization rules

Перед збереженням:

```ts
title = title.trim();
description = description?.trim() || null;
authorName = authorName.trim();
publisherName = publisherName?.trim() || null;
isbn = normalizeIsbn(isbn);
genreIds = unique(genreIds);
tagIds = unique(tagIds);
formats = unique(formats);
listIds = unique(listIds);
```

Порожні optional поля зберігати як `null` або не зберігати взагалі, залежно від обраної структури Firestore.

Рекомендація для Firebase:

```ts
undefined values не зберігати
optional empty fields -> null
```

---

## 15. Duplicate handling

### 15.1. Duplicate book warning

При створенні книги бажано перевіряти дублікати:

```text
same normalized title + same authorId
```

Якщо знайдено схожу книгу, показати warning:

```text
Схожа книга вже є у бібліотеці
```

Actions:

```text
Все одно створити
Перейти до існуючої книги
```

### 15.2. Duplicate custom entities

Duplicate check має бути для:

- author;
- publisher;
- tag;
- series.

Правило:

```text
normalized name + userId/predefined scope
```

---

## 16. Validation summary

### Required fields

| Field | Required condition |
|---|---|
| `title` | always |
| `authorId / authorName` | always |
| `readingStatus` | always |
| `ownershipStatus` | always |
| `seriesName` | if `isSeriesPart = true` |
| `seriesPartNumber` | if `isSeriesPart = true` |
| `loanInfo.personName` | if ownership is borrowed/lent and loan section is filled |
| `deliveryInfo.deliveryStatus` | if ownership is ordered |

### Optional fields

- publisher;
- description;
- genres;
- tags;
- age category;
- language;
- formats;
- pages count;
- current page;
- rating;
- lists;
- cover;
- publication year;
- ISBN;
- translator;
- illustrator;
- first note;
- first quote;
- recommendation source;
- purchase info;
- delivery info;
- loan info.

---

## 17. Recommended form defaults

```ts
const defaultBookFormValues = {
  title: "",
  authorId: null,
  authorName: "",
  publisherId: null,
  publisherName: null,
  description: "",
  genreIds: [],
  tagIds: [],
  ageCategory: null,
  language: "ukrainian",
  readingStatus: "not_started",
  ownershipStatus: "none",
  formats: [],
  isSeriesPart: false,
  seriesId: null,
  seriesName: null,
  seriesPartNumber: null,
  seriesStatus: "unknown",
  seriesTotalBooks: null,
  pagesCount: null,
  currentPage: null,
  rating: null,
  addToReadingQueue: false,
  listIds: [],
  coverFile: null,
  coverUrl: null,
  publicationYear: null,
  isbn: "",
  translator: "",
  illustrator: "",
  firstNote: "",
  firstQuote: "",
  recommendationSource: null,
  recommenderName: "",
  recommendationUrl: "",
  purchaseInfo: null,
  deliveryInfo: null,
  loanInfo: null,
  isFavorite: false
};
```

---

## 18. UI states

### 18.1. Loading state

Use when:

- edit mode loads book;
- autocomplete loads options;
- submit is pending;
- cover upload is pending.

### 18.2. Error state

Use when:

- book not found;
- save failed;
- cover upload failed;
- custom entity creation failed.

### 18.3. Disabled state

Submit button disabled when:

- form is submitting;
- required fields are invalid;
- cover is uploading.

### 18.4. Dirty state

Form is dirty if:

- any field differs from initial values;
- cover changed;
- selected tags / genres changed;
- related sections changed.

---

## 19. Acceptance criteria

### Create book

- User can open page **Додати книгу**.
- User can fill required fields.
- User can select author from autocomplete.
- User can add custom author.
- User can select publisher.
- User can add custom publisher.
- User can select genres.
- User can create custom tags.
- User can set reading status.
- User can set ownership status.
- User can select formats.
- User can mark book as part of a series.
- User can create/select series.
- User can upload cover.
- User can see live preview.
- User can save book.
- User sees success toast.
- Created book appears in **Моя бібліотека**.

### Edit book

- User can open edit page.
- Existing data is prefilled.
- User can update fields.
- User can replace/delete cover.
- User can save changes.
- Updated data appears in book details and lists.

### Navigation

- User can click **Назад до бібліотеки**.
- If there are unsaved changes, confirmation modal appears.
- If user confirms, changes are lost and user returns to library.

### Status-based routing

- If ownership status is `want_to_buy`, book appears in **Книги до покупки**.
- If ownership status is `ordered`, book appears in **Книги в дорозі**.
- If ownership status is `borrowed_from_someone` or `lent_to_someone`, book appears in **Позичені книги**.
- If reading status is `reading`, book appears in Dashboard block **Читаю зараз**.
- If reading status is `finished`, book is counted in statistics and reading goals.

---

## 20. Out of scope for MVP

Можна не робити в першій версії:

- автоматичне отримання даних книги по ISBN;
- інтеграцію з Google Books API;
- складну історію прогресу читання;
- складну історію повернення позичених книг;
- мультиобкладинки;
- OCR обкладинки;
- рекомендації на основі жанрів;
- масове редагування книг;
- складний import у цій формі.

---

## 21. Open questions

Перед реалізацією треба остаточно вирішити:

1. Чи створювати custom author / publisher / tag одразу при виборі, чи тільки після submit всієї книги?
2. Після створення книги redirect робити на детальну сторінку книги, бібліотеку чи залишати на формі?
3. Чи дозволяти створити книгу без жанру?
4. Чи робити `language = ukrainian` дефолтом?
5. Чи показувати `rereading` у MVP?
6. Чи зберігати `deliveryInfo.received` як історичний статус, чи одразу переводити книгу в `owned`?
7. Чи дозволяти кілька форматів одразу в MVP?

---

## 22. Recommended MVP decision

Рекомендовані рішення для першої версії:

```text
custom author / publisher / tag створювати на submit;
після створення переходити на детальну сторінку книги;
жанр зробити optional;
language default = ukrainian;
rereading приховати в UI, але залишити в enum;
delivery received переводить ownershipStatus в owned;
formats зробити multi-select одразу.
```
