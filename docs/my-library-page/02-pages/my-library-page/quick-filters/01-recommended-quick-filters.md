### 6.1. Recommended quick filters

| Chip           | Query logic                                                 |
| -------------- |-------------------------------------------------------------|
| Усі            | без quick filter                                            |
| Читаю          | `readingStatus=reading` + `readingStatus=rereading`         |
| Хочу прочитати | `readingStatus=want_to_read`                                |
| Прочитано      | `readingStatus=finished`                                    |
| Улюблені       | `isFavorite=true`                                           |
| До покупки     | `ownershipStatus=want_to_buy`                               |
| В дорозі       | `ownershipStatus=in_transit`                                |
| Позичені       | `ownershipStatus=borrowed_from_someone` + `lent_to_someone` |
| Серії          | `seriesState=series_part`                                   |
| Соло           | `seriesState=solo`                                          |

---
