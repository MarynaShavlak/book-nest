### 10.6. URL query behavior

View mode може зберігатися в URL query params.

Examples:

```text
/library?view=grid
/library?view=list
```

Якщо `view` відсутній в URL, система має використовувати збережений user preference.

Якщо user preference ще немає, використовується default:

```text
grid
```

---
