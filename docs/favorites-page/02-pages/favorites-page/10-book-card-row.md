# Favorite Book Card / Row

> Source: `favorites-page.md §12`

## 12. Favorite book card / row

Книга на сторінці **“Улюблені книги”** може відображатися як card у grid view або як row у list view.

---

### 12.1. What to show

На card / row потрібно показувати:

- cover або placeholder;
- title;
- author;
- publisher, якщо є;
- genres або tags;
- rating, якщо є;
- reading status;
- ownership status;
- formats;
- filled heart icon;
- action to open Book Details;
- `...` menu з додатковими діями.

---

### 12.2. What not to show in MVP

Не показувати в MVP:

- позицію в списку;
- drag handle;
- рівень улюбленості;
- коментар “чому ця книга улюблена”;
- кнопку share.

Ці можливості можна додати пізніше.

---

### 12.3. Visible actions

| Action | UI | Logic |
|---|---|---|
| Open book details | click on card / title / cover | відкриває Book Details |
| Remove from favorites | filled heart icon | `isFavorite: true → false` |
| More actions | `...` menu | відкриває додаткові дії |

---

### 12.4. More actions menu

Recommended actions:

- Переглянути книгу;
- Редагувати книгу;
- Оновити прогрес;
- Додати в чергу читання;
- Додати до списку;
- Прибрати з улюблених.

Destructive delete action краще не робити основною дією на сторінці улюблених. Якщо вона є в menu, її потрібно візуально відділити й показати confirmation modal.

---
