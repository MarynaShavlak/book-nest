# Change Book Format

> Source: change-book-format.md lines 1-249

---

# Feature: Change Book Format

## 1. Purpose

Feature **Change Book Format** дозволяє користувачу вказати, у якому форматі книга є або буде читатися.

Формат книги — це окрема характеристика книги.
Він не є статусом володіння.

Приклад:

```text
ownershipStatus = owned
formats = [paper, ebook]
```

---

## 2. Available formats

Фіча підтримує такі формати:

| Value       | Label      | Meaning                 |
| ----------- | ---------- | ----------------------- |
| `paper`     | Паперова   | Фізична паперова книга  |
| `ebook`     | Електронна | Електронна версія книги |
| `audiobook` | Аудіокнига | Аудіоверсія книги       |

---

## 3. Format logic

Книга може мати один або кілька форматів одночасно.

Examples:

```text
formats = [paper]
formats = [ebook]
formats = [audiobook]
formats = [paper, ebook]
formats = [ebook, audiobook]
```

Important:

* `paper`, `ebook`, `audiobook` не мають бути `ownershipStatus`;
* формат не визначає, чи книга є у користувача;
* формат не змінює reading status;
* формат не змінює purchase / delivery / loan status.

---

## 4. Entry points

Користувач може змінити формат книги з таких місць:

| Entry point             | UI                                                      |
| ----------------------- | ------------------------------------------------------- |
| Book Details            | Right sidebar → Statuses → action **Редагувати формат** |
| Book Details            | Page actions menu                                       |
| Edit Book form          | Блок **Статус / Формат книги**                          |
| My Library card actions | action **Змінити формат**                               |

---

## 5. UI type

Recommended UI:

```text
Modal
```

Modal title:

```text
Змінити формат книги
```

На mobile можна використовувати bottom drawer або full-screen modal.

---

## 6. Modal content

У modal потрібно показати короткий preview книги.

| Element | Source        |
| ------- | ------------- |
| Cover   | `coverUrl`    |
| Title   | `title`       |
| Author  | `author.name` |

Після preview показати список форматів як multi-select chips або checkboxes.

Example:

```text
Змінити формат книги

[обкладинка] Четверте крило
Ребекка Яррос

Оберіть формат:
[ ] Паперова
[ ] Електронна
[ ] Аудіокнига

[Скасувати] [Зберегти]
```

---

## 7. Selection behavior

Формати працюють як multi-select.

Logic:

* користувач може вибрати один формат;
* користувач може вибрати кілька форматів;
* повторний клік по active format знімає вибір;
* активні формати мають бути візуально виділені;
* якщо формат не вибраний, книга зберігається без формату.

Recommended behavior:

```text
formats = []
```

означає:

```text
Формат не вказано
```

---

## 8. Save behavior

Після натискання **Зберегти** система має:

1. зберегти вибрані формати;
2. прибрати дублікати, якщо вони є;
3. оновити Book Details UI;
4. оновити My Library card;
5. оновити format badges;
6. показати success message.

Success message:

```text
Формат книги оновлено
```

---

## 9. UI updates after save

Після зміни формату мають оновитися:

* Book hero section;
* Right sidebar → Statuses;
* Main book information;
* My Library card;
* Advanced filters results, якщо активний format filter.

Example:

```text
Було:
Формат: Паперова

Стало:
Формат: Паперова, Електронна
```

---

## 10. Format badges

Формати мають показуватися як badges / chips.

Recommended labels:

| Format      | Badge      |
| ----------- | ---------- |
| `paper`     | Паперова   |
| `ebook`     | Електронна |
| `audiobook` | Аудіокнига |

Якщо формат не вибраний:

* у формі показати порожній стан;
* на Book Details можна показати **Формат не вказано**;
* на картці книги можна просто не показувати format badge.

---

## 11. Validation

| Case              | Behavior              |
| ----------------- | --------------------- |
| Unknown format    | не зберігати значення |
| Duplicate format  | прибрати дубль        |
| Empty formats     | дозволено             |
| Unsupported value | показати error        |

Validation message:

```text
Обраний формат не підтримується
```

---

## 12. What is not included

Ця фіча не відповідає за:

* статус володіння;
* статус читання;
* прогрес читання;
* покупку книги;
* доставку книги;
* позику книги;
* видалення книги.

Формат книги не має запускати жодні purchase / delivery / loan сценарії.

---

## 13. Acceptance Criteria

* Користувач може відкрити modal **Змінити формат книги**.
* Modal показує назву книги й автора.
* Користувач може вибрати формат **Паперова**.
* Користувач може вибрати формат **Електронна**.
* Користувач може вибрати формат **Аудіокнига**.
* Користувач може вибрати кілька форматів одночасно.
* Користувач може прибрати вибраний формат.
* Книга може бути збережена без формату.
* Після збереження format badges оновлюються на Book Details.
* Після збереження format badges оновлюються в My Library.
* Зміна формату не змінює `ownershipStatus`.
* Зміна формату не змінює `readingStatus`.
* Якщо сталася помилка, користувач бачить error message.
