# Email Template: Welcome Email

## Template name

`welcome_email`

## Trigger

Send after successful user registration.

## Email type

`transactional`

## Subject

`Вітаємо в BookNest ✨`

## Preheader

`Ваш читацький простір готовий — додайте першу книгу та почніть створювати бібліотеку.`

---

## Required variables

```ts
type WelcomeEmailVariables = {
  userName: string;
  dashboardUrl: string;
  addBookUrl: string;
  settingsUrl: string;
  supportEmail?: string;
};
```

---

## HTML template

```html
<!DOCTYPE html>
<html lang="uk">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Вітаємо в BookNest</title>
  </head>

  <body style="margin:0; padding:0; background-color:#FFF8F0; font-family:Arial, Helvetica, sans-serif; color:#2F241D;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#FFF8F0; padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px; background-color:#FFFFFF; border-radius:24px; overflow:hidden; box-shadow:0 12px 32px rgba(96, 60, 32, 0.12);">

            <!-- Header -->
            <tr>
              <td style="padding:32px 32px 20px; text-align:center; background:linear-gradient(135deg, #FFF1DC 0%, #FFE2BF 100%);">
                <div style="font-size:32px; line-height:1.2; font-weight:700; color:#5A3218;">
                  BookNest
                </div>
                <div style="margin-top:8px; font-size:15px; line-height:1.5; color:#7A5738;">
                  Ваш затишний простір для книг
                </div>
              </td>
            </tr>

            <!-- Main content -->
            <tr>
              <td style="padding:36px 32px 24px;">
                <h1 style="margin:0 0 16px; font-size:28px; line-height:1.25; color:#2F241D;">
                  Вітаємо, {{userName}} ✨
                </h1>

                <p style="margin:0 0 16px; font-size:16px; line-height:1.7; color:#4A3A2E;">
                  Дякуємо за реєстрацію в <strong>BookNest</strong>. Ваш акаунт створено, і тепер ви можете почати формувати власну книжкову бібліотеку.
                </p>

                <p style="margin:0 0 24px; font-size:16px; line-height:1.7; color:#4A3A2E;">
                  У BookNest ви зможете додавати книги, відстежувати прогрес читання, створювати списки, вести нотатки, зберігати цитати, керувати серіями та бачити свою читацьку статистику.
                </p>

                <!-- CTA -->
                <table role="presentation" cellspacing="0" cellpadding="0" style="margin:0 0 28px;">
                  <tr>
                    <td align="center" bgcolor="#D97706" style="border-radius:14px;">
                      <a href="{{addBookUrl}}" target="_blank" style="display:inline-block; padding:14px 24px; font-size:16px; line-height:1.2; color:#FFFFFF; text-decoration:none; font-weight:700; border-radius:14px;">
                        Додати першу книгу
                      </a>
                    </td>
                  </tr>
                </table>

                <!-- Feature list -->
                <div style="padding:20px; background-color:#FFF8F0; border-radius:18px; border:1px solid #F4E1C7;">
                  <p style="margin:0 0 12px; font-size:15px; line-height:1.6; color:#5A3218; font-weight:700;">
                    З чого почати:
                  </p>

                  <ul style="margin:0; padding-left:20px; color:#4A3A2E; font-size:15px; line-height:1.7;">
                    <li>додайте першу книгу в бібліотеку;</li>
                    <li>оберіть статус читання: хочу прочитати, читаю або прочитано;</li>
                    <li>додайте книгу в чергу читання або власний список;</li>
                    <li>зберігайте нотатки й цитати під час читання.</li>
                  </ul>
                </div>

                <p style="margin:24px 0 0; font-size:15px; line-height:1.7; color:#4A3A2E;">
                  Ви також можете перейти на головну сторінку та переглянути свій Dashboard:
                </p>

                <p style="margin:8px 0 0; font-size:15px; line-height:1.7;">
                  <a href="{{dashboardUrl}}" target="_blank" style="color:#D97706; text-decoration:underline;">
                    Відкрити Dashboard
                  </a>
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:24px 32px 32px; border-top:1px solid #F4E1C7;">
                <p style="margin:0 0 10px; font-size:13px; line-height:1.6; color:#7A5738;">
                  Цей лист надіслано, тому що ви створили акаунт у BookNest.
                </p>

                <p style="margin:0 0 10px; font-size:13px; line-height:1.6; color:#7A5738;">
                  Якщо кнопка не працює, скопіюйте це посилання у браузер:
                </p>

                <p style="margin:0 0 16px; font-size:13px; line-height:1.6; word-break:break-all;">
                  <a href="{{addBookUrl}}" target="_blank" style="color:#D97706;">
                    {{addBookUrl}}
                  </a>
                </p>

                <p style="margin:0; font-size:13px; line-height:1.6; color:#7A5738;">
                  Налаштування сповіщень можна змінити тут:
                  <a href="{{settingsUrl}}" target="_blank" style="color:#D97706;">
                    Налаштування
                  </a>
                </p>

                <p style="margin:18px 0 0; font-size:13px; line-height:1.6; color:#9A7B5F;">
                  © BookNest. Your personal reading space.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
```

---

## Plain text version

```txt
Вітаємо, {{userName}}!

Дякуємо за реєстрацію в BookNest. Ваш акаунт створено, і тепер ви можете почати формувати власну книжкову бібліотеку.

У BookNest ви зможете:
- додавати книги;
- відстежувати прогрес читання;
- створювати власні списки;
- вести нотатки;
- зберігати цитати;
- керувати книжковими серіями;
- переглядати читацьку статистику.

Почніть із додавання першої книги:
{{addBookUrl}}

Або відкрийте Dashboard:
{{dashboardUrl}}

Налаштування сповіщень:
{{settingsUrl}}

Цей лист надіслано, тому що ви створили акаунт у BookNest.

© BookNest. Your personal reading space.
```

---

## Backend notes

### When to send

Send immediately after successful registration and user profile creation.

### Recommended sender

```txt
BookNest <no-reply@book-nest.net>
```

### Example payload

```json
{
  "templateName": "welcome_email",
  "to": "user@example.com",
  "subject": "Вітаємо в BookNest ✨",
  "variables": {
    "userName": "Марина",
    "dashboardUrl": "https://book-nest.net/dashboard",
    "addBookUrl": "https://book-nest.net/books/create",
    "settingsUrl": "https://book-nest.net/settings"
  }
}
```

### Important

* Do not send this email repeatedly on every login.
* Send only once after registration.
* If registration uses email verification, welcome email can be sent either:

    * immediately after registration;
    * or after email verification.
* If `userName` is empty, use fallback: `читачу`.
