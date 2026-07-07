# Components: Stats and Filter Cards

## StatisticsCard

### Props

```ts
type DedicationStats = {
  total: number;
  favorites: number;
  fromFinishedBooks: number;
  fromUnfinishedBooks: number;
  mostCommonGenre?: string;
  topAuthor?: string;
};
```

### Empty values

Якщо значення немає:

```txt
—
```

---

## QuickFiltersCard

### Props

```ts
type QuickDedicationFilter =
  | 'FINISHED_ONLY'
  | 'UNFINISHED_ONLY'
  | 'FAVORITES_ONLY'
  | 'WITHOUT_FAVORITES';
```

### Behavior

Кнопки мають оновлювати query state сторінки.

Наприклад:

```ts
onQuickFilterClick('FAVORITES_ONLY')
```

оновлює:

```ts
filter = 'favorites'
```

---

## DecorativeQuoteCard

Це purely decorative / emotional block.

Не потрібно підвантажувати текст з бекенду.

Default text:

```txt
Кожна присвята — це маленька історія про когось важливого.
```
