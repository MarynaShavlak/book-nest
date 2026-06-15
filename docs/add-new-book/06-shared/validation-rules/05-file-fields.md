# File field validation

### 12.6. Accepted file formats

Дозволені формати:

| Формат     | Дозволено |
| ---------- | --------: |
| JPG / JPEG |       Так |
| PNG        |       Так |
| WEBP       |       Так |
| GIF        |        Ні |
| SVG        |        Ні |
| PDF        |        Ні |

#### Чому не SVG

SVG краще не дозволяти для обкладинок у MVP, бо він може містити небезпечний або зайвий код.
Для простого MVP достатньо JPG, PNG і WEBP.

---

### 12.7. File size

Максимальний розмір файлу:

```text id="np371a"
5 MB
```

#### Logic

* якщо файл більший за 5 MB, показати error;
* файл не має додаватися у preview;
* користувач має вибрати інший файл.

#### Error message

```text id="h56993"
Розмір файлу не може перевищувати 5 MB
```

---

### 12.8. Image dimensions

#### Recommended

| Параметр               | Значення       |
| ---------------------- | -------------- |
| Recommended ratio      | `2:3`          |
| Recommended min width  | `600px`        |
| Recommended min height | `900px`        |
| Recommended size       | `800 × 1200px` |

#### Logic

* якщо зображення вертикальне, показати його без warning;
* якщо зображення горизонтальне або квадратне, дозволити upload, але показати warning;
* у UI картках обкладинку показувати через crop / object-fit.

#### Warning message

```text id="3hew48"
Обкладинка краще виглядатиме у вертикальному форматі 2:3
```

---

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
