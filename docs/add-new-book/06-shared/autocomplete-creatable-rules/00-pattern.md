# Autocomplete with custom value pattern

### 4.6. Autocomplete with custom value pattern

Цей pattern використовується для:

* автора;
* видавництва;
* тегів.

#### Behavior

* користувач вводить search value;
* система показує збіги зі списку;
* користувач може вибрати існуюче значення;
* якщо потрібного значення немає, користувач може створити custom value;
* custom value тимчасово додається у форму;
* реальне створення custom value відбувається тільки після submit;
* перед створенням виконується duplicate check.

#### UI action

Якщо значення не знайдено, потрібно показати дію:

```text
+ Додати “{searchValue}”
```

Для автора можна показувати:

```text
+ Додати автора “{searchValue}”
```

Для видавництва:

```text
+ Додати видавництво “{searchValue}”
```

Для тегів:

```text
+ Додати тег “{searchValue}”
```

---
