# Deletion Confirmation Contract

`confirmBeforeDelete` is consumed by modules with delete actions.

## Affected actions

- delete book;
- delete note;
- delete quote;
- delete custom list;
- delete social link;
- delete character;
- delete shop link.

## Critical actions

Critical actions should still confirm even if setting is false.
