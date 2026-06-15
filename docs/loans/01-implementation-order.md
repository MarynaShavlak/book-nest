# Loans Module Implementation Order

## Recommended implementation order

```text
1. Domain model
2. Ownership status rules
3. Loan UI status calculation
4. Mark as Loaned modal
5. Borrowed Books Page
6. Edit Loan flow
7. Mark as Returned flow
8. Book Details Loan Block
9. Book Form Loan Section
10. Dashboard / My Library integrations
```

## Why this order

```text
Спочатку потрібно стабілізувати data model і статуси.
Потім будувати сторінку, actions і інтеграції.
```

## MVP dependency map

| Step | Depends on |
| ---- | ---------- |
| Domain model | — |
| UI status calculation | Loan model |
| Mark as Loaned modal | Domain model + validation |
| Borrowed Books Page | Active loan query + UI status |
| Edit Loan | Existing active loan |
| Mark as Returned | Existing active loan |
| Book Details Loan Block | Loan query by bookId |
| Book Form Loan Section | Ownership status rules |
| My Library / Dashboard | Shared calculations |
