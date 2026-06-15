# Conditional data rules

- Conditional blocks are controlled by readingStatus, ownershipStatus, and bookType.
- Create mode should submit only active conditional block data.
- Edit mode should ask for confirmation before hiding or clearing already saved conditional data.
- Inactive conditional data should not silently overwrite existing data.

## Related files

- `06-shared/conditional-block-rules/`
