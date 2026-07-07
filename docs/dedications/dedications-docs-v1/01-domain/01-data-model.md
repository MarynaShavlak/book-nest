# Data Model

## Рекомендована модель для MVP

У межах MVP присвяту можна зберігати прямо в документі книги.

```ts
type Book = {
  id: string;
  userId: string;

  title: string;
  originalTitle?: string;
  authorIds: string[];

  authorDedication?: string;
  isFavoriteDedication?: boolean;

  readingStatus: ReadingStatus;
  ownershipStatus: OwnershipStatus;

  coverUrl?: string;
  genreIds?: string[];
  tagIds?: string[];

  createdAt: string;
  updatedAt: string;
};
```

---

## Full version model

Для повної версії можна винести присвяту в окрему вкладену структуру.

```ts
type BookDedication = {
  text: string;
  isFavorite: boolean;
  source?: 'BOOK_FRONT_MATTER' | 'USER_ADDED' | 'IMPORTED';
  language?: string;
  pageNumber?: number;
  createdAt: string;
  updatedAt?: string;
};

type Book = {
  id: string;
  userId: string;
  dedication?: BookDedication;
};
```

---

## Коли створюється dedication item

Окремий dedication item не потрібно створювати вручну.

Логіка:

```txt
Якщо book.authorDedication має непорожній текст → книга входить у список присвят.
Якщо book.authorDedication пустий або видалений → книга не показується на сторінці присвят.
```

---

## Валідація поля

```ts
const AuthorDedicationSchema = z
  .string()
  .trim()
  .max(2000)
  .optional();
```

Рекомендований ліміт:

```txt
MVP: 2000 символів
Full: 5000 символів
```

---

## Normalization

Перед збереженням:

- обрізати пробіли на початку й у кінці;
- не зберігати пустий рядок;
- зберігати переноси рядків;
- не видаляти лапки;
- не форматувати текст автоматично.

---


## Favorite fields separation

`isFavorite` and `isFavoriteDedication` must be stored and handled as separate fields.

```ts
book.isFavorite              // favorite book
book.isFavoriteDedication    // favorite dedication
```

Do not infer `isFavoriteDedication` from `isFavorite`, and do not infer `isFavorite` from `isFavoriteDedication`.

---
