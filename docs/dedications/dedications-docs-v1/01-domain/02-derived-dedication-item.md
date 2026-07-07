# Derived Dedication Item

На сторінці **“Присвяти”** можна працювати не з окремою колекцією, а з derived item, який формується на основі книги.

```ts
type DedicationListItem = {
  id: string; // bookId або `${bookId}:dedication`
  bookId: string;
  userId: string;

  text: string;
  isFavorite: boolean;

  bookTitle: string;
  bookOriginalTitle?: string;
  bookCoverUrl?: string;

  authorNames: string[];
  genreNames?: string[];
  tagNames?: string[];

  readingStatus: ReadingStatus;
  ownershipStatus: OwnershipStatus;

  bookCreatedAt: string;
  dedicationUpdatedAt?: string;
};
```

---

## ID strategy

Для MVP можна використовувати:

```ts
id = book.id;
```

Для full version краще:

```ts
id = `${book.id}:dedication`;
```

Це дозволить у майбутньому додати deep link:

```txt
/dedications/book_123
```

або

```txt
/dedications/book_123:dedication
```

---

## Перевага derived item

Не потрібно дублювати дані:

- назву книги;
- автора;
- обкладинку;
- жанри;
- статус читання.

Сторінка автоматично завжди показує актуальні дані книги.
