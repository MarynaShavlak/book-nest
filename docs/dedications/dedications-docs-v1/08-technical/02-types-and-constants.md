# Types and Constants

## Types

```ts
export type DedicationFilter =
  | 'all'
  | 'favorites'
  | 'finished'
  | 'unfinished';

export type DedicationSort =
  | 'newest'
  | 'recently_updated'
  | 'book_title_asc'
  | 'author_asc'
  | 'favorites_first'
  | 'publication_year_desc';

export type DedicationQuickFilter =
  | 'finished_only'
  | 'unfinished_only'
  | 'favorites_only'
  | 'without_favorites';
```

---

## Filter labels

```ts
export const DEDICATION_FILTER_LABELS = {
  all: 'Усі',
  favorites: 'Улюблені',
  finished: 'Прочитані',
  unfinished: 'Непрочитані',
} as const;
```

---

## Sort labels

```ts
export const DEDICATION_SORT_LABELS = {
  newest: 'Найновіші додані',
  recently_updated: 'Нещодавно оновлені',
  book_title_asc: 'За назвою книги',
  author_asc: 'За автором',
  favorites_first: 'Спочатку улюблені',
  publication_year_desc: 'За роком видання',
} as const;
```

---

## Empty text constants

```ts
export const DEDICATION_EMPTY_STATE = {
  title: 'У вас ще немає присвят',
  description:
    'Додайте присвяту автора на сторінці створення або редагування книги — і вона зʼявиться тут.',
  cta: 'Додати книгу',
};
```
