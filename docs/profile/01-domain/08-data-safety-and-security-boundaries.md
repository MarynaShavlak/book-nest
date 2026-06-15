# Data Safety and Security Boundaries

## Do not allow HTML injection

The following fields should not accept HTML tags:

- name;
- lastName;
- nickname;
- bio;
- favoriteBookQuote;
- social link username;
- social link label;
- social link URL.

## Avatar safety

Avatar upload must not allow:

- SVG;
- scripts;
- unknown file types;
- files above 5 MB.

Allowed:

- JPG;
- PNG;
- WEBP.

## URL safety

Social links should allow only `https://` URLs.

Disallow:

- `javascript:`;
- `data:`;
- `file:`;
- non-URL strings in URL field.

## Account safety

Email and password changes are not normal profile edits.
They belong to security flows.
