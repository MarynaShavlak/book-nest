# Email Template: Email Verification

## Template name

`email_verification_email`

## Trigger

Send after successful user registration if email verification is enabled.

## Email type

`transactional`

## Subject

`Підтвердіть email для BookNest`

## Preheader

`Підтвердіть вашу email-адресу, щоб завершити налаштування акаунту.`

---

## Required variables

```ts
type EmailVerificationVariables = {
  userName?: string;
  verificationUrl: string;
  dashboardUrl: string;
  supportEmail?: string;
  expiresInMinutes?: number;
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
    <title>Підтвердіть email для BookNest</title>
  </head>

  <body style="margin:0; padding:0; background-color:#FFF8F0; font-family:Arial, Helvetica, sans-serif; color:#2F241D;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#FFF8F0; padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px; background-color:#FFFFFF; border-radius:24px; overflow:hidden; box-shadow:0 12px 32px rgba(96, 60, 32, 0.12);">

            <tr>
              <td style="padding:32px 32px 20px; text-align:center; background:linear-gradient(135deg, #FFF1DC 0%, #FFE2BF 100%);">
                <div style="font-size:32px; line-height:1.2; font-weight:700; color:#5A3218;">
                  BookNest
                </div>
                <div style="margin-top:8px; font-size:15px; line-height:1.5; color:#7A5738;">
                  Підтвердження email-адреси
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:36px 32px 24px;">
                <h1 style="margin:0 0 16px; font-size:28px; line-height:1.25; color:#2F241D;">
                  Підтвердіть ваш email
                </h1>

                <p style="margin:0 0 16px; font-size:16px; line-height:1.7; color:#4A3A2E;">
                  Вітаємо, {{userName}}!
                </p>

                <p style="margin:0 0 24px; font-size:16px; line-height:1.7; color:#4A3A2E;">
                  Дякуємо за реєстрацію в <strong>BookNest</strong>. Щоб завершити налаштування акаунту, підтвердіть вашу email-адресу.
                </p>

                <table role="presentation" cellspacing="0" cellpadding="0" style="margin:0 0 28px;">
                  <tr>
                    <td align="center" bgcolor="#D97706" style="border-radius:14px;">
                      <a href="{{verificationUrl}}" target="_blank" style="display:inline-block; padding:14px 24px; font-size:16px; line-height:1.2; color:#FFFFFF; text-decoration:none; font-weight:700; border-radius:14px;">
                        Підтвердити email
                      </a>
                    </td>
                  </tr>
                </table>

                <div style="padding:20px; background-color:#FFF8F0; border-radius:18px; border:1px solid #F4E1C7;">
                  <p style="margin:0 0 8px; font-size:15px; line-height:1.6; color:#5A3218; font-weight:700;">
                    Навіщо це потрібно?
                  </p>

                  <p style="margin:0; font-size:15px; line-height:1.7; color:#4A3A2E;">
                    Підтвердження email допомагає захистити ваш акаунт і переконатися, що саме ви маєте доступ до цієї адреси.
                  </p>
                </div>

                <p style="margin:24px 0 0; font-size:15px; line-height:1.7; color:#4A3A2E;">
                  Після підтвердження ви зможете повноцінно користуватися BookNest: додавати книги, створювати списки, зберігати нотатки й цитати.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:24px 32px 32px; border-top:1px solid #F4E1C7;">
                <p style="margin:0 0 10px; font-size:13px; line-height:1.6; color:#7A5738;">
                  Цей лист надіслано, тому що ви створили акаунт у BookNest.
                </p>

                <p style="margin:0 0 10px; font-size:13px; line-height:1.6; color:#7A5738;">
                  Якщо кнопка не працює, скопіюйте це посилання у браузер:
                </p>

                <p style="margin:0 0 16px; font-size:13px; line-height:1.6; word-break:break-all;">
                  <a href="{{verificationUrl}}" target="_blank" style="color:#D97706;">
                    {{verificationUrl}}
                  </a>
                </p>

                <p style="margin:0; font-size:13px; line-height:1.6; color:#9A7B5F;">
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
Підтвердіть email для BookNest

Вітаємо, {{userName}}!

Дякуємо за реєстрацію в BookNest. Щоб завершити налаштування акаунту, підтвердіть вашу email-адресу.

Підтвердити email:
{{verificationUrl}}

Підтвердження email допомагає захистити ваш акаунт і переконатися, що саме ви маєте доступ до цієї адреси.

Якщо ви не створювали акаунт у BookNest, просто проігноруйте цей лист.

© BookNest. Your personal reading space.
```

---

## Backend notes

### Recommended sender

```txt
BookNest <no-reply@book-nest.net>
```

### Example payload

```json
{
  "templateName": "email_verification_email",
  "to": "user@example.com",
  "subject": "Підтвердіть email для BookNest",
  "variables": {
    "userName": "Марина",
    "verificationUrl": "https://book-nest.net/verify-email?token=VERIFY_TOKEN",
    "dashboardUrl": "https://book-nest.net/dashboard",
    "expiresInMinutes": 60
  }
}
```

### Security requirements

* Verification link should contain a secure token.
* Token should expire after a limited time.
* Link should be one-time use or safely reusable only until verification is completed.
* If `userName` is empty, use fallback: `читачу`.

---

