# Profile Module Map

## Основна ідея

Profile Module відповідає за персональний профіль користувача в BookNest:

- перегляд базової інформації;
- редагування профільних даних;
- керування аватаром;
- показ короткої читацької статистики;
- керування social links;
- окремий підрозділ налаштувань;
- базові account/security actions.

## Межі модуля

Профіль містить дані про самого користувача:

- avatar;
- name;
- lastName;
- nickname;
- email як read-only;
- dateOfBirth;
- bio;
- favoriteBookQuote;
- favoriteGenres;
- socialLinks;
- createdAt;
- profile stats.

Налаштування застосунку зберігаються окремо:

- themeMode;
- accentColor;
- language;
- dateFormat;
- weekStartDay;
- timezone;
- libraryViewMode;
- confirmBeforeDelete;
- emailNotifications.

## Головні папки

| Папка | Що містить |
| --- | --- |
| `01-domain/` | data models, fields, validation, user scope |
| `02-profile-page/` | UI сторінки профілю |
| `03-edit-profile/` | форма редагування профілю |
| `04-social-links/` | social links block, form, validation, actions |
| `05-settings/` | налаштування профілю / застосунку |
| `06-security-account/` | logout, password, auth provider boundaries |
| `07-integrations/` | контракти з іншими модулями |
| `08-shared/` | loading, errors, responsive, accessibility, AC |

## Основні маршрути

| Route | Призначення |
| --- | --- |
| `/profile` | сторінка профілю |
| `/profile/edit` або modal | редагування профілю |
| `/profile/settings` | налаштування профілю / застосунку |
| `/profile/security` або block | security / password actions |

## MVP

Для MVP достатньо:

- profile page;
- edit profile form;
- avatar upload/remove;
- favorite genres;
- favorite quote;
- social links;
- profile stats;
- settings section;
- logout;
- password change entry point.
