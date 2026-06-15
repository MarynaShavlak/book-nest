# Dashboard and My Library Contract

## Dashboard

Dashboard may show a small delivery widget:

```text
5 книг в дорозі
2 очікуються цього тижня
1 затримується
```

Widget actions:

```text
Перейти до книг в дорозі
Перейти до історії замовлень
```

Dashboard must not implement full delivery management.

## My Library

My Library should show ownership badge:

```text
В дорозі
```

For books with active delivery, optional quick actions:

```text
Перейти до доставки
Позначити як отриману
```

## Data update expectations

After delivery actions:

- ownership badge updates;
- active delivery widgets update;
- search/filter results refresh if ownership status changed.

## Important rule

My Library must not duplicate Books in Transit page.

It only gives a quick status/action entry point.
