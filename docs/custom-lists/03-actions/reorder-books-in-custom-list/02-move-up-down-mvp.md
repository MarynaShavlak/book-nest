# Move Up / Down MVP

## Role

Defines the MVP interaction for moving a book within the list.

## Source coverage

`custom-list-details-page.md` section 18

## Content

## 18. Move book up / down for MVP

Для MVP рекомендовано зробити простий reorder через кнопки:

```text
Перемістити вище
Перемістити нижче
```

Recommended location:

```text
Book card → More actions
```

або compact buttons біля position:

```text
↑
↓
```

Behavior:

* якщо книга перша у списку, action **Перемістити вище** disabled;
* якщо книга остання у списку, action **Перемістити нижче** disabled;
* після переміщення позиції книг перераховуються;
* новий порядок одразу відображається в UI;
* порядок зберігається для поточного користувача.

Example:

Було:

```text
1. Книга A
2. Книга B
3. Книга C
```

Користувач перемістив **Книга C** вище.

Стало:

```text
1. Книга A
2. Книга C
3. Книга B
```

---
