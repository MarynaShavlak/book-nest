# Delivery Block — Loading, Error and Responsive Behavior

> Source: book-details-delivery-block.md lines 1055-1131

---

## 18. Loading state

If delivery data is loading:

```text
Завантажуємо доставку...
```

Recommended UI:

* skeleton card;
* disabled actions;
* do not show stale delivery info as current.

If Book Details loads book first and delivery data separately:

* show page normally;
* show skeleton only inside Delivery Block.

---

## 19. Error state

If delivery data cannot be loaded:

```text
Не вдалося завантажити інформацію про доставку
```

Action:

```text
Спробувати ще раз
```

Fallback:

* Book Details page remains available;
* error in Delivery Block does not break whole page.

---

## 20. Responsive behavior

### Desktop

On desktop:

* Delivery Block is displayed in right sidebar;
* block should be compact;
* primary action is visible;
* secondary actions can be in menu;
* long values can wrap or truncate.

### Mobile

On mobile:

* Delivery Block becomes a regular card in page flow;
* show after Statuses block;
* actions stack vertically or collapse into menu;
* tracking number and URLs should not break layout;
* long tracking numbers should wrap.

Recommended mobile order:

```text
1. Book hero
2. Statuses
3. Delivery block
4. Series preview
5. Reading progress
6. Notes / Quotes preview
```

---
