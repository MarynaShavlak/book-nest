# Validation overview

- Required fields: title, author, reading status, ownership status, book type, and series fields only when book is a series part.
- Optional text fields become null or are omitted after trim if empty.
- HTML tags are forbidden in user-entered text fields.
- URL fields should accept only valid https URLs.
- Unknown enum/config values are invalid.

## Related files

- `06-shared/validation-rules/`
