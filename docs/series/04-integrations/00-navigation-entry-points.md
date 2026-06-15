# Navigation Entry Points

## Main entry points

| Source | Target | Purpose |
|---|---|---|
| Sidebar / main navigation | All Series Page | Open all series. |
| All Series Page card | Series Details Page | Inspect one series. |
| Series Details Page | Create/Edit Series | Edit metadata. |
| Series Details Page | Add Book to Series | Add existing/new/missing book. |
| Book Details Page | Series Details Page | Navigate to parent series. |
| Create/Edit Book Form | Series relation | Attach, change, or remove series relation. |
| Reading Queue | Book Details / Series Details | Continue the next book. |

## Implementation note

Navigation should pass IDs, not full objects, unless the app already has cached data in state.
