# Validation and Permissions

## Global validation rules

- Required text fields should be trimmed before validation.
- Series title is required for creating a series.
- `seriesStatus` is required when a new series is created.
- `partNumber` is required when a book is attached to a series in new data.
- `partNumber` must be a positive number.
- Duplicate `partNumber` inside the same series should be prevented for new data.
- `totalBooksCount`, when provided, must be a positive number.
- If `partNumber` is greater than `totalBooksCount`, show a conflict/warning flow.

## Permissions

- A user can only read/write their own series and book relations.
- Deleting a series must not delete books.
- Removing a book from a series must not delete book notes, quotes, reading status, ownership, queue state, favorite state, or custom lists.

## Detailed validation docs

Use these files for full flow-level validation:

- `03-actions/create-edit-series/06-validation-rules.md`
- `04-integrations/book-form-series-section/05-validation.md`
- `03-actions/add-book-to-series/04-form-fields-and-part-number.md`
- `03-actions/delete-series/04-undo-states-validation.md`
