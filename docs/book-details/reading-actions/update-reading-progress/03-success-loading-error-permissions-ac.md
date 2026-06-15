# Update Reading Progress — Success, Loading, Error, Permissions and Acceptance Criteria

> Source: update-reading-progress.md lines 285-384

---

## 14. UI updates after success

Після успішного оновлення мають оновитися:

* progress bar у modal / Book Details;
* current page;
* progress percent;
* Reading progress block;
* Book hero section;
* Right sidebar;
* reading status badge, якщо статус змінився;
* Dashboard;
* Reading Calendar;
* Reading Goals;
* Statistics.

Success message:

```text
Прогрес оновлено
```

---

## 15. Loading behavior

Після натискання **Зберегти прогрес**:

* кнопка стає disabled;
* показується loading state;
* повторний submit блокується;
* modal не закривається до успішної відповіді API.

Button text:

```text
Збереження...
```

---

## 16. Error behavior

Якщо прогрес не вдалося оновити:

* modal залишається відкритою;
* введені значення не очищаються;
* користувач бачить error message;
* можна повторити submit.

Error message:

```text
Не вдалося оновити прогрес
```

---


## 18. Permissions

Backend має перевіряти:

* книга існує;
* книга належить поточному користувачу;
* книга не видалена;
* користувач має право оновлювати прогрес цієї книги.

Якщо книга не знайдена або видалена:

```text
404 Not Found
```

Якщо книга належить іншому користувачу:

```text
403 Forbidden
```

---

## 19. Acceptance Criteria

* Користувач може відкрити modal **Оновити прогрес**.
* Modal показує обкладинку, назву книги й автора.
* Modal показує загальну кількість сторінок.
* Modal показує попередній прогрес.
* Користувач може ввести нову поточну сторінку.
* Progress percent рахується автоматично.
* Поле **Прочитано за це оновлення** рахується автоматично.
* Користувач може вибрати дату оновлення.
* Дата оновлення не може бути в майбутньому.
* Поточна сторінка не може бути більшою за загальну кількість сторінок.
* Поточна сторінка не може бути меншою за попередній прогрес.
* Якщо книга дочитана, користувач може позначити її як прочитану.
* Якщо книгу позначено як прочитану, `readingStatus` стає `finished`.
* Після submit modal закривається.
* Після submit Book Details показує оновлений прогрес.
* Якщо сталася помилка, modal залишається відкритою і показує error message.
