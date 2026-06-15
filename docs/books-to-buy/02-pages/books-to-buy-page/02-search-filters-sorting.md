# Search, Filters and Sorting

## Search

Placeholder:

```text
Пошук у списку...
```

Search works by:

- title;
- original title;
- author;
- publisher;
- store name;
- genre;
- tags.

Rules:

- trim spaces;
- ignore case;
- search only wishlist books.

## Filters

Recommended filters:

```text
Усі
Є посилання
Без посилань
З ціною
Без ціни
Найвигідніші
За магазином
За видавництвом
За жанром
За тегом
```

Do not include `Хочу купити` as a filter because the whole page already shows only this status.

## Filter rules

| Filter | Logic |
| ------ | ----- |
| Усі | all wishlist books |
| Є посилання | at least one store link |
| Без посилань | no store links |
| З ціною | at least one link has price |
| Без ціни | no link has price |
| Найвигідніші | lowest best offers in visible list |
| За магазином | selected store exists in links |
| За видавництвом | publisher matches selected value |
| За жанром | genre included |
| За тегом | tag included |

## Sorting

Options:

```text
Спочатку додані
Новіші спочатку
За назвою
За автором
За видавництвом
За найнижчою ціною
За найвищою ціною
За кількістю магазинів
```

Default:

```text
Спочатку додані
```

Price sorting uses best offer price.
Books without price go after books with price.
