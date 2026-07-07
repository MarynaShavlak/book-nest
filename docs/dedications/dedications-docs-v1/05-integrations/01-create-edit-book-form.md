# Integration: Create / Edit Book Form

## Field

Add field to the book form:

```txt
Присвята автора
```

Recommended location:

- after book description;
- or in optional block “Додаткова інформація”;
- or as separate collapsible block “Присвята автора”.

---

## Input type

Use textarea.

Recommended placeholder:

```txt
Наприклад: Присвячую цю книгу всім, хто...
```

---

## Validation

```ts
authorDedication?: string;
```

Rules:

- optional;
- trim before save;
- max length 2000 for MVP;
- preserve line breaks.

---

## Helper text

```txt
Необовʼязково. Якщо додати присвяту, вона зʼявиться на окремій сторінці “Присвяти”.
```

---

## Create mode behavior

If dedication is filled:

```txt
book appears on /dedications after save
```

If dedication is empty:

```txt
book does not appear on /dedications
```

---

## Edit mode behavior

If dedication is changed:

```txt
dedication card updates
```

If dedication is removed:

```txt
dedication card disappears
```

---

## Favorite field in form

Do not show `isFavoriteDedication` in Create Book form by default.

Favorite is a user action on the dedication itself, not core book metadata.
