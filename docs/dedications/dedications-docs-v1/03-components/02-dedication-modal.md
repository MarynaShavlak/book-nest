# Component: Dedication Reading Modal / Drawer

## Purpose

Modal дозволяє прочитати повний текст присвяти без переходу зі сторінки.

---

## Desktop layout

```txt
┌─────────────────────────────────────────┐
│ Cover  Book title                       │
│        Author                           │
│                                         │
│        “Full dedication text...”        │
│                                         │
│ [До книги] [Скопіювати] [Улюблена]      │
└─────────────────────────────────────────┘
```

---

## Mobile layout

На mobile краще використовувати bottom sheet / full screen drawer.

---

## Modal content

- обкладинка книги;
- назва книги;
- автор;
- повний текст присвяти;
- жанри / теги, якщо є;
- кнопка `До книги`;
- кнопка `Скопіювати`;
- кнопка `Улюблена`.

---

## Close behavior

Закриття:

- close icon;
- Escape;
- click outside;
- swipe down on mobile, якщо використовується bottom sheet.

---

## Accessibility

- modal має мати `role="dialog"`;
- focus trap;
- перший focus — close button або title;
- після закриття focus повертається на картку.
