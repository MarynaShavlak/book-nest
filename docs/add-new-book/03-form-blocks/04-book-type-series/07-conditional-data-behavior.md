# Conditional data behavior

### 9.10. Conditional data behavior

#### Якщо користувач перемикається з “Частина серії” на “Соло книга”

У create mode:

* поля серії приховуються;
* дані серії не відправляються при submit;
* якщо була створена draft series через modal, вона не зберігається.

У edit mode:

* потрібно показати confirmation modal.

##### Confirmation modal

```text
Title: Прибрати книгу з серії?

Description:
Книга більше не буде відображатися на сторінці цієї серії. Номер частини та зв’язок із серією буде очищено.

Actions:
- Скасувати
- Прибрати з серії
```

---

---
