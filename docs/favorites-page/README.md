# Favorites Module Documentation v2

Це перероблена структура документації для логіки **улюблених книжок** у BookNest.

Мета цієї версії — розбити старі великі файли на маленькі, самодостатні документи, щоб Claude Code або інший AI-інструмент міг працювати з конкретною частиною фічі без втрати контексту.

## Як користуватись

Не давай AI весь модуль одразу. Для реалізації конкретної задачі обирай маленький пакет файлів:

```text
00-module-map.md
01-domain/... потрібні domain rules
02-pages/... потрібна сторінка або блок
03-actions/... потрібна дія
05-shared/... спільні правила
```

## Основні частини

- `01-domain/` — бізнес-логіка, модель даних, правила доступу, включення/виключення книг.
- `02-pages/` — документація сторінки Favorites.
- `03-actions/` — toggle favorite, add/remove favorite, optimistic update, undo.
- `04-integrations/` — як favorite працює на Book Details, My Library, Search, Custom Lists, Queue, Series.
- `05-shared/` — спільні правила для states, filters, sorting, acceptance criteria.

## Важливо

`isFavorite` — це boolean-позначка книги, а не reading status, ownership status або custom list.
