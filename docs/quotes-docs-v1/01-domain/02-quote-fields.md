# Quote Fields

## text

Required quote text.

UI label:

```text
Текст цитати *
```

Placeholder:

```text
Введіть текст цитати...
```

Validation:

- required;
- trim before save;
- max length: 1000 characters;
- cannot be only spaces.

Counter:

```text
0 / 1000
```

## chapter

Optional chapter or section.

UI label:

```text
Розділ
```

Placeholder:

```text
Наприклад: Розділ III
```

Validation:

- optional;
- max length: 80 characters;
- trim before save.

## page

Optional page number.

UI label:

```text
Сторінка
```

Placeholder:

```text
Наприклад: 87
```

Validation:

- optional;
- must be a positive integer if provided;
- if book has `pages`, value should not exceed total pages;
- no decimals;
- no negative numbers.

## comment

Optional personal comment.

UI label:

```text
Коментар
```

Placeholder:

```text
Ваші думки, враження або контекст до цієї цитати...
```

Validation:

- optional;
- max length: 500 characters;
- trim before save.

Counter:

```text
0 / 500
```

## isSpoiler

Boolean flag.

UI label:

```text
Це спойлер
```

Helper text:

```text
Позначте, якщо цитата містить важливі сюжетні деталі.
```

Default:

```ts
isSpoiler: false
```

## isFavorite

Boolean flag.

UI label:

```text
Додати в улюблені
```

Helper text:

```text
Збережіть цю цитату у розділ «Улюблені».
```

Default:

```ts
isFavorite: false
```
