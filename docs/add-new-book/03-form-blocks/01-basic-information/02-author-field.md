# Author field

#### Автор

| Параметр                 | Значення                          |
| ------------------------ | --------------------------------- |
| Label                    | Автор *                           |
| Placeholder              | Знайдіть автора або додайте свого |
| Type                     | Autocomplete / Select             |
| Required                 | Так                               |
| Custom author min length | 2 символи                         |
| Custom author max length | 100 символів                      |
| Duplicate check          | Так                               |
| HTML tags                | Заборонено                        |

##### Data source

Autocomplete має шукати авторів з двох джерел:

* predefined authors: `foundation/config/book-authors.json`;
* custom authors поточного користувача.

Для MVP можна використовувати local config. У майбутньому це можна замінити на API.

##### Logic

* користувач починає вводити ім’я автора;
* система показує збіги зі списку авторів;
* користувач може вибрати існуючого автора;
* якщо автора немає, користувач може додати custom author;
* після вибору або створення автора поле вважається заповненим;
* у preview оновлюється ім’я автора;
* якщо автор не вибраний, submit має бути заблокований або має показувати validation error.

##### Custom author creation

Custom author створюється тільки після submit всієї форми.

Перед створенням потрібно виконати duplicate check по правилу:

```text
normalized author name + user scope
```

##### Error messages

```text
Оберіть автора
Ім’я автора має містити щонайменше 2 символи
Ім’я автора не може бути довшим за 100 символів
Такий автор уже існує
```

---
