# Publisher field

#### Видавництво

| Параметр                    | Значення                              |
| --------------------------- | ------------------------------------- |
| Label                       | Видавництво                           |
| Placeholder                 | Знайдіть видавництво або додайте своє |
| Type                        | Autocomplete / Select                 |
| Required                    | Ні                                    |
| Custom publisher min length | 2 символи                             |
| Custom publisher max length | 100 символів                          |
| Duplicate check             | Так                                   |
| HTML tags                   | Заборонено                            |

##### Data source

Autocomplete має шукати видавництва з двох джерел:

* predefined publishers: `foundation/config/book-publishers.json`;
* custom publishers поточного користувача.

Для MVP можна використовувати local config. У майбутньому це можна замінити на API.

##### Logic

* користувач може вибрати видавництво зі списку;
* якщо видавництва немає, користувач може додати custom publisher;
* якщо поле порожнє, книга все одно може бути створена;
* якщо видавництво вибрано, воно показується на детальній сторінці книги;
* у compact preview видавництво можна не показувати.

##### Custom publisher creation

Custom publisher створюється тільки після submit всієї форми.

Перед створенням потрібно виконати duplicate check по правилу:

```text
normalized publisher name + user scope
```

##### Error messages

```text
Назва видавництва має містити щонайменше 2 символи
Назва видавництва не може бути довшою за 100 символів
Таке видавництво вже існує
```

---
