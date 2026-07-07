# Add / Edit Quote Modal Fields and Validation

## Fields

### Text quote

Label:

```text
Текст цитати *
```

Placeholder:

```text
Введіть текст цитати...
```

Validation:

- required;
- max 1000 characters;
- trim before save.

### Chapter

Label:

```text
Розділ
```

Placeholder:

```text
Наприклад: Розділ III
```

Validation:

- optional;
- max 80 characters.

### Page

Label:

```text
Сторінка
```

Placeholder:

```text
Наприклад: 87
```

Validation:

- optional;
- positive integer;
- cannot be 0;
- cannot exceed book page count if available.

### Comment

Label:

```text
Коментар
```

Placeholder:

```text
Ваші думки, враження або контекст до цієї цитати...
```

Validation:

- optional;
- max 500 characters.

### Spoiler toggle

Label:

```text
Це спойлер
```

Helper:

```text
Позначте, якщо цитата містить важливі сюжетні деталі.
```

### Favorite toggle

Label:

```text
Додати в улюблені
```

Helper:

```text
Зберегти цю цитату у розділ «Улюблені».
```

## Info note

Show under toggles:

```text
Цитати, позначені як спойлери, будуть приховані до натискання кнопки “Показати спойлер”.
```

## Submit disabled state

Submit button should be disabled if:

- quote text is empty;
- quote text is only spaces;
- field has validation errors;
- request is pending.
