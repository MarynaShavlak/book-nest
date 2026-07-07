# Accessibility Checklist

## Page

- Page has one `h1`: `Присвяти`.
- Search input has visible label or accessible label.
- Filter chips are keyboard accessible.
- Sort dropdown is keyboard accessible.
- Cards have accessible action buttons.

---

## Dedication card

- Book cover image has alt text.
- Action buttons have aria-labels:

```txt
Перейти до книги
Скопіювати присвяту
Додати присвяту в улюблені
Прибрати присвяту з улюблених
```

---

## Modal

- `role="dialog"`.
- `aria-modal="true"`.
- Focus trap enabled.
- Escape closes modal.
- Close button has accessible label.

---

## Color contrast

- Text on cream cards must have enough contrast.
- Active brown buttons must have readable text.
- Favorite state must not rely only on color; icon shape/fill should change.
