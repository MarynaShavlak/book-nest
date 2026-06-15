# Add/Remove Accessibility

Action **Додати в чергу читання** і **Прибрати з черги** мають бути доступні для keyboard і screen reader.

Requirements:

* buttons мають бути focusable;
* action має працювати через Enter / Space;
* disabled state має бути зрозумілим;
* modal має мати focus trap;
* після закриття modal focus має повертатися на кнопку, яка її відкрила.

Recommended aria labels:

```text
Додати книгу в чергу читання
Прибрати книгу з черги читання
```

---

# Drag and Page Accessibility

## Drag-and-drop accessibility

If drag-and-drop is implemented, provide keyboard-accessible reorder if possible.

Minimum MVP requirements:

- drag handles are focusable only if they are interactive;
- buttons have clear labels;
- disabled states are visible;
- modals trap focus;
- after modal close, focus returns to opener.

## Recommended aria labels

```text
Додати книгу в чергу читання
Прибрати книгу з черги читання
Почати читати книгу
Переглянути книгу
```
