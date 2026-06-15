# Custom List State Model

## List-level states

A custom list can be:

```text
active
deleted / archived internally
```

Only active lists should be visible in the UI.

## Page-level states

The Custom Lists module uses these UI states:

```text
loading
loaded with data
empty
no search results
error
not found / access error
```

## State priority

Use a strict priority so the UI does not show conflicting states:

```text
loading → error → not found/access error → empty → no search results → content
```

For page-specific state details, use:

```text
02-pages/custom-lists-page/06-states-priority.md
02-pages/custom-list-details-page/09-states-priority.md
05-shared/03-loading-error-empty-states.md
```
