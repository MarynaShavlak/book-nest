# Unsaved changes and cancel flow

- If the user closes the form with changed values, show a confirmation modal.
- In create mode, cancelling must not create custom authors, publishers, tags, series, lists or cover uploads.
- In edit mode, cancelling must leave existing book data unchanged.
- Draft custom values can exist only inside the form state until submit.
