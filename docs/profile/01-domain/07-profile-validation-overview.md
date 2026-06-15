# Profile Validation Overview

## Required fields

- name;
- lastName.

## Optional fields

- avatar;
- nickname;
- dateOfBirth;
- bio;
- favoriteBookQuote;
- favoriteGenres;
- socialLinks.

## Main validation limits

| Field | Rule |
| --- | --- |
| name | 2–50 chars |
| lastName | 2–50 chars |
| nickname | 3–30 chars if filled |
| bio | max 300 chars |
| favoriteBookQuote | max 200 chars |
| favoriteGenres | max 10 |
| avatar | JPG/PNG/WEBP, max 5 MB |
| socialLinks | max 10 |

## Sanitization

Before saving text fields:

- trim values;
- reject HTML tags;
- normalize empty strings to `null` or omit from payload.
