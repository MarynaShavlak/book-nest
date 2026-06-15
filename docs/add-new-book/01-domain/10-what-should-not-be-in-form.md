# What should not be in the form

- `want_to_read` should not automatically add the book to Reading Queue.
- `ordered` is not an ownership status; it belongs only to delivery status.
- `received` should be an action, not a manual delivery status in the form.
- `isFavorite` is not a reading or ownership status.
- Due statuses for delivery/loan should be computed, not manually selected.
