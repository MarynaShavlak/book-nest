# CRUD Logic

## Important

На сторінці “Присвяти” користувач не створює присвяту напряму.

Присвята створюється або редагується через **Create / Edit Book Form**.

---

## Create dedication

User flow:

```txt
1. User opens Create Book form.
2. User fills field “Присвята автора”.
3. User saves book.
4. Book appears on /dedications.
```

---

## Edit dedication

User flow:

```txt
1. User opens Book Details.
2. User clicks Edit.
3. User updates “Присвята автора”.
4. User saves book.
5. Dedication card updates automatically.
```

---

## Delete dedication

User flow:

```txt
1. User opens Edit Book form.
2. User clears “Присвята автора”.
3. User saves book.
4. Book disappears from /dedications.
```

---

## Favorite dedication

Favorite action can be performed from:

- Dedications page card;
- Dedication modal;
- Book Details dedication block.

All entry points must update the same field:

```ts
isFavoriteDedication
```
