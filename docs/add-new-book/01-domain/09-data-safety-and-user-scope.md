# Data safety and user scope

- Every book belongs to the current authenticated user.
- Custom authors, publishers, tags, lists and series created from this form must be scoped to the same user.
- Deleting/removing a value from one book must not delete the global/user dictionary record unless a separate action explicitly does it.
- The form should not create orphan custom values if the user cancels creation.
