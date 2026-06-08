# BookNest — Email Notifications / Transactional Emails

## Мета

Підключити email-сервіс для відправки системних і користувацьких листів у BookNest.

Email-функціонал потрібен для базових сценаріїв акаунту, безпеки, відновлення доступу, а також для корисних нагадувань, пов’язаних із читанням, позиченими книгами, доставкою книг і читацькими цілями.

---

## Основна логіка

У застосунку мають бути два типи листів:

### 1. System / Transactional emails

Це обов’язкові системні листи.

Вони потрібні для:

- реєстрації;
- підтвердження email;
- відновлення паролю;
- зміни паролю;
- безпеки акаунту.

Ці листи не мають вимикатися користувачем, бо вони потрібні для роботи акаунту.

### 2. Optional notification emails

Це додаткові листи-нагадування.

Вони потрібні для:

- нагадування про читання;
- нагадування про читацькі цілі;
- нагадування повернути книгу;
- нагадування забрати свою книгу;
- нагадування про доставку книги;
- щотижневого або щомісячного reading summary.

Ці листи користувач має мати змогу увімкнути або вимкнути в налаштуваннях.

---

## Email types

### 1. Welcome email

#### Коли відправляти

Після успішної реєстрації користувача.

#### Для чого

Щоб привітати користувача, підтвердити створення акаунту і показати, з чого почати роботу з BookNest.

#### Subject

```text
Welcome to BookNest
```

#### Що має бути в листі

- привітання;
- коротке пояснення, що таке BookNest;
- основні можливості застосунку;
- кнопка **Додати першу книгу**;
- посилання на Dashboard.

#### Приклад CTA

```text
Add your first book
```

---

### 2. Email verification

#### Коли відправляти

Після реєстрації, якщо в застосунку увімкнене підтвердження email.

#### Для чого

Щоб підтвердити, що email належить користувачу.

#### Subject

```text
Verify your BookNest email
```

#### Що має бути в листі

- коротке пояснення;
- кнопка **Verify email**;
- інформація, що без підтвердження деякі функції можуть бути обмежені.

#### CTA

```text
Verify email
```

---

### 3. Password reset email

#### Коли відправляти

Коли користувач натиснув **Забули пароль?** і ввів email.

#### Для чого

Щоб користувач міг безпечно відновити доступ до акаунту.

#### Subject

```text
Reset your BookNest password
```

#### Що має бути в листі

- повідомлення, що був запит на відновлення паролю;
- кнопка **Reset password**;
- інформація, що посилання дійсне обмежений час;
- текст: якщо це були не ви — просто ігноруйте лист.

#### CTA

```text
Reset password
```

---

### 4. Password changed email

#### Коли відправляти

Після успішної зміни паролю.

#### Для чого

Для безпеки акаунту.

#### Subject

```text
Your BookNest password was changed
```

#### Що має бути в листі

- повідомлення, що пароль було змінено;
- дата і час зміни;
- текст: якщо це були не ви — терміново змініть пароль або зверніться в підтримку.

---

### 5. New login notification

#### Коли відправляти

Якщо користувач увійшов з нового пристрою, браузера або незвичного місця.

#### Для чого

Для безпеки акаунту.

#### Subject

```text
New login to your BookNest account
```

#### Що має бути в листі

- дата входу;
- приблизний пристрій / браузер;
- текст: якщо це були не ви — змініть пароль.

#### MVP

Не обов’язково для першої версії, можна додати пізніше.

---

### 6. Account deletion email

#### Коли відправляти

Якщо користувач запросив видалення акаунту.

#### Для чого

Щоб підтвердити запит і дати можливість скасувати дію.

#### Subject

```text
Your BookNest account deletion request
```

#### Що має бути в листі

- підтвердження запиту;
- дата, коли акаунт буде видалено;
- кнопка скасування, якщо користувач передумав.

#### MVP

Не обов’язково для першої версії.

---

### 7. Reading progress reminder

#### Коли відправляти

Якщо користувач читає книгу, але давно не оновлював прогрес.

#### Для чого

Щоб нагадати користувачу оновити прогрес читання.

#### Subject

```text
Still reading? Update your progress in BookNest
```

#### Що має бути в листі

- назва книги;
- поточний прогрес;
- кнопка **Update progress**;
- посилання на детальну сторінку книги.

#### Важливо

Цей лист має відправлятися тільки якщо користувач увімкнув reading reminders у налаштуваннях.

---

### 8. Reading goal reminder

#### Коли відправляти

Раз на тиждень або раз на місяць, якщо користувач має активну читацьку ціль.

#### Для чого

Щоб показати прогрес по цілі і мотивувати продовжувати читання.

#### Subject

```text
Your reading goal progress
```

#### Що має бути в листі

- річна або місячна ціль;
- поточний прогрес;
- відсоток виконання;
- скільки залишилось;
- кнопка **View goals**.

#### Приклад

```text
Ціль на 2026: 30 книг
Прочитано: 12 / 30
Прогрес: 40%
```

---

### 9. Weekly reading summary

#### Коли відправляти

Раз на тиждень, якщо користувач увімкнув weekly summary.

#### Для чого

Щоб користувач бачив короткий підсумок свого читання за тиждень.

#### Subject

```text
Your weekly BookNest reading summary
```

#### Що має бути в листі

- скільки сторінок прочитано;
- які книги читались;
- скільки днів був reading streak;
- нові нотатки;
- нові цитати;
- прогрес по цілях;
- кнопка **Open Dashboard**.

#### MVP

Можна додати після базових transactional emails.

---

### 10. Monthly reading report

#### Коли відправляти

Раз на місяць, якщо користувач увімкнув monthly reports.

#### Для чого

Щоб показати красивий підсумок читання за місяць.

#### Subject

```text
Your monthly BookNest reading report
```

#### Що має бути в листі

- прочитано книг;
- прочитано сторінок;
- найкраща книга місяця;
- найчастіший жанр;
- середній рейтинг;
- прогрес цілей;
- кнопка **View statistics**.

#### MVP

Не обов’язково для першої версії.

---

### 11. Borrowed book return reminder

#### Коли відправляти

Якщо книга має статус **Позичена у когось** і наближається дата повернення.

#### Для чого

Щоб користувач не забув повернути книгу власнику.

#### Subject

```text
Reminder: return your borrowed book
```

#### Що має бути в листі

- назва книги;
- у кого позичена;
- дата повернення;
- нотатка, якщо є;
- кнопка **Open borrowed books**.

#### Приклад

```text
Книга: Маленьке життя
У кого: Марина
Повернути до: 25.06.2026
```

---

### 12. Lent book return reminder

#### Коли відправляти

Якщо книга має статус **Видана комусь** і дата очікуваного повернення наближається або вже минула.

#### Для чого

Щоб користувач не забув забрати свою книгу.

#### Subject

```text
Reminder: your book should be returned soon
```

#### Що має бути в листі

- назва книги;
- кому видана;
- дата очікуваного повернення;
- кнопка **Mark as returned**;
- посилання на сторінку **Позичені книги**.

#### Приклад

```text
Книга: Четверте крило
Кому: Оля
Очікуване повернення: 30.06.2026
```

---

### 13. Book delivery reminder

#### Коли відправляти

Якщо книга має статус **В дорозі** і сьогодні або завтра очікувана дата доставки.

#### Для чого

Щоб користувач не забув отримати книгу.

#### Subject

```text
Your book is expected soon
```

#### Що має бути в листі

- назва книги;
- магазин;
- очікувана дата доставки;
- номер замовлення, якщо є;
- посилання на трекінг, якщо є;
- кнопка **Mark as received**.

---

### 14. Delayed delivery reminder

#### Коли відправляти

Якщо очікувана дата доставки минула, а книга ще не позначена як отримана.

#### Для чого

Щоб користувач перевірив статус замовлення.

#### Subject

```text
Your book delivery may be delayed
```

#### Що має бути в листі

- назва книги;
- магазин;
- очікувана дата доставки;
- текст, що доставка може затримуватись;
- кнопка **Open books in transit**.

---

### 15. Export ready email

#### Коли відправляти

Якщо експорт бібліотеки генерується на бекенді і займає час.

#### Для чого

Щоб повідомити користувача, що файл експорту готовий.

#### Subject

```text
Your BookNest export is ready
```

#### Що має бути в листі

- формат файлу;
- дата експорту;
- коротка інформація про експорт;
- кнопка **Download export**.

#### MVP

Не обов’язково, якщо експорт одразу завантажується в браузері.

---

### 16. Import completed email

#### Коли відправляти

Після завершення великого імпорту.

#### Для чого

Щоб користувач отримав результат імпорту.

#### Subject

```text
Your BookNest import is complete
```

#### Що має бути в листі

- скільки книг додано;
- скільки книг оновлено;
- скільки дублікатів пропущено;
- скільки помилок було;
- кнопка **Open library**.

---

### 17. Reading queue reminder

#### Коли відправляти

Якщо в користувача є книги в черзі, але він давно не починав нову книгу.

#### Для чого

Щоб нагадати про наступну книгу в черзі.

#### Subject

```text
Your next book is waiting in BookNest
```

#### Що має бути в листі

- перша книга в черзі;
- автор;
- коротка інформація;
- кнопка **Start reading**.

---

### 18. Unfinished series reminder

#### Коли відправляти

Раз на місяць або як digest, якщо користувач має незавершені серії.

#### Для чого

Щоб нагадати користувачу про серії, які він почав, але не дочитав.

#### Subject

```text
You have unfinished book series
```

#### Що має бути в листі

- 2–3 незавершені серії;
- прогрес по кожній серії;
- наступна книга;
- кнопка **Continue series**.

#### Приклад

```text
Двір шипів і троянд
Прочитано: 2 / 5
Наступна книга: Двір мороку і гніву
```

---

## Email notification settings

У налаштуваннях користувача потрібно додати блок:

### Email notifications

Користувач може вмикати / вимикати:

- reading reminders;
- reading goal reminders;
- borrowed books reminders;
- delivery reminders;
- weekly reading summary;
- monthly reading report;
- unfinished series reminders;
- reading queue reminders.

### Важливо

Системні листи не вимикаються:

- password reset;
- email verification;
- password changed;
- important security emails.

---

## Email categories

### System emails

- Welcome email
- Email verification
- Password reset
- Password changed
- New login notification
- Account deletion request

### Reading emails

- Reading progress reminder
- Reading goal reminder
- Weekly reading summary
- Monthly reading report
- Reading queue reminder
- Unfinished series reminder

### Library status emails

- Borrowed book return reminder
- Lent book return reminder
- Book delivery reminder
- Delayed delivery reminder

### Data emails

- Export ready
- Import completed

---

## MVP Scope

Для першої версії потрібно реалізувати:

- Welcome email
- Password reset email
- Email verification
- Password changed email
- базові email templates
- інтеграцію з email-сервісом
- відправку листів з backend / auth provider
- error handling при помилці відправки
- логи відправки листів
- блок email notifications у налаштуваннях

---

## Мінімально для першого MVP

Мінімально достатньо:

1. **Welcome email**
2. **Password reset email**
3. **Email verification**
4. **Password changed email**

Додатково після MVP:

5. Borrowed book reminders
6. Delivery reminders
7. Reading goal reminders
8. Weekly summary

---

## Що можна додати пізніше

- Apple login related emails;
- magic link login;
- monthly reading report;
- yearly reading wrapped;
- unfinished series digest;
- reading streak reminders;
- export ready email;
- import completed email;
- email template editor;
- multi-language email templates;
- unsubscribe preferences;
- email analytics;
- resend email button;
- email verification reminder;
- account deletion confirmation.

---

## General email requirements

### Email template має містити

- логотип BookNest;
- короткий заголовок;
- основний текст;
- основну CTA-кнопку;
- fallback link, якщо кнопка не працює;
- footer;
- посилання на налаштування email notifications, якщо це optional email.

### Стиль листів

Листи мають відповідати стилю BookNest:

- cozy стиль;
- теплі кольори;
- м’який дизайн;
- читабельна типографіка;
- простий текст;
- одна основна дія в листі.

---

## Security requirements

- Не відправляти пароль у листі.
- Не показувати технічні помилки користувачу.
- Password reset link має мати обмежений час дії.
- Verification link має бути одноразовим або безпечним.
- Security emails не мають вимикатися користувачем.
- Optional emails мають мати можливість вимкнення.
- Не відправляти маркетингові листи без згоди користувача.

---

## Acceptance Criteria

### General

- Email-сервіс підключений до застосунку.
- Системні листи відправляються після відповідних дій користувача.
- Optional emails відправляються тільки якщо користувач дозволив їх у налаштуваннях.
- Листи мають коректний subject, body і CTA.
- Якщо лист не відправився, помилка логується.
- Користувач не бачить технічних деталей помилки.

### Welcome email

- Після реєстрації користувач отримує welcome email.
- Лист містить коротке привітання.
- Лист містить кнопку переходу в застосунок.

### Password reset

- Користувач може запросити відновлення паролю.
- Після запиту відправляється password reset email.
- Лист містить безпечне посилання для зміни паролю.
- Якщо користувач не робив запит, він може проігнорувати лист.

### Email verification

- Після реєстрації може відправлятися email verification.
- Користувач може підтвердити email через посилання.
- Після підтвердження email статус користувача оновлюється.

### Password changed

- Після зміни паролю користувач отримує notification email.
- Лист повідомляє, що пароль було змінено.

### Email settings

- У налаштуваннях є блок email notifications.
- Користувач може увімкнути або вимкнути optional emails.
- System emails не можна вимкнути.

---

## Result

Після реалізації цієї фічі BookNest зможе відправляти важливі системні листи для акаунту, а також корисні нагадування, пов’язані з читанням, цілями, доставкою книг, позиками та особистою бібліотекою.

Для MVP достатньо реалізувати базові transactional emails: welcome email, password reset, email verification і password changed. У майбутньому email-функціонал можна розширити до reading reminders, weekly summaries, delivery reminders і незавершених серій.
