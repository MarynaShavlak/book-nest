# Accessibility

## Keyboard

- Modal must be keyboard accessible.
- Escape closes modal if there are no unsaved changes or after confirmation.
- Tab order must follow visual order.
- Actions menu must be keyboard navigable.

## Screen readers

Buttons should have clear labels:

- `Додати нотатку в улюблені`
- `Прибрати нотатку з улюблених`
- `Закріпити нотатку`
- `Відкріпити нотатку`
- `Показати спойлер`
- `Приховати спойлер`

Avoid ambiguous labels like only `heart` or `pin`.

## Spoilers

Spoiler hidden state should announce that content is hidden.

Example aria-label:

```text
Ця нотатка містить спойлер. Натисніть, щоб показати текст.
```

## Color

Do not rely only on color for spoiler/favorite/pinned states.

Use icon + text or aria-label.

## Character counter

Counter `0 / 5000` should be visible and understandable, but not overly noisy for screen readers.
