# Series Status and Reading State

## Series status

MVP options:

| Value | Meaning |
|---|---|
| `finished` | The series is complete / no new books expected. |
| `ongoing` | The series is still being published. |
| `unknown` | The user does not know the publication state. |

## Reading state inside a series

Series reading state is calculated from related books, not manually selected on the series.

Common derived states:

| State | Rule |
|---|---|
| Empty series | Series has no known real books. |
| Not started | No related book is finished or currently reading. |
| In progress | At least one book is finished or currently reading, but not all known books are finished. |
| Completed | All known books are finished. |
| Has missing books | The series contains missing placeholders or gaps. |

## UI usage

- All Series Page uses this to show tabs, filters, summary cards, badges, and card progress.
- Series Details Page uses this to show row states, sidebar progress, and next-book hints.
- Book Details Page should only show compact series relation state.
