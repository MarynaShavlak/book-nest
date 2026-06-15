# Profile Visibility Rules

## Optional blocks

Some profile blocks are hidden if empty:

- favoriteBookQuote;
- dateOfBirth;
- bio;
- socialLinks;
- favoriteGenres.

## Always visible

These should always be visible when profile is loaded:

- avatar or placeholder;
- name;
- lastName;
- email;
- edit profile action;
- logout action;
- account created date;
- stats block or stats empty state.

## Privacy note

`dateOfBirth` should not be public without a separate privacy setting.

For MVP it is private and visible only to the current user.
