# Image dimensions

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
