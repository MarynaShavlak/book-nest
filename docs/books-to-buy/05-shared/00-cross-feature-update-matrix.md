# Cross-feature Update Matrix

| Action | Books to Buy | My Library | Book Details | Delivery | Dashboard | Statistics |
| ------ | ------------ | ---------- | ------------ | -------- | --------- | ---------- |
| Set `want_to_buy` | appears | updates badge | updates badge/block | no change | wishlist count +1 | wishlist estimate updates |
| Add store link | row updates | no status change | purchase block updates | no change | optional update | wishlist estimate updates |
| Edit store link | row updates | no status change | purchase block updates | no change | optional update | wishlist estimate updates |
| Delete store link | row updates | no status change | purchase block updates | no change | optional update | wishlist estimate updates |
| Mark as bought | disappears | status `owned` | status `owned` | no change | wishlist count -1 | wishlist estimate updates |
| Remove from shopping list | disappears | status `none` | status `none` | no change | wishlist count -1 | wishlist estimate updates |
| Mark as in transit | disappears | status `in_transit` | delivery block appears | delivery record created | delivery count +1 | delivery stats update |

## Rule

Every status-changing action should update all dependent views through refetch, cache update or state synchronization.
