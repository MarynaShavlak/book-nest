# Book Details Contract

> Source: `favorite-book-toggle.md §6`

## 6. Book Details behavior

На сторінці **Book Details** favorite action має бути в hero section біля назви книги або в зоні основних actions.

Recommended location:

```text id="xhcbnk"
Book Details → Hero section → Heart icon
```

Behavior:

* якщо книга не улюблена, показується outline heart;
* якщо книга улюблена, показується filled heart;
* при кліку значення `isFavorite` змінюється на протилежне;
* сторінка не перезавантажується;
* користувач залишається на Book Details.

---
