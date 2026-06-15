# Ownership Status Rules

## Correct ownership statuses

```ts
export type OwnershipStatus =
  | "none"
  | "want_to_buy"
  | "in_transit"
  | "owned"
  | "borrowed_from_someone"
  | "lent_to_someone";
```

## Labels

| Value | Label |
| ----- | ----- |
| `none` | Немає |
| `want_to_buy` | Хочу купити |
| `in_transit` | В дорозі |
| `owned` | Маю |
| `borrowed_from_someone` | Позичена у когось |
| `lent_to_someone` | Видана комусь |

## Books to Buy visibility

A book appears on Books to Buy Page only if:

```ts
ownershipStatus === "want_to_buy"
```

A book disappears from Books to Buy Page when status changes to:

```text
none
in_transit
owned
borrowed_from_someone
lent_to_someone
```

## Format is separate

Do not put `ebook` or `audiobook` into ownership status.

Correct format type:

```ts
export type BookFormat = "paper" | "ebook" | "audiobook";
```

## Status transitions

| Action | From | To |
| ------ | ---- | -- |
| Add to wishlist | `none` | `want_to_buy` |
| Mark as bought | `want_to_buy` | `owned` |
| Mark as in transit | `want_to_buy` | `in_transit` |
| Remove from shopping list | `want_to_buy` | `none` |
| Cancel delivery and return to wishlist | `in_transit` | `want_to_buy` |
