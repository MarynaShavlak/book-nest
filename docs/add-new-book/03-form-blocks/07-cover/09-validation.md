# Validation

### 12.13. Validation

| Правило              | Значення                        |
| -------------------- | ------------------------------- |
| Required             | Ні                              |
| Allowed formats      | JPG, JPEG, PNG, WEBP            |
| Max size             | 5 MB                            |
| Recommended ratio    | 2:3                             |
| Min recommended size | 600 × 900 px                    |
| Horizontal image     | Дозволити, але показати warning |
| Corrupted image      | Заборонити                      |

#### Error messages

```text id="og6vet"
Файл має бути у форматі JPG, PNG або WEBP
Розмір файлу не може перевищувати 5 MB
Не вдалося завантажити зображення
Файл пошкоджений або не підтримується
```

#### Warning messages

```text id="lrgh77"
Обкладинка краще виглядатиме у вертикальному форматі 2:3
Зображення занадто маленьке, якість може бути нижчою
```

---
