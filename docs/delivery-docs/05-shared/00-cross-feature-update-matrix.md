# Cross-Feature Update Matrix

## After Mark Book as In Transit

| Area | Update |
| --- | --- |
| Book | `ownershipStatus = in_transit` |
| Delivery | create record with `status = ordered` |
| Books to Buy | remove card if present |
| Books in Transit | add card |
| Book Details | show active delivery block |
| My Library | show `В дорозі` ownership |
| Order History | add record |
| Expense Statistics | include price if provided |
| Dashboard | update delivery widgets |

## After Edit Delivery Info

| Area | Update |
| --- | --- |
| Delivery | update editable fields |
| Books in Transit | update card, badges, filters |
| Book Details | update active block |
| Order History | update active record |
| Expense Statistics | update if price/currency/orderDate changed |
| Dashboard | update if status/date changed |

## After Mark as Received

| Area | Update |
| --- | --- |
| Book | `ownershipStatus = owned` |
| Delivery | `status = received`, set `receivedAt` |
| Books in Transit | remove card |
| Book Details | active block becomes received/history state |
| My Library | show `Маю` ownership |
| Order History | show as received |
| Expense Statistics | move from active to received spending |
| Dashboard | active delivery count decreases |

## After Cancel Delivery Order

| Area | Update |
| --- | --- |
| Book | `want_to_buy` or `none` |
| Delivery | `status = cancelled`, set `cancelledAt` |
| Books in Transit | remove card |
| Books to Buy | add card if kept in wishlist |
| Book Details | remove active delivery block, show history |
| My Library | update ownership badge |
| Order History | show as cancelled |
| Expense Statistics | show cancelled separately, exclude from main total by default |
| Dashboard | active delivery count decreases |
