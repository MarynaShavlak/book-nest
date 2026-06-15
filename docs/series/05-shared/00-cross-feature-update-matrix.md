# Cross-feature Update Matrix

| User action | Series entity | Book entity | All Series Page | Series Details Page | Book Details Page | Reading Queue / Lists |
|---|---|---|---|---|---|---|
| Create series | create record | unchanged | add card | can open new series | unchanged | unchanged |
| Edit series | update metadata | maybe denormalized `seriesTitle` | update card | update hero/sidebar | update series block title | unchanged |
| Add existing book | maybe recalc cover/progress | set `seriesId`, `partNumber` | update counts/progress | add row | show series block | unchanged |
| Create new book in series | maybe recalc cover/progress | create book with relation | update counts/progress | add row | available after opening book | optional queue action |
| Add missing book | add placeholder/relation | optional placeholder | update missing count | add missing row | no book page until real book exists | unchanged |
| Remove/unlink book | recalc progress/next/cover | clear relation fields | update counts/progress | remove row | hide series block | keep queue/list/favorite |
| Delete series | delete series record | clear relation fields | remove card | redirect/not found | hide series block | keep queue/list/favorite |
| Change part number | recalc order/next | update `partNumber` | maybe update next/progress | reorder rows | update part display | unchanged |
