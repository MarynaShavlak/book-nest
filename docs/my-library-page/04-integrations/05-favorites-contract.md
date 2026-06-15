# Favorites contract

## Purpose

My Library показує favorite action для книги й має синхронізуватися зі сторінкою Улюблені.

## Contract

- Favorite toggle змінює `isFavorite` для книги.
- Після toggle стан іконки на картці має оновитися.
- Favorites Page має отримати оновлений список.
- Bulk favorite actions мають працювати для вибраних книг.

## Related source sections

### 12.10. Favorite actions

Actions:

```text
Додати в улюблені
Прибрати з улюблених
```

Logic:

* **Додати в улюблені** встановлює `isFavorite = true`;
* **Прибрати з улюблених** встановлює `isFavorite = false`;
* дія застосовується до всіх вибраних книг;
* summary card **Улюблених** має оновитися після виконання дії.

---

### 11.2. Visible actions

На картці книги мають бути видимі тільки базові дії.

| Action            | UI                                  | Logic                                |
| ----------------- | ----------------------------------- | ------------------------------------ |
| Open book details | клік по картці / назві / обкладинці | відкриває сторінку деталей книги     |
| Toggle favorite   | heart icon                          | додає або прибирає книгу з улюблених |
| More actions      | `...` button                        | відкриває меню з додатковими діями   |

---
