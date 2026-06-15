# User Profile Fields

## Display fields

Користувач бачить:

- avatar або placeholder з ініціалами;
- name;
- lastName;
- nickname;
- email;
- bio;
- favoriteBookQuote;
- favoriteGenres;
- dateOfBirth, якщо додана;
- createdAt;
- коротку читацьку статистику;
- socialLinks, якщо додані.

## Editable fields

Користувач може редагувати:

- avatar;
- name;
- lastName;
- nickname;
- dateOfBirth;
- bio;
- favoriteBookQuote;
- favoriteGenres;
- socialLinks.

## Read-only fields

Не редагуються напряму з profile form:

- email;
- emailVerified;
- authProvider;
- createdAt;
- UserProfileStats.

## Rule

Form payload має включати тільки editable fields.
Read-only fields не мають випадково відправлятися як update payload.
