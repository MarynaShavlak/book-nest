# Normalization Rules

Before saving:

- trim text fields;
- convert empty strings to `null` or omit them;
- remove `@` from nickname if your storage keeps nickname without `@`;
- keep favoriteGenres unique;
- keep favoriteGenres as array;
- keep dateOfBirth as ISO string or normalized date string.

## Text fields

Normalize:

- name;
- lastName;
- nickname;
- bio;
- favoriteBookQuote.
