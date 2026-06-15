# Duplicate prevention

### 4.4. Duplicate check

Для custom значень перевірка дублікатів виконується по правилу:

```text
normalized value + user scope
```

Duplicate check має бути:

* case-insensitive;
* після `trim`;
* з урахуванням зайвих пробілів;
* бажано з нормалізацією апострофів, крапок і схожих символів.

Приклад однакових значень:

```text
Сара Дж. Маас
сара дж. маас
Сара Дж.  Маас
```

```text
slow burn
Slow Burn
slow   burn
```

Такі значення мають вважатися потенційними дублікатами.
