# All Notes Page — Layout

## Page structure

```text
[Sidebar]

Main content:
  Header
  Search
  Quick filters
  Advanced filters / sorting
  Notes grid/list
  Pagination or load more

Right sidebar:
  Statistics
  Quick filters
  Tip
  Quick action
```

## Header

```text
Нотатки
Усі ваші думки, враження, питання та ідеї до книг і серій.
```

Badge example:

```text
32 нотатки
```

## Header actions

- `+ Додати нотатку`

Якщо користувач додає нотатку зі сторінки `Нотатки`, треба спочатку вибрати сутність:

- книга;
- серія.

Після вибору сутності відкривається стандартна modal `Додати нотатку`.

## Search

Search input:

```text
Пошук у нотатках...
```

## Display mode

Для MVP достатньо grid або list.

Рекомендація: cards у 2 колонки на desktop, 1 колонка на tablet/mobile.

## Pagination

Якщо нотаток багато:

- pagination;
- або `Завантажити ще`.

Для cozy UI краще `Завантажити ще`.
