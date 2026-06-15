# All Series Page — Right Sidebar

> Source: `all-series-page.md`

### 4.7. Right sidebar

Right sidebar потрібен для швидких дій, фокусу на продовженні серій і компактної статистики.

У MVP right sidebar має містити:

```text
1. Quick actions
2. Continue series
3. Closest to completion
4. Series status stats
```

Right sidebar не має дублювати весь список серій. Він має допомагати користувачу швидко зрозуміти, що робити далі.

---


### 5.15. Right Sidebar: Quick Actions

Block title:

```text
Швидкі дії
```

Actions у MVP:

```text
Створити серію
Додати книгу
Перейти до недочитаних
```

Behavior:

| Action                 | Behavior                     |
| ---------------------- | ---------------------------- |
| Створити серію         | відкриває Create Series flow |
| Додати книгу           | відкриває Create Book flow   |
| Перейти до недочитаних | активує tab “Недочитані”     |

---


### 5.16. Right Sidebar: Continue Series

Block title:

```text
Продовжити серію
```

Блок показує одну серію, яку користувачу логічно продовжити.

MVP selection logic:

```text
Показати недочитану серію з найбільшим прогресом.
```

Example:

```text
Темні Початки
Прочитано 2 з 3
67%

Наступна:
Янтарне скло

[Відкрити серію]
```

Якщо немає недочитаних серій:

```text
Немає серій для продовження
```

---


### 5.17. Right Sidebar: Closest to Completion

Block title:

```text
Найближчі до завершення
```

Показує 2–3 недочитані серії з найбільшим прогресом.

Example:

```text
Темні Початки — 2 з 3 · 67%
Двір шипів і троянд — 2 з 5 · 40%
Хроніки Амбера — 3 з 10 · 30%
```

Action:

```text
Переглянути недочитані
```

---


### 5.18. Right Sidebar: Series Status Stats

Block title:

```text
Статус циклів
```

Показує статистику саме по `seriesStatus`.

Content:

```text
Завершені автором: 3
Ще виходять: 4
Невідомо: 2
```

Important:

Цей блок не показує прогрес користувача. Він показує статус книжкових циклів.

---
