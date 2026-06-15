# Right Sidebar

## Purpose

Right sidebar gives quick purchase overview and shortcuts.

Recommended blocks:

```text
Short statistics
Best offers
Quick actions
How it works
```

## Short statistics

Title:

```text
Коротка статистика
```

Fields:

- Книг у списку;
- Середня ціна;
- Магазинів відстежується;
- Найвигідніша пропозиція.

Example:

```text
Книг у списку: 14
Середня ціна: 482 грн
Магазинів відстежується: 5
Найвигідніша пропозиція: 380 грн
```

## Best offers

Title:

```text
Найвигідніші покупки
```

Show top 3 books with lowest best offer.

Each item shows:

- cover;
- title;
- store;
- price.

Action:

```text
Переглянути всі
```

Behavior:

- applies best offers filter/sorting;
- or scrolls to the main list.

## Quick actions

Recommended MVP quick actions:

```text
Додати книгу
Відкрити бібліотеку
Книги в дорозі
```

Avoid bulk `Позначити куплені` unless selection mode exists.

## How it works

Text:

```text
Коли ви позначаєте книгу як куплену, вона зникає з цього списку, а її статус власності стає “Маю”.
```

If delivery integration is enabled:

```text
Якщо книгу вже замовлено, але ви ще її не отримали, позначте її як “В дорозі”.
```
