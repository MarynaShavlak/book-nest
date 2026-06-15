# My Library and Dashboard Contract

## My Library

My Library should support filters:

```text
Позичені у когось
Видані комусь
```

Book card badges:

For borrowed_from_someone:

```text
Позичена у Марини
```

For lent_to_someone:

```text
У Олі до 30.06
```

If overdue:

```text
Прострочено
```

---

## Dashboard

Dashboard can show small loan widget:

```text
2 книги потрібно повернути цього тижня
1 ваша книга прострочена у подруги
3 книги очікують повернення
```

Action:

```text
Перейти до позичених книг
```

---

## Dashboard calculation

Widget should use active loans only:

```ts
loan.status === "active"
```

Examples:

* active borrowed count;
* active lent count;
* due this week count;
* overdue count;
* nearest return.
