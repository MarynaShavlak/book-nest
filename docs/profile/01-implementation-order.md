# Recommended Implementation Order

## 1. Domain

Спочатку реалізувати:

1. `UserProfile`
2. `UserProfileStats`
3. `UserProfileSettings`
4. `UserSocialLink`
5. validation rules
6. access rules for current user

## 2. Profile Page

Після domain реалізувати:

1. route/access;
2. profile header;
3. avatar/placeholder;
4. personal info;
5. favorite quote;
6. profile stats;
7. social links preview;
8. page states.

## 3. Edit Profile

Далі реалізувати:

1. edit form;
2. field validation;
3. avatar upload/remove;
4. save flow;
5. success/error states.

## 4. Social Links

Після базового профілю реалізувати:

1. social links block;
2. add social link;
3. edit social link;
4. delete social link;
5. duplicate prevention;
6. URL/username validation.

## 5. Settings

Потім реалізувати налаштування:

1. theme mode;
2. accent color;
3. language;
4. date format;
5. week start day;
6. timezone display;
7. default library view;
8. confirmBeforeDelete;
9. email notifications.

## 6. Security / Account

Наприкінці реалізувати:

1. logout action;
2. password change entry point;
3. auth provider restrictions;
4. system email boundaries.

## 7. Cross-feature integrations

Після основних екранів підключити:

- dashboard stats;
- library view mode default;
- date format usage;
- reading calendar week start;
- email notification consumers;
- settings persistence.
